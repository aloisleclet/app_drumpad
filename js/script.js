let audiochannels = [];

//init channels
for (i = 0; i < channel_max; i++)
{
		audiochannels[i] = [];
		audiochannels[i]['channel'] = new Audio();
		audiochannels[i]['finished'] = -1;
}


function play(instrument)
{
	for (i = 0; i < audiochannels.length; i++)
  {
		let now = new Date();

		if (audiochannels[i]['finished'] < now.getTime())
    {
			audiochannels[i]['finished'] = now.getTime() + document.getElementById('audio_'+instrument).duration * 1000;

			audiochannels[i]['channel'].src = document.getElementById('audio_'+instrument).src;
			audiochannels[i]['channel'].load();
			audiochannels[i]['channel'].play();
			return ;
		}

	}
}




//kick
document.querySelector('#kick').addEventListener('click', function () {
  play('kick');
});

//snare
document.querySelector('#snare').addEventListener('click', function () {
  play('snare');
});

//hihat
document.querySelector('#hihat').addEventListener('click', function () {
  play('hihat');
});

//gun
document.querySelector('#gun').addEventListener('click', function (){
  play('gun');
});


//crash
document.querySelector('#crash').addEventListener('click', function () {
  play('crash');
});

//tom
document.querySelector('#tom').addEventListener('click', function () {
  play('tom');
});

//openhat
document.querySelector('#openhat').addEventListener('click', function () {
  play('openhat');
});

//sample
document.querySelector('#sample').addEventListener('click', function () {
  play('sample');
});

