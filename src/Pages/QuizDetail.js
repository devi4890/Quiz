import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuizDetail = () => {
    const { slug } = useParams();
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        fetchQuizDetails(slug);
    }, [slug]);

    const fetchQuizDetails = async (slug) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/courses/${slug}`);
            // Assuming the API response contains quiz details within the course object
            setQuiz(response.data.quiz);
        } catch (error) {
            console.error('Error fetching quiz details:', error);
        }
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{quiz.quiz_title}</h1>
            <ul>
                {quiz.questions.map(question => (
                    <li key={question.question_id }>
                        <h3>{question.question_text}</h3>
                        <ul>
                            {question.choices.map(choice => (
                                <li key={choice.question_id }>{choice.choice_text}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizDetail;
