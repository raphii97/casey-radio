//UI
var ui = {};
ui.btn = document.getElementById('btn');

//SC Widget
var sc = {};
sc.iframe = document.querySelector("iframe");

//when iframe is ready
sc.iframe.addEventListener("load", function(){
	//create widget player
	sc.widget = SC.Widget(sc.iframe);

	//get number of songs
	sc.widget.bind(SC.Widget.Events.READY, function(){
		sc.widget.getSounds(function(sounds){
			sc.sounds = sounds.length;
		});
	});

	//play another random song
	var random = function(){
		sc.widget.skip(Math.floor(Math.random() * sc.sounds));
	};
	//when a song ends
	sc.widget.bind(SC.Widget.Events.FINISH, function(){
		random();
	});
	//when clicking the button
	ui.btn.addEventListener("click", function(){
		random();
	});
});