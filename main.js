/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./create-body.js
function createBody() {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
  body.append(container);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Virtual Keyboard';
  container.append(title);

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerHTML = 'This keyboard was created in the Windows operating system<br>To change the language, use the following keyboard shortcut: <i>Alt + Ctrl</i><br>Current language: EN';
  container.append(description);

  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  container.append(textArea);

  const keyboardBackground = document.createElement('div');
  keyboardBackground.classList.add('keyboard-background');
  container.append(keyboardBackground);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardBackground.append(keyboard);
}

;// CONCATENATED MODULE: ./keys.js
const keys = {
  enKeys: [{
    code: 'Backquote',
    key: '`',
    keyShift: '~',
  },
  {
    code: 'Digit1',
    key: '1',
    keyShift: '!',
  },
  {
    code: 'Digit2',
    key: '2',
    keyShift: '@',
  },
  {
    code: 'Digit3',
    key: '3',
    keyShift: '#',
  },
  {
    code: 'Digit4',
    key: '4',
    keyShift: '$',
  },
  {
    code: 'Digit5',
    key: '5',
    keyShift: '%',
  },
  {
    code: 'Digit6',
    key: '6',
    keyShift: '^',
  },
  {
    code: 'Digit7',
    key: '7',
    keyShift: '&',
  },
  {
    code: 'Digit8',
    key: '8',
    keyShift: '*',
  },
  {
    code: 'Digit9',
    key: '9',
    keyShift: '(',
  },
  {
    code: 'Digit0',
    key: '0',
    keyShift: ')',
  },
  {
    code: 'Minus',
    key: '-',
    keyShift: '_',
  },
  {
    code: 'Equal',
    key: '=',
    keyShift: '+',
  },
  {
    code: 'Backspace',
    key: 'Backspace',
  },
  {
    code: 'Tab',
    key: 'Tab',
  },
  {
    code: 'KeyQ',
    key: 'q',
    keyCapsLock: 'Q',
  },
  {
    code: 'KeyW',
    key: 'w',
    keyCapsLock: 'W',
  },
  {
    code: 'KeyE',
    key: 'e',
    keyCapsLock: 'E',
  },
  {
    code: 'KeyR',
    key: 'r',
    keyCapsLock: 'R',
  },
  {
    code: 'KeyT',
    key: 't',
    keyCapsLock: 'T',
  },
  {
    code: 'KeyY',
    key: 'y',
    keyCapsLock: 'Y',
  },
  {
    code: 'KeyU',
    key: 'u',
    keyCapsLock: 'U',
  },
  {
    code: 'KeyI',
    key: 'i',
    keyCapsLock: 'I',
  },
  {
    code: 'KeyO',
    key: 'o',
    keyCapsLock: 'O',
  },
  {
    code: 'KeyP',
    key: 'p',
    keyCapsLock: 'P',
  },
  {
    code: 'BracketLeft',
    key: '[',
    keyShift: '{',
  },
  {
    code: 'BracketRight',
    key: ']',
    keyShift: '}',
  },
  {
    code: 'Backslash',
    key: '\\',
    keyShift: '|',
  },
  {
    code: 'Delete',
    key: 'Del',
  },
  {
    code: 'CapsLock',
    key: 'CapsLock',
  },
  {
    code: 'KeyA',
    key: 'a',
    keyCapsLock: 'A',
  },
  {
    code: 'KeyS',
    key: 's',
    keyCapsLock: 'S',
  },
  {
    code: 'KeyD',
    key: 'd',
    keyCapsLock: 'D',
  },
  {
    code: 'KeyF',
    key: 'f',
    keyCapsLock: 'F',
  },
  {
    code: 'KeyG',
    key: 'g',
    keyCapsLock: 'G',
  },
  {
    code: 'KeyH',
    key: 'h',
    keyCapsLock: 'H',
  },
  {
    code: 'KeyJ',
    key: 'j',
    keyCapsLock: 'J',
  },
  {
    code: 'KeyK',
    key: 'k',
    keyCapsLock: 'K',
  },
  {
    code: 'KeyL',
    key: 'l',
    keyCapsLock: 'L',
  },
  {
    code: 'Semicolon',
    key: ';',
    keyShift: ':',
  },
  {
    code: 'Quote',
    key: "'",
    keyShift: '"',
  },
  {
    code: 'Enter',
    key: 'Enter',
  },
  {
    code: 'ShiftLeft',
    key: 'Shift',
  },
  {
    code: 'KeyZ',
    key: 'z',
    keyCapsLock: 'Z',
  },
  {
    code: 'KeyX',
    key: 'x',
    keyCapsLock: 'X',
  },
  {
    code: 'KeyC',
    key: 'c',
    keyCapsLock: 'C',
  },
  {
    code: 'KeyV',
    key: 'v',
    keyCapsLock: 'V',
  },
  {
    code: 'KeyB',
    key: 'b',
    keyCapsLock: 'B',
  },
  {
    code: 'KeyN',
    key: 'n',
    keyCapsLock: 'N',
  },
  {
    code: 'KeyM',
    key: 'm',
    keyCapsLock: 'M',
  },
  {
    code: 'Comma',
    key: ',',
    keyShift: '<',
  },
  {
    code: 'Period',
    key: '.',
    keyShift: '>',
  },
  {
    code: 'Slash',
    key: '/',
    keyShift: '?',
  },
  {
    code: 'ArrowUp',
    key: '&#9650;',
  },
  {
    code: 'ShiftRight',
    key: 'Shift',
  },
  {
    code: 'ControlLeft',
    key: 'Ctrl',
  },
  {
    code: 'MetaLeft',
    key: 'Win',
  },
  {
    code: 'AltLeft',
    key: 'Alt',
  },
  {
    code: 'Space',
    key: ' ',
  },
  {
    code: 'AltRight',
    key: 'Alt',
  },
  {
    code: 'ArrowLeft',
    key: '&#9668;',
  },
  {
    code: 'ArrowDown',
    key: '&#9660;',
  },
  {
    code: 'ArrowRight',
    key: '&#9658;',
  },
  {
    code: 'ControlRight',
    key: 'Ctrl',
  }],
  ruKeys: [{
    code: 'Backquote',
    key: 'ё',
    keyCapsLock: 'Ё',
  },
  {
    code: 'Digit1',
    key: '1',
    keyShift: '!',
  },
  {
    code: 'Digit2',
    key: '2',
    keyShift: '"',
  },
  {
    code: 'Digit3',
    key: '3',
    keyShift: '№',
  },
  {
    code: 'Digit4',
    key: '4',
    keyShift: ';',
  },
  {
    code: 'Digit5',
    key: '5',
    keyShift: '%',
  },
  {
    code: 'Digit6',
    key: '6',
    keyShift: ':',
  },
  {
    code: 'Digit7',
    key: '7',
    keyShift: '?',
  },
  {
    code: 'Digit8',
    key: '8',
    keyShift: '*',
  },
  {
    code: 'Digit9',
    key: '9',
    keyShift: '(',
  },
  {
    code: 'Digit0',
    key: '0',
    keyShift: ')',
  },
  {
    code: 'Minus',
    key: '-',
    keyShift: '_',
  },
  {
    code: 'Equal',
    key: '=',
    keyShift: '+',
  },
  {
    code: 'Backspace',
    key: 'Backspace',
  },
  {
    code: 'Tab',
    key: 'Tab',
  },
  {
    code: 'KeyQ',
    key: 'й',
    keyCapsLock: 'Й',
  },
  {
    code: 'KeyW',
    key: 'ц',
    keyCapsLock: 'Ц',
  },
  {
    code: 'KeyE',
    key: 'у',
    keyCapsLock: 'У',
  },
  {
    code: 'KeyR',
    key: 'к',
    keyCapsLock: 'К',
  },
  {
    code: 'KeyT',
    key: 'е',
    keyCapsLock: 'Е',
  },
  {
    code: 'KeyY',
    key: 'н',
    keyCapsLock: 'Н',
  },
  {
    code: 'KeyU',
    key: 'г',
    keyCapsLock: 'Г',
  },
  {
    code: 'KeyI',
    key: 'ш',
    keyCapsLock: 'Ш',
  },
  {
    code: 'KeyO',
    key: 'щ',
    keyCapsLock: 'Щ',
  },
  {
    code: 'KeyP',
    key: 'з',
    keyCapsLock: 'З',
  },
  {
    code: 'BracketLeft',
    key: 'х',
    keyCapsLock: 'Х',
  },
  {
    code: 'BracketRight',
    key: 'ъ',
    keyCapsLock: 'Ъ',
  },
  {
    code: 'Backslash',
    key: '\\',
    keyShift: '/',
  },
  {
    code: 'Delete',
    key: 'Del',
  },
  {
    code: 'CapsLock',
    key: 'CapsLock',
  },
  {
    code: 'KeyA',
    key: 'ф',
    keyCapsLock: 'Ф',
  },
  {
    code: 'KeyS',
    key: 'ы',
    keyCapsLock: 'Ы',
  },
  {
    code: 'KeyD',
    key: 'в',
    keyCapsLock: 'В',
  },
  {
    code: 'KeyF',
    key: 'а',
    keyCapsLock: 'А',
  },
  {
    code: 'KeyG',
    key: 'п',
    keyCapsLock: 'П',
  },
  {
    code: 'KeyH',
    key: 'р',
    keyCapsLock: 'Р',
  },
  {
    code: 'KeyJ',
    key: 'о',
    keyCapsLock: 'О',
  },
  {
    code: 'KeyK',
    key: 'л',
    keyCapsLock: 'Л',
  },
  {
    code: 'KeyL',
    key: 'д',
    keyCapsLock: 'Д',
  },
  {
    code: 'Semicolon',
    key: 'ж',
    keyCapsLock: 'Ж',
  },
  {
    code: 'Quote',
    key: 'э',
    keyCapsLock: 'Э',
  },
  {
    code: 'Enter',
    key: 'Enter',
  },
  {
    code: 'ShiftLeft',
    key: 'Shift',
  },
  {
    code: 'KeyZ',
    key: 'я',
    keyCapsLock: 'Я',
  },
  {
    code: 'KeyX',
    key: 'ч',
    keyCapsLock: 'Ч',
  },
  {
    code: 'KeyC',
    key: 'с',
    keyCapsLock: 'С',
  },
  {
    code: 'KeyV',
    key: 'м',
    keyCapsLock: 'М',
  },
  {
    code: 'KeyB',
    key: 'и',
    keyCapsLock: 'И',
  },
  {
    code: 'KeyN',
    key: 'т',
    keyCapsLock: 'Т',
  },
  {
    code: 'KeyM',
    key: 'ь',
    keyCapsLock: 'Ь',
  },
  {
    code: 'Comma',
    key: 'б',
    keyCapsLock: 'Б',
  },
  {
    code: 'Period',
    key: 'ю',
    keyCapsLock: 'Ю',
  },
  {
    code: 'Slash',
    key: '.',
    keyShift: ',',
  },
  {
    code: 'ArrowUp',
    key: '&#9650;',
  },
  {
    code: 'ShiftRight',
    key: 'Shift',
  },
  {
    code: 'ControlLeft',
    key: 'Ctrl',
  },
  {
    code: 'MetaLeft',
    key: 'Win',
  },
  {
    code: 'AltLeft',
    key: 'Alt',
  },
  {
    code: 'Space',
    key: ' ',
  },
  {
    code: 'AltRight',
    key: 'Alt',
  },
  {
    code: 'ArrowLeft',
    key: '&#9668;',
  },
  {
    code: 'ArrowDown',
    key: '&#9660;',
  },
  {
    code: 'ArrowRight',
    key: '&#9658;',
  },
  {
    code: 'ControlRight',
    key: 'Ctrl',
  }],
};

