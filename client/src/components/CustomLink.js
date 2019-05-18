import React from 'react'
import { Route, Link } from "react-router-dom"
import '../styles/customLink.scss'


export default function CustomLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className="custom-link">
          <div className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
          </div>
        </div>
      )}
    />
  )
}

