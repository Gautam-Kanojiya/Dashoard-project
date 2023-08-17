import { Box,   colors } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
//import FromBox from '../FormBox.jsx';
import Header from "../../components/Header";

function Home(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DIABETIC RETINOTHERAPY" subtitle="" />

          <Box 
            display="flex" 
            alignItems="center"
            justifyContent="right"  
            marginTop="0px"  
            
          >
            <Box  margin="20px" >
            <h1>
            <Link to="/login">Login</Link>
                </h1>
            </Box>
            
            <Box margin="20px" >
                <h1>
                <Link to="/signup" fontColor="blue">Signup</Link>
                </h1>
              
            </Box>
      </Box>
          
        </Box>
      

      <br />
      <br />
      <br />
      {/* <img
                  alt="profile-user"
                  width="50%"
                  height="50%"
                  src={`../../assets/SVG_logo.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                /> */}
     {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </Box>
  );
}

export default Home;