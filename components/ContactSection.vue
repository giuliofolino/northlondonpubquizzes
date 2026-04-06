<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="header">
        <p class="eyebrow">Get in Touch</p>
        <h2 class="title">Contact Us</h2>
        <p class="subtitle">Questions about the quiz? Want to partner with us? Drop us a message.</p>
      </div>

      <form
        action="https://formspree.io/f/maqpebrw"
        method="POST"
        class="form"
        @submit.prevent="handleSubmit"
      >
        <div class="field">
          <label class="label">Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            required
            class="input"
            placeholder="Your name"
          />
        </div>

        <div class="field">
          <label class="label">Email</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            required
            class="input"
            placeholder="your@email.com"
          />
        </div>

        <div class="field">
          <label class="label">Message</label>
          <textarea
            v-model="form.message"
            name="message"
            rows="5"
            required
            class="input textarea"
            placeholder="What's on your mind?"
          />
        </div>

        <button
          type="submit"
          :disabled="status === 'sending' || status === 'sent'"
          class="btn-primary submit"
        >
          {{ status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent!' : 'Send Message' }}
        </button>

        <p v-if="status === 'sent'" class="message">Thanks! We'll be in touch soon.</p>
        <p v-if="status === 'error'" class="message error">
          Something went wrong. Please try again or email us directly.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
const form = ref({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sending | sent | error

async function handleSubmit() {
  status.value = 'sending'
  try {
    const response = await fetch('https://formspree.io/f/maqpebrw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (response.ok) {
      status.value = 'sent'
      form.value = { name: '', email: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 7rem 1.5rem;
  background-color: var(--surface);
  border-top: 3px solid transparent;
  border-image: var(--rainbow) 1;
}

.container {
  max-width: 40rem;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
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
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
}

.label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.input {
  width: 100%;
  background-color: var(--ink);
  border: 1px solid var(--faint);
  padding: 0.75rem 1rem;
  color: var(--chalk);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: var(--faint);
  }

  &:focus {
    border-color: var(--chalk);
  }

  &.textarea {
    resize: none;
  }
}

.submit {
  width: 100%;
  padding: 1rem;
}

.message {
  text-align: center;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--muted);

  &.error {
    color: #f87171;
  }
}
</style>
