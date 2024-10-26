<script setup lang="ts">
import EventList from "@/components/Event/EventList.vue";
</script>

<template>
  <main class="event-view-container">
    <section>
      <EventList />
    </section>
  </main>
</template>

<style scoped>
.event-view-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
}

.search-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
}

.search-input {
  width: 80%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.search-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 8px;
}

section {
  flex-grow: 1;
  overflow-y: auto;
}
</style>
