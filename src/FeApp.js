import { LitElement, html, css } from 'lit-element';
import './Page/web-series.js';

export class FeApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html` <web-series></web-series> `;
  }
}
