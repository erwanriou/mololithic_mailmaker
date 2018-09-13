import React from 'react'

class Feedback extends React.Component {
  render() {
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <h1>Thank you for voting {this.props.match.params.choice}!</h1>
              { this.props.match.params.choice === 'yes'
                  ? <h2>We appreciated your positive feedback</h2>
                  : <h2>We appreciated your honnest feedback</h2>
              }
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Feedback
