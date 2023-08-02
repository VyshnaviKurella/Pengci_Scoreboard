import React from "react";
import "./Instructions.css"
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Instructions = () => {

    return (
        <div className="bg">
          <div className="alignment">
            <Grid container  direction="row"  justifyContent="center" alignContent="center" alignItems="center">
              <Grid item xs={10} >
            <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
              How to play instructions to be displayed here
            </Typography>
            </Grid>
         
            </Grid>
          </div>
    
        </div>
      
    
      )
    };
    
    export default Instructions;