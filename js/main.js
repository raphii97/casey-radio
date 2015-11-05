//UI
var ui = {};
ui.btn = document.getElementById('btn');
ui.title = document.getElementById('title');
ui.loading = document.getElementById('loading');



//SoundCloud widget
var sc = {};
sc.iframe = document.querySelector("iframe");

//create widget player
sc.player = SC.Widget(sc.iframe);


//when widget is ready
sc.player.bind(SC.Widget.Events.READY, function(){
	sc.player.getSounds(function(songs){
		//get number of songs
		sc.songs = songs.length;

		//remove loading screen
		loading.className = "remove"
	});
});

//display current song
sc.player.bind(SC.Widget.Events.PLAY, function(){
	sc.player.getCurrentSound(function(song){
		title.innerHTML = song.title;
	});
});


//play another random song
sc.play_random = function(){
	sc.player.skip(Math.floor(Math.random() * sc.songs));
};

//when a song ends play a random one
sc.player.bind(SC.Widget.Events.FINISH, function(){
	sc.play_random();
});

//toggle pause or play random song
ui.click = function(){
	sc.player.isPaused(function(paused){
		paused? sc.play_random() : sc.player.pause();
	});
};


//event listeners for clicking on casey
ui.btn.addEventListener("click", ui.click);
ui.btn.addEventListener("touchstart", function(e){
	e.preventDefault();
	ui.click();
});
