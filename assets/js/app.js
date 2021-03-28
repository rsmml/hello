// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"
// introJs().setOptions({
//   steps: [
//   {
//     element: document.querySelector('#step1'),
//     intro: 'This step focuses on an image'
//   },
//   {
//     title: 'Farewell!',
//     element: document.querySelector('#step2'),
//     intro: 'And this is our final step!'
//   }]
// }).start();
console.log(window.location.href)
if (window.location.href === 'http://localhost:4000/') {
 var intro = introJs();
   intro.setOptions({
    showStepNumbers: false,
    doneLabel: "Next page",
    steps: [
    {
      title: 'Welcome to Kurabu!!',
      nextLabel: 'Start tour',
      intro: '<img src="https://uploads-ssl.webflow.com/5da4b024b9d537fe4b54e1d6/60269709fe411c2c6074e33e_DSC07797-removebg-preview-min.png" >',
    },
    {
        element: '#step1',
        intro: "I'm the Step 1"
    },
    {
        element: '#step2',
        intro: "Ok, <i>wasn't</i> that fun?, I hate to be the second",
        position: 'bottom'
    },

    ]
   });

  intro.start().oncomplete(function() {
      window.location.href = 'test?multipage=true';
  });
}

if (window.location.href === 'http://localhost:4000/test?multipage=true') {
  var intro = introJs();
   intro.setOptions({
    showStepNumbers: false,
    doneLabel: "Next page",
    steps: [
    {
        element: '#step3',
        intro: "What about me? I am in another page"
    },
    {
        element: '#step4',
        intro: "At least you are the first here!",
        position: 'bottom'
    },

    ]
   });

  intro.start().oncomplete(function() {
      window.location.href = 'http://localhost:4000/?multipage=true';
  });
}

if (window.location.href === 'http://localhost:4000/?multipage=true') {
 var intro = introJs();
   intro.setOptions({
    showStepNumbers: false,
    doneLabel: "Finish",
    steps: [
    {
        element: '.step5',
        intro: "Did you like it?"
    },
    {
        element: '.step6',
        intro: '<img src="https://i.giphy.com/media/ujUdrdpX7Ok5W/giphy.webp" onerror="this.onerror=null;this.src=\'https://i.giphy.com/ujUdrdpX7Ok5W.gif\';" alt="">',
        position: 'bottom'
    },

    ]
   });

  intro.start()
}






// Instance the tour
// var tour = new Tour({
//   steps: [
//   {
//     element: "#step1",
//     title: "Title of my step",
//     content: "Content of my step"
//   },
//   {
//     element: "#step2",
//     title: "Title of my step",
//     content: "Content of my step"
//   }
// ]});

// // Initialize the tour
// tour.init();

// // Start the tour
// tour.start();
