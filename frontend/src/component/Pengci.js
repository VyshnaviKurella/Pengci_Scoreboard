import React, { useState, useEffect } from "react";
import "./Pengci.css"
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

import Button from '@mui/material/Button';
import Footer from "./Footer.js";
import Typography from '@mui/material/Typography';
// import { useNavigate, Link } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";
import { Grid } from '@mui/material';
import axios from 'axios';
// import Grid from "@mui/material/Grid";
const Pengci = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

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

  const handleChangePage = (event, newPage) => {
    // const newPengciData = {
    //   username: 'leroy',
    //   datetime: '2022-08-12 10:18:01.123456',
    //   email: 'leroy@example.com',
    //   score: '200',
    // };

    // axios.post('http://localhost:2000/pengci/addScore', newPengciData)
    //   .then(response => {
    //     console.log('Data saved successfully');
    //   })
    //   .catch(error => {
    //     console.error('Error saving data:', error);
    //   });

    setPage(newPage);
  };

  const renderTableRows = () => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
      <TableRow key={index}>
        <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
        <TableCell>{row.username}</TableCell>
        <TableCell>{row.score}</TableCell>
      </TableRow>
    ));
  };
  



  const displayScores = () => {
    return ( 
      <Grid container item xs={11} direction="row"  >
         <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Leaderboard
        </Typography>
         <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderTableRows()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[rowsPerPage]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
      
      </Grid>
    )

  }


  return (
    <div className="bg">
      <div className="alignment">
        <Grid container  direction="row" spacing={2}   >
          <Grid item xs={5} >
        <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Pengci
        </Typography>
        <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Pengci Game info
        </Typography>
        </Grid>
        <Grid item xs={7}>

        {displayScores()}
        </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  

  )
};

export default Pengci;