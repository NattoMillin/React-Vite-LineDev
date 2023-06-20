import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>      
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </BrowserRouter>
  );
}
export default App
