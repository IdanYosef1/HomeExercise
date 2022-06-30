import './App.css';
import Main from './components/main';
import { Switch,Route } from 'react-router-dom';
import Update from './components/update';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Main} exact></Route>
        <Route path='/update' component={Update}></Route>
      </Switch>
    </div>
  );
}

export default App;
