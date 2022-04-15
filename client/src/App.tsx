import { useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import Footer from "./components/Footer/footer";
import PostGrid from "./components/PostGrid/postgrid";
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Switch> 
          <Route path="/" component={Home} exact/>
        </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
