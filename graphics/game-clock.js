(function () {
  'use strict';

  const gameTimer = document.getElementById('gameTimer');
  const roundText = document.getElementById('roundText');
  const gameTime = nodecg.Replicant('gameTime');
  const clockText = nodecg.Replicant('clockText');

  gameTime.on('change', newVal => {
    gameTimer.innerHTML = pad((Math.floor(newVal / 60)), 2) + ':'
      + pad((newVal - (Math.floor(newVal / 60) * 60)), 2);
  });

  clockText.on('change', newVal => {
    roundText.innerHTML = clockText.value;
  });

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  };

})();
