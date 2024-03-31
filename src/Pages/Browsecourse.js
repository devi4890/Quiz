import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import './toplisting.css';

const Browsecourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/courseslist/`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses: ', error);
      });
  }, []);

  return (
    <div className='browse'>
    <section className="explore-section section-padding" id="section_2">
      <div className="container">
        <div className="col-12 text-center">
          <h2 className="mb-4">Browse Course</h2>
        </div>
      </div>

      <div className="container"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="row">
          {courses.map(course => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={course.course_id}>
              <Link to={`/courses/${course.slug}`} className="custom-link">
                <div className='bg'>
                <div className="custom-block bg-white shadow-lg">
                  <div >
                    <h5 className="bg">{course.course_name}</h5>
                    <p className="bg">{course.course_description}</p>
                  </div>
                  <img src={course.thumbnail} className="custom-block-image img-fluid" alt="" />
                </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Browsecourse;
