import React, { useState } from 'react';
import './Faq.css';
import faqb from '../Loginform/light-purple-color-background-light-purple-color-animated-with-light-free-video.jpg'

function FAQ() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What Are Activity Levels, and How Do They Work?',
      answer: 'The AquaTrack calculates your water intake on the basis of your activity level. There are three options in the Activity level menu- Low,Moderate and High. You can choose the most convenient option.',
      isOpen: false,
    },
    {
      id: 2,
      question: 'How do I change my daily water intake Goal?',
      answer: 'The AquaTracker app assigns a default daily Water Intake Goal for you based on your weight,age,activity level and climate.But still its a suggestion,you can also modify your water intake goal as you wish.',
    },
    {
    id: 3,
      question: ' How much water should I drink? ',
      answer: 'The minimum water intake for every individual should be around 8 glasses every day. The ideal water intake ranges around 13 cups for men and 9 cups for women. It further depends on your body, and you should consult your doctor for a precise quantity',
    },
    {
        id: 4,
        question: ' How is water intake amount calculated? ',
        answer: 'Ideally water intake should be 35ml/kg.This baseamount is multiplied with your weight and with activity level value{0.5 if low,0.75 if moderate,1 if high) and then this is multiplied with climate factor(0.8 if cold,1.0 if moderate,1.2 if hot).The final result is the average water intake amount.',
      },
   
  ]);

  const toggleQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id ? { ...q, isOpen: !q.isOpen } : q
      )
    );
  };

  return (
    <div>
        <div className='faqback'>
         <img src={faqb} alt='backgr' width="1550px" height="740px"/>
         <div className='asked'>
            Frequently Asked Questions:
         </div>
    <div className="faq-container">
      <div className="faq-list">
        {questions.map((q) => (
          <div key={q.id} className={`faq-box ${q.isOpen ? 'open' : ''}`}>
            <div className="question" onClick={() => toggleQuestion(q.id)}>
              {q.question}
            </div>
            {q.isOpen && <div className="answer">{q.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default FAQ;
