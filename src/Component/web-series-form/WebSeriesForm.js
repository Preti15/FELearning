import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form.js';
import '@lion/input/lion-input.js';
import '@lion/select/lion-select.js';
import '@lion/button/lion-button.js';
import { LocalizeMixin } from '@lion/localize';
import '@lion/switch/lion-switch.js';

export class WebSeriesForm extends LocalizeMixin(LitElement) {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .wb-form {
        width: 500px;
        padding: 15px;
      }

      .wb-input-group {
        padding: 10px;
        min-height: 20px;
        width: 80%;
        font-weight: bold;
      }

      h1 {
        text-align: center;
      }

      label {
        color: steelblue;
        display: block;
      }

      input,
      select {
        color: black;
        /*height: 30px;*/
        padding: 5px 10px;
      }

      input:focus,
      select:focus {
        outline: none;
        border: 1px solid skyblue;
      }

      button {
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
      button:hover,
      button:active,
      button:focus {
        background-color: white;
        color: steelblue;
        border: 1px solid steelblue;
        outline: none;
        cursor: pointer;
      }
    `;
  }

  static get localizeNamespaces() {
    return [
      { 'lit-html-example': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  localizeForm(title) {
    return this.msgLit(`lit-html-example:${title}`);
  }

  renderInput(label, name) {
    return html`
      <div class="wb-input-group">
        <lion-input label=${this.localizeForm(label)} name=${name}>
        </lion-input>
      </div>
    `;
  }

  render() {
    return html`
      <h1>Web Series</h1>

      <lion-form>
        <form class="wb-form">
          ${this.renderInput('form.title', 'title')}
          ${this.renderInput('form.director', 'director')}

          <div class="wb-input-group">
            <lion-select label=${this.localizeForm('form.stars')} name="rating">
              <select slot="input">
                <option>Please select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </lion-select>
          </div>
          <div class="wb-input-group">
            <lion-select
              label=${this.localizeForm('form.streamingOn')}
              name="streamingOn"
            >
              <select slot="input">
                <option>Please select</option>
                <option value="Netfix">Netflix</option>
                <option value="Hot-Star">Hot-Star</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Voot">Voot</option>
              </select>
            </lion-select>
          </div>
          <div class="wb-input-group">
            <lion-button>${this.localizeForm('form.addbutton')}</lion-button>
          </div>
        </form>
      </lion-form>
    `;
  }
}
