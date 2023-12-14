import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components';
import Menubar from 'components/Menubar';



function TermsandPolicies() {
    return (
     <>
     
      <div style={{marginBottom: '50px'}}>
         <h1 className="majortitle"style={{textAlign: 'center'}}>Terms and Policies</h1>
         <div style={{marginLeft: '30%', marginRight: '30%', textAlign:'justify'}}>
                  <p>
                     <strong>Weightless</strong> is committed to protecting your privacy. We will only use the information that we collect about you lawfully (in accordance with the Data Protection Act 1998 and General Data Protection Regulations 2018). We collect your data to process your order and to provide a service afterwards. There is the option to opt out of any marketing emails.
                  </p>
                  <p>The type of information we will collect about you when you place an order or register on our web site includes:</p>
                  <ul>
                     <li>Name</li>
                     <li>Address</li>
                     <li>Phone Number</li>
                     <li>Email Address</li>
                     <li>Credit/Debit card details</li>
                     <li>IP Address</li>
                  </ul>
                  <p>
                     We use Shopify to process your data, please see their privacy policy{' '}
                     <a href="https://www.shopify.com/legal/privacy">here</a>.
                  </p>
                  <p>
                     We will never collect sensitive information about you without your explicit consent. We will not transfer or sell your information. We may use technology to track the patterns of behaviour of visitors to our site. If you have any questions/comments about privacy, you can email us at <a href='#'>customer.service@weightless.com</a> 
                  </p>
                  <p>
                     <h3>Use of Personal Information</h3>
                  </p>
                  <p>We use the information that you provide us with for the following purposes:</p>
                  <ul>
                     <li>To send updates regarding the status of your enquiry or order</li>
                     <li>To send newsletters and updates which we believe you will be interested in</li>
                     <li>To understand the behaviour of our registered users</li>
                  </ul>
                  <p>
                     When you purchase something from our store, we need to know your name, email address, delivery address, credit/debit card number and expiry date. When you browse our online store, we automatically receive your IP Address, which allows us to learn about your browser and operating system.
                  </p>
                  <p>
                     <h3>Your Consent</h3>
                  </p>
                  <p>
                     By entering any of our online competitions either via our website or social media you are giving consent to Weightless to contact you for marketing purposes including but not limited to updates, deals and discounts. You can choose to unsubscribe at any time.
                  </p>
                  <p>
                     By submitting information to Weightless, you consent to the collection and use of this information by Weightless. If you wish to withdraw your consent at any time, contact us by emailing
                     <a href="mailto:team@weightless.eu"> weightless@gmail.com</a>  or Contact us at:</p> 
                  <p><i>
                     Weightless Calishthenics<br/>
                  16 Quang Trung<br/> Hiep Phu, Thu Duc<br/> +12345678</i></p>
                  <p>
                     <h3>Your Email Address</h3>
                  </p>
                  <p>
                     Your email address is used to communicate with you regarding your order. It will also be used for marketing purposes, but you will be provided with the opportunity to unsubscribe at any time via the unsubscribe link which can be found at the bottom of any marketing emails sent by Weightless.
                  </p>
                  <p>
                     <h3>Data Security</h3>
                  </p>
                  <p>
                     Our store is hosted on Shopify Inc. Your data is stored through their data storage, databases and on the general application. This is stored on a secure server behind a firewall.
                  </p>
                  <p>
                     We do not store credit card details nor do we share customer details with any Third-Parties.
                  </p>
                  <p>
                     All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands such as Visa,
                  </p>
               </div>
               </div>
     </>
     )
}


export default TermsandPolicies
