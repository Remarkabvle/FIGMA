import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Home from "./pages/home";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Home />
            <Footer />
        </>
    );
}

export default App;
