<template>
  <div id="app">
    <HeaderComponent />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  components: {
    HeaderComponent,
    HeroSection,
    AboutSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
</style>
