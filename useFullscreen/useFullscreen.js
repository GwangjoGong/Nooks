export const useFullscreen = (onFullscreen) => {
  const element = useRef()
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen()
      if (onFullscreen && typeof onFullscreen === 'function') {
        onFullscreen()
      }
    }
  }

  const exitFullscreen = () => {
    document.exitFullscreen()
  }

  return { element, triggerFullscreen, exitFullscreen }
}
