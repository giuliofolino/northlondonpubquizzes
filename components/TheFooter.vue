<template>
  <footer class="footer">
    <div class="rainbow-bar" />
    <div class="inner">
      <div class="main">
        <div class="brand">
          <p class="brand-name">North London Pub Quizzes</p>
          <p class="address">
            The Hillbilly Social &nbsp;·&nbsp; 101 Myddleton Road &nbsp;·&nbsp; North London
          </p>
        </div>

        <div class="links">
          <a
            href="https://www.instagram.com/northlondonpubquizzes"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
            </svg>
          </a>

          <a
            href="https://www.eventbrite.co.uk/o/north-london-pub-quizzes-59899390063"
            target="_blank"
            rel="noopener noreferrer"
            class="text-link"
          >
            Eventbrite
          </a>

          <a href="#contact" class="text-link">Contact</a>
        </div>
      </div>

      <div class="bottom">
        <p>© {{ year }} North London Pub Quizzes. All rights reserved.</p>
        <p>Made with love, glitter &amp; slightly too much prosecco.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--ink);
  border-top: 1px solid var(--faint);
}

.inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--chalk);
  margin-bottom: 0.25rem;
}

.address {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--muted);
}

.links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.icon-link {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--chalk);
  }
}

.text-link {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--chalk);
  }
}

.bottom {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--faint);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--muted);

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
