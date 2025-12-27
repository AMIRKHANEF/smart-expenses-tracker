import React from "react";
import MuiProvider from '@/providers/MuiProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ background: 'linear-gradient(135deg, rgb(66, 153, 225) 0%, rgb(43, 108, 176) 100%)', height: '100vh', width: '100vw' }}>
        <MuiProvider>
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}
