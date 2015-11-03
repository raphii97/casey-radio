//UI
var ui = {};
ui.btn = document.getElementById('btn');

//SC Widget
var sc = {};
sc.iframe = document.querySelector("iframe");

//create widget player
sc.widget = SC.Widget(sc.iframe);

//get number of songs
sc.widget.bind(SC.Widget.Events.READY, function(){
	sc.widget.getSounds(function(sounds){
		sc.sounds = sounds.length;
	});
});

//play another random song
var play_random = function(){
	sc.widget.skip(Math.floor(Math.random() * sc.sounds));
};
//when a song ends
sc.widget.bind(SC.Widget.Events.FINISH, function(){
	play_random();
});
//when clicking the button
ui.btn.addEventListener("click", function(){
	play_random();
});