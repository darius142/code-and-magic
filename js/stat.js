'use strict';

// var getMaxElement = function(arr) {	// max number function
// 	var max = -1;
// 	var maxIndex = -1;

// 	for (var i = 0; i < arr.length; i++) {
// 		var time = arr[i];
// 		if (time > max) {
// 			max = time;
// 			maxIndex = i;
// 		}
// 	}
// 	return max;
// };

window.renderStatistics = function(ctx, names, times) {
	var SCOREBOARD_WIDTH = 420;	//px
	var SCOREBOARD_HEIGHT = 270; //px
	var HISTOGRAM_HEIGHT = 150; //px
	var COLUMN_WIDTH = 40; //px
	var COLUMN_DISTANCE = 50; //px
	var COLUMN_COLOR_MY = 'rgba(255, 0, 0, 1)';
	var COLUMN_COLOR_PLAYERS = 'blue';
	var opacityRandom = function() {
		return Math.random().toFixed(1);
	};

	var max = -1;
	var maxIndex = -1;

	for (var i = 0; i < times.length; i++) {
		var time = times[i];
		if (time > max) {
			max = time;
			maxIndex = i;
		}
	}

	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black shadow
	ctx.fillRect(110, 20, 420, 270); // box shadow

	ctx.fillStyle = 'white';  // white
	ctx.strokeRect(100, 10, 420, 270); // main scoreboard
	ctx.fillRect(100, 10, 420, 270);
	
	ctx.fillStyle = '#000'; 
	ctx.font = '14px PT Mono';
	ctx.fillText('Ура вы победили!\nСписок результатов:', 130, 50);

	ctx.fillText('Худшее время:' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);

	var step = HISTOGRAM_HEIGHT / (max - 0);
	var barHeight = 20; //px ширина стовпця
	var indent = 40; //px відстань між стовпцями
	var initialX = 80; //px
	var initialY = 130; //px
	var lineHeight = 15; //px вистота тексту

	for (var i = 0; i < times.length; i++) {
	
		ctx.fillRect(initialY + indent * i, initialX , barHeight, times[i] * step);
		ctx.fillText(names[i], initialY + lineHeight + indent * i,  initialX + HISTOGRAM_HEIGHT);
		
		if (names[i] == 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)'
		} else {ctx.fillStyle = '#000';}

	}

	
	
};

