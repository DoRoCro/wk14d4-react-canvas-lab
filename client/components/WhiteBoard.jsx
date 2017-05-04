import React from 'react'

class WhiteBoard extends React.Component {
  componentDidMount () {
    this.canvas = document.getElementById('canvas')
    this.props.setContext(this.canvas.getContext('2d'))
  }

  componentWillUpdate() {
    console.log('willUpdate called');
  }

  componentDidUpdate() {
    console.log('didUpdate' ,this.props.context );
   // this.drawCircle()
  }

  drawCircle (event) {
  //  if (this.props.context !== null) {
      this.props.setContext(this.canvas.getContext('2d'))
      console.log('start drawing circle', this.props);
      this.props.context.beginPath()
      this.props.context.arc(event.x, event.y, 5, 0, 2 * Math.PI)
      this.props.context.stroke()
  //  }
  }

  render () {
    return (
      <canvas id='canvas' width='600' height='400' onMouseMove={this.drawCircle.bind(this)} />
    )
  }
}

export default WhiteBoard
