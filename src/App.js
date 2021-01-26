import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Homes';
import NavbarItem from './components/NavbarItem';
import PostDetail from './components/PostDetail';


function App() {
  return (
    
    <BrowserRouter>

      <div className="App">
        <NavbarItem />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/:post_id" component={PostDetail} />
          </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
