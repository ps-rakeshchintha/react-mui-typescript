import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    type: string;
}

export function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open, type } = props;

    const handleClose = () => {
        onClose();
    };

    const getTypeColor = () =>{
        switch (type) {
            case "alert":
                return "system.error"
        
            default:
                return "system.midnightBlue"
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="xs">
            <Box pt={4} pl={4} pb={1} pr={2} sx={{ width: '280px', borderRadius: '4px', background: '#FFFFFF 0% 0% no-repeat padding-box'}}>
                <Typography variant='h3' mb={2} fontWeight="600" color={getTypeColor()}>Subtitle</Typography>
                <Typography variant="body1" mb={2} color="system.gray">
                Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </Typography>
                <Box display="flex" justifyContent="flex-end" gap={1}>
                    <Button onClick={() => handleClose()}>Cancel</Button>
                    <Button onClick={() => handleClose()}>Confirm</Button>
                </Box>
            </Box>
        </Dialog>
    );
}
