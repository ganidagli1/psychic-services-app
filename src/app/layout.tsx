import React from 'react';
import './globals.css'; // Assuming you have a global CSS file for styles
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mystical Services App',
  description: 'Discover mystical services and experiences that connect you to the universe.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <link href={inter.style} rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-r from-purple-500 to-blue-500">
        {children}
      </body>
    </html>
  );
};

export default Layout;