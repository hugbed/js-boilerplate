// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  text: string;
};
class Button extends React.Component<Props> {
  // example of babel plugin transform-class-properties
  handleClick = () => {
    console.log("Clicked!");
  };

  render() {
    return(
      <button onClick={this.handleClick}>{this.props.text}</button>
    );
  }
}

window.onload = () => {
  ReactDOM.render(
    <div>
      <div>World!</div>
      <Button text="Click me!"/>
    </div>,
    document.getElementById('root')
  );
}
