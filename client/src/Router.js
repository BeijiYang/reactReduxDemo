import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import FrameWorks from './FrameWorks'

export default function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/frameWorks" component={FrameWorks} />
      </Switch>
    </div>
  )
}
