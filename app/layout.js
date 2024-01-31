import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITSA 2024 | Institute Technical Summer Activities",
  description: "Institute Technical Summer Activities aka ITSA is an annual program organized by ITC. The aim is to provide first-hand technical exposure over the period of summer vacations.  It also serves as a platform where one explores a field not aligned with their own major.  Students are encouraged to also target some real-life problems that can be solved using technology. Add created by Deepak Silaych, visit https://www.deepaksilaych.tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://itc.gymkhana.iitb.ac.in/techgc/static/media/itclogo.9a070c01125ecad0b3be.png" />
      </head>
      <body className={inter.className}>
        {/* Made by Deepak Silaych, visit https://www.deepaksilaych.tech */}
        {children}
      </body>
    </html>
  );
}
