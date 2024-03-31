import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="site-footer section-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-3 col-12 mb-4 pb-2">
                    <Link className="navbar-brand mb-2" to="/">
                        <i className="bi-back"></i>
                        <span>Topic</span>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-4 col-6">
                    <h6 className="site-footer-title mb-3">Resources</h6>

                    <ul className="site-footer-links">
                        <li className="site-footer-link-item">
                            <Link to="/" className="site-footer-link">Home</Link>
                        </li>

                        <li className="site-footer-link-item">
                            <Link to="/howitworks" className="site-footer-link">How it works</Link>
                        </li>

                        <li className="site-footer-link-item">
                            <Link to="/faq" className="site-footer-link">FAQs</Link>
                            <div
                              className="alert alert-primary"
                              role="alert"
                            >
                              <strong>Warning!</strong
                              ><Link to="/" className="alert-link">Click Here</Link>
                            </div>
                            
                            
                        </li>

                        <li className="site-footer-link-item">
                            <Link to="/contact" className="site-footer-link">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                    <h6 className="site-footer-title mb-3">Information</h6>

                    <p className="text-white d-flex mb-1">
                        <Link to="tel: +91 70127 16483" className="site-footer-link">
                        +91 70127 16483
                        </Link>
                    </p>

                    <p className="text-white d-flex">
                        <Link to="mailto:info@galtechlearning.com" className="site-footer-link">
                        info@galtechlearning.com
                        </Link>
                    </p>
                </div>
                
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                    <div className='btn'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            English</button>

                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Thai</button></li>

                            <li><button className="dropdown-item" type="button">Myanmar</button></li>

                            <li><button className="dropdown-item" type="button">Arabic</button></li>
                        </ul>
                    </div>
                    </div>
                    <p className="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
                        <br/><br/>Design: <Link rel="nofollow" to="https://templatemo.com" target="_blank">TemplateMo</Link>
                        Distribution <Link to="https://themewagon.com">ThemeWagon</Link>
                    </p>

                </div>

            </div>
        </div>
  </footer>


    
  )
}
