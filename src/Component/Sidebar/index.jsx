import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleButton } from '../../Store/actions';

import sidebarImg from "../../Assets/image/sidebar.png";
import toggleFirst from "../../Assets/image/toglle-01.png";
import toggleSecond from "../../Assets/image/toglle-02.png";

const Sidebar = ({ isFirstButtonActive, toggleButton }) => {
  const handleFirstButtonClick = () => {
    toggleButton();
  };

  const handleSecondButtonClick = () => {
    toggleButton();
  };

  return (
    <div className='sidebar'>
      <Container>
        <div className="news-wrap">
          <img src={sidebarImg} className='img-fluid' alt="" />
          <div className="content">
            <span className="title">Hi Reader,</span>
            <p className='text'>Here’s your News!</p>
          </div>
        </div>

        <div className="toglle-wrap">
          <h2 className="title">View Toggle</h2>
          <div className="btn-wrap">

            <button className={`toggle-btn ${isFirstButtonActive ? 'active' : ''}`} onClick={handleFirstButtonClick}>
              <img src={toggleFirst} className='img-fluid' alt="" />
            </button>

            <button className={`toggle-btn ${!isFirstButtonActive ? 'active' : ''}`} onClick={handleSecondButtonClick}>
              <img src={toggleSecond} className='img-fluid' alt="" />
            </button>
          </div>
        </div>

        <div className="feedback-wrap">
          <h3 className="title">Have a Feedback</h3>
          <button className='primary-btn'>We’re Listening!</button>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFirstButtonActive: state.isFirstButtonActive,
});

const mapDispatchToProps = {
  toggleButton,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
