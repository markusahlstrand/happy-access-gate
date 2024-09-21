<svelte:options tag="paywall-component" />

<script>
  import { Button } from "@/components/ui/button";
  import { Card } from "@/components/ui/card";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
  import { Label } from "@/components/ui/label";
  import { Check } from "lucide-react";

  let selectedOption = "6months";
</script>

<Card class="w-full max-w-2xl mx-auto p-6 space-y-6">
  <div class="text-right">
    <a href="#" class="text-sm text-red-600 hover:underline">Redan prenumerant? Logga in</a>
  </div>

  <div class="text-center">
    <h1 class="text-4xl font-bold text-red-600 mb-4">FOKUS</h1>
    <h2 class="text-2xl font-bold mb-2">Läs Fokus Digital i 6 månader för bara 79 kr!</h2>
  </div>

  <ul class="space-y-2">
    <li class="flex items-center">
      <Check class="text-green-500 mr-2" />
      <span>Allt material på Fokus.se</span>
    </li>
    <li class="flex items-center">
      <Check class="text-green-500 mr-2" />
      <span>Tillgång till e-tidning</span>
    </li>
    <li class="flex items-center">
      <Check class="text-green-500 mr-2" />
      <span>Tillgång till våra podcasts</span>
    </li>
    <li class="flex items-center">
      <Check class="text-green-500 mr-2" />
      <span>Nyhetsbrev</span>
    </li>
  </ul>

  <RadioGroup value={selectedOption} on:change={(e) => selectedOption = e.target.value}>
    <div class="space-y-2 border rounded-md p-4">
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="6months" id="6months" />
        <Label for="6months" class="flex-grow">
          <span class="font-bold">Fokus Digital i 6 månader för 79kr!</span>
          <span class="block text-sm text-gray-500">Efter kampanjperioden 149 kr/mån. Ingen bindningstid!</span>
        </Label>
        <span class="font-bold">79 SEK/6 mån</span>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="1year" id="1year" />
        <Label for="1year" class="flex-grow">
          <span class="font-bold">Fokus Digital i ett år för 995kr</span>
          <span class="block text-sm text-gray-500">Du sparar 793 kr. Prenumerationen förnyas automatiskt årsvis.</span>
        </Label>
        <span class="font-bold">995 SEK/år</span>
      </div>
    </div>
  </RadioGroup>

  <Button class="w-full bg-red-600 hover:bg-red-700 text-white">Fortsätt</Button>

  <div class="text-center text-sm text-gray-500">
    <p>Säker SSL-krypterad betalning</p>
    <div class="flex justify-center space-x-2 mt-2">
      <img src="/visa.png" alt="Visa" class="h-6" />
      <img src="/amex.png" alt="American Express" class="h-6" />
      <img src="/mastercard.png" alt="Mastercard" class="h-6" />
      <img src="/klarna.png" alt="Klarna" class="h-6" />
      <img src="/gpay.png" alt="Google Pay" class="h-6" />
      <img src="/applepay.png" alt="Apple Pay" class="h-6" />
      <img src="/swish.png" alt="Swish" class="h-6" />
    </div>
  </div>
</Card>
