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
import Footer from "./Footer.js";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import axios from 'axios';
import ReactPlayer from 'react-player'

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
        {/* <TableCell>{row.email}</TableCell> */}

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
              {/* <TableCell>Email ID</TableCell> */}
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
      <Link style={{ color: "#848D62" }} to={`/pengci/all_scores`}> View Scores List</Link>
      
      </Grid>
    )

  }


  return (
    <div className="bg">
      <div className="alignment">
        <Grid container  direction="row" spacing={2}   >
          <Grid item xs={5} >
        <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Trickster Roads
        </Typography>

        <Grid item container xs={8} alignItems="center" justifyContent="center">
        <ReactPlayer
            // className='react-player fixed-bottom'
            //url to be replaced
            url= 'https://www.youtube.com/watch?v=OKZWPbZhXHI&ab_channel=StevenDahmeraKaSternoCleidoMastoid666'
            width='100%'
            height='100%'
            controls = {true}

          />
          </Grid>
          

        <Typography className="homePage_typography" variant="h6" color="textSecondary" component="div">
        The ultimate game that puts you in the driver's seat of an Autonomous Vehicle (AV) simulation. In this cutting-edge experience, you will delve into the world of AVs and learn how simulation can be used to test their robustness in handling challenging traffic scenarios. Strap yourself in for an adrenaline-pumping adventure where you'll encounter various traffic events designed to push your AV's capabilities to the limit. Can you outwit other AVs that attempt to trick you into making mistakes? By mastering these events, you'll unlock the secrets to navigate through tricky situations and gain the skills to potentially outsmart your rivals. So, gear up for the ride of a lifetime on Trickster Roads, where you'll embark on an exhilarating journey of discovery and strategy in the realm of Autonomous Vehicles!
        </Typography>
        <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Pengci Game info
          </Typography>
    
        <Typography className="homePage_typography" variant="h6" color="textSecondary" component="div">
        <Link style={{ color: "#848D62" }} to={`/pengci/instructions`}> Instructions to play </Link>
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