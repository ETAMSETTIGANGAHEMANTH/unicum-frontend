import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Admin() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [err, setErr] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (response === "success") {
      login();
      navigate('/list');
    }
  }, [response, login, navigate]);

  const printCredentials = (details) => {
    axios.post("http://localhost:8080/checkadmin", details)
      .then(response => {
        setResponse(response.data);
        if (response.data !== "success") {
          setErr("Wrong credentials");
        }
      })
      .catch(error => {
        setErr("Network Error");
      });
    reset();
  }

  return (
    <div className='wrapper'>
      <div className='wrapper2'>
        <div className='form-box login'>
          <form className="form-class" onSubmit={handleSubmit(printCredentials)}>
            <h1>Login</h1>
            {err && <p className='error-message'>{err}</p>}
            <div className='input-box'>
              <input type="text" className='form-control' placeholder='Username' {...register("username", { required: true })} />
              <FaUser className='icon' />
              {errors.username?.type === 'required' && <p className='text-danger'>*This is required.</p>}
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' {...register("password", { required: true })} />
              <FaLock className='icon' />
              {errors.password?.type === "required" && <p className='text-danger'>*This is required.</p>}
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