/* harmony default export */ const keys_0 = (keys);

;// CONCATENATED MODULE: ./create-keys.js


function createKeys() {
  const keyboard = document.querySelector('.keyboard');
  const lang = `${document.querySelector('.description').innerText.slice(-2).toLowerCase()}Keys`;

  for (let i = 0; i < keys_0[lang].length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.dataset.keyCode = `${keys_0[lang][i].code}`;

    if (keys_0[lang][i].key === 'CapsLock') {
      key.classList.add('caps-lock');
    }

    if (keys_0[lang][i].key === ' ') {
      key.style.width = '45%';
    } else if (keys_0[lang][i].key === 'CapsLock' || keys_0[lang][i].key === 'Shift' || keys_0[lang][i].key === 'Backspace' || keys_0[lang][i].key === 'Enter') {
      key.style.width = '13%';
    } else {
      key.style.width = '6%';
    }

    key.innerHTML = `${keys_0[lang][i].key}`;
    keyboard.append(key);
  }

  keyboard.onmousedown = (event) => { event.preventDefault(); };
}

;// CONCATENATED MODULE: ./highlight-pressed-key.js
function highlightKeyByKeyboard(event) {
  if (event.code.length > 0 && document.querySelector(`.key[data-key-code=${event.code}]`) !== null) {
    if (event.code === 'CapsLock') {
      document.querySelector(`.key[data-key-code=${event.code}]`).classList.toggle('active-capslock');
    }
    document.querySelector(`.key[data-key-code=${event.code}]`).classList.add('active');
  }
}

