// Error.jsx
import React from 'react';
import '../components/Error/error.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops! La página que buscas no existe. La culpa es del equipo de Back</p>
      <a href="/" className="error-link">Volver al inicio</a>
    </div>
  );
};

export default Error;