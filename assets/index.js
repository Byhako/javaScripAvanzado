import MediaPlayer from './mediaPlayer.js'
// import AutoPlay from './plugins/autoplay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({
  el: video,
  plugins: [
    // new AutoPlay()
  ]
})

const button = document.querySelector('#toggle')
const buttonMute = document.querySelector('#mute')

button.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()