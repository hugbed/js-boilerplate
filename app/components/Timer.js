// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  hours: number;
  minutes: number;
  seconds: number;
};
export default class Timer extends React.Component<Props> {
  static formatTime(time: number) : string {
    return time < 10 ? ('0' + time) : ('' + time);
  }

  render() {
    let [hours, minutes, seconds] = [
      this.props.hours,
      this.props.minutes,
      this.props.seconds
    ].map((time: number) => Timer.formatTime(time));

    return(
      <div>{hours} : {minutes} : {seconds}</div>
    );
  }
}
