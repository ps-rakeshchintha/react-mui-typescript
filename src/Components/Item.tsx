import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    border: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
    display: "flex",
    height: "100%",
    width: "100%"
}));

export default Item