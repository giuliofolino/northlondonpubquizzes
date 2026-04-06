<template>
  <div class="page">
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <TicketsSection />
      <LeaderboardSection />
      <GallerySection />
      <MailingSection />
      <CorporateSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background-color: var(--ink);
  color: var(--chalk);
}
</style>
