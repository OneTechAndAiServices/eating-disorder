import './styles/global.css'; // your global CSS
import { CssBaseline } from '@mui/material';

export const metadata = {
  title: "Eating Disorder",
  description: "Your app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Birthstone&family=Edu+SA+Hand:wght@400..700&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CssBaseline />
     
        {children}
      </body>
    </html>
  );
}
