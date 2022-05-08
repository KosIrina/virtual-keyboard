import keys from './keys';

export default function createKeys() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < keys.enKeys.length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.dataset.keyCode = `${keys.enKeys[i].code}`;

    if (keys.enKeys[i].key === 'CapsLock') {
      key.classList.add('caps-lock');
    }

    if (keys.enKeys[i].key === ' ') {
      key.style.width = '45%';
    } else if (keys.enKeys[i].key === 'CapsLock' || keys.enKeys[i].key === 'Shift' || keys.enKeys[i].key === 'Backspace' || keys.enKeys[i].key === 'Enter') {
      key.style.width = '13%';
    } else {
      key.style.width = '6%';
    }

    key.innerHTML = `${keys.enKeys[i].key}`;
    keyboard.append(key);
  }

  keyboard.onmousedown = (event) => { event.preventDefault(); };
}
