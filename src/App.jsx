import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Translation from "./components/Translation";
import "./App.css";
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <Translation/>
      </div>
    </main>
  );
};

export default App;
