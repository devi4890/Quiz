import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './coursedetailspage.css';

const CourseDetailsPage = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [quizzes, setQuizzes] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);
    const [timer, setTimer] = useState(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [showDetailsBox, setShowDetailsBox] = useState(true); // New state to control details box visibility

    useEffect(() => {
        fetchCourseDetails(slug);
    }, [slug]);

    const fetchCourseDetails = async (slug) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/courses/${slug}`);
            const quizzesWithSelected = response.data.quizzes.map((quiz) => ({
                ...quiz,
                quizQuestion: quiz.quizQuestion.map((question) => ({
                    ...question,
                    choices: question.choices.map((choice) => ({
                        ...choice,
                        selected: false // Add selected property to track user selection
                    }))
                }))
            }));
            setCourse(response.data);
            setQuizzes(quizzesWithSelected);
        } catch (error) {
            console.error('Error fetching course details:', error);
        }
    };

    const startTimer = () => {
        const durationInSeconds = 60 * 5; // 5 minutes
        setTimer(durationInSeconds);

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            handleQuizCompletion();
        }, durationInSeconds * 1000);
    };

    const handleAnswerSubmission = (quizIndex, questionIndex, choiceIndex) => {
        // Make sure quizzes is not null or undefined
        if (!quizzes) {
            console.error('Error: Quizzes data is not available.');
            return;
        }
    
        // Make a deep copy of quizzes to avoid mutating state directly
        const updatedQuizzes = JSON.parse(JSON.stringify(quizzes));
    
        // Check if the specified indexes are valid
        if (
            quizIndex < 0 ||
            quizIndex >= updatedQuizzes.length ||
            questionIndex < 0 ||
            questionIndex >= updatedQuizzes[quizIndex].quizQuestion.length ||
            choiceIndex < 0 ||
            choiceIndex >= updatedQuizzes[quizIndex].quizQuestion[questionIndex].choices.length
        ) {
            console.error('Error: Invalid indexes.');
            return;
        }
    
        // Get the selected choice based on the indexes
        const selectedChoice = updatedQuizzes[quizIndex].quizQuestion[questionIndex].choices[choiceIndex];
    
        // Deselect all choices for the current question except the selected one
        updatedQuizzes[quizIndex].quizQuestion[questionIndex].choices.forEach((choice, index) => {
            choice.selected = index === choiceIndex; // Select the current choice and deselect others
        });

        // Update the state with the modified quizzes data
        setQuizzes(updatedQuizzes);

        // Check if the selected choice is correct
        if (selectedChoice.is_correct) {
            // Update the question with the correct answer
            updatedQuizzes[quizIndex].quizQuestion[questionIndex].checkedAnswer = selectedChoice.choice_text;
            setQuizzes(updatedQuizzes);
        }
    };

    const handleQuizCompletion = () => {
        let finalScore = 0;

        quizzes.forEach((quiz) => {
            quiz.quizQuestion.forEach((question) => {
                const selectedChoice = question.choices.find((choice) => choice.selected);
                if (selectedChoice && selectedChoice.is_correct) {
                    finalScore++;
                }
            });
        });

        setScore(finalScore);
        setQuizCompleted(true);
        setShowQuiz(false);
        setShowDetailsBox(false); // Hide details box when quiz is completed
    };

    const renderQuizQuestions = () => {
        return (
            <div className='coursedetails'>
                <h2>Quiz Questions</h2>
                {quizzes && quizzes.map((quiz, index) => (
                    <div key={index}>
                        <h3>{quiz.quiz_title}</h3>
                        {quiz.quizQuestion && quiz.quizQuestion.map((question, qIndex) => (
                            <div key={qIndex}>
                                <p className="question-text">{`${qIndex + 1}. ${question.question_text}`}</p>
                                <ol type='a'>
                                    {question.choices.map((choice, cIndex) => (
                                        <li key={cIndex}>
                                            <button
                                                onClick={() => handleAnswerSubmission(index, qIndex, cIndex)}
                                                className={choice.selected ? 'selected-choice' : ''}
                                            >
                                                {choice.choice_text}
                                            </button>
                                        </li>
                                    ))}
                                </ol>
                                {question.checkedAnswer && (
                                    <p>Correct Answer: {question.checkedAnswer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
                <button className="btn custom-btn mt-3 mt-lg-4" onClick={handleQuizCompletion}>Finish Quiz</button>
            </div>
        );
    };

    if (!course || !quizzes) {
        return <div>Loading...</div>;
    }

    return (
        <div className='coursedetails'>
            <h1>{course.course_name}</h1>

            <div className='course-details-box' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                {showDetailsBox && ( // Render details box only if showDetailsBox is true
                    <>
                        <p><strong>Course Price: {course.course_price}</strong></p>
                        <p><strong>Course Offerprice: {course.course_offer_price}</strong></p>
                        <p><strong>Course Type: {course.course_type}</strong></p>
                        <p><strong>Course Status: {course.course_status}</strong></p>
                    </>
                )}
            </div>
            {showQuiz ? (
                <div className='coursedetails'>
                    {renderQuizQuestions()}
                </div>
            ) : (
                    <div className='coursedetails'>
                        {quizCompleted ? (
                            <div>
                                <p>Your score: {score}</p>
                                <Link to={`/toplisting`} className="btn custom-btn custom-border-btn smoothscroll me-4">Back to Course</Link>
                            </div>
                        ) : (
                            <Link onClick={() => { startTimer(); setShowQuiz(true); }} className="btn custom-btn custom-border-btn smoothscroll me-4">Start Quiz</Link>
                        )}
                    </div>
                )}

            {timer !== null && <p>Time left: {timer} seconds</p>}
            </div>
            );
        };
        
        export default CourseDetailsPage;