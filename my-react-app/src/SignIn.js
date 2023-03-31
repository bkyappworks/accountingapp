import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// props
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { navigate } from 'gatsby';
import Dashboard from './Dashboard';

const theme = createTheme();

export default function SignIn() {
    // const [formData, setFormData] = useState({});
    const [response, setResponse] = useState(null);
//     const navigate = useNavigate();
//     // handleSubmit is a function that will be called when the form is submitted
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         const username = data.get('username');
//         const password = data.get('password');

//         // Make a POST request to Django API endpoint
//         const response = await fetch('http://127.0.0.1:8000/testapp/login/', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//         });

//         // Handle the response from your API
//         if (response.ok) {
//             const data = await response.json();
//             // send props
//             setResponse(data);
//             navigate('/test',{ state: {response:data} });

//         } else {
//             console.error('Error:', response.statusText);
//         }
//         // console.log({
//         //     username: username,
//         //     password: password,
//         // });
//   };
//   // end of handleSubmit

// //   const handleChange = (event) => {
// //     setFormData({
// //       ...formData,
// //       [event.target.name]: event.target.value,
// //     });
// //   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={handleChange}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             {/* {response && <Dashboard response={response} />} */}
//             <div>
//                 {/* pass handleResponse as a prop to another component */}
//                 <ChildComponent handleResponse={handleResponse} />
//                 {/* render the Dashboard component */}
//                 <Test data={response} />
//             </div>
//             <Grid container>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
}