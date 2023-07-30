import React, { useState, useEffect } from "react";
import "./Pengci.css"
import Button from '@mui/material/Button';
import Footer from "./Footer.js";
import Typography from '@mui/material/Typography';
// import { useNavigate, Link } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";
import { Grid } from '@mui/material';
import axios from "axios";

// import Grid from "@mui/material/Grid";
const Pengci = () => {
  // const navigate = useNavigate();
  const [scores, setScores] = useState([]);
  

  useEffect(() => {
    // if (localStorage.getItem("userRole") === 'seller') {
    //   navigate('/seller-dashboard');
    // }
  }, []);



  const disaplyScores = (score_data) => {
    return ( <div> table should be rendered here</div>
      // <Grid container item xs={12} direction="row" spacing={2}   >
      //   {cards.map((card) => (
      //     <Grid item xs={6} md={3}  >
      //       <Card key={card._id} className="homePage_card"  >
      //         {/* <CardMedia image={card.image} alt="product image" /> */}
      //         {
      //           card.images && card.images.map((image) => (
      //             //  console.log(card);
      //             <CardMedia alt="product image" className="displayProductFormImage">
      //               <img src={image.url} alt="Product Preview" />
      //             </CardMedia>
      //           ))
      //         }
      //         <CardContent>
      //           <Tooltip title={card.name}>
      //             <Typography variant="h6" component="h6" color="#848D62" className="nameEllipsis">
      //               {card.name}
      //             </Typography>
      //           </Tooltip>
      //           <Typography variant="body2" color="#848D62" component="p">
      //             ${card.price}
      //           </Typography>
      //           <Link style={{ color: "#848D62" }} to={`/products/${card._id}`}> Details</Link>
      //         </CardContent>
      //       </Card>
      //     </Grid>

      //   ))
      //   }
      // </Grid>
    )

  }


  return (
    <div className="bg">
      <div className="alignment">
        <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Pengci
        </Typography>
        <Typography className="homePage_typography" variant="h4" color="textSecondary" component="div">
          Pengci Game info
        </Typography>

        {/* {disaplyCards()} */}
      </div>
      <Footer />
    </div>
  

  )
};

export default Pengci;