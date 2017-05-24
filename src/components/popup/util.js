export const listenerResize = (reposition) => {
  window.addEventListener('resize', reposition)
}

export const unListenerResize = (reposition) => {
  window.removeEventListener('resize', reposition)
}

export const calculate = (element, placement) => {
  const viewportRect = { width: window.innerWidth, height: window.innerHeight }
  const clientRect = element.getBoundingClientRect()
  const popupRect = document.getElementsByClassName('vue-popup')[0]
  const { width: wW, height: wH } = viewportRect
  const { width: cW, height: cH, top: cT, left: cL } = clientRect
  const { offsetWidth: pW, offsetHeight: pH } = popupRect.firstChild

  const placementMap = {
    top: {
      top: cT - pH - 5 > 10 ? cT - pH - 5 : cT + cH + 5,
      left: cL - (pW - cW) / 2 > 45 ? cL - (pW - cW) / 2 : (wW - pW) / 2
    },
    topStart: {
      top: cT - pH - 5 > 10 ? cT - pH - 5 : cT + cH + 5,
      left: cL + pW > wW ? cL + cW - pW : cL
    },
    topEnd: {
      top: cT - pH - 5 > 10 ? cT - pH - 5 : cT + cH + 5,
      left: cL + cW > 45 + pW ? cL + cW - pW : (wW - pW) / 2
    },
    right: {
      top: cT - (pH - cH) / 2 > 45 ? cT - (pH - cH) / 2 : cT,
      left: wW - (cL + cW + 5) > pW + 10 ? cL + cW + 5 : cL - pW - 5
    },
    rightStart: {
      top: cT + cH > wH - pH ? cT + cH - pH : cT,
      left: wW - (cL + cW + 5) > pW + 10 ? cL + cW + 5 : cL - pW - 5
    },
    rightEnd: {
      top: cT + cH - pH > 45 ? cT + cH - pH : cT,
      left: wW - (cL + cW + 5) > pW + 10 ? cL + cW + 5 : cL - pW - 5
    },
    bottom: {
      top: cT + cH > wH - pH ? cT - pH - 5 : cT + cH + 5,
      left: cL - (pW - cW) / 2 > 45 ? cL - (pW - cW) / 2 : (wW - pW) / 2
    },
    bottomStart: {
      top: cT + cH > wH - pH ? cT - pH - 5 : cT + cH + 5,
      left: cL + pW > wW ? cL + cW - pW : cL
    },
    bottomEnd: {
      top: cT + cH > wH - pH ? cT - pH - 5 : cT + cH + 5,
      left: cL + cW > 45 + pW ? cL + cW - pW : (wW - pW) / 2
    },
    left: {
      top: cT - (pH - cH) / 2 > 45 ? cT - (pH - cH) / 2 : cT,
      left: cL - pW
    },
    leftStart: {
      top: cT,
      left: cL - pW - 5
    },
    leftEnd: {
      top: cT + cH - pH > 45 ? cT + cH - pH : cT,
      left: cL - pW
    }
  }
  if (!/^(top|bottom|left|right)(Start|End)?$/g.test(placement)) {
    return placementMap.bottomEnd
  }
  return placementMap[placement]
}
