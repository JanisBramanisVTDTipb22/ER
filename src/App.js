import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import "./App.css";

function App() {
    return (
        <main className="slides-container">
            <section className="slide"><Slide1 /></section>
            <section className="slide"><Slide2 /></section>
            <section className="slide"><Slide3 /></section>
            <section className="slide"><Slide4 /></section>
            <section className="slide"><Slide5 /></section>
            <section className="slide"><Slide6 /></section>
        </main>
    );
}

export default App;
