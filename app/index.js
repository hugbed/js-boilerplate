const React = require('react');
const ReactDOM = require('react-dom');

window.onload = function(){
  ReactDOM.render(
    React.createElement('div', null, 'World!'),
    document.getElementById('root')
  );
}
