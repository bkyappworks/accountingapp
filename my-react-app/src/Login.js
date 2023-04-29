import React, { useState } from 'react';
import Account from './Account';  
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme();
const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [apiData, setApiData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      console.log('API Data from Test1:', data);
      setApiData(data);
      setIsSubmitted(true);
    } else {
      console.error('Error:', response.statusText);
    }
  };

  if (isSubmitted) {
    return <Account apiData={apiData} />;
  }

  return (
    <div>
      <h1>Test1 Component</h1>
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
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //     <Box
    //         sx={{
    //           marginTop: 8,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //     >
    //     <Typography component="h1" variant="h5">
    //       GPA
    //     </Typography>
    //     <div>
    //       <form onSubmit={handleSubmit}>
    //         <div>
    //           <label htmlFor="username">Username:</label>
    //           <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
    //         </div>
    //         <div>
    //           <label htmlFor="password">Password:</label>
    //           <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
    //         </div>
            
    //         <button type="submit">Sign In</button>
    //       </form>
    //     </div>
    //     </Box>
    //   </Container>
    // </ThemeProvider>
  );
};

export default Login;



