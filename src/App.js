import logo from './logo.svg';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <CountryList/>
        <Switch>
          <Route path="/:cca3" component={Country}/>

        </Switch>
        
      </header>
    </div>
  );
}

export default App;
