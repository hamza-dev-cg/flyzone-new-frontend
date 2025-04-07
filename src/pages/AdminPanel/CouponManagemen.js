import React, { useState, useEffect } from 'react'
import "../../assets/css/dashboard.css"
import DashboardLayout from '../../components/DashboardLayout'
import { Modal, Spinner } from "react-bootstrap";
import Eye from '../../assets/eye.svg'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTokenFromLocalStorage } from "../../utils/helpers"

const InvoiceManagement = () => {
  const [eventData, setEventData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [isInvoiceLoading, setInvoiceLoading] = useState(false)
  const [pdfUrl, setPdfUrl] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [clickCouponButton, setClickCouponButton] = useState(false)
  const [clickApproveButton, setClickApproveButton] = useState(false)
  const [clickRejectButton, setClickRejectButton] = useState(false)
  const navigate = useNavigate()
  const coupon = "tssf1232"

  useEffect(() => {
    getInitialDataHanlder()
  }, [])

  const getInitialDataHanlder = async () => {
    checkIsUserLoggedIn()
    setInvoiceLoading(true)
    await getAllInvoices()
    setInvoiceLoading(false)
  }

  
  const checkIsUserLoggedIn = async () => {
    const tokenValidation = await  getTokenFromLocalStorage( )
    if (!tokenValidation.token) {
      localStorage.clear();
      navigate("/login")
    }
  }


  const getAllInvoices = async () => {
    const token = await localStorage.getItem("authToken");
    try {     
      const response = await axios.get(
        "https://flyzone.ai/flyzone_laravel/api/get/invoices",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        setEventData(response.data.events);
        setPdfUrl(response.data.invoice_base_url)
      }

    } catch (err) {
      console.log(err)
      toast.error(err?.message);
    }
  }

  const handleUpdateInvoice = async (data, coupon, status) => {
    if (status === "success"){
      if (coupon) {
        setClickCouponButton(true)
      }
      else {
        setClickApproveButton(true)
      }
    } else {
      setClickRejectButton(true)
    }
    try {
      const token = localStorage.getItem("authToken");
      setIsLoading(data.id);

      const body = {
        id: data.id,
        status: status,
        coupon: coupon ? coupon : ""
      }
      
      const response = await axios.post(
        "https://flyzone.ai/flyzone_laravel/api/update/invoices/status",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        toast.success("Coupon code has been sent successfully");
        getAllInvoices();
      }
      setIsLoading(null);
    } catch (err) {
      console.log("Error updating invoice:", err);
      toast.error("Failed to update invoice.");
    }
    setClickCouponButton(false)
    setClickApproveButton(false)
    setClickRejectButton(false)

  };

  const handleModel = (row) => {
    setShowModal(true);
    setSelectedRow(row);
  }

  return (
    <DashboardLayout>
      <ToastContainer />
      <div className="main-content">
        {/* Top Header */}
        <div className="header">
          <div className='header-row'>
            <h1>Invoice Management</h1>
          </div>
        </div>
        {/* Body */}

        <h2 className='my-2 coupon-sub-title'>Verify your bank receipt and submit the coupon code.</h2>

        <div className="content-section">
          {isInvoiceLoading ? (
            <div className='d-flex flex-column justify-content-center align-items-center text-center h-100' style={{ height: "100vh" }}>
              <div>
                <Spinner
                  animation="border"
                  role="status"
                  style={{ width: "10rem", height: "10rem" }}
                  className="text-primary"
                />
              </div>
            </div>
          ) : (
            <>
              <table className="table text-center">
                <thead>
                  <tr >
                    <th scope="col">No</th>
                    <th scope="col">Email</th>
                    <th scope="col">View</th>
                    {/* <th scope='col'>Status</th> */}
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody >
                  {eventData?.map((row, index) => (
                    <tr key={row.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{row.email}</td>
                      <td>
                        <button type="button" className="btn">
                          <img src={Eye} alt="view" onClick={() => handleModel(row)} />
                        </button>
                      </td>
                      {/* <td> <span
                        style={{
                          color: 'red',
                          fontWeight: "bold",
                        }}
                        className='btn'
                      >
                        {row.status}
                      </span></td> */}
                      <td className=''>
                        <button type="button" onClick={() => handleUpdateInvoice(row, coupon, 'success')} className="btn" style={{ backgroundColor: '#007BFF', color: 'white' }}>
                          {isLoading === row.id && clickCouponButton ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>{" "}
                            </>
                          ) : (
                            "Send Coupon"
                          )}
                        </button>
                        <button type="button" onClick={() => handleUpdateInvoice(row, null, "success")} className="btn" style={{ backgroundColor: '#007BFF', color: 'white', marginLeft:'10px' }}>
                          {isLoading === row.id && clickApproveButton? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>{" "}

                            </>
                          ) : (
                            "Approve"
                          )}
                        </button>
                        <button type="button" onClick={() => handleUpdateInvoice(row, null, "reject")} className="btn" style={{ backgroundColor: '#FF4D4F', color: 'white', marginLeft:'10px' }}>
                          {isLoading === row.id && clickRejectButton ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>{" "}

                            </>
                          ) : (
                            "Reject"
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-lg"
        centered
        style={{
          maxWidth: "100%",
          backgroundColor: "transparent",
          border: "none",

        }}
      >
        {selectedRow && (
          <>
            <h2 className="mt-3 text-center">Payment Receipt</h2>
            <div style={{ width: "100%", height: "500px", overflow: "auto" }}>
              <iframe
                src={`${pdfUrl}${selectedRow.invoice_file}`}
                title="Invoice PDF"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              ></iframe>
            </div>
            <div className="text-center mt-4 mb-3">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </>
        )}

      </Modal>
    </DashboardLayout>
  )
}

export default InvoiceManagement