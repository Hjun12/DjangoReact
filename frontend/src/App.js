import './App.css';
import Header from "./compoenets/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Graph from './routes/Graph';
import Tables from './routes/Tables';

function App() {
    return (
      <>
        <Router>
          <Header/>
          <Switch>
            <Route path="/Graph" component={Graph} />
            <Route path="/Tables" component={Tables} />
          </Switch>
        </Router>
      </>
    );
  }
  
  export default App;