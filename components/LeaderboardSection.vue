<template>
  <section id="leaderboard" class="py-28 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <p class="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">Hall of Fame</p>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-chalk mb-4">Leaderboard</h2>
      <p class="font-sans text-muted mb-16 max-w-lg mx-auto">
        Past champions, legendary teams, and glorious defeats — all immortalised here.
      </p>

      <div class="relative bg-surface border border-faint overflow-hidden">
        <div class="rainbow-bar absolute top-0 left-0 right-0" />

        <div class="pt-12 pb-4 px-6 md:px-12">
          <p class="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-1">Boybands vs Girlbands Quiz Results (2nd April)</p>
        </div>

        <div class="divide-y divide-faint">
          <div v-for="(team, index) in teams" :key="team.name"
            class="flex items-center justify-between px-6 md:px-12 py-4"
            :class="index === 0 ? 'bg-surface' : ''">
            <div class="flex items-center gap-4">
              <span class="font-display text-lg font-bold w-8 text-right"
                :class="index === 0 ? 'text-yellow-400' : index === 1 ? 'text-slate-300' : index === 2 ? 'text-amber-600' : 'text-muted'">
                {{ index + 1 }}
              </span>
              <span class="font-sans text-sm md:text-base"
                :class="index === 0 ? 'text-chalk font-semibold' : 'text-chalk'">
                {{ team.name }}
              </span>
              <span v-if="index === teams.length - 1"
                class="font-sans text-xs tracking-widest uppercase text-muted border border-faint px-2 py-0.5">
                Last
              </span>
            </div>
            <span class="font-display text-lg font-bold"
              :class="index === 0 ? 'text-yellow-400' : 'text-chalk'">
              {{ team.score }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teams = [
  { name: 'Pork Belly Princesses', score: 77 },
  { name: '6th Harmony', score: 70 },
  { name: 'All Sins', score: 68.5 },
  { name: 'Three Susies and a Bon', score: 66 },
  { name: 'Bowes Zone', score: 65 },
  { name: 'Nul Sync', score: 62 },
  { name: 'Palace Road Princesses', score: 59.5 },
  { name: 'Scrambled Eggs', score: 59 },
  { name: 'Girls Zone', score: 49 },
  { name: 'Newbies', score: 45.5 },
  { name: 'Take Shat', score: 41 },
]
</script>
