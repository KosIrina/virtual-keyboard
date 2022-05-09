import keys from './keys';

let arrForLangSwitch = [];

let keyCode;

function pressKeys(event) {
  event.preventDefault();
  const description = document.querySelector('.description');
  const currentLang = `${description.innerText.slice(-2)}`;
  const textArea = document.querySelector('.textarea');
  const capsLock = document.querySelector('.caps-lock');
  const shiftLeft = document.querySelector('.key[data-key-code=ShiftLeft');
  const shiftRight = document.querySelector('.key[data-key-code=ShiftRight');
  const allKeys = document.querySelectorAll('.key');
  let lang = '';
  let newLang = '';

  if (currentLang === 'EN') {
    lang = 'enKeys';
    newLang = 'ruKeys';
  } else if (currentLang === 'RU') {
    lang = 'ruKeys';
    newLang = 'enKeys';
  }

  if (event.code) {
    keyCode = event.code;
  } else if (event.target.dataset.keyCode) {
    keyCode = event.target.dataset.keyCode;
  }

  if (document.querySelector(`.key[data-key-code=${keyCode}]`) !== null) {
    switch (keyCode) {
      case 'Tab':
        textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'Backspace':
        if (textArea.selectionStart === textArea.selectionEnd
            && textArea.selectionStart > 0) {
          textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
        } else { textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end'); }
        break;

      case 'Space':
        textArea.setRangeText(' ', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'Delete':
        if (textArea.selectionStart === textArea.selectionEnd) {
          textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
        } else { textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end'); }
        break;
      case 'Enter':
        textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
        break;
      case 'MetaLeft':
        break;
      case 'ControlLeft':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'AltLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'AltRight')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`;
          arrForLangSwitch = [];
        } else { arrForLangSwitch.push('ControlLeft'); }
        break;
      case 'ControlRight':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'AltLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'AltRight')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`;
          arrForLangSwitch = [];
        } else { arrForLangSwitch.push('ControlRight'); }
        break;
      case 'AltLeft':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlRight')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`;
          arrForLangSwitch = [];
        } else { arrForLangSwitch.push('AltLeft'); }
        break;
      case 'AltRight':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlRight')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else if (keys[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`; arrForLangSwitch = [];
        } else { arrForLangSwitch.push('AltRight'); }
        break;
      case 'CapsLock':
        if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyShift) { allKeys[x].innerHTML = `${keys[lang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        } else if (capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[lang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[lang][index].keyCapsLock}`; } else if (keys[lang][index].keyShift) { allKeys[x].innerHTML = keys[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        } else if (!capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            allKeys[x].innerHTML = `${keys[lang][index].key}`;
          });
        }
        break;
      case 'ShiftLeft':
        if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyShift) { allKeys[x].innerHTML = keys[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        } else if (shiftLeft.classList.contains('active')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[lang][index].keyCapsLock}`; } else if (keys[lang][index].keyShift) { allKeys[x].innerHTML = keys[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        }
        break;
      case 'ShiftRight':
        if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyShift) { allKeys[x].innerHTML = keys[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        } else if (shiftRight.classList.contains('active')) {
          allKeys.forEach((el, x) => {
            const index = keys[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[lang][index].keyCapsLock}`; } else if (keys[lang][index].keyShift) { allKeys[x].innerHTML = keys[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
          });
        }
        break;
      default:
        textArea.setRangeText(document.querySelector(`.key[data-key-code=${keyCode}]`).innerText, textArea.selectionStart, textArea.selectionEnd, 'end');
    }
  }
}

function removeShift(event) {
  const description = document.querySelector('.description');
  const currentLang = `${description.innerText.slice(-2)}`;
  const capsLock = document.querySelector('.caps-lock');
  const shiftLeft = document.querySelector('.key[data-key-code=ShiftLeft]');
  const shiftRight = document.querySelector('.key[data-key-code=ShiftRight]');
  const allKeys = document.querySelectorAll('.key');
  let lang = '';

  if (currentLang === 'EN') {
    lang = 'enKeys';
  } else if (currentLang === 'RU') {
    lang = 'ruKeys';
  }

  if (event.code) {
    keyCode = event.code;
  } else if (event.target.dataset.keyCode) {
    keyCode = event.target.dataset.keyCode;
  }

  if (document.querySelector(`.key[data-key-code=${keyCode}]`) !== null) {
    if ((keyCode === 'ShiftLeft' && !shiftLeft.classList.contains('active') && !capsLock.classList.contains('active-capslock')) || (keyCode === 'ShiftRight' && !shiftRight.classList.contains('active') && !capsLock.classList.contains('active-capslock'))) {
      allKeys.forEach((el, x) => {
        const index = keys[lang].findIndex((elem, i, arr) => {
          let y;
          if (elem.code === el.dataset.keyCode) {
            y = arr[i];
          } return y;
        });
        allKeys[x].innerHTML = `${keys[lang][index].key}`;
      });
    } else if ((keyCode === 'ShiftLeft' && !shiftLeft.classList.contains('active') && capsLock.classList.contains('active-capslock')) || (keyCode === 'ShiftRight' && !shiftRight.classList.contains('active') && capsLock.classList.contains('active-capslock'))) {
      allKeys.forEach((el, x) => {
        const index = keys[lang].findIndex((elem, i, arr) => {
          let y;
          if (elem.code === el.dataset.keyCode) {
            y = arr[i];
          } return y;
        });
        if (keys[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys[lang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys[lang][index].key}`; }
      });
    }
  }
}

export { pressKeys, removeShift };
