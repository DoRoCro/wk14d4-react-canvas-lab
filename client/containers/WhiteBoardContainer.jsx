import React from 'react'
import WhiteBoard from '../components/WhiteBoard'
import io from 'socket.io-client'

export default class WhiteBoardContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      context: null
    }

    this.socket = io('http://localhost:3000')
    this.socket.on('draw', this.drawSomething.bind(this))
  }

  drawSomething(object) {

  }

  setContext (context) {
    console.log('setContext started',context)
    this.setState({
      context: context
    })
  }

  render () {
    return (
      <div>
        <WhiteBoard context={this.state.context} setContext={this.setContext.bind(this)} />
      </div>
    )
  }
}
