<template>
  <div class="event-detail-container">
    <!-- Back Button -->
    <button class="back-button" @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>

    <!-- Event Details -->
    <h1>{{ event.name }}</h1>
    <p><strong>Description:</strong> {{ event.description }}</p>
    <p><strong>Location:</strong> {{ event.location }}</p>
    <p><strong>Time:</strong> {{ event.time }}</p>

    <!-- Attendees List -->
    <div class="attendees">
      <h2>Who is going</h2>
      <ul>
        <li v-for="attendee in event.attendees" :key="attendee.id" @click="goToProfile(attendee.id)" class="attendee-item">
          {{ attendee.name }}
        </li>
      </ul>
    </div>

    <!-- Register Button -->
    <button class="register-btn">Register</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// Sample event data
const event = ref({
  id: route.params.id,
  name: "Networking Event",
  description: "A networking event for professionals in logistics.",
  location: "City Hall",
  time: "2:00 PM - 4:00 PM",
  attendees: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ],
});

// Function to navigate back
const goBack = () => {
  router.back();
};

// Function to navigate to attendee's profile
const goToProfile = async (attendeeId: number) => {
  try {
    await router.push(`/profile/${attendeeId}`);
  } catch (error) {
    console.error("Failed to navigate to profile:", error);
  }
};
</script>

<style scoped>
/* Event Detail Container */
.event-detail-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 12px;
  color: #555;
}

strong {
  font-weight: 600;
  color: #333;
}

/* Attendees Section */
.attendees {
  margin-top: 24px;
}

.attendees h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}

.attendees ul {
  padding: 0;
  list-style: none;
}

.attendee-item {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.2s;
}

.attendee-item:hover {
  background-color: #e0e0e0;
}

/* Register Button */
.register-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 24px;
}

.register-btn:hover {
  background-color: #0056b3;
}

/* Back Button */
.back-button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 24px;
}

.back-button i {
  margin-right: 8px;
}
</style>
