<template>
  <section id="about" class="about">
    <div class="container">
      <div class="header">
        <p class="eyebrow">The Details</p>
        <h2 class="title">About the Quiz</h2>
      </div>

      <div class="grid">
        <div class="card">
          <div class="icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 class="card-title">When</h3>
          <p class="body">
            Once every two months.<br /><br />
            Bar &amp; food available from <strong>6pm</strong><br />
            Quiz starts <strong>7:30pm sharp</strong>
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
          <h3 class="card-title">Where</h3>
          <p class="body">
            <strong>The Hillbilly Social</strong><br />
            101 Myddleton Road<br />
            North London<br />
            <a
              href="https://maps.google.com/?q=101+Myddleton+Road+London"
              target="_blank"
              rel="noopener noreferrer"
              class="directions"
            >
              Get directions →
            </a>
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h3 class="card-title">How It Works</h3>
          <p class="body">
            <strong>£10</strong> early bird<br />
            <strong>£12</strong> full price<br /><br />
            Prizes: camptastic Aldi finds &amp; a very generous bar tab
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding: 7rem 1.5rem;
  border-top: 3px solid transparent;
  border-image: var(--rainbow) 1;
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
}

.grid {
  display: grid;
  gap: 1px;
  background-color: var(--faint);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background-color: var(--ink);
  padding: 2.5rem;
  position: relative;
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

  strong {
    color: var(--chalk);
    font-weight: 500;
  }
}

.directions {
  color: var(--chalk);
  text-decoration: underline;
  text-underline-offset: 4px;
  display: inline-block;
  margin-top: 0.75rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--muted);
  }
}
</style>
