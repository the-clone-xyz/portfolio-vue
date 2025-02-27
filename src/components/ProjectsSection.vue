<template>
  <section id="projects">
    <h2>My Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: "Website Raport Online" },
        { id: 2, name: "E-Sertifikat Generator" },
        { id: 3, name: "TikTok Video Downloader" },
      ],
    };
  },
};
</script>
