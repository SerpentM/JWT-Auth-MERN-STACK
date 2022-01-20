import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

export default function AddressForm(props) {
    const theme = createTheme();
    const [validationError, setError] = React.useState({name:false,number:false,email:false,address:false})
    const handleSubmit = (event) => {
      event.preventDefault();
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if(userData.name === ''){
        setError({...validationError,name:true});
      }
      else if(userData.number.length !== 10 ){
        setError({...validationError,number:true,name:false})
      }  
      else if(!regex.test(userData.email)){
        setError({...validationError,email:true,number:false})
      }
      else if(userData.address === ''){
        setError({...validationError,address:true,email:false})
        }
      else{
            setError({...validationError,address:false});
            console.log(userData)
            axios.post('/api/addusers',userData, {
              headers: {
                "x-auth-token": localStorage.getItem("token")
              }
             })
            .then((res)=>{
              console.log(res);
              alert("Data Submitted");
            })
            .catch((err)=>{console.log(err.message);
              alert("Error");
            })
        }      
    };
    const [userData, setUserData] = React.useState({username:"",number:"",email:"",address:""});
    const handleName = (e)=>{
      setUserData({...userData, username:e.target.value})
    }
    const handleNumber = (e)=>{
      setUserData({...userData, number:e.target.value})
    }
    const handleEmail = (e)=>{
      setUserData({...userData, email:e.target.value})
    }
    const handleAddress = (e)=>{
      setUserData({...userData, address:e.target.value})
    }
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography component="h1" variant="h4">
            Add User Data
          </Typography>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            onChange={handleName} 
            helperText={!validationError.name ? "":"This field cannot be empty"}
            error = {validationError.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Number"
            type="number"
            id="number"
            onChange={handleNumber}
            helperText={!validationError.number ? "":"Enter 10 digit phone Number"}
            error = {validationError.number}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleEmail}
            helperText={!validationError.email ? "":"Invalid Email"}
            error = {validationError.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="address"
            multiline
            maxRows={3}
            id="address"
            onChange={handleAddress}
            helperText={!validationError.address ? "":"This field cannot be empty"}
            error = {validationError.address}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
         
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  );
}