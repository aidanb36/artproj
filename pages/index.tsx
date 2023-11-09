import React from 'react';
import HomePage from '../components/HomePage'; // Adjust the import path based on your project structure
import ContactForm from '../components/Contact';
const IndexPage: React.FC = () => {
  return (
    <div>
      <HomePage />
      {/* Any additional components or content can be added here */}
    </div>
  );
};

export default IndexPage;
