// src/components/Layout.jsx

import { Container, Box } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => (
    <>
        <Header />
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                {children}
            </Box>
        </Container>
    </>
);

export default Layout;