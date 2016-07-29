import test from 'ava'
import moment from 'moment'

export default class Coach {
  constructor(currentTimeFunc) {
    this._rounds = []
    const defaultCurrentTime = () => moment()
    this._currentTimeFunc = currentTimeFunc || defaultCurrentTime
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
    let nextGoal = this.lastRound + this.roundGoal
    return nextGoal - this.currentTime.utc().unix()
  }

  reset() {
    this._rounds = []
    this._startTime = null
  }

  get startTime() {
    return this._startTime
  }

  get currentTime() {
    return this._currentTimeFunc()
  }

  start() {
    this._startTime = moment()
    this._rounds = []
  }

  recordRound(time) {
    this._rounds.push(time || this.currentTime)
  }
}
