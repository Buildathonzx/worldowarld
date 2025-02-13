'use client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    secondary: {
      main: '#6a1b9a',
    },
    background: {
      default: '#13111C',
      paper: 'rgba(41, 37, 56, 0.7)',
    },
  },
  typography: {
    fontFamily: geistSans.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(90deg, rgba(156,39,176,0.1) 0%, rgba(106,27,154,0.1) 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(156,39,176,0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(41, 37, 56, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          border: '1px solid rgba(156,39,176,0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(156,39,176,0.3)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          background: 'linear-gradient(45deg, #9c27b0 30%, #6a1b9a 90%)',
          boxShadow: '0 3px 15px rgba(156,39,176,0.4)',
          '&:hover': {
            background: 'linear-gradient(45deg, #ba68c8 30%, #7b1fa2 90%)',
          },
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#2c2c2c] text-white`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
