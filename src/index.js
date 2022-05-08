import './style.css';
import './style.scss';
import createBody from './create-body';
import createKeys from './create-keys';
import * as highlight from './highlight-pressed-key';
import { pressKeys, removeShift } from './press-keys';

createBody();
createKeys();

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
