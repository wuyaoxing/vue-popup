export const listenerResize = (reposition) => {
  window.addEventListener('resize', reposition)
}

export const unListenerResize = (reposition) => {
  window.removeEventListener('resize', reposition)
}

export const calculate = (element) => {
  const viewportRect = { width: window.innerWidth, height: window.innerHeight }
  const clientRect = element.getBoundingClientRect()
  const popupRect = document.getElementsByClassName('vue-popup')[0]
  // const wW = viewportRect.width
  const wH = viewportRect.height
  const cW = clientRect.width
  const cH = clientRect.height
  const cT = clientRect.top
  const pW = popupRect.firstChild.offsetWidth
  const pH = popupRect.firstChild.offsetHeight

  // const cR = clientRect.right
  // const cB = clientRect.bottom
  const cL = clientRect.left

  const top = cT + cH > wH - pH ? cT - pH - 5 : cT + cH + 5
  const left = cL + cW > 45 + pW ? cL + cW - pW - 2 : cL + 2
  // const top = cT + cH < wH - pH ? cT : (wH - pH) / 2 + pH
  // const left = cL + cW > 45 + pW ? cL + cW : (wW - pW) / 2 + pW
  // const left = wW - cL
  return {
    top,
    left
  }
}
