<template>
  <div class="profile-info-container">
    <h3>Profile Information</h3>
    <p><strong>Expertise:</strong> {{ expertise }}</p>
    <p><strong>Interests:</strong> {{ interests }}</p>
    <p><strong>Past Experience:</strong> {{ pastExperience }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  expertise: String,
  interests: String,
  pastExperience: String,
});
</script>

<style scoped>
.profile-info-container {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.profile-info-container h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
}

.profile-info-container p {
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
}

strong {
  font-weight: 600;
  color: #333;
}
</style>
