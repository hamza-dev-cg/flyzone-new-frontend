import React, {useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UploadReceipt = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({ email: '', file: '' });

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];

    if (uploadedFile && !allowedTypes.includes(uploadedFile.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: 'Only PDF and image files (PNG, JPG, JPEG) are allowed.',
      }));
      setFile(null);
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, file: '' }));
      setFile(uploadedFile);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', file: '' };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address.';
      isValid = false;
    }

    // Validate file
    if (!file) {
      newErrors.file = 'File is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const url = 'https://flyzone.ai/flyzone_laravel/api/invoice/upload';
      const formData = new FormData();
      formData.append('invoice', file); 
      formData.append('email', email); 

      try {
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        toast.success(response.data.message);
        
      } catch (error) {
        if (error.response) {
          console.error('Error Response:', error.response.data);
          toast.error(error.response.data)
        } else {
          console.error('Error:', error.message);
          toast.error(error.message)
        }
      }
    }
  };


  return (  
    <div className="invoice-validation-f-container">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Payment Receipt</h2>

        <div class="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" onChange={handleEmailChange} placeholder="Enter Email" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div class="mb-3">
          <label htmlFor="file" className="form-label">Upload Payment Receipt</label>
          <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <div className="btn-row">
          <button type="submit" className="service-btn">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div> 
  );
};

export default UploadReceipt;
