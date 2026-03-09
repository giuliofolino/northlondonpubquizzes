<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-faint">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#hero" class="font-display text-lg font-bold tracking-tight text-chalk">
        NLPQ
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.12em] uppercase text-muted">
        <li><a href="#about" class="hover:text-chalk transition-colors duration-200">About</a></li>
        <li><a href="#tickets" class="hover:text-chalk transition-colors duration-200">Tickets</a></li>
        <li><a href="#leaderboard" class="hover:text-chalk transition-colors duration-200">Leaderboard</a></li>
        <li><a href="#gallery" class="hover:text-chalk transition-colors duration-200">Gallery</a></li>
        <li><a href="#contact" class="hover:text-chalk transition-colors duration-200">Contact</a></li>
        <li>
          <a
            href="https://www.eventbrite.co.uk/e/boyband-vs-girlband-quiz-tickets-1982508818243?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary !py-2 !px-4 !text-xs"
          >
            Get Tickets
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-chalk p-2"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden bg-surface border-t border-faint px-6 py-8">
        <ul class="flex flex-col gap-6 text-xs font-medium tracking-[0.12em] uppercase text-muted">
          <li><a href="#about" class="hover:text-chalk transition-colors" @click="menuOpen = false">About</a></li>
          <li><a href="#tickets" class="hover:text-chalk transition-colors" @click="menuOpen = false">Tickets</a></li>
          <li><a href="#leaderboard" class="hover:text-chalk transition-colors" @click="menuOpen = false">Leaderboard</a></li>
          <li><a href="#gallery" class="hover:text-chalk transition-colors" @click="menuOpen = false">Gallery</a></li>
          <li><a href="#contact" class="hover:text-chalk transition-colors" @click="menuOpen = false">Contact</a></li>
          <li>
            <a
              href="https://www.eventbrite.co.uk/e/boyband-vs-girlband-quiz-tickets-1982508818243?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex"
              @click="menuOpen = false"
            >
              Get Tickets
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
