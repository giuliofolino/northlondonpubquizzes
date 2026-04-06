<template>
  <section id="mailing-list" class="mailing">
    <div class="container">
      <p class="eyebrow">Stay in the Loop</p>
      <h2 class="title">Join the Mailing List</h2>
      <p class="subtitle">
        Be the first to know about upcoming quiz nights, early bird tickets, and all the fabulous
        gossip.
      </p>

      <form class="form" @submit.prevent="handleSubmit">
        <input v-model="email" type="email" required placeholder="your@email.com" class="input" />
        <button
          type="submit"
          :disabled="status === 'sending' || status === 'subscribed'"
          class="btn-primary"
        >
          {{
            status === 'sending'
              ? 'Subscribing…'
              : status === 'subscribed'
                ? 'Check Your Inbox!'
                : 'Subscribe'
          }}
        </button>
      </form>

      <p v-if="status === 'subscribed'" class="message">
        Almost there — check your inbox for a confirmation email and click the link to complete your
        sign-up.
      </p>
      <p v-if="status === 'error'" class="message error">Something went wrong. Please try again.</p>
    </div>
  </section>
</template>

<script setup>
const email = ref('')
const status = ref('idle') // idle | sending | subscribed | error

async function handleSubmit() {
  status.value = 'sending'
  try {
    const params = new URLSearchParams({ 'fields[email]': email.value })
    const response = await fetch(
      `https://assets.mailerlite.com/jsonp/1823960/forms/181507484247131920/subscribe?${params}`,
      { method: 'GET' }
    )
    if (response.ok) {
      status.value = 'subscribed'
      email.value = ''
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<style lang="scss" scoped>
.mailing {
  padding: 7rem 1.5rem;
  border-top: 3px solid transparent;
  border-image: var(--rainbow) 1;
}

.container {
  max-width: 40rem;
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
  margin-bottom: 3rem;
  line-height: 1.625;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
}

.input {
  flex: 1;
  background-color: var(--ink);
  border: 1px solid var(--faint);
  padding: 0.75rem 1rem;
  color: var(--chalk);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: var(--faint);
  }

  &:focus {
    border-color: var(--chalk);
  }
}

.message {
  margin-top: 1rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--muted);

  &.error {
    color: #f87171;
  }
}
</style>
