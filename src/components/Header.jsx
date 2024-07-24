// src/components/Header.jsx

import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
    <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Blog
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;