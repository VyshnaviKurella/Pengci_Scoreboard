import React, { useState, useEffect } from "react";
import "./Scores.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Scores = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await axios.get('http://localhost:2000/pengci/getScores')
        .then((res) =>{
         
   
         setData(res.data.scores.scores.sort((a, b) => b.score - a.score))
       })
       .catch( (error) => {
         console.error('Error fetching data:', error);
       })
     };
   
     useEffect(() => {
   
       fetchData();
       const intervalId = setInterval(() => {
         fetchData();
       }, 5 * 60 * 1000); 
   
       return () => {
         clearInterval(intervalId);
       };
   
     }, []);
     const renderTableRows = () => {
        return data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{index}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>{row.score}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ));
      };
      
    
    
    
      const displayScores = () => {
        return ( 
          <Grid container item xs={11} direction="row"  justifyContent="center" alignContent="center" alignItems="center">
             <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Email ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTableRows()}</TableBody>
            </Table>
          </TableContainer>
              
          </Grid>
        )
    
      }
      return (
        <div className="bg">
          <div className="alignment">
            <Grid container  direction="row"  justifyContent="center" alignContent="center" alignItems="center">
              <Grid item xs={12} >
            <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
              Scoreboard
            </Typography>
            </Grid>
            <Grid item xs={7}>
    
            {displayScores()}
            </Grid>
            </Grid>
          </div>
    
        </div>
      
    
      )
    };
    
    export default Scores;