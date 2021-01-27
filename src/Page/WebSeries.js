import { LitElement, html, css } from 'lit-element';
import '../Component/form/web-series-form.js';

export class WebSeries extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      "Hello World page"
      <web-series-form></web-series-form>
    `;
  }
}
