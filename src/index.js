import './style.css';
import './style.scss';
import createBody from './create-body';
import createKeys from './create-keys';
import * as highlight from './highlight-pressed-key';
import { pressKeys, removeShift } from './press-keys';

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

document.addEventListener('keydown', highlight.highlightKeyByKeyboard);
keyboard.addEventListener('pointerdown', highlight.highlightKeyByMouse);
document.addEventListener('keyup', highlight.removeKeyHighlight);
keyboard.addEventListener('pointerup', highlight.removeKeyHighlight);
keyboard.addEventListener('pointerout', highlight.removeKeyHighlightForShiftKeys);
keyboard.ondragstart = () => false;
document.addEventListener('keydown', pressKeys);
keyboard.addEventListener('pointerdown', pressKeys);
document.addEventListener('keyup', removeShift);
keyboard.addEventListener('pointerup', removeShift);
