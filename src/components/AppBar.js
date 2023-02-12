import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function ButtonAppBar() {
    const { t, i18n } = useTranslation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
            <Button color="inherit" component={Link} to="/">{t('Home')}</Button>
            <Button color="inherit" component={Link} to="/about">{t('About')}</Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button color="inherit" onClick={() => i18n.changeLanguage('fi')}>FI</Button>
            <Button color="inherit"  onClick={() => i18n.changeLanguage('en')}>EN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}