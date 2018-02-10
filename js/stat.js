'use strict';

var SCOREBOARD_WIDTH = 420;
var SCOREBOARD_HEIGHT = 270;
var SCOREBOARD_X = 100;
var SCOREBOARD_Y = 10;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var GAP = 10;

var BAR_OFFSET = 240;
var NAME_POSITION = 260;

var renderScoreboard = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, SCOREBOARD_WIDTH, SCOREBOARD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getStatus = function (times, players) {
  var STATUS = false;
  var SPEED_OF_WINNER = getMaxElement(times);
  var INDEX_OF_WINNER = times.indexOf(SPEED_OF_WINNER);
  for (var i = 0; i < times.length; i += 1) {
    if (players[INDEX_OF_WINNER] === 'Вы') {
      STATUS = true;
    }
  }
  return STATUS ? 'Ура, вы победили!' : 'Печалька, вы проиграли';
};

window.renderStatistics = function (ctx, players, times) {
  renderScoreboard(ctx, SCOREBOARD_X + GAP, SCOREBOARD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderScoreboard(ctx, SCOREBOARD_X, SCOREBOARD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = ('16px PT Mono');
  ctx.fillText(getStatus(times, players), SCOREBOARD_X + GAP + GAP, 40);
  ctx.fillText('Список пользователей:', SCOREBOARD_X + GAP + GAP, 60);
  for (var i = 0; i < players.length; i += 1) {
    var MAX_TIME = getMaxElement(times);
    var CURRENT_BAR_HEIGHT = BAR_HEIGHT / MAX_TIME * times[i];
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'blue';
    }
    ctx.fillText(Math.floor(times[i]), SCOREBOARD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_OFFSET - CURRENT_BAR_HEIGHT - GAP);
    ctx.fillText(players[i], SCOREBOARD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, NAME_POSITION);
    ctx.fillRect(SCOREBOARD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_OFFSET - CURRENT_BAR_HEIGHT, BAR_WIDTH, CURRENT_BAR_HEIGHT);
  }
};