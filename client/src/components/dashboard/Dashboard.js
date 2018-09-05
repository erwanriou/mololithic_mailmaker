import React, { Fragment } from 'react'
import Payments from '../transaction/Payments'

class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="submenu">
          <div className="container">
            <div className="transaction">
              <span>Amout that you have</span>
              <Payments />
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

export default Dashboard
