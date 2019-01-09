//import hello from './hello';
import hello from './hello';
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';

//hello();

ReactDom.render(
  <h1>Hello,Front2!</h1>,
  document.getElementById('root')
);

function draggable(target) {
  target.onmousedown = function() {
    document.onmousemove = mouseMove;
  };
  document.onmouseup = function() {
    document.onmousemove = null;
  };
  function mouseMove(e) {
    var event = e ? e : window.event;
    target.style.top = event.clientY + 'px';
    target.style.left = event.clientX + 'px';
  }
}
draggable(document.getElementById('a1'));
draggable(document.getElementById('b1'));
draggable(document.getElementById('c1'));
