import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as $ from 'jquery';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

const navbar1 = document.querySelector('#nav1');
const navbar2 = document.querySelector('#nav2')
const navbars = document.querySelector('nav');


window.onscroll = function () {
  if(navbar1) {
    renderIndexHTMLNav()
  }else {
    renderStickyNavBar(navbar2)
  }
}

function renderStickyNavBar(navbar2, navbar1){
  if (window.pageYOffset >= navbars.offsetTop) {
        navbar2.classList.add("sticky-top");
        navbar1.classList.add("sticky-top");
      } else {
        navbar2.classList.remove("sticky-top");
        navbar1.classList.remove("sticky-top");
      }
}
function renderIndexHTMLNav() {
  renderStickyNavBar(navbar2, navbar1);
// set mainbottom to determine coordinate of #about-page1 (grey div // after navbar) 
var mainbottom = $("#showcase").offset().top;
  $(window).on('scroll', function () {

      // we round here to reduce a little workload
      var stop = Math.round($(window).scrollTop());

      if (stop > mainbottom) {
          navbar1.classList.add("hidden");
          navbar2.classList.remove("hidden");
      } else {
          navbar2.classList.add("hidden");
          navbar1.classList.remove("hidden");
      }

  });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


