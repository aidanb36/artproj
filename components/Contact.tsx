import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: var(--light); // white background
  border-radius: 10px;
  box-shadow: var(--shadow);
  max-width: 600px;
  width: 100%; 
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  color: var(--dark); // dark text color
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledForm = styled.form`
  width: 95%;
`;

const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--dark); // border style from the inspiration
  background-color: var(--light); // white background
  font-size: 16px;
  font-family: inherit;
  color: var(--dark);

  &::placeholder {
    color: var(--primary);
  }
  &:focus {
    outline: none;
    border-color: var(--primary); // focus color
  }
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--dark); // consistent with the inspiration
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
  background-color: var(--light); // white background
  color: var(--dark);
  &::placeholder {
    color: var(--primary);
  }
  &:focus {
    outline: none;
    border-color: var(--primary); // focus color
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: var(--primary); // button color from the inspiration
  color: var(--dark);
  border: 1px solid var(--dark); // border style from the inspiration
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: inherit;
  &:hover {
    background-color: var(--dark); // hover effect from the inspiration
    color: var(--light);
  }
`;

const StyledImage = styled.img`
  width: 300px;
  max-width: 80%;
  height: 500px;
  margin: 0px 0;
  @media (max-width: 767px) { 
    &:nth-child(2) {
      display: none;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center items horizontally
  justify-content: center; // Center items vertically
  gap: 20px;
  @media (min-width: 768px) { 
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // New state variables for form status feedback
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    message: null,
    success: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const apiAccessKey = process.env.REACT_APP_API_ACCESS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, message: null, success: false });

    // Prepare formData for the API
    const dataToSend = JSON.stringify({
      ...formData,
      access_key: "06417931-9590-47d7-8d85-99483f7cedad" // replace with your actual access key
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: dataToSend,
      });

      const result = await response.json();

      if (result.success) {
        // Form submitted successfully
        setFormStatus({
          submitting: false,
          message: "Your message has been sent successfully!",
          success: true,
        });
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        // The server responded with some issue
        throw new Error(result.message);
      }
    } catch (error) {
      // An error occurred during the submission
      setFormStatus({
        submitting: false,
        message: error.message || "An error occurred, please try again.",
        success: false,
      });
    }
  };

  return (
    <FlexWrapper>
  <FormContainer>
    <h2 style={{ textTransform: 'uppercase' }}>request a quote</h2>

        {/* Display submission status to the user */}
        {formStatus.message && (
          <div style={{ color: formStatus.success ? "lightgreen" : "tomato" }}>
            {formStatus.message}
          </div>
        )}

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required // Add required flag to ensure the input is filled
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required // Validates the input field for valid email formats
          />
          <StyledTextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <StyledButton type="submit" disabled={formStatus.submitting}>
            {formStatus.submitting ? "Sending..." : "Send"}
          </StyledButton>
        </StyledForm>
      </FormContainer>
      {/* Images commented out previously can be added here */}
    </FlexWrapper>
  );
};

export default ContactForm;