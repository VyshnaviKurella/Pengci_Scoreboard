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
            Instructions to Play Trickster Roads:
            <Typography className="homePage_typography" variant="h6" color="textSecondary" component="div">
Welcome to Trickster Roads, where you'll take on the role of a driver in an exciting Autonomous Vehicle (AV) simulation. Your goal is to navigate through the map and accomplish two key objectives:
<div> 1. Earn "Pengci" Score:</div>
    Test your skills in outsmarting the other AVs on the road. Trick them into behaving incorrectly by creating challenging traffic events such as causing collisions, violating traffic signals, or executing unexpected maneuvers. The more successfully you trick the AVs, the higher your "Pengci" score will be.
<div> 2. Earn "Event" Score:</div>
    Be on the lookout for other autonomous vehicles attempting to deceive you. Avoid falling into their traps, as they will try to lead you into making mistakes, such as getting involved in collisions or violating traffic rules. Your ability to stay alert and evade these tricky AVs will increase your "Event" score.
<div>
As you immerse yourself in this thrilling experience, keep a close eye on your scores and strive to become a master of AV simulation. Remember, a delicate balance between tricking the AVs and avoiding their tricks will lead you to triumph on Trickster Roads. Are you ready to showcase your strategic prowess and driving skills in this adrenaline-pumping adventure? Get behind the virtual wheel and embark on the journey to prove yourself as the ultimate Trickster Roads champion! Good luck, and may the roads be ever in your favor!
 </div>
            </Typography>
            </Typography>
            </Grid>
         
            </Grid>
          </div>
    
        </div>
      
    
      )
    };
    
    export default Instructions;