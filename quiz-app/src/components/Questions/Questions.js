import React from 'react'
import Card from '../UI/Card'
import QuestionItem from './QuestionItem';
import "./Questions.css";
import QuestionFilter from './QuestionFilter';
import { useState } from 'react';

export const Questions = (props) => {
    const [filteredQuestion, setFilteredQuestion] = useState("React");
    const { questions } = props;
    const FilterChangeHandler = (selectedQuestion) => {
        setFilteredQuestion(selectedQuestion)
    };
    const filterquestions = questions.filter((question) => {
        return question.category === filteredQuestion;
    });

    return (
        <Card className='questions'>
            <div className='question-header'>
                <h3 className='quiz-total'>Total Question : {filterquestions.length}</h3>
                <h3 className='quiz-timer'>Time : 03:03</h3>
            </div>
            <QuestionFilter selected={filteredQuestion} onChangeFilter={FilterChangeHandler} />
            {   
                filterquestions.length === 0 ? (<p>There is no Question</p>) : (filterquestions.map((question,i) => {
                    return <QuestionItem key={question.id} question={question} count={i+1} total={filterquestions.length}/>
                })
                )
            }

            <button className='quiz-submit'>Submit</button>
        </Card>
    )
}
