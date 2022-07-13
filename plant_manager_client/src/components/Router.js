import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Signup from './Signup'
import User from './User'
const Router = () => {
    return (  
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/users/:userid' component={User} />
           <Route exact path='/signup' component={Signup} />
           <Route exact path='/about' component={About} />
           {/* <Route exact path='/dead' component={DeadPlants} />    */}
       </Switch>
    )
}
 
export default Router 