import React from "react";
import "./layout.css";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const Layout = () => {
  return (
    <html lang="cs">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Projekt RG</title>
      </head>
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
