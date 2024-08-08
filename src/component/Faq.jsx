import React from 'react'
import '../styles/faq.css'
import { useState } from 'react';

export const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
      { question: 'What is inksforHearts?', answer: 'React is a JavaScript library for building user interfaces.' },
      { question: 'How do I InksforHearts', answer: 'You use React by creating components that describe how a UI should look.' },
      { question: 'How long would it take to make a personalized book?', answer: 'A component is a reusable piece of code that represents a part of the UI.' },
      // Add more FAQs as needed
    ];
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (

    <>
     <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    
    </>
  )
}
