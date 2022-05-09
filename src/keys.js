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

export default keys;
