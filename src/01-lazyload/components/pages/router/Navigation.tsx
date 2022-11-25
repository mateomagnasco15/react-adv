import { Link, Switch, useRouteMatch, Route, Redirect } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../index";


export const Navigation = () => {

    const { url, path } = useRouteMatch();

  return (
    <>
          <h2>LazyLayout Pages</h2> 
          <ul>
              <li>
                  <Link to={`${url}/lazy1`}>Lazy Page 1</Link>
              </li>
              <li>
                  <Link to={`${url}/lazy2`}>Lazy Page 2</Link>
              </li>
              <li>
                  <Link to={`${url}/lazy3`}>Lazy Page 3</Link>
              </li>
          </ul>  
          <Switch>
              <Route path={`${path}/lazy1`}>
                  <LazyPage1/>
              </Route>
              <Route exact path={`${path}/lazy2`}>
                  <LazyPage2/>
              </Route>
              <Route exact path={`${path}/lazy3`}>
                  <LazyPage3/>
              </Route>
              <Redirect to={`${path}/lazy1`}/>
          </Switch>
    </>
  )
}
