import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [courses, setCourseData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/courseslist/')
      .then(response => {
        setCourseData(response.data);
      })
      .catch(error => {
        console.error('Error fetching course and quiz data: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Course and Quiz Data</h2>
      <ul>
        {courses.map(course => (
          <li key={course.Course}>
            <h3>{course.Course}</h3>
            <ul>
              {course.quiz.map(quiz => (
                <li key={quiz.quizQuestions}>
                  <h4>{quiz.quizQuestion}</h4>
                  <ul>
                    {quiz.choices.map((choice, index) => (
                      <li key={index}>{choice}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
