import NavBar from "../components/NavBar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>  
  );
}

export default MyApp;
