import React from 'react'
import Card from '../UI/Card';
import './Quiz.css'

export default function Quiz() {
    const data = [
        {
            id: 1,
            question: "What is your name?",
            option1: "Ajay",
            option2: "Bharat",
            option3: "Chetan",
            option4: "Deven"
        },
        {
            id: 2,
            question: "How are you?",
            option1: "Fine",
            option2: "Good",
            option3: "Great",
            option4: "Sad"
        },
        {
            id: 3,
            question: "In which city do you live?",
            option1: "Indore",
            option2: "Bombay",
            option3: "Bhopal",
            option4: "Devas"
        },
        {
            id: 4,
            question: "Which language can you speak?",
            option1: "Hindi",
            option2: "English",
            option3: "French",
            option4: "Detuch"
        },
        {
            id: 5,
            question: "What is your Father's name?",
            option1: "Aman",
            option2: "Binod",
            option3: "Chandan",
            option4: "Sunil"
        },
        {
            id: 6,
            question: "What is your Mother's name?",
            option1: "Anita",
            option2: "Babita",
            option3: "Archana",
            option4: "Seema"
        },
        {
            id: 7,
            question: "What is your Religion ?",
            option1: "Hindu",
            option2: "Muslim",
            option3: "Christan",
            option4: "Sikh"
        },
        {
            id: 8,
            question: "Which language can you speak?",
            option1: "Hindi",
            option2: "English",
            option3: "French",
            option4: "Detuch"
        },
        {
            id: 9,
            question: "In which city do you live?",
            option1: "Indore",
            option2: "Bombay",
            option3: "Bhopal",
            option4: "Devas"
        },
        {
            id: 10,
            question: "How are you?",
            option1: "Fine",
            option2: "Good",
            option3: "Great",
            option4: "Sad"
        },
    ]

    const submitHandler = () => {
        alert('Quiz Submitted');
    }

    return (
        <div>
            <div className='main'>
                <h2>Quiz-App</h2>
                <div className='quiz-item'>
                    <div className="nav-item">
                        <h4>Total Question: {data.length}</h4>
                        <h4>Time left: 03:03</h4>
                    </div>
                    <form onSubmit={submitHandler}>
                        {data.map((e, i) => (
                            <Card>
                                <h3 className="quiz">Q{i + 1}: {e.question}</h3>
                                <input type="radio" value={e.option1} name={i}/>
                                {e.option1}
                                <br></br>
                                <input type="radio" value={e.option2} name={i}/>
                                {e.option2}
                                <br></br>
                                <input type="radio" value={e.option3} name={i}/>
                                {e.option3}
                                <br></br>
                                <input type="radio" value={e.option4} name={i}/>
                                {e.option4}
                                <br></br>
                                <h5 className="item-left"> {i+1 +' of 10'}</h5>    
                            </Card>
                        ))}
                    </form>
                    <button type="submit" >Submit</button>     
                </div>
            </div>
        </div>

    )
}
