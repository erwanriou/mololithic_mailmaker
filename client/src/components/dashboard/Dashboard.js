import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
                <span><strong>{user.credits}</strong> credits</span>
                <Payments />
              </div>
            </div>
          </div>
        </div>
        <main className='dashboard'>
          <div className="opacity">
            <div className="container">
              <Link className='createsurvey' to='/dashboard/new'>
                <i className="fas fa-pen"></i>
                <div className='content'>
                  <h2>New Survey</h2>
                  <p>Click here to create a new marketing email campaign</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Dashboard)
