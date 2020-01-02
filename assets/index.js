import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/autoplay.js'
import AutoPause from './plugins/autoPause.js'

const video = document.querySelector('video')
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
})

const button = document.querySelector('#toggle')
const buttonMute = document.querySelector('#mute')

button.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => {
    console.error(err)
  })
  

}