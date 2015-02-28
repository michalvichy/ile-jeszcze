'use strict';

(function(){
	var counter = new Counter('10 Sep 2016 13:00');
	counter.countdown();

	var proposal = new Date('6 aug 2014').getTime();
	var wedding = new Date('20 sep 2016').getTime();
	var today = new Date().getTime();

	var all = wedding - proposal;
	var done = today - proposal;

	var progress = (done * 100) / all;
	var width = progress.toFixed(2) + '%';

	$('.progress-bar').css('width', width);
	$('.progress-bar > span').html(width + ' Completed');
}());
