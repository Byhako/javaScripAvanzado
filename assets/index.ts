import MediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/autoplay';
import AutoPause from './plugins/autoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
});

const button: HTMLElement = document.querySelector('#toggle');
const buttonMute: HTMLElement = document.querySelector('#mute');

button.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => {
    console.error(err)
  })
}
