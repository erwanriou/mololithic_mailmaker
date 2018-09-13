import React, { Fragment }from 'react'
import { connect } from 'react-redux'

import NavSub from '../layout/NavSub'

class Campaign extends React.Component {
  render() {
    const  { user } = this.props.auth
    return (
      <Fragment>
        <NavSub user={user}/>
        <main className='dashboard'>
          <div className="opacity">
            <div className="container">
              HELLO
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  survey: state.survey,
})

export default connect(mapStateToProps)(Campaign)
