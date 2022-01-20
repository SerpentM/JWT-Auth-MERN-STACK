import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from "axios";

export default function OutlinedCard() {
  const [displayData, setDisplayData] = React.useState([]);
  React.useEffect(()=>{
    axios.get('/api/displayuser',{
      headers: {
        "x-auth-token": localStorage.getItem("token")
      }
     }).then((res)=>{
      if(res.data){
       setDisplayData(res.data)
      }
      }).catch(err => console.log(err))
  })
  return (
    <Box sx={{ minWidth: 320,width:"70%" }} >
      {displayData.map((obj)=>{
        return <Card variant="outlined" style={{maxWidth:"600px",float:"right",marginBottom:20}}>
           <React.Fragment >
    <CardContent >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
        Name :- 
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.primary" gutterBottom>
            {obj.username}
      </Typography> 
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
        Number :- 
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.primary" gutterBottom>
        {obj.number}
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
        Email :- 
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.primary" gutterBottom>
        {obj.email}
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
        Address :- 
      </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" color="text.primary" gutterBottom>
        {obj.address}
      </Typography>
        </Grid>
      </Grid>
    </Box>
    </CardContent>
  </React.Fragment>
        </Card> 
      })}
    </Box>
  );
}
