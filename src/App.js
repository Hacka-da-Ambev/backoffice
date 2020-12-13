import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';
import Routes from './Routes';
import SideNav from './components/sidenav/SideNav';

function App() {
  const routesArray = Routes.map(value => {
    const breadCumb = value.isChildren ? <span><Link to={value.fatherRoute}><span className="linkBreadcumb">{value.fatherName}</span> </Link> {'>'} {value.name}</span> : value.name;
    return (
      <Route exact path={value.path} key={value.name}>
        <div className="HeaderContent">
          <div>
            <p>{breadCumb}</p>
          </div>
        </div>
        {value.component()}
      </Route>
    );
  })
  return (
    <div className="App">
      <Router>
        <SideNav />
        <div className="Content">
          <Switch>
            {routesArray}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