function highlightKeyByMouse(event) {
  if (event.target.dataset.keyCode) {
    if (event.target.dataset.keyCode === 'CapsLock') {
      document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.toggle('active-capslock');
    }
    document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.add('active');
  }
}

function removeKeyHighlight(event) {
  if (event.code) {
    if (event.code.length > 0 && document.querySelector(`.key[data-key-code=${event.code}]`) !== null) {
      document.querySelector(`.key[data-key-code=${event.code}]`).classList.remove('active');
    }
  } else if (event.target.dataset.keyCode) {
    document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.remove('active');
  }
}

function removeKeyHighlightForShiftKeys(event) {
  if (event.target.dataset.keyCode) {
    if (event.target.dataset.keyCode !== 'ShiftLeft' && event.target.dataset.keyCode !== 'ShiftRight') {
      document.querySelector(`.key[data-key-code=${event.target.dataset.keyCode}]`).classList.remove('active');
    }
  }
}

;// CONCATENATED MODULE: ./press-keys.js


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
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys_0[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`;
          arrForLangSwitch = [];
        } else { arrForLangSwitch.push('ControlLeft'); }
        break;
      case 'ControlRight':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'AltLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'AltRight')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys_0[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`;
          arrForLangSwitch = [];
        } else { arrForLangSwitch.push('ControlRight'); }
        break;
      case 'AltLeft':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlRight')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys_0[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`;
          arrForLangSwitch = [];
        } else { arrForLangSwitch.push('AltLeft'); }
        break;
      case 'AltRight':
        if (arrForLangSwitch.length > 0 && (arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlLeft' || arrForLangSwitch[arrForLangSwitch.length - 1] === 'ControlRight')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });

            if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else if (keys_0[newLang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else if (capsLock.classList.contains('active-capslock') && (!shiftLeft.classList.contains('active') || !shiftRight.classList.contains('active'))) {
              if (keys_0[newLang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[newLang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys_0[newLang][index].key}`; }
            } else {
              allKeys[x].innerHTML = `${keys_0[newLang][index].key}`;
            }
          });
          description.innerHTML = `${description.innerHTML.slice(0, description.innerHTML.length - 2)}${newLang.substring(0, 2).toUpperCase()}`; arrForLangSwitch = [];
        } else { arrForLangSwitch.push('AltRight'); }
        break;
      case 'CapsLock':
        if (capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyShift) { allKeys[x].innerHTML = `${keys_0[lang][index].keyShift}`; } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
          });
        } else if (capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[lang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
          });
        } else if (!capsLock.classList.contains('active-capslock') && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[lang][index].keyCapsLock}`; } else if (keys_0[lang][index].keyShift) { allKeys[x].innerHTML = keys_0[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
          });
        } else if (!capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            allKeys[x].innerHTML = `${keys_0[lang][index].key}`;
          });
        }
        break;
      case 'ShiftLeft':
        if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyShift) { allKeys[x].innerHTML = keys_0[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
          });
        } else if (shiftLeft.classList.contains('active')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[lang][index].keyCapsLock}`; } else if (keys_0[lang][index].keyShift) { allKeys[x].innerHTML = keys_0[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
          });
        }
        break;
      case 'ShiftRight':
        if ((shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) && capsLock.classList.contains('active-capslock')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyShift) { allKeys[x].innerHTML = keys_0[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
          });
        } else if (shiftRight.classList.contains('active')) {
          allKeys.forEach((el, x) => {
            const index = keys_0[lang].findIndex((elem, i, arr) => {
              let y;
              if (elem.code === el.dataset.keyCode) {
                y = arr[i];
              } return y;
            });
            if (keys_0[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[lang][index].keyCapsLock}`; } else if (keys_0[lang][index].keyShift) { allKeys[x].innerHTML = keys_0[lang][index].keyShift.toString(); } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
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
        const index = keys_0[lang].findIndex((elem, i, arr) => {
          let y;
          if (elem.code === el.dataset.keyCode) {
            y = arr[i];
          } return y;
        });
        allKeys[x].innerHTML = `${keys_0[lang][index].key}`;
      });
    } else if ((keyCode === 'ShiftLeft' && !shiftLeft.classList.contains('active') && capsLock.classList.contains('active-capslock')) || (keyCode === 'ShiftRight' && !shiftRight.classList.contains('active') && capsLock.classList.contains('active-capslock'))) {
      allKeys.forEach((el, x) => {
        const index = keys_0[lang].findIndex((elem, i, arr) => {
          let y;
          if (elem.code === el.dataset.keyCode) {
            y = arr[i];
          } return y;
        });
        if (keys_0[lang][index].keyCapsLock) { allKeys[x].innerHTML = `${keys_0[lang][index].keyCapsLock}`; } else { allKeys[x].innerHTML = `${keys_0[lang][index].key}`; }
      });
    }
  }
}



