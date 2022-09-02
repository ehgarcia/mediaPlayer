

const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $video = document.querySelector('#video')
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handelLoaded)
$video.addEventListener('timeupdate', handelTimeUpdate)
$progress.addEventListener('input', handleInput)

function handlePlay (){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause (){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

function handleBackward(){
    $video.currentTime -= 10
    console.log($video.currentTime)
}

function handleForward (){
    $video.currentTime += 10
    console.log($video.currentTime)
}

function handelLoaded (){
   $progress.max = $video.duration
}
function handelTimeUpdate (){
    $progress.value = $video.currentTime
}

function handleInput (){
    $video.currentTime = $progress.value
}