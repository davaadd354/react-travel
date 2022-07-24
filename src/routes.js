import React from 'react'
import { BrowserRouter as Router,Route,Routes as Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Browse from './pages/Browse'
import Stories from './pages/Stories'
import Agents from './pages/Agents'
import Example from './pages/Example'
import DetailPage from './pages/DetailPage'
import Checkout from './pages/Checkout'
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={<LandingPage />}></Route> 
        <Route path='/About' element={<About />}></Route> 
        <Route path='/browse-by' element={<Browse />}></Route> 
        <Route path='/stories' element={<Stories />}></Route> 
        <Route path='/agents' element={<Agents />}></Route> 
        <Route path='/example' element={<Example />}></Route>
        <Route path='/properties/:id' element={<DetailPage />}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
