//import test from 'ava'
import test from 'ava'
import coachClass from '../utils/coach'
import sinon from 'sinon'
import moment from 'moment'

const getTime = (seconds) => {
  let startDate = moment('2016-02-08 09:30:00')
  return startDate.add(seconds, "seconds");
}

test('recordRound', t => {
  let coach = new coachClass()
  coach.start()
  coach._startTime = getTime(0)

  coach.recordRound(getTime(80))
  coach.recordRound(getTime(100))

  t.is(coach.roundCount, 2)

  t.is(coach.average, 50)
})

test('reset', t => {
  let coach = new coachClass()

  coach.start()
  coach.recordRound()
  coach.reset()

  t.is(coach.roundCount, 0)
})

test('with no goal set, the goal is the average and knows remaining time', t => {
  let coach = new coachClass()
  coach._startTime = getTime(0)
  coach._rounds = [getTime(100), getTime(200)]

  t.is(coach.roundGoal, 100)

  //coach.currentTime = getTime(210)
  //t.is(coach.remainingTime, 90)
})

//test('remaining time', t => {
//  @coach.mock!(:get_time, return: @start + 30)
//  @coach.round_goal.should == 60
//
//  @coach.remaining_seconds_in_round.should == 30
//  @coach.remaining_percent.should == 0.5
//})

//
//  describe "remaining time" do
//    before do
//      @coach.update_settings({
//        goal: "10",
//        minutes: "10"
//      })
//
//    end
//
//    it "can calculate the remaining time and percent done" do
//      @coach.mock!(:get_time, return: @start + 30)
//      @coach.round_goal.should == 60
//
//      @coach.remaining_seconds_in_round.should == 30
//      @coach.remaining_percent.should == 0.5
//    end
//  end
//
//  describe "round_goal" do
//    context "given a goal and a time" do
//      before do
//        @coach.update_settings({
//          goal: "10",
//          minutes: "10"
//        })
//      end
//
//      it "calculates the speed you need to reach the goal" do
//        @coach.round_goal.should == 60
//
//        5.times { |n| @coach.record_round }
//        @coach.last_round_time =  60 * 9
//
//        # 5 rounds in 60 seconds
//        @coach.round_goal.to_i.should == 12
//
//        5.times { |n| @coach.record_round }
//        @coach.last_round_time =  60 * 9
//        @coach.round_goal.to_i.should == (60*9)/10
//      end
//    end
//  end
//
//  describe "record_round" do
//    before do
//      @coach.stub!(:get_time, return: @start)
//      @coach.start!
//
//      @coach.record_round
//      @coach.stub!(:get_time, return: @start + 29.3)
//      @coach.record_round
//    end
//
//    it "increments the count" do
//      @coach.rounds_count.should == 2
//    end
//
//    it "records the round time" do
//      @coach.average.should == 15
//    end
//  end
//end
