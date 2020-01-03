import MediaPlayer from '../mediaPlayer'

class AutoPause {
  private threshold: number;
  private player: MediaPlayer;

  constructor() {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player) {
    this.player = player
    const observer = new IntersectionObserver(
      this.handlerIntersection,
      {
        threshold: this.threshold
      }
    )
    observer.observe(this.player.media)
    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0]

    if (entry.intersectionRatio >= this.threshold) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible'

    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
