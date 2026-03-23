<template>
  <section id="mailing-list" class="py-28 px-6">
    <div class="max-w-2xl mx-auto text-center">
      <p class="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-4">Stay in the Loop</p>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-chalk mb-4">
        Join the Mailing List
      </h2>
      <p class="font-sans text-muted mb-12 leading-relaxed">
        Be the first to know about upcoming quiz nights, early bird tickets, and all the fabulous gossip.
      </p>

      <form class="flex flex-col sm:flex-row gap-3" @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          required
          placeholder="your@email.com"
          class="flex-1 bg-ink border border-faint px-4 py-3 text-chalk font-sans text-sm focus:outline-none focus:border-chalk transition-colors placeholder:text-faint"
        />
        <button
          type="submit"
          :disabled="status === 'sending' || status === 'subscribed'"
          class="btn-primary whitespace-nowrap"
        >
          {{ status === 'sending' ? 'Subscribing…' : status === 'subscribed' ? 'Subscribed!' : 'Subscribe' }}
        </button>
      </form>

      <p v-if="status === 'subscribed'" class="mt-4 font-sans text-sm text-muted">
        You're on the list. See you at the next quiz!
      </p>
      <p v-if="status === 'error'" class="mt-4 font-sans text-sm text-red-400">
        Something went wrong. Please try again.
      </p>
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
