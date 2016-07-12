//import test from 'ava'
import test from 'ava'
import coachClass from '../utils/coach'
import sinon from 'sinon'
import moment from 'moment'

test('recordRound', t => {
  let coach = new coachClass()
  coach.start()
  coach._startTime = moment('2016-02-08 09:30:00')

  coach.recordRound(moment('2016-02-08 09:31:20'))
  coach.recordRound(moment('2016-02-08 09:31:40'))

  t.is(coach.roundCount, 2)

  t.is(coach.average, 50)
})
