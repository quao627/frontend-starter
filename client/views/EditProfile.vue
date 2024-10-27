<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const profile = ref({
  name: "Ao",
  gender: "Male",
  expertise: "Logistics Management",
  interests: "Supply Chain, Data Analytics",
  pastExperience: "5 years in logistics and supply chain management",
});

const saveProfile = () => {
  console.log("Profile saved:", profile.value);
  axios
    .patch(`http://localhost:3000/api/profiles`, { profile: profile.value })
    .then(() => {
      router.push(`/profile/${route.params.id}`).catch((error) => {
        console.error("Navigation error:", error);
      });
    })
    .catch((error) => {
      console.error("Failed to save profile:", error);
    });
};

const cancelEdit = () => {
  router.push(`/profile/${route.params.id}`).catch((error) => {
    console.error("Navigation error:", error);
  });
};
</script>

<template>
  <div class="edit-profile-container">
    <h2>Edit Profile</h2>

    <form @submit.prevent="saveProfile">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="profile.name" />
      </div>

      <!-- Gender Field -->
      <div class="form-group">
        <label for="gender">Gender</label>
        <select id="gender" v-model="profile.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <!-- Expertise Field -->
      <div class="form-group">
        <label for="expertise">Expertise</label>
        <input type="text" id="expertise" v-model="profile.expertise" />
      </div>

      <!-- Interests Field -->
      <div class="form-group">
        <label for="interests">Interests</label>
        <input type="text" id="interests" v-model="profile.interests" />
      </div>

      <!-- Past Experience Field -->
      <div class="form-group">
        <label for="pastExperience">Past Experience</label>
        <textarea id="pastExperience" v-model="profile.pastExperience"></textarea>
      </div>

      <!-- Save and Cancel Buttons -->
      <div class="form-actions">
        <button type="submit" class="save-btn">Save</button>
        <button type="button" @click="cancelEdit" class="cancel-btn">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.edit-profile-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

textarea {
  height: 80px;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.save-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.save-btn:hover {
  background-color: #0056b3;
}

.cancel-btn {
  background-color: #ccc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.cancel-btn:hover {
  background-color: #999;
}
</style>
