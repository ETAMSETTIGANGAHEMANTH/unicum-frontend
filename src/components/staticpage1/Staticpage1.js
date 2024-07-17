import React from 'react';
import './Staticpage1.css';
import { NavLink } from 'react-router-dom';
function Staticpage1() {
  return (
    <div>
      <main className="main">
        <h2>Welcome to Unicum Consultants</h2>
        <p>We provide expert financial consulting services to help you achieve your financial goals.</p>
        <NavLink className="btn" to="/contact">Contact</NavLink>
      </main>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service">
          <div>
            <h3>Cash Credit and Overdraft Facilities</h3>
            <p>Our team of expert financial consultants and advisors study, assess, recommend, and facilitate working capital needs of our customers, enabling them to tide over short-term needs.</p>
          </div>
          <div>
            <h3>Home Loans</h3>
            <p>Planning to purchase a plot, house, or apartment, or seeking finance for construction of a house? No worries, our team attends to your necessities through our network of financial lender establishments.</p>
          </div>
          <div>
            <h3>Construction Loans</h3>
            <p>Is your plan to construct commercial or housing projects stuck for want of finance? Our team of experts assists you in getting the right finance to meet your short-term and long-term needs.</p>
          </div>
        </div>
        <div className="service">
          <div>
            <h3>Loans Against Properties</h3>
            <p>If you need urgent finance to meet your emergency necessities, worry not. Our team will handhold you through the process of availing loans from various lenders.</p>
          </div>
          <div>
            <h3>Purchase of Properties</h3>
            <p>If you are planning to purchase a property through bank e-auction, our team of experts will help you become the owner of your dream property.</p>
          </div>
          <div>
            <h3>Vehicle Loans</h3>
            <p>Planning to buy personal or commercial vehicles? We can help you secure financing from a range of lenders for new or used vehicles. Refinancing options are also available from leading lenders.</p>
          </div>
        </div>
        <div className="service">
          <div>
            <h3>Loans for Purchase of Machinery and Construction of Manufacturing Units</h3>
            <p>Business term loans for purchase and installation of machinery and other assets involved in manufacturing and for construction of Production units.</p>
          </div>
        </div>
      </section>
      <footer className="footer pt-2">
        <p>&copy; 2024 Unicum consultants Pvt Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Staticpage1;

