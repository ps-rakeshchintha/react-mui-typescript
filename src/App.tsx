import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SimpleDialog } from './Components/MyDialog';
import { Button } from '@mui/material';

import { Link } from "react-router-dom";
import InternationalNumber from './Components/InternationalNumber';

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("default");

    const handleClickOpen = (type: string) => {
        setOpen(true);
        setType(type)
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <Container>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Link to="/home-native-grid">Home Page built with native Grid CSS</Link>
      <br/>
      <Link to="/home-mui-grid">Home Page built with MUI Grid CSS</Link>
        <Typography m={1} variant="h1" color="system.teal" fontWeight="600" fontStyle="italic">
          h1. Heading
        </Typography>
        <Typography m={1} variant="h2">
          h2. Heading
        </Typography>
        <Typography m={1} variant="h3">
          h3. Heading
        </Typography>
        <Typography m={1} variant="h4">
          h4. Heading
        </Typography>
        <Typography m={1} variant="subtitle1">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography m={1} variant="body1" >
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Typography m={1} variant="body2" >
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Box m={1}>
          <Typography variant="body3">
            body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
        </Box>

        <div>
            <Button variant="outlined" onClick={() => handleClickOpen("default")}>
                Open simple dialog
            </Button>
            <Button variant="outlined" onClick={() => handleClickOpen("alert")}>
                Open Alert dialog
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                type={type}
            />
        </div>
      </Box>
      <Box my={2}>
        <InternationalNumber/>
      </Box>
    </Container>
  );
}
