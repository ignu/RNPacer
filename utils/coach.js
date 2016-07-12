import test from 'ava'
import moment from 'moment'

export default class Coach {
  constructor() {
    this._rounds = []
  }

  get roundCount() {
    return this._rounds.length
  }

  get average() {
    let lastRound = this._rounds[this._rounds.length -1].utc().unix()
    let start = this._startTime.utc().unix()

    return (lastRound - start)/this.roundCount
  }

  get startTime() {
    return this._startTime
  }

  get currentTime() {
    return moment()
  }

  start() {
    this._startTime = moment()
    this._rounds = []
  }

  recordRound(time) {
    this._rounds.push(time || this.currentTime)
  }
}
