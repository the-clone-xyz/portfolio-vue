<template>
  <section id="contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="sendMessage">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <input v-model="email" type="email" placeholder="Your Email" required />
      <textarea
        v-model="message"
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      alert(`Message from ${this.name} sent successfully!`);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
