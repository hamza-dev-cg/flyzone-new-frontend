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

const AllCoupon = () => {
  const [eventData, setEventData] = useState(null)
  const [isInvoiceLoading, setInvoiceLoading] = useState(false)
  const navigate = useNavigate()

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
      }

    } catch (err) {
      console.log(err)
      toast.error(err?.message);
    }
  }

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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AllCoupon