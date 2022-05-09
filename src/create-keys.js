import keys from './keys';

export default function createKeys() {
  const keyboard = document.querySelector('.keyboard');
  const lang = `${document.querySelector('.description').innerText.slice(-2).toLowerCase()}Keys`;

  for (let i = 0; i < keys[lang].length; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.dataset.keyCode = `${keys[lang][i].code}`;

    if (keys[lang][i].key === 'CapsLock') {
      key.classList.add('caps-lock');
    }

    if (keys[lang][i].key === ' ') {
      key.style.width = '45%';
    } else if (keys[lang][i].key === 'CapsLock' || keys[lang][i].key === 'Shift' || keys[lang][i].key === 'Backspace' || keys[lang][i].key === 'Enter') {
      key.style.width = '13%';
    } else {
      key.style.width = '6%';
    }

    key.innerHTML = `${keys[lang][i].key}`;
    keyboard.append(key);
  }

  keyboard.onmousedown = (event) => { event.preventDefault(); };
}
