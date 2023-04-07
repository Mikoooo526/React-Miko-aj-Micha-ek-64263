import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>
        Nazwa:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </h1>
      <h1>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </h1>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default Form;
