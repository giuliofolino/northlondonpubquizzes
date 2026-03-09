<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background image + overlay -->
    <!-- Replace /images/hero-bg.jpg with your image once ready -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/images/hero-bg.jpg'), linear-gradient(135deg, #1a0520 0%, #0a0a20 50%, #001a0a 100%)"
    />
    <div class="absolute inset-0 bg-ink/65" />

    <!-- Top rainbow bar -->
    <div class="absolute top-0 left-0 right-0 rainbow-bar" />

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
      <p class="font-sans text-xs tracking-[0.35em] uppercase text-muted mb-8">
        Bi-monthly &nbsp;·&nbsp; The Hillbilly Social &nbsp;·&nbsp; North London
      </p>

      <h1 class="font-display font-black leading-none mb-8">
        <span class="block text-5xl md:text-7xl lg:text-8xl rainbow-text mb-2">North London</span>
        <span class="block text-5xl md:text-7xl lg:text-8xl text-chalk">Pub Quizzes</span>
      </h1>

      <p class="font-sans text-base md:text-lg text-muted max-w-lg mx-auto mb-12 leading-relaxed">
        A fabulously camp, inclusive quiz night for those who know their pop culture,
        their drag queens, and how to have a bloody good time.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://www.eventbrite.co.uk/e/boyband-vs-girlband-quiz-tickets-1982508818243?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full sm:w-auto !py-4 !px-10"
        >
          Get Tickets
        </a>
        <a href="#about" class="btn-outline w-full sm:w-auto !py-4 !px-10">
          Find Out More
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
