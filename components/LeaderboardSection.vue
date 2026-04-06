<template>
  <section id="leaderboard" class="leaderboard">
    <div class="container">
      <p class="eyebrow">Hall of Fame</p>
      <h2 class="title">Leaderboard</h2>
      <p class="subtitle">
        Past champions, legendary teams, and glorious defeats — all immortalised here.
      </p>

      <div class="table">
        <div class="table-header">
          <p class="event-label">Boybands vs Girlbands Quiz Results (2nd April)</p>
        </div>
        <div class="rows">
          <div
            v-for="(team, index) in teams"
            :key="team.name"
            class="row"
            :class="{ highlight: index === 0 }"
          >
            <div class="row-left">
              <span
                class="rank"
                :class="
                  index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : 'dim'
                "
              >
                {{ index + 1 }}
              </span>
              <span class="name" :class="{ bold: index === 0 }">{{ team.name }}</span>
              <span v-if="index === teams.length - 1" class="last-badge">Last</span>
            </div>
            <span class="score" :class="{ gold: index === 0 }">{{ team.score }}</span>
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
  { name: 'N11 Sync', score: 62 },
  { name: 'Palace Road Princesses', score: 59.5 },
  { name: 'Scrambled Eggs', score: 59 },
  { name: 'Girls Zone', score: 49 },
  { name: 'Newbies', score: 45.5 },
  { name: 'Take Shat', score: 41 },
]
</script>

<style lang="scss" scoped>
.leaderboard {
  padding: 7rem 1.5rem;
  border-top: 3px solid transparent;
  border-image: var(--rainbow) 1;
}

.container {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}

.title {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--chalk);
  margin-bottom: 1rem;
}

.subtitle {
  font-family: var(--font-sans);
  color: var(--muted);
  max-width: 32rem;
  margin: 0 auto 4rem;
}

.table {
  position: relative;
  background-color: var(--surface);
  border: 1px solid var(--faint);
  overflow: hidden;
  text-align: left;
}

.table-header {
  padding: 3rem 1.5rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 3rem 1rem;
  }
}

.event-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--muted);
}

.rows > * + * {
  border-top: 1px solid var(--faint);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
  }

  &.highlight {
    background-color: var(--surface);
  }
}

.row-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.rank {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  width: 2rem;
  text-align: right;

  &.gold {
    color: #facc15;
  }
  &.silver {
    color: #cbd5e1;
  }
  &.bronze {
    color: #d97706;
  }
  &.dim {
    color: var(--muted);
  }
}

.name {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--chalk);

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &.bold {
    font-weight: 600;
  }
}

.last-badge {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--faint);
  padding: 0.125rem 0.5rem;
}

.score {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--chalk);

  &.gold {
    color: #facc15;
  }
}
</style>
