class PaywallComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        .card { border: 1px solid #e5e7eb; border-radius: 0.5rem; }
        .btn { transition: background-color 0.2s; }
        .btn:hover { background-color: #dc2626; }
      </style>
      <div class="card w-full max-w-2xl mx-auto p-6 space-y-6">
        <div class="text-right">
          <a href="#" class="text-sm text-red-600 hover:underline">Redan prenumerant? Logga in</a>
        </div>

        <div class="text-center">
          <h1 class="text-4xl font-bold text-red-600 mb-4">FOKUS</h1>
          <h2 class="text-2xl font-bold mb-2">Läs Fokus Digital i 6 månader för bara 79 kr!</h2>
        </div>

        <ul class="space-y-2">
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Allt material på Fokus.se</span>
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Tillgång till e-tidning</span>
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Tillgång till våra podcasts</span>
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Nyhetsbrev</span>
          </li>
        </ul>

        <div class="space-y-2 border rounded-md p-4">
          <div class="flex items-center space-x-2">
            <input type="radio" id="6months" name="subscription" value="6months" checked>
            <label for="6months" class="flex-grow">
              <span class="font-bold">Fokus Digital i 6 månader för 79kr!</span>
              <span class="block text-sm text-gray-500">Efter kampanjperioden 149 kr/mån. Ingen bindningstid!</span>
            </label>
            <span class="font-bold">79 SEK/6 mån</span>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" id="1year" name="subscription" value="1year">
            <label for="1year" class="flex-grow">
              <span class="font-bold">Fokus Digital i ett år för 995kr</span>
              <span class="block text-sm text-gray-500">Du sparar 793 kr. Prenumerationen förnyas automatiskt årsvis.</span>
            </label>
            <span class="font-bold">995 SEK/år</span>
          </div>
        </div>

        <button class="btn w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Fortsätt</button>

        <div class="text-center text-sm text-gray-500">
          <p>Säker SSL-krypterad betalning</p>
          <div class="flex justify-center space-x-2 mt-2">
            <img src="/visa.png" alt="Visa" class="h-6">
            <img src="/amex.png" alt="American Express" class="h-6">
            <img src="/mastercard.png" alt="Mastercard" class="h-6">
            <img src="/klarna.png" alt="Klarna" class="h-6">
            <img src="/gpay.png" alt="Google Pay" class="h-6">
            <img src="/applepay.png" alt="Apple Pay" class="h-6">
            <img src="/swish.png" alt="Swish" class="h-6">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('paywall-component', PaywallComponent);
