import React from 'react'
import Card from '../UI/Card'
import QuestionItem from './QuestionItem';
import QuestionFilter from './QuestionFilter';
import { useState } from 'react';
import classes from './Questions.module.css';

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
        <Card className={`${classes.questions}`}>
            <div className={`${classes.question_header}`}>
                <h3 className={`${classes.quiz_total}`}>Total Question : {filterquestions.length}</h3>
                <h3 className={`${classes.quiz_timer}`}>Time : 03:03</h3>
            </div>
            <QuestionFilter selected={filteredQuestion} onChangeFilter={FilterChangeHandler} />
            {   
                filterquestions.length === 0 ? (<p>There is no Question</p>) : (filterquestions.map((question,i) => {
                    return <QuestionItem key={question.id} question={question} count={i+1} total={filterquestions.length}/>
                })
                )
            }

            <button className={`${classes.quiz_submit}`}>Submit</button>
        </Card>
    )
}
