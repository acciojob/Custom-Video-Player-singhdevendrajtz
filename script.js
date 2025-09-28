/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.addEventListener('timeupdate',function(){
	let duration=(video.duration);
	let current_time=video.currentTime
	let=prog_percentage=(current_time/duration)*100;
	prog_percentage=Math.round(prog_percentage)
	//console.log(prog_percentage)
	//progressBar.style.flexBasis=`{prog_percentage}%`;
	progressBar.style.flex=prog_percentage/100;
	})
toggle.addEventListener('click',function()
						{
						autoplays();
						})
function autoplays()
{
	if(video.paused)
							{
								video.play();
								toggle.innerHTML="❚ ❚"
								
							}
							else if(video.paused==false)
							{
								video.pause();
								
								toggle.innerHTML="►"
							}
}
ranges[0].addEventListener('change',function(){
video.volume=ranges[0].value;
})
ranges[1].addEventListener('change',function(){
video.playbackRate=ranges[1].value;
})

skipButtons[0].addEventListener('click',function(){
video.currentTime=video.currentTime-10;
})
skipButtons[1].addEventListener('click',function(){
video.currentTime=video.currentTime+25;
})

