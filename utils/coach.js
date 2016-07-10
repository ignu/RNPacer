import test from 'ava'

export default class Coach {
  constructor() {
    this.rounds = 0
  }

  get roundCount() {
    return this.rounds
  }

  get average() {
    return 0
  }

  start() {
    this.rounds = 1
    console.log('starting', this);
  }

  recordRound() {
    this.rounds++
    console.log('round record', this);
  }
}
