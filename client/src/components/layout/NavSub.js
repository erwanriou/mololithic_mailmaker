import React from 'react'
import Payments from '../transaction/Payments'

class NavSub extends React.Component {
  render() {
    const  { user, step1, step2 } = this.props
    let steps

    step1
      ? step2
          ? steps = (<span>Step 2 - Review your form!</span>)
          : steps = (<span>Step 1 - Fill out the form!</span>)
      : steps = (<span>Welcome {user.name}!</span>)

    return (
      <div className="submenu">
        <div className="container">
          <div className="submenucontent">
            <div className="title">
              {steps}
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

export default NavSub
