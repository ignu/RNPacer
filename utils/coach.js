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
    return this.elapsedSeconds/this.roundCount
  }

  get elapsedSeconds() {
    let start = this._startTime.utc().unix()

    return this.lastRound - start
  }

  get roundGoal() {
    return this.average
  }

  get lastRound() {
    let round = this._rounds[this._rounds.length -1]
    return round.utc().unix()
  }

  get remainingTime() {
    return this.lastRound
  }

  get remainingTime() {
    let nextGoal = this.lastRound + this.roundGoal
    return this.currentTime.utc().unix
  }

  reset() {
    this._rounds = []
    this._startTime = null
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
