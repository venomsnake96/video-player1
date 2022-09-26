const $video = document.querySelector ('#video')
    const $play = document.querySelector ('#play')
    const $pause = document.querySelector ('#pause')
    const $backward = document.querySelector ('#backward')
    const $forward= document.querySelector ('#forward')
    
    $play.addEventListener ('click', handleplay)
    $pause.addEventListener('click', handlepause)
    $backward.addEventListener('click', handlebackward)
    $forward.addEventListener('click', handleforward)
    
    function handleplay () {
        $video.play()
        $play.hidden = true
        $pause.hidden = false
        console.log('le diste click al boton de play')
    }
    
    function handlepause () {
        $video.pause()
        $pause.hidden = true
        $play.hidden = false 
        console.log('le diste click al boton de pausa')
    }    
    

   function handlebackward() {
    $video.currentTime -=10
    console.log ('retrocede 10 segundos', $video.currentTime) 
}

   function handleforward () {
    $video.currentTime = $video.currentTime +10
    console.log('avanza 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener ('loadedmetadata', handleloaded)
$video.addEventListener ('timeupdate', handletiemupdate)

function handleloaded () {
    $progress.max = $video.duration
    console.log ('ha cargado mi video', $video.duration)

}

function handletiemupdate () {
 $progress.value = $video.currentTime 
    //console.log('tiempo actual', $video.currentTime)//
}

$progress.addEventListener('input', handleinput)

function handleinput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}