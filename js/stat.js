'use strict';
(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var POSITION_X = 100;
  var POSITION_Y = 10;
  var GAP = 10;
  var FONT_GAP = 15;
  var GISTAGRAMM_HEIGHT = 150;
  var GISTAGRAMM_WIDTH = 40;
  var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  var colorGistagramm = ['#FC0D1B', '#020E86', '#9999A1', '#666780'];
  var times = [2805, 4025, 1244, 1339];
  var colorText = '#000';

  // Сортировка массива в случайном порядке.
  var randArr = function (data) {
    data.sort(window.compareRandom);
    return data;
  };
  randArr(names);
  randArr(times);
  randArr(colorGistagramm);
  // Отрисовка  фона и тени статистики.

  var renderCloud = function (ctx, positionX, positionY, colorBg) {

    ctx.fillStyle = colorBg;
    ctx.fillRect(positionX, positionY, CLOUD_WIDTH, CLOUD_HEIGHT);

  };

  // (начало) Статистика из четырех участников.

  window.renderStatistics = function (ctx) {
    renderCloud(ctx, POSITION_X + GAP, POSITION_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, POSITION_X, POSITION_Y, '#fff');
    ctx.fillStyle = colorText;
    ctx.fillText('Ура Вы победили!', (GAP * 2) + POSITION_X, POSITION_Y * 4);
    ctx.fillText('Список результатов:', (GAP * 2) + POSITION_X, POSITION_Y * 6);
    ctx.font = '16px PT Mono';

    var renderItems = function () {
      var x = 1;
      for (var i = 0; i < names.length; i++) {

        var gistagramHeight = (GISTAGRAMM_HEIGHT * 1000) / times[i];
        var positionHeight = CLOUD_HEIGHT - (GAP * 3);

        ctx.fillStyle = colorText;
        ctx.fillText(times[i], (POSITION_X * x) + (GAP * x) + FONT_GAP, positionHeight + (gistagramHeight - GISTAGRAMM_HEIGHT - FONT_GAP), GISTAGRAMM_WIDTH, FONT_GAP);
        ctx.fillStyle = colorGistagramm[i];
        ctx.fillRect((POSITION_X * x) + (GAP * x) + FONT_GAP, positionHeight, GISTAGRAMM_WIDTH, gistagramHeight - GISTAGRAMM_HEIGHT);
        ctx.fillStyle = colorText;
        ctx.fillText(names[i], (POSITION_X * x) + (GAP * x) + FONT_GAP, positionHeight + FONT_GAP, GISTAGRAMM_WIDTH, FONT_GAP);
        x++;
      }

    };
    renderItems();
  };
})();