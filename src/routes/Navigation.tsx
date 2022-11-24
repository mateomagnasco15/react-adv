import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from "react";

export const Navigation = () => {
  return (
  
    <Suspense fallback={<h3>Loading...</h3>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {routes.map(route => (
                <li key={route.name}><NavLink to={route.to}>{route.name}</NavLink></li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(route => (
              <Route key={route.name} path={route.path} component={route.Component} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
     </Suspense>         
   
  );
}