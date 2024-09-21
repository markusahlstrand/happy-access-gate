class PaywallComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          /* Add your styles here */
        </style>
        <div class="paywall">
          <h2>Subscribe to Access Content</h2>
          <p>Choose a subscription plan:</p>
          <form>
            <label>
              <input type="radio" name="plan" value="monthly" checked>
              Monthly Plan - $9.99/month
            </label>
            <label>
              <input type="radio" name="plan" value="yearly">
              Yearly Plan - $99.99/year (Save 17%)
            </label>
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      `;
    }
  }
}

customElements.define('paywall-component', PaywallComponent);