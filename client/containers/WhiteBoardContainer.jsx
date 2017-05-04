import React from 'react'
import WhiteBoard from '../components/WhiteBoard'

export default class WhiteBoardContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      context: null
    }
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
