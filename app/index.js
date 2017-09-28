import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  // example of babel plugin transform-class-properties
  handleClick = () => {
    console.log("Clicked!");
  };

  render() {
    return(
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}

window.onload = () => {
  ReactDOM.render(
    <div>
      <div>World!</div>
      <Button/>
    </div>,
    document.getElementById('root')
  );
}
