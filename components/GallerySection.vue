<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <div class="header">
        <p class="eyebrow">The Vibes</p>
        <h2 class="title">Gallery</h2>
        <p class="subtitle">
          Photos and videos from our fabulous nights. Follow us on Instagram for the full experience.
        </p>
      </div>

      <div class="cta-wrap">
        <a
          href="https://www.instagram.com/northlondonpubquizzes"
          target="_blank"
          rel="noopener noreferrer"
          class="cta"
        >
          <svg class="ig-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            />
          </svg>

          <div class="cta-text">
            <p class="follow">Follow us</p>
            <p class="handle">@northlondonpubquizzes</p>
          </div>

          <svg class="arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
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
  margin-bottom: 1rem;
}

.subtitle {
  font-family: var(--font-sans);
  color: var(--muted);
  max-width: 28rem;
  margin: 0 auto;
}

.cta-wrap {
  display: flex;
  justify-content: center;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--faint);
  background-color: var(--lift);
  padding: 1.5rem 2.5rem;
  text-decoration: none;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--chalk);

    .arrow {
      transform: translateX(6px);
    }
  }
}

.ig-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  color: var(--chalk);
}

.cta-text {
  text-align: left;
}

.follow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  margin-bottom: 0.125rem;
}

.handle {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--chalk);
}

.arrow {
  width: 1rem;
  height: 1rem;
  color: var(--muted);
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}
</style>
