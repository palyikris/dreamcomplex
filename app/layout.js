"use client";

// pagefor: the Wrapper of the whole Application

import GlobalContextProvider from "@/context/globalcontext";
import "./globals.css";
import GlobalDateContextProvider from "@/context/datecontext";

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <GlobalDateContextProvider>
        <html lang="hu">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Dream Apartman Komplexumok</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            {children}
          </body>
        </html>
      </GlobalDateContextProvider>
    </GlobalContextProvider>
  );
}
