export default function createBody() {
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
  description.innerHTML = 'This keyboard was created in the Windows operating system<br>To change the language, use the following keyboard shortcut: <i>Alt + Ctrl</i>';
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
