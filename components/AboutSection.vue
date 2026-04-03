<template>
  <section id="about" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">The Details</p>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-chalk">About the Quiz</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-px bg-faint">
        <!-- When -->
        <div class="bg-ink p-10 relative">
          <div class="rainbow-bar absolute top-0 left-0 right-0" />
          <div class="mb-6">
            <svg class="w-7 h-7 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-display text-2xl font-bold text-chalk mb-4">When</h3>
          <p class="font-sans text-muted leading-relaxed text-sm">
            Once every two months.<br /><br />
            Bar &amp; food available from <span class="text-chalk font-medium">6pm</span><br />
            Quiz starts <span class="text-chalk font-medium">7:30pm sharp</span>
          </p>
        </div>

        <!-- Where -->
        <div class="bg-ink p-10 relative">
          <div class="rainbow-bar absolute top-0 left-0 right-0" />
          <div class="mb-6">
            <svg class="w-7 h-7 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="font-display text-2xl font-bold text-chalk mb-4">Where</h3>
          <p class="font-sans text-muted leading-relaxed text-sm">
            <span class="text-chalk font-medium">The Hillbilly Social</span><br />
            101 Myddleton Road<br />
            North London<br />
            <a
              href="https://maps.google.com/?q=101+Myddleton+Road+London"
              target="_blank"
              rel="noopener noreferrer"
              class="text-chalk underline underline-offset-4 hover:text-muted transition-colors mt-3 inline-block"
            >
              Get directions →
            </a>
          </p>
        </div>

        <!-- How it works -->
        <div class="bg-ink p-10 relative">
          <div class="rainbow-bar absolute top-0 left-0 right-0" />
          <div class="mb-6">
            <svg class="w-7 h-7 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 class="font-display text-2xl font-bold text-chalk mb-4">How It Works</h3>
          <p class="font-sans text-muted leading-relaxed text-sm">
            <span class="text-chalk font-medium">£10</span> early bird<br />
            <span class="text-chalk font-medium">£12</span> full price<br /><br />
            Prizes: camptastic Aldi finds &amp; a very generous bar tab
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
