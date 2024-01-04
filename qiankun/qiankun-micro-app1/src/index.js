import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// @ts-ignore
function render(props) {
  const { container } = props;
// @ts-ignore
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
// @ts-ignore
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}
// @ts-ignore
export async function unmount(props) {
  const { container } = props;
// @ts-ignore
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
