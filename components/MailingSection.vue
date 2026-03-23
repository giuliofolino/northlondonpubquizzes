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
          {{ status === 'sending' ? 'Subscribing…' : status === 'subscribed' ? 'Check Your Inbox!' : 'Subscribe' }}
        </button>
      </form>

      <p v-if="status === 'subscribed'" class="mt-4 font-sans text-sm text-muted">
        Almost there — check your inbox for a confirmation email and click the link to complete your sign-up.
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

function handleSubmit() {
  status.value = 'sending'

  const callbackName = `ml_cb_${Date.now()}`

  const timeout = setTimeout(() => {
    cleanup()
    status.value = 'error'
  }, 8000)

  function cleanup() {
    clearTimeout(timeout)
    delete window[callbackName]
    const el = document.getElementById(callbackName)
    if (el) el.remove()
  }

  window[callbackName] = (response) => {
    cleanup()
    if (response && response.success) {
      status.value = 'subscribed'
      email.value = ''
    } else {
      status.value = 'error'
    }
  }

  const params = new URLSearchParams({
    'fields[email]': email.value,
    'ml-submit': '1',
    anticsrf: 'true',
    callback: callbackName,
  })

  const script = document.createElement('script')
  script.id = callbackName
  script.src = `https://assets.mailerlite.com/jsonp/1823960/forms/181507484247131920/subscribe?${params}`
  script.onerror = () => {
    cleanup()
    status.value = 'error'
  }
  document.head.appendChild(script)
}
</script>
