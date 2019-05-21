import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import LogIn from '../containers/LogIn'
import SignUp from '../containers/SignUp'
import NotFound from './NotFound'
import FrameWorks from '../containers/FrameWorks'

// go back when authed
const CustomRoute = ({ authed, path, component }) => (
  <Route
    path={path}
    render={props => {
      if (authed) {
        props.history.goBack()
      } else {
        return component
      }
    }}
  />
)

const Router = ({ isAuthenticated }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/frameWorks" component={FrameWorks} />
      <CustomRoute path="/login" component={<LogIn />} authed={isAuthenticated} />
      <CustomRoute path="/signup" component={<SignUp />} authed={isAuthenticated} />
      <Route component={NotFound} />
    </Switch>
  )
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
})

export default connect(mapStateToProps, {})(Router)
