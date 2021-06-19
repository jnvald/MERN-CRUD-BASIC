import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import ProductForm from './views/ProductForm';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/product/:id">
              <ProductDetail/>
          </Route>
          <Route exact path="/create">
              <ProductForm/>
          </Route>
          <Route exact path="/edit/:id">
              <ProductForm/>
          </Route>
          
        </Switch>
      </Router>
    </div>

  );
}

export default App;
