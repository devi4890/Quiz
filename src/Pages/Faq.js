import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
const Faq = () => {
  return (
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
                        <h2 className="accordion-header" id="headingTwo">
                       
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Are your IT courses taught by industry experts or certified trainers?
                            </button>                       
                        </h2>
                        </div>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className='le'>
                            Do you offer any kind of certification or accreditation for your IT courses?
                            </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className ="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
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
  )
}

export default Faq