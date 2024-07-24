// src/components/styledComponents/StyledFormControl.jsx

import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    minWidth: 120,
    [theme.breakpoints.up('sm')]: {
        minWidth: 200,
    },
}));

export default StyledFormControl;
