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

  static get localizeNamespaces() {
    return [
      {
        'lit-html-example': locale =>
          import(`../Component/translations/${locale}.js`),
      },
      ...super.localizeNamespaces,
    ];
  }

  render() {
    return html` <web-series-form></web-series-form> `;
  }
}