;// CONCATENATED MODULE: ./index.js






createBody();

function setLocalStorage() {
  const data = JSON.stringify(document.querySelector('.description').innerText.slice(-2));

  if (!localStorage.getItem('KosIrina: lang')) {
    localStorage.clear();
    localStorage.setItem('KosIrina: lang', data);
  } else {
    localStorage.setItem('KosIrina: lang', data);
  }
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  let langFromLocalStorage = JSON.parse(localStorage.getItem('KosIrina: lang'));
  if (langFromLocalStorage === null) { langFromLocalStorage = 'EN'; }
  document.querySelector('.description').innerHTML = `${document.querySelector('.description').innerHTML.slice(0, document.querySelector('.description').innerHTML.length - 2)}${langFromLocalStorage}`;
  createKeys();
}
window.addEventListener('load', getLocalStorage);

const keyboard = document.querySelector('.keyboard');

document.addEventListener('keydown', highlightKeyByKeyboard);
keyboard.addEventListener('pointerdown', highlightKeyByMouse);
document.addEventListener('keyup', removeKeyHighlight);
keyboard.addEventListener('pointerup', removeKeyHighlight);
keyboard.addEventListener('pointerout', removeKeyHighlightForShiftKeys);
keyboard.ondragstart = () => false;
document.addEventListener('keydown', pressKeys);
keyboard.addEventListener('pointerdown', pressKeys);
document.addEventListener('keyup', removeShift);
keyboard.addEventListener('pointerup', removeShift);

/******/ })()
;