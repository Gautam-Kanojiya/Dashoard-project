import { Box, colors } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


function Home(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"    
        
      >
        <Box  margin="20px">
         <h1>
         <Link to="/login">Login</Link>
            </h1>
        </Box>
        
        <Box margin="20px">
            <h1>
            <Link to="/signup">Signup</Link>
            </h1>
          
        </Box>
      </Box>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </Box>
  );
}

export default Home;