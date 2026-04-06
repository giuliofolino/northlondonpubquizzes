<template>
  <section id="tickets" class="tickets">
    <div class="container">
      <p class="eyebrow">Next Event</p>

      <h2 class="title">
        Pride<br />
        <em class="rainbow-text">Divas Quiz</em>
      </h2>

      <p class="date">Thursday 4th June 2026</p>
      <p class="venue">
        The Hillbilly Social &nbsp;·&nbsp; Bar &amp; food available from 6pm &nbsp;·&nbsp; Quiz
        7:30pm sharp
      </p>

      <p class="description">
        Show off your music, rainbow and hun culture knowledge in a fun, welcoming, slightly
        unhinged atmosphere. All proceeds go to the free
        <a href="http://bowesparkpride.org.uk" target="_blank" rel="noopener noreferrer" class="link"
          >Bowes Park Pride x Myddleton Road Market</a
        >
        community event on 5th July.
      </p>

      <a
        href="https://www.eventbrite.co.uk/e/pride-divas-pub-quiz-at-hillbilly-social-2026-tickets-1986421427964?aff=oddtdtcreator"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary cta"
      >
        Book on Eventbrite
      </a>

      <div class="pricing">
        <div class="price-item border-right">
          <p class="amount">£10</p>
          <p class="label">Early Bird</p>
        </div>
        <div class="price-item">
          <p class="amount">£12</p>
          <p class="label">Full Price</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tickets {
  padding: 7rem 1.5rem;
  background-color: var(--surface);
  border-top: 3px solid transparent;
  border-image: var(--rainbow) 1;
}

.container {
  max-width: 48rem;
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
  font-size: clamp(2.25rem, 8vw, 3.75rem);
  font-weight: 900;
  color: var(--chalk);
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.date {
  font-family: var(--font-sans);
  color: var(--muted);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.venue {
  font-family: var(--font-sans);
  color: var(--muted);
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.description {
  font-family: var(--font-sans);
  color: var(--muted);
  max-width: 40rem;
  margin: 0 auto 3rem;
  line-height: 1.625;
}

.link {
  color: inherit;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: var(--chalk);
  }
}

.cta {
  padding: 1rem 3rem;
  font-size: 0.875rem;
  margin-bottom: 4rem;
}

.pricing {
  display: flex;
  align-items: center;
  border: 1px solid var(--faint);
}

.price-item {
  flex: 1;
  padding: 2rem 1rem;
  text-align: center;

  &.border-right {
    border-right: 1px solid var(--faint);
  }
}

.amount {
  font-family: var(--font-display);
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--chalk);
}

.label {
  font-family: var(--font-sans);
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.5rem;
}
</style>
