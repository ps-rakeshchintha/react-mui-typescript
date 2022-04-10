import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import Home from './views/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Container } from '@mui/material';
const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(<ThemeProvider theme={theme}>
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Container>
</ThemeProvider>);
