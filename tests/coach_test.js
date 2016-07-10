//import test from 'ava'
import test from 'ava'
import coachClass from '../utils/coach'

test('recordRound', t => {
  let coach = new coachClass()
  //coach.stub!(:get_time, return: @start)
  coach.start()
  coach.recordRound()
  t.is(coach.roundCount, 2)
  t.is(coach.average, 15)
})
