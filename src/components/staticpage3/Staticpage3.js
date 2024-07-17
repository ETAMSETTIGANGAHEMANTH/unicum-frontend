import './Staticpage3.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Staticpage3() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  let [err, setErr] = useState();
  let [show, setShow] = useState(false);

  const [characterCount, setCharacterCount] = useState(0);
  const handleCharacterCount = (event) => {
    setCharacterCount(event.target.value.length);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = data => {
    console.log(data);
    axios.post("http://localhost:8080/put", data)
      .then(response => {
        console.log(response);
        handleShow();
      })
      .catch(err => {
        if (err.response) {
          setErr(err.message);
        } else if (err.request) {
          setErr(err.message);
        } else {
          setErr(err.message);
        }
      });
    reset();
  };

  return (
    <div className='container'>
      <div className='sub'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label">Full Name<span className='text-danger'> *</span></label>
            <input type="text" className="form-control" {...register("name", { required: true, minLength: 2 })} />
            {errors.name?.type === 'required' && <p className='text-danger'>*This is required.</p>}
            {errors.name?.type === 'minLength' && <p className='text-danger'>*The minimum length is 2.</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number<span className='text-danger'> *</span></label>
            <input type="text" className="form-control" {...register("phonenumber", { required: true, minLength: 10, maxLength: 12 })} />
            {errors.phonenumber?.type === 'required' && <p className='text-danger'>*This is required.</p>}
            {errors.phonenumber?.type === 'minLength' && <p className='text-danger'>*Minimum length is 10.</p>}
            {errors.phonenumber?.type === 'maxLength' && <p className='text-danger'>*Maximum length is 12.</p>}
          </div>

          <div className="form-group">
            <label htmlFor="inputState" className="form-label">Service Required<span className='text-danger'> *</span></label>
            <select id="inputState" className="form-select" {...register("service", { required: true })} defaultValue="">
              <option value="" disabled hidden>Choose...</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Home Loan Takeover">Home Loan Takeover</option>
              <option value="Property Loan - Mortgage Loan">Property Loan - Mortgage Loan</option>
              <option value="Vehicle Loan">Vehicle Loan</option>
              <option value="Education Loan - 10 Lakhs Above">Education Loan - 10 Lakhs Above</option>
              <option value="Msme Loan">Msme Loan</option>
              <option value="Agri Loan">Agri Loan</option>
            </select>
            {errors.service?.type === 'required' && <p className='text-danger'>*This is required.</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Pincode<span className='text-danger'> *</span></label>
            <input type="text" className="form-control" {...register("pincode", { required: true })} />
            {errors.pincode?.type === 'required' && <p className='text-danger'>*This is required.</p>}
          </div>

          <div className='form-group'>
            <div className='mb-2'>
              <label className="form-label">Address<span className='text-danger'> *</span></label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                id="floatingTextarea2"
                {...register("address", { required: true, minLength: 10, maxLength: 254 })}
                onChange={handleCharacterCount} // Update count on change
              />
              <label htmlFor="floatingTextarea2">Address</label>
              <div className="character-count">
                {characterCount} characters (out of 254)
              </div>
              {errors.address?.type === 'required' && <p className='text-danger'>*This is required.</p>}
            {errors.address?.type === 'minLength' && <p className='text-danger'>*The minimum length is 10.</p>}
            {errors.address?.type === 'maxLength' && <p className='text-danger'>*The maximum length is 254.</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" {...register("above10")} />
              <label className="form-check-label" htmlFor="gridCheck">
                Above 10 Lakhs
              </label>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will reach out to you soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='sub2'>
        <div className='sub21'>
        <h1>Our Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.949214177576!2d80.19335637507545!3d12.910985687398849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzM5LjYiTiA4MMKwMTEnNDUuNCJF!5e0!3m2!1sen!2sin!4v1720703228361!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="sub22">
            <h2>Contact Details</h2>
            <div className='sub221'>
            <p>Admin Name: Mageshwaran G</p>
            <p>Email: magesh5mgm@gmail.com</p>
            <p>Phone: +91-9751557799</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Staticpage3;
