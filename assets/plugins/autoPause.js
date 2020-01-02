class AutoPause {
  constructor() {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
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
  }

  handlerIntersection(entries) {
    const entry = entries[0]
    console.log(entry)

    if (entry.intersectionRatio >= this.threshold) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
