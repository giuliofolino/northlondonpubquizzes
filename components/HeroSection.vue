<template>
  <section id="hero" class="hero">
    <div
      class="bg"
      style="
        background-image: url('/images/hero-bg.jpg'),
          linear-gradient(135deg, #1a0520 0%, #0a0a20 50%, #001a0a 100%);
      "
    />
    <div class="overlay" />

    <div class="content">
      <p class="eyebrow">Bi-monthly &nbsp;·&nbsp; The Hillbilly Social &nbsp;·&nbsp; North London</p>

      <h1 class="heading">
        <span class="rainbow-text">North London</span>
        <span class="plain">Pub Quizzes</span>
      </h1>

      <p class="tagline">
        A fabulously camp, inclusive quiz night for those who know their pop culture, their drag
        queens, and how to have a bloody good time.
      </p>

      <div class="cta">
        <a
          href="https://www.eventbrite.co.uk/e/pride-divas-pub-quiz-at-hillbilly-social-2026-tickets-1986421427964?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary cta-btn"
        >
          Get Tickets
        </a>
        <a href="#about" class="btn-outline cta-btn"> Find Out More </a>
      </div>
    </div>

    <div class="scroll-indicator">
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-top: 3px solid transparent;
  border-image: var(--rainbow) 1;
}

.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 8, 8, 0.65);
}

.content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 5rem 1.5rem 0;
  max-width: 64rem;
  margin: 0 auto;
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
}

.heading {
  font-family: var(--font-display);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 2rem;

  span {
    display: block;
    font-size: clamp(3rem, 8vw, 6rem);
    margin-bottom: 0.5rem;
  }

  .plain {
    color: var(--chalk);
    margin-bottom: 0;
  }
}

.tagline {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--muted);
  max-width: 32rem;
  margin: 0 auto 3rem;
  line-height: 1.625;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
}

.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
}

.cta-btn {
  width: 100%;
  padding: 1rem 2.5rem;

  @media (min-width: 640px) {
    width: auto;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--muted);
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-6px);
  }
}
</style>
