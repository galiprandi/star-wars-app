/**
 * useSwipe custom hook
 * Detect swipe left/right gestures
 *
 * Usage:
 *  const { swipe } = useSwipe()
 *
 * On HTML Element catch events:
 *    onTouchStart={evt => swipe(evt, callback)}
 *    onTouchEnd={evt => swipe(evt, callback)}
 *
 * callback: This is a function that get direction of gesture
 *
 * Author: Germán Aliprandi
 */

let startPosition = -1
export const useSwipe = () => {
  const swipe = (evt: React.TouchEvent, callback: Function) => {
    const threshold = evt.changedTouches[0].screenX / 4
    const currentPosition = evt.changedTouches[0].clientX
    if (evt.type === 'touchstart') startPosition = currentPosition
    if (evt.type === 'touchend') {
      const difference = currentPosition - startPosition
      if (Math.abs(difference) > threshold) {
        if (difference < threshold) callback('left')
        if (difference > threshold * -1) callback('right')
      }
    }
  }
  return { swipe }
}
