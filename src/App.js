import Header from './components/Header/Header'
import ProductDetail from './components/Product/ProductDetail';
import Store from './pages/Store';
import About from './pages/About';
import Cart from './pages/Cart';
import {Switch, Route} from "react-router-dom"
import './style.css'

function App() {
  return (
    <div>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Store />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
    
    </div>
  );
}

export default App;
