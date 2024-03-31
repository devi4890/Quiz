import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
const Howitworks = () => {
  return (
    <section className="timeline-section section-padding" id="section_3">
    <div className="section-overlay"></div>

    <div className="container">
        <div className="row">

            <div className="col-12 text-center">
                <h2 className='me-2'>How does it work?</h2>
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

  )
}

export default Howitworks