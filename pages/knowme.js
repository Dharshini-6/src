import React, {useState} from 'react';
import './know.css'

export default function Knowme() {
  const questions = [
    {
      questionText: 'What degree am I currently pursuing?',
      answerOptions: [
        {answerText: 'Diploma', isCorrect: false},
        {answerText: 'UG', isCorrect: true},
        {answerText: 'PG', isCorrect: false},
        {answerText: 'PhD', isCorrect: false},
      ],
    },
    {
      questionText: 'I like Coding',
      answerOptions: [
        {answerText: 'NO', isCorrect: false},
        {answerText: 'YES', isCorrect: true},
      ],
    },
    {
      questionText: 'I like to read',
      answerOptions: [
        {answerText: 'fiction', isCorrect: true},
        {answerText: 'non-fiction', isCorrect: false},
        {answerText: 'nothing', isCorrect: false},
      ],
    },
    {
      questionText: 'My favourite pet animal',
      answerOptions: [
        {answerText: 'dog', isCorrect: false},
        {answerText: 'cat', isCorrect: false},
        {answerText: 'hamster', isCorrect: false},
        {answerText: 'puppy', isCorrect: true},
      ]
    }
  ]

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>
              {questions[0].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[0].answerOptions.map((answerOption)=>{
              <button> {answerOption.answerText}</button>
            })}
					</div>
				</>
			)}
		</div>
	);
}