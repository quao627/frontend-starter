<template>
  <div class="event-list-container">
    <div class="event-card" v-for="event in events" :key="event.id" @click="goToEvent(event.id)">
      <h3 class="event-name">{{ event.name }}</h3>
      <p class="event-time">📅 Time: {{ event.time }}</p>
      <p class="event-location">📍 Location: {{ event.location }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Example event data
const events = ref([
  { id: 1, name: "Networking Event", time: "3:00 PM - 5:00 PM", location: "City Hall" },
  { id: 2, name: "Logistics Conference", time: "9:00 AM - 12:00 PM", location: "Convention Center" },
  { id: 3, name: "Community Meet-up", time: "6:00 PM - 8:00 PM", location: "Library" },
]);

const router = useRouter();

const goToEvent = async (eventId: number) => {
  try {
    await router.push(`/events/${eventId}`);
  } catch (error) {
    console.error("Failed to navigate to event:", error);
  }
};
</script>

<style scoped>
/* Container for centering the list */
.event-list-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the cards horizontally */
  justify-content: center;
  padding: 16px;
  gap: 20px; /* Space between event cards */
}

/* Event Card Styling */
.event-card {
  width: 100%;
  max-width: 400px; /* Card stays centered and doesn’t expand too much */
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  cursor: pointer;
  text-align: center; /* Center text inside the card */
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.event-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}

.event-time,
.event-location {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.event-time::before,
.event-location::before {
  margin-right: 6px;
}
</style>
