import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
