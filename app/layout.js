import Navigation from "./Navigation";
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
