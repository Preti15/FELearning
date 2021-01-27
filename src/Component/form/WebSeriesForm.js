import { LitElement, html, css } from 'lit-element';

export class WebSeriesForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html` "Hello World form" `;
  }
}
