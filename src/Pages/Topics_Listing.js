import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './toplisting.css';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch courses from the backend API when the component mounts
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/courseslist/');
            // Check if response data is an array before setting state
            if (Array.isArray(response.data)) {
                setCourses(response.data);
            } else {
                console.error('Fetched data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleCourseClick = async (slug) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/courses/${slug}`);
            const courseDetails = response.data;
            // Navigate to the course details page with course slug
            navigate(`/courses/${slug}`);
        } catch (error) {
            console.error('Error fetching course details:', error);
        }
    };

    return (
        <div className='hello'>
        <div className="col-lg-11 col-12 mt-3 mx-auto">
            {courses.map(course => (
                <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5" key={course.slug}>
                    <div className="d-flex">
                        <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt="" />

                        <div className="custom-block-topics-listing-info d-flex">
                            <div>
                                <h5 className="mb-2">{course.course_name}</h5>
                                <p className="mb-0">{course.course_description}</p>
                                <Link to="#" className="btn custom-btn mt-3 mt-lg-4" onClick={() => handleCourseClick(course.slug)}>Learn More</Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default CourseList;
