import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import LogIn from '../containers/LogIn'
import NotFound from './NotFound'
import FrameWorks from '../containers/FrameWorks'

const Router = ({ isAuthenticated }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/frameWorks" component={FrameWorks} />
      <Route
        path="/login"
        render={props => {
          if (isAuthenticated) {
            props.history.goBack()
          } else {
            return <LogIn />
          }
        }
        }
      />
      <Route component={NotFound} />
    </Switch>
  )
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, {})(Router)
