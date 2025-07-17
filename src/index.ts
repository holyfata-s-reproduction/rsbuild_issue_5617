import './index.css';

try {
  console.log(import.meta.env.PUBLIC_TEST);
  console.log(import.meta.env.TEST);
} catch (error) { console.error(error) }

const rootEl = document.querySelector('#root');
if (rootEl) {
  rootEl.innerHTML = `
  <div class="content">
    <h1>Vanilla Rsbuild</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
`;
}
