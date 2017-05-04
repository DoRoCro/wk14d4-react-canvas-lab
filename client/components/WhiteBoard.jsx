import React from 'react'

class WhiteBoard extends React.Component {
  componentDidMount () {
    this.canvas = document.getElementById('canvas')
    this.props.setContext(this.canvas.getContext('2d'))
  }

  componentDidUpdate() {
    console.log('didUpdate' ,this.props.context );
    this.drawCircle()
  }

  drawCircle () {
    if (this.props.context !== null) {
      console.log('start drawing circle');
      this.props.context.beginPath()
      this.props.context.arc(10, 10, 5, 0, 2 * Math.PI)
      this.props.context.stroke()
    }
  }

  render () {
    return (
      <canvas id='canvas' width='600' height='400' />
    )
  }
}

export default WhiteBoard
