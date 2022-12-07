

const insertStyle = (serialize: any) => {
  const className = 'css-' + serialize.name;
  const rule = `.${className} {${serialize.styles}}`;
  const style = document.createElement('style');
  style.innerHTML = rule;
  style.setAttribute('data-emotion', 'css');
  document.head.appendChild(style);
}

export default insertStyle;