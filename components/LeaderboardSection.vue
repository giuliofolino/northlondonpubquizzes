<template>
  <section id="leaderboard" class="py-28 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <p class="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">Hall of Fame</p>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-chalk mb-4">Leaderboard</h2>
      <p class="font-sans text-muted mb-16 max-w-lg mx-auto">
        Past champions, legendary teams, and glorious defeats — all immortalised here.
      </p>

      <div class="relative bg-surface border border-faint p-16 md:p-24 overflow-hidden">
        <div class="rainbow-bar absolute top-0 left-0 right-0" />

        <!-- Trophy -->
        <div class="mb-8">
          <svg class="w-14 h-14 mx-auto text-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <p class="font-display text-3xl md:text-4xl font-bold text-chalk mb-4">Coming Soon</p>
        <p class="font-sans text-muted max-w-sm mx-auto text-sm leading-relaxed">
          After each quiz we'll crown the champions here. Play, win, and earn your place in North London pub quiz history.
        </p>
      </div>
    </div>
  </section>
</template>
