<template>
  <nav class="navbar">
    <div class="inner">
      <a href="#hero" class="logo"> NLPQ </a>

      <ul class="links">
        <li><a href="#about">About</a></li>
        <li><a href="#tickets">Tickets</a></li>
        <li><a href="#leaderboard">Leaderboard</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="https://www.eventbrite.co.uk/e/boyband-vs-girlband-quiz-tickets-1982508818243?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary ticket-btn"
          >
            Get Tickets
          </a>
        </li>
      </ul>

      <button class="hamburger" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
        <svg v-if="!menuOpen" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition name="slide-down">
      <div v-if="menuOpen" class="mobile-menu">
        <ul class="mobile-links">
          <li><a href="#about" @click="menuOpen = false">About</a></li>
          <li><a href="#tickets" @click="menuOpen = false">Tickets</a></li>
          <li><a href="#leaderboard" @click="menuOpen = false">Leaderboard</a></li>
          <li><a href="#gallery" @click="menuOpen = false">Gallery</a></li>
          <li><a href="#contact" @click="menuOpen = false">Contact</a></li>
          <li>
            <a
              href="https://www.eventbrite.co.uk/e/boyband-vs-girlband-quiz-tickets-1982508818243?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
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

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(8, 8, 8, 0.9);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--faint);
}

.inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--chalk);
  text-decoration: none;
}

.links {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--chalk);
    }
  }
}

.ticket-btn {
  padding: 0.5rem 1rem !important;
  font-size: 0.75rem !important;
}

.hamburger {
  display: flex;
  color: var(--chalk);
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
}

.mobile-menu {
  background-color: var(--surface);
  border-top: 1px solid var(--faint);
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
}

.mobile-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--chalk);
    }
  }
}

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
