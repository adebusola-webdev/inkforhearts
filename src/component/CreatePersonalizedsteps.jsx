import React from 'react'
import '../styles/home.css'
import PropTypes from 'prop-types';

const CreatePersonalizedsteps = ({ mainTitle, subTitle, steps }) => {
  return (
    <>
        <section className="steps__container">
      <div className="inner__steps__con">
        <div className="steps__text__con">
          <h1 className='steps__mainT'>{mainTitle}</h1>
          <p className='steps__subT'>{subTitle}</p>
        </div>
        <div className="main_steps__con">
          {steps.map((step, index) => (
            <div className="steps" key={index}>
              <img src={step.image} alt={`Step ${index + 1}`} />
              <h1 className='num_circle'>{index + 1}</h1>
              <h1 className='steps__bold_t'>{step.title}</h1>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     
    </>
  )
}
CreatePersonalizedsteps.propTypes = {
    mainTitle: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default CreatePersonalizedsteps