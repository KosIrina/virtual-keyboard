export function highlightKeyByKeyboard(event) {
  if (event.code.length > 0 && document.querySelector(`.key[data-key-code=${event.code}]`) !== null) {
    if (event.code === 'CapsLock') {
      document.querySelector(`.key[data-key-code=${event.code}]`).classList.toggle('active-capslock');
    }
    document.querySelector(`.key[data-key-code=${event.code}]`).classList.add('active');
  }
}

export function highlightKeyByMouse(event) {
  if (event.target.dataset.keyCode) {
    if (event.target.dataset.keyCode === 'CapsLock') {
      document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.toggle('active-capslock');
    }
    document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.add('active');
  }
}

export function removeKeyHighlight(event) {
  if (event.code.length > 0 && document.querySelector(`.key[data-key-code=${event.code}]`) !== null) {
    document.querySelector(`.key[data-key-code=${event.code}]`).classList.remove('active');
  } else if (event.target.dataset.keyCode) {
    document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.remove('active');
  }
}

export function removeKeyHighlightForShiftKeys(event) {
  if (event.target.dataset.keyCode) {
    if (event.target.dataset.keyCode !== 'ShiftLeft' && event.target.dataset.keyCode !== 'ShiftRight') {
      document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.remove('active');
    }
  }
}
