import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";


const App = () => (
  <div className="app">
    <Navbar />
    <div className="content">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
