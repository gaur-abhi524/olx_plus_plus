import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import Footer from "./components/Footer/footer";
import PostGrid from "./components/PostGrid/postgrid";
import PostDetail from "./components/PostDetails/postDetails"
import Home from "./pages/Home"
import Post from "./pages/Post"

function App() {

  const [user,setUser] = useState({
    name:'',
    email:'',
    profileUrl:''
  })

  useEffect(() => {
    const userName=localStorage.getItem("userName");
    const userEmail=localStorage.getItem("userEmail");
    const userProfile=localStorage.getItem("userProfile");

    if(userName!=null && userEmail!=null && userProfile!=null)
      setUser({...user,name:userName,email:userEmail,profileUrl:userProfile});
  },[]);
  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar userData={user} />
        <Switch> 
          <Route path="/" component={Home} exact/>
          <Route path="/post" component={Post} exact/>
          <Route path="/post:id" component={PostDetail} exact/>
        </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
