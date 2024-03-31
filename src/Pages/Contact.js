import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <section className="contact-section section-padding section-bg" id="section_5">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12 text-center">
                <h2 className="mb-5">Get in touch</h2>
            </div>
            
            <div className="col-lg-5 col-12 mb-4 mb-lg-0">
              <iframe title="galtech" className="google-map"
                   src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5306.152133906735!2d76.3528230449337!3d10.266486708144758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f2943df42e3%3A0xd5d617aa4afb4a9b!2sGALTech%20Technologies%20Private%20Limited!5e1!3m2!1sen!2sbh!4v1708852182927!5m2!1sen!2sbh" width="400" height="400" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}>
                    </iframe>
            </div>
           
            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                <h4 className="mb-3">Head office</h4>

                <p className='ad'>Office No: 3A-4, Third Floor,
Indeevaram, Special Economic Zone (SEZ),
Infopark Thrissur Campus, Koratty P O,
Thrissur District - 680308</p>

                <hr/>

                <p className="d-flex align-items-center mb-1">
                    <span className="me-2">Phone</span>

                    <Link to="tel: +91 70127 16483" class="site-footer-link">
                    +91 70127 16483
                    </Link>
                </p>

                <p className="d-flex align-items-center">
                    <span className="me-2">Email</span>

                    <Link to="mailto:info@galtechlearning.com" className="site-footer-link">
                    info@galtechlearning.com
                    </Link>
                </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mx-auto">
                <h4 className="mb-3">Thrissur office</h4>

                <p className='ad'>GALTech School of Technology Private Limited
First Floor,
Oregano Tower,
Koratty Junction,
Thrissur, Kerala, India</p>

                <hr/>

                <p className="d-flex align-items-center mb-1">
                    <span className="me-2">Phone</span>

                    <Link to="tel: 0480-273-0123" className="site-footer-link">
                    0480- 273- 0123
                    </Link>
                </p>

                <p className="d-flex align-items-center">
                    <span className="me-2">Email</span>

                    <Link to="mailto:info@galtechlearning.com" className="site-footer-link">
                    info@galtechlearning.com
                    </Link>
                </p>
            </div>
            
        </div>
    </div>
</section>
  )
}

export default Contact