import React, { useState } from 'react';
import Account from './Account';  
// test
// import Pricings from './Pricing';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [apiData, setApiData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/testapp/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log('API Data from Login:', data);
      setApiData(data);
      setIsSubmitted(true);
      console.log('formData.username:', formData.username);
      setUser(formData.username);
    } else {
      console.error('Error:', response.statusText);
    }
  };

  if (isSubmitted) {
    return <Account apiData={apiData} user={user}/>;
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;



