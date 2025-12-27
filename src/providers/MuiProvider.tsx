'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import theme from '@/theme/theme';

interface Props {
  children: ReactNode;
}

export default function MuiProvider ({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
