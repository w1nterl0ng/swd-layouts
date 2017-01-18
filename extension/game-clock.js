'use strict';

let interval;
let count;
let t;

module.exports = function (nodecg) {
  const gameTime = nodecg.Replicant('gameTime');

  function countdown() {
    if (gameTime.value === 0) {
      console.log('time is up');
      clearTimeout(t);
    } else {
      gameTime.value--;
      t = setTimeout(countdown, 1000);
    }
  }

  function stopTime() {
    clearTimeout(t);
  }

  nodecg.listenFor('startTime', countdown);
  nodecg.listenFor('stopTime', stopTime);
};
