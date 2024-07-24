// src/components/styledComponents/StyledBox.jsx


import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
    },
}));

export default StyledBox;
