import React from 'react'
import { Link } from 'react-router-dom'
import Payments from '../transaction/Payments'

class SubNav extends React.Component {
  render() {
    const  { user, back } = this.props

    let goBack

    this.props.back
      ? goBack = (
          <Link to='/dashboard'>
            <i className="fas fa-arrow-left"></i>
            <span>GO BACK</span>
          </Link>
        )
      : goBack = (<span>Welcome {user.name}!</span>)

    return (
      <div className="submenu">
        <div className="container">
          <div className="submenucontent">
            <div className="title">
              {goBack}
            </div>
            <div className="transaction">
              <span><strong>{user.credits}</strong> credits</span>
              <Payments />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SubNav
