<template>
  <div class="page">
    <TheNavbar />
    <main>
      <HeroSection />
      <RainbowDivider />
      <AboutSection />
      <RainbowDivider />
      <TicketsSection />
      <RainbowDivider />
      <LeaderboardSection />
      <RainbowDivider />
      <GallerySection />
      <RainbowDivider />
      <MailingSection />
      <RainbowDivider />
      <CorporateSection />
      <RainbowDivider />
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
