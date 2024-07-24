// src/App.jsx

import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Layout from './components/Layout';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <PostsPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;