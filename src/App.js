import AboutInfo from "./About-info/AboutInfo";
import "./App.css";
import Home from "./Home-page/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <AboutInfo />
      </header>
    </div>
  );
}

export default App;
