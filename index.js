const $video = document.querySelector('#video');
const $play= document.querySelector('#play');
const $pausa = document.querySelector('#stop');
const $mas10 = document.querySelector('#ava');
const $menos10 = document.querySelector('#reg');

$play.addEventListener('click',  handlePlay)
$pausa.addEventListener('click',  handlePause)
$mas10.addEventListener('click',  handleMas10)
$menos10.addEventListener('click',  handleMenos10)



function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pausa.hidden = false;
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pausa.hidden = true;
}


function handleMas10() {
    $video.currentTime =  $video.currentTime + 10;
  
}
function handleMenos10() {
    $video.currentTime =  $video.currentTime - 10;
  
  
}

const $progreso = document.querySelector('#progres');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);


function handleLoaded() {
    $progreso.max = $video.durations
}

function handleTimeUpdate() {
    $progreso.value = $video.currentTime
}

$progreso.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime = $progreso.value
}

const $videoContainer = document.querySelector('#video-container');
const $botones = document.querySelector('#botones');



$videoContainer.addEventListener('mouseenter', () => {
    showControls();
    startTimer();
});

$videoContainer.addEventListener('mouseleave', () => {
    hideControls();
    resetTimer();
});

function showControls() {
    $botones.classList.remove('hidden');
}

function hideControls() {
    $botones.classList.add('hidden');
}

