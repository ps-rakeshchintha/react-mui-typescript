import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SimpleDialog } from './Components/Dialog';
import { Button } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("default");
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = (type: string) => {
        setOpen(true);
        setType(type)
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '100%', maxWidth: 500 }}>
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
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                type={type}
            />
        </div>
      </Box>
    </Container>
  );
}
