import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {
  render() {
    <div className="nav">
      <Link>Login</Link>
    </div>
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Nav))
