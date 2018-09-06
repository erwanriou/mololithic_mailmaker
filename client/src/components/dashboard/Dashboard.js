import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Payments from '../transaction/Payments'

class Dashboard extends React.Component {
  render() {
    const  { user } = this.props.auth
    return (
      <Fragment>
        <div className="submenu">
          <div className="container">
            <div className="submenucontent">
              <div className="title">
                <span>Welcome {user.name}!</span>
              </div>
              <div className="transaction">
                <span>Amout that you have</span>
                <Payments />
              </div>
            </div>

          </div>
        </div>
        <main className='dashboard'>
         DASHBOARD HERE
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Dashboard)
