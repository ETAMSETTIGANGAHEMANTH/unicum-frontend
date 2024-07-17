import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css';

function List() {
  const [contact, setContact] = useState([]);
  const [err, setErr] = useState("");

  const deletingoff = (obj) => {
    console.log("deleting");
    axios.delete("http://localhost:8080/deletingcontent", { data: obj })
      .then((response) => {
        console.log(response.data);
        // Update the state to remove the deleted contact
        setContact(prevContacts => prevContacts.filter(contact => contact !== obj));
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
  }

  useEffect(() => {
    axios.get("http://localhost:8080/getcontent")
      .then((response) => {
        console.log(response.data);
        setContact(response.data);
      })
      .catch((err) => {
        if (err.response) {
          setErr(err.message);
        } else if (err.request) {
          setErr(err.message);
        } else {
          setErr(err.message);
        }
      });
  }, []);

  return (
    <div className="list-container">
      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Service</th>
              <th scope="col">Pincode</th>
              <th scope="col">Address</th>
              <th scope="col">Above 10 Lakhs</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((com, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{com.name}</td>
                <td>{com.phonenumber}</td>
                <td>{com.service}</td>
                <td>{com.pincode}</td>
                <td>{com.address}</td>
                <td>{com.above10}</td>
                <td>
                  <button className='btn btn-danger mx-2' onClick={() => deletingoff(com)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {err && <div className="alert alert-danger">{err}</div>}
    </div>
  );
}

export default List;
