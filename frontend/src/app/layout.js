import "@fontsource/poppins/400.css";
import "./globals.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "LEYTEXPLORE | Home",
  description: "Tourism in Southern Leyte",
  icons: {
    icon: "/assets/favicon.ico"
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );

}
