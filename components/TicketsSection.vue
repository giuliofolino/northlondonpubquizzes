<template>
  <section id="tickets" class="tickets">
    <div class="container">
      <p class="eyebrow">Upcoming Events</p>

      <h2 class="title">
        Grab Your<br />
        <em class="rainbow-text">Tickets</em>
      </h2>

      <p class="venue">
        The Hillbilly Social &nbsp;·&nbsp; Bar &amp; food available from 6pm &nbsp;·&nbsp; Quiz
        7:30pm sharp
      </p>

      <ul class="events">
        <li v-for="event in events" :key="event.name" class="event">
          <div class="event-info">
            <h3 class="event-name">{{ event.name }}</h3>
            <p v-if="event.date" class="event-date">{{ event.date }}</p>
          </div>
          <span v-if="event.soldOut" class="sold-out">Sold Out</span>
          <a
            v-else
            :href="event.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary event-btn"
          >
            Book Now
          </a>
        </li>
      </ul>

      <a
        href="https://bowes-park-pride.sumupstore.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary cta"
      >
        View All Tickets
      </a>

      <div class="pricing">
        <div class="price-item">
          <p class="amount">£12</p>
          <p class="label">Per Ticket</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const events = [
  {
    name: 'Halloween Quiz',
    url: 'https://bowes-park-pride.sumupstore.com/product/halloween-quiz-tickets',
    soldOut: true,
  },
  {
    name: 'Camp Christmas Quiz',
    date: 'Thursday 10th December 2026',
    url: 'https://bowes-park-pride.sumupstore.com/product/camp-christmas-quiz-tickets',
  },
  {
    name: 'Traitors Quiz',
    date: 'Thursday 21st January 2027',
    url: 'https://bowes-park-pride.sumupstore.com/product/traitors-quiz',
  },
]
</script>

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

.venue {
  font-family: var(--font-sans);
  color: var(--muted);
  font-size: 0.875rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}

.events {
  list-style: none;
  margin: 0 0 3rem;
  padding: 0;
  border: 1px solid var(--faint);
  text-align: left;
}

.event {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;

  & + & {
    border-top: 1px solid var(--faint);
  }
}

.event-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--chalk);
}

.event-date {
  font-family: var(--font-sans);
  color: var(--muted);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.event-btn {
  flex-shrink: 0;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
}

.sold-out {
  flex-shrink: 0;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  border: 1px solid var(--faint);
  padding: 0.75rem 1.5rem;
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
