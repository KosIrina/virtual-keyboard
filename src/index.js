import './style.css';
import './style.scss';
import createBody from './create-body';
import createKeys from './create-keys';
import * as highlight from './highlight-pressed-key';

createBody();
createKeys();

const keyboard = document.querySelector('.keyboard');

document.addEventListener('keydown', highlight.highlightKeyByKeyboard);
keyboard.addEventListener('pointerdown', highlight.highlightKeyByMouse);
document.addEventListener('keyup', highlight.removeKeyHighlight);
keyboard.addEventListener('pointerup', highlight.removeKeyHighlight);
keyboard.addEventListener('pointerout', highlight.removeKeyHighlightForNonModifierKeys);
keyboard.ondragstart = () => false;
