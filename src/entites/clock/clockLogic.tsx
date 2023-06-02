class ClockLogic {
  private timerId: NodeJS.Timeout | null = null

  startClock(callback: (time: string) => void) {
    this.timerId = setInterval(() => {
      const time = this.getCurrentTime()
      callback(time)
    }, 1000)
  }

  stopClock() {
    if (this.timerId) {
      clearInterval(this.timerId)
    }
  }

  getCurrentTime() {
    const date = new Date()
    const hours = this.formatTimeUnit(date.getHours())
    const minutes = this.formatTimeUnit(date.getMinutes())
    const seconds = this.formatTimeUnit(date.getSeconds())
    return `${hours}:${minutes}:${seconds}`
  }

  formatTimeUnit(unit: number) {
    return unit < 10 ? `0${unit}` : unit.toString()
  }
}

export default ClockLogic
