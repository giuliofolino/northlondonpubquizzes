export default defineNuxtConfig({
  ssr: false,
  modules: [],
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      title: 'North London Pub Quizzes',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A fabulously camp, inclusive pub quiz night at The Hillbilly Social, North London. Teams of 6, camptastic prizes & a generous bar tab.',
        },
        { property: 'og:title', content: 'North London Pub Quizzes' },
        {
          property: 'og:description',
          content: 'A fabulously camp, inclusive pub quiz night in North London.',
        },
        { property: 'og:image', content: '/images/og-image.jpg' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-G4VBTRPLBX',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-G4VBTRPLBX');`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap',
        },
      ],
    },
  },
})
