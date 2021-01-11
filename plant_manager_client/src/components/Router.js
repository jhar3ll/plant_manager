import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Plants from './Plants'



const Router = () => {
    return (  
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/plants' component={Plants} />   
       </Switch>
    )
}
 
export default Router 