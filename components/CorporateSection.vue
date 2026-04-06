<template>
  <section id="corporate" class="corporate">
    <div class="container">
      <div class="header">
        <p class="eyebrow">Private &amp; Corporate Events</p>
        <h2 class="title">Bring the Quiz to You</h2>
        <p class="subtitle">
          Looking for a unique team-building experience or a memorable company social? We bring our
          pub quiz format to your office, venue, or event — fully tailored to your team.
        </p>
      </div>

      <div class="grid">
        <div class="card">
          <div class="icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 class="card-title">Team Building</h3>
          <p class="body">
            A fun, low-pressure way to bring colleagues together. We handle the hosting so you can
            focus on enjoying it.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h3 class="card-title">Fully Customisable</h3>
          <p class="body">
            Bespoke rounds themed around your industry, company history, or just your team's
            obsessions. We make it personal.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 class="card-title">Any Venue</h3>
          <p class="body">
            We come to you — your office, a hired venue, or anywhere in between. We're flexible on
            size and location.
          </p>
        </div>
      </div>

      <div class="footer">
        <p class="footer-text">
          Rates vary depending on group size and requirements. Get in touch and we'll put together a
          quote for you.
        </p>
        <a href="#contact" class="btn-primary">Enquire About Rates</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.corporate {
  padding: 7rem 1.5rem;
  background-color: var(--surface);
}

.container {
  max-width: 72rem;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 1.5rem;
}

.subtitle {
  font-family: var(--font-sans);
  color: var(--muted);
  max-width: 40rem;
  margin: 0 auto;
  line-height: 1.625;
}

.grid {
  display: grid;
  gap: 1px;
  background-color: var(--faint);
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background-color: var(--ink);
  padding: 2.5rem;
  position: relative;
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.icon {
  margin-bottom: 1.5rem;
  color: var(--muted);
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--chalk);
  margin-bottom: 1rem;
}

.body {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.625;
}

.footer {
  text-align: center;
}

.footer-text {
  font-family: var(--font-sans);
  color: var(--muted);
  margin-bottom: 2rem;
}
</style>
