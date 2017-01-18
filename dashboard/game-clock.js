(function () {
  'use strict';

  const startingTime = document.getElementById('startingTime');
  const startTime = document.getElementById('startTime');
  const stopTime = document.getElementById('stopTime');
  const resetTime = document.getElementById('resetTime');
  const currentTime = document.getElementById('currentTime');
  const clockSubText = document.getElementById('clockSubText');
  const gameTime = nodecg.Replicant('gameTime', { defaultValue: 2100 });
  const clockText = nodecg.Replicant('clockText');

  clockText.on('change', newVal => {
    clockSubText.value = clockText.value;
  });

  startTime.addEventListener('click', () => {
    nodecg.sendMessage('startTime');
  });

  stopTime.addEventListener('click', () => {
    nodecg.sendMessage('stopTime');
  });

  resetTime.addEventListener('click', () => {
    // stop current timer
    nodecg.sendMessage('stopTime');

    // Convert Minutes to seconds
    gameTime.value = startingTime.value * 60;
  });

  gameTime.on('change', newVal => {
    currentTime.innerHTML = pad((Math.floor(newVal / 60)), 2) + ':'
      + pad((newVal - (Math.floor(newVal / 60) * 60)), 2);
  });

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  updateClockText.addEventListener('click', () => {
    clockText.value = clockSubText.value;
  });

})();
