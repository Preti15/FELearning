import { LitElement, html, css } from 'lit-element';
import '../Component/form/web-series-form.js';
import '@lion/button/lion-button.js';
import { localize, LocalizeMixin } from '@lion/localize';

export class WebSeries extends LocalizeMixin(LitElement) {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .lang {
        padding: 5px;
        border: 1px solid steelblue;
        float: right;
        width: 80px;
        text-transform: uppercase;
        background-color: steelblue;
        color: white;
        font-size: 16px;
        font-weight: bold;
        outline: none;
      }
      .lang:hover,
      .lang:active,
      .lang:focus {
        background-color: white;
        color: steelblue;
        border: 1px solid steelblue;
        outline: none;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <web-series-form></web-series-form>
      <lion-button
        class="lang"
        @click="${() => {
          localize.locale = 'en-GB';
        }}"
        >en-GB</lion-button
      >
      <lion-button
        class="lang"
        @click="${() => {
          localize.locale = 'nl-NL';
        }}"
        >nl-NL</lion-button
      >
    `;
  }
}
