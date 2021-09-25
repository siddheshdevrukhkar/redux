import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./Containers/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <div className="bg-light text-dark m-5">
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
