import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search"; 
import Saved from "./pages/Saved";



function App() {
  return (
    <Router>
      <div >
        <h1> Google Books</h1>
        <Switch>
        <Route exact path ="/saved" component={Saved} />
          <Route exact path ="/" component={Search} />
          <Route  component={NoMatch} />

        </Switch>

      </div>
  );

    </Router>

}

export default App;
