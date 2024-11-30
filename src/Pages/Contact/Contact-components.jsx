import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="contact-form">
        <span className="heading">Contact Us</span>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required defaultValue={""} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .contact-form {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    opacity: 0;
    transform: translateY(50px);
    animation: slideUp 0.8s ease-out forwards;
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-form label {
    color: black;
  }

  .contact-form .heading {
    font-size: 24px;
    color: black;
    margin-bottom: 12px;
    font-weight: bold;
    display: block;
  }

  .contact-form form {
    display: flex;
    flex-direction: column;
  }

  .contact-form label {
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    height: 80px;
    width: 95%;
  }

  .contact-form input, .contact-form textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .contact-form input:focus, .contact-form textarea:focus {
    outline: none;
    box-shadow: 0 0 5px #ff6384;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }

  .contact-form button[type="submit"] {
    background-color: #77dd77;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .contact-form button[type="submit"]:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .contact-form {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;

export default Form;
