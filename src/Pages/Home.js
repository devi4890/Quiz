//import logo from './logo.svg';
import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (

<main>



<section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
    <div className="container">
        <div className="row">

            <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-white text-center">Discover. Learn. Enjoy</h1>

                <h6 className="text-center">platform for creatives around the world</h6>

                <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text bi-search" id="basic-addon1">

                        </span>

                        <input name="keyword" type="search" className="form-control" id="keyword"
                            placeholder="Web Design, Code, ..." aria-label="Search"/>

                        <button type="submit" className="form-control">Search</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>


<section className="featured-section">
    <div className="container"  data-aos="flip-right">
        <div className="row justify-content-center">

            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                <div className="custom-block bg-white shadow-lg">
                    <Link to="topics-detail.html">
                        <div className="d-flex">
                            <div>
                                <h5 className="mb-2">Web Design</h5>

                                <p className="mb-0">When you search for free CSS templates, you will notice that
                                    TemplateMo is one of the best websites.</p>
                            </div>

                           
                        </div>

                        <img src="images/topics/undraw_Remote_design_team_re_urdx.png"
                            className="custom-block-image img-fluid" alt=""/>
                    </Link>
                </div>
            </div>

            <div className="col-lg-6 col-12"  data-aos="flip-right">
                <div className="custom-block custom-block-overlay">
                    <div className="d-flex flex-column h-100">
                        <img src="images/businesswoman-using-tablet-analysis.jpg"
                            className="custom-block-image img-fluid" alt=""/>

                        <div className="custom-block-overlay-text d-flex">
                            <div>
                                <h5 className="text-white mb-2">Coding</h5>

                                <p className="text-white"> Teaches the fundamentals of the BASIC programming language by description and example, and presents over 50 BASIC programs that can both teach about the language and be useful in their own right. The first part introduces the candidate to programming in the BASIC language.</p>

                                <Link to="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</Link>
                            </div>

                            
                        </div>

                        <div className="social-share d-flex">
                            <p className="text-white me-4">Share:</p>

                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <Link to="/" className="social-icon-link bi-twitter"></Link>
                                </li>

                                <li class="social-icon-item">
                                    <Link to="/" className="social-icon-link bi-facebook"></Link>
                                </li>Designms-auto</ul>
                        </div>

                        <div className="section-overlay"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>





<section className="timeline-section section-padding" id="section_3">
    <div className="section-overlay"></div>

    <div className="container">
        <div className="row">

            <div className="col-12 text-center">
                <h2 className="text-white mb-4">How does it work?</h2>
            </div>

            <div className="col-lg-10 col-12 mx-auto">
                <div className="timeline-container">
                    <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                        <div className="list-progress">
                            <div className="inner"></div>
                        </div>

                        <li>
                            <h4 className="text-white mb-3">Search your favourite Course</h4>

                            <p className="text-white">Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs—all included in your subscription
                            </p>

                            <div className="icon-holder">
                                <i className="bi-search"></i>
                            </div>
                        </li>

                        <li>
                            <h4 className="text-white mb-3">Bookmark &amp; Keep it for yourself</h4>

                            <p className="text-white">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</p>

                            <div className="icon-holder">
                                <i className="bi-bookmark"></i>
                            </div>
                        </li>

                        <li>
                            <h4 className="text-white mb-3">Read &amp; Enjoy</h4>

                            <p className="text-white">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</p>

                            <div className="icon-holder">
                                <i className="bi-book"></i>
                            </div>
                        </li>
                        <li>
                            <h4 className="text-white mb-3">Flexible learning and Unlimited certificates</h4>

                            <p className="text-white">Learn at your own pace, move between multiple courses, or switch to a different course.Earn a certificate for every learning program that you complete at no additional cost</p>

                            <div className="icon-holder">
                                <i className="bi-book"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-12 text-center mt-5">
                <p className="text-white">
                    Want to learn more?
                    <Link to="/" class="btn custom-btn custom-border-btn ms-3">Check out Youtube</Link>
                </p>
            </div>
        </div>
    </div>
</section>
<section className="faq-section section-padding" id="section_4">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12">
                <h2 className="mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="clearfix"></div>

            <div className="col-lg-5 col-12">
                <img src="images/faq_graphic.jpg" class="img-fluid" alt="FAQs"/>
            </div>

            <div className="col-lg-6 col-12 m-auto">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                           
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How long are your IT courses and what is the schedule like?
                            </button>
                        </h2>
                        
                        <div id="collapseOne" className="accordion-collapse collapse show"
                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='le'>
                            Depending on specific courses and contents the duration of our IT courses varies. Some courses may take shorter periods while others courses may take longer periods. So our schedules are typically flexible to accommodate the needs of our students
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                    <div className='le'>
                        <h2 className='le' id="headingTwo">
                       
                            <button className="accordion-button collapsed" style={{ color: 'rgb(39, 102, 136)' }}  type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Are your IT courses taught by industry experts or certified trainers?
                            </button>                       
                        </h2>
                        </div>
                        <div className="accordion-item" >
                            <div className='le' >
                            <h2 className='le' id="headingTwo">
                            <button className="accordion-button collapsed" style={{ color: 'rgb(39, 102, 136)' }}  type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Do you offer any kind of certification or accreditation for your IT courses?
                            </button>
                            </h2>
                            </div>

                            
                        </div>
                    </div>

                    <div className ="accordion-item">
                        <h2 className='le'>
                            <button className="accordion-button collapsed" style={{ color: 'rgb(39, 102, 136)' }} type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                               Do you have any flexible payment options or financing options for IT training?
                            </button>
                        </h2>

                        <div id="collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            3 Months Offline Industrial Training and Internship
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    
</section>
  


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
</main>

      


  );
}

export default Home;
