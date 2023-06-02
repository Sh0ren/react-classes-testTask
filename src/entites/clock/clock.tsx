import React from "react"
import ClockLogic from "./clockLogic"

interface ClockProps {}

interface ClockState {
  time: string
}

class Clock extends React.Component<ClockProps, ClockState> {
  private clockLogic: ClockLogic

  constructor(props: ClockProps) {
    super(props)
    this.state = {
      time: "",
    }
    this.clockLogic = new ClockLogic()
  }

  componentDidMount() {
    this.clockLogic.startClock((time: string) => {
      this.setState({ time })
    })
  }

  componentWillUnmount() {
    this.clockLogic.stopClock()
  }

  render() {
    const { time } = this.state

    return (
      <div>
        <h2>{time}</h2>
      </div>
    )
  }
}

export default Clock
