import { html, fixture, expect } from '@open-wc/testing';

import '../src/Component/form/web-series-form.js';

describe('webseries form', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<web-series-form></web-series-form>`);
  });

  it('renders a h1', async () => {
    const h1 = await element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.be.equal('Web Series');
  });

  it('renders a title', async () => {
    const title = await element.shadowRoot.querySelector('input[name="title"]');
    expect(title).to.exist;
  });
});
