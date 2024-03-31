import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Topicdetails = () => {
  const [courses, setCourses] = useState([]);
  const { slug } = useParams(); // Assuming you have 'courseSlug' as a parameter in your route

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/courses/${slug}`)
      .then(response => {
        setCourses(response.data); // Assuming the response is an array of courses
      })
      .catch(error => {
        console.error('Error fetching course details: ', error);
      });
  }, [slug]);

  if (courses.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {courses.map(course => (
              <div key={course.id} className="col-lg-7 col-5 mb-21">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <h2 className="text-white" aria-current="page">
                      <Link to={`/${course.slug}`}>{course.course_name}</Link>
                    </h2>
                  </ol>
                </nav>
                <p className="text-white">Course Price: {course.course_price}</p>
                <p className="text-white">Course Offer Price: {course.course_offer_price}</p>
                <p className="text-white">Course Type: {course.course_type}</p>
                <p className="text-white">Course Status: {course.course_status}</p>
                <div className="d-flex align-items-center mt-5">
                  <Link to={'/quizdetail/' + course.slug } className="btn custom-btn custom-border-btn smoothscroll me-4">Start Quiz Here..</Link>
                  <Link to="/toplisting" className="text-white">Back</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}

export default Topicdetails;

