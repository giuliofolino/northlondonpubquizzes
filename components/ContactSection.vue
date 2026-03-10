<template>
  <section id="contact" class="py-28 px-6 bg-surface">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <p class="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">Get in Touch</p>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-chalk mb-4">Contact Us</h2>
        <p class="font-sans text-muted">
          Questions about the quiz? Want to partner with us? Drop us a message.
        </p>
      </div>

      <!--
        Contact form powered by Formspree.
        1. Sign up free at https://formspree.io
        2. Create a new form and copy your form ID
        3. Replace YOUR_FORM_ID below with your actual ID (e.g. "xpwzgkla")
      -->
      <form
        action="https://formspree.io/f/maqpebrw"
        method="POST"
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div>
          <label class="block font-sans text-xs uppercase tracking-[0.12em] text-muted mb-2">
            Name
          </label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            required
            class="w-full bg-ink border border-faint px-4 py-3 text-chalk font-sans text-sm focus:outline-none focus:border-chalk transition-colors placeholder:text-faint"
            placeholder="Your name"
          />
        </div>

        <div>
          <label class="block font-sans text-xs uppercase tracking-[0.12em] text-muted mb-2">
            Email
          </label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            required
            class="w-full bg-ink border border-faint px-4 py-3 text-chalk font-sans text-sm focus:outline-none focus:border-chalk transition-colors placeholder:text-faint"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label class="block font-sans text-xs uppercase tracking-[0.12em] text-muted mb-2">
            Message
          </label>
          <textarea
            v-model="form.message"
            name="message"
            rows="5"
            required
            class="w-full bg-ink border border-faint px-4 py-3 text-chalk font-sans text-sm focus:outline-none focus:border-chalk transition-colors resize-none placeholder:text-faint"
            placeholder="What's on your mind?"
          />
        </div>

        <button
          type="submit"
          :disabled="status === 'sending' || status === 'sent'"
          class="btn-primary w-full !py-4"
        >
          {{ status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent!' : 'Send Message' }}
        </button>

        <p v-if="status === 'sent'" class="text-center font-sans text-sm text-muted">
          Thanks! We'll be in touch soon.
        </p>
        <p v-if="status === 'error'" class="text-center font-sans text-sm text-red-400">
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
