<script setup lang="ts">
import RecentPosts from "@/components/Posts/RecentPosts.vue";
import ProfileInfo from "@/components/Profile/ProfileInfo.vue";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Mock of the logged-in user
const currentUser = ref({
  id: 1,
  name: "Ao",
  gender: "Male",
  posts: 6,
  friends: 123,
  expertise: "Logistics Management",
  interests: "Supply Chain, Data Analytics",
  pastExperience: "5 years in logistics and supply chain management",
});

// Determine if this is the current user's profile or another user
const profile = ref({
  id: route.params.id,
  name: route.params.id === "1" ? "Ao" : "Lee",
  gender: route.params.id === "1" ? "Male" : "Female",
  posts: 6,
  friends: 123,
  expertise: "Logistics and Supply Chain",
  interests: "Data Analysis, Strategy Planning",
  pastExperience: "Worked at XYZ Corporation for 3 years",
});

const isCurrentUserProfile = computed(() => currentUser.value.id === profile.value.id);

const goToEdit = () => {
  //   router.push("/profile/edit");
  console.log("Edit profile clicked");
};

const goToChat = () => {
  //   router.push(`/chat/${profile.value.id}`);
  console.log("Chat with user clicked");
};
</script>

<template>
  <div class="profile-view-container">
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-info">
        <h2>{{ profile.name }} <span class="verified-badge" v-if="isCurrentUserProfile">✔️</span></h2>
        <span class="gender">{{ profile.gender }}</span>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-count">{{ profile.posts }}</span>
            <small>Posts</small>
          </div>
          <div class="stat-item">
            <span class="stat-count">{{ profile.friends }}</span>
            <small>Friends</small>
          </div>
        </div>
        <button v-if="isCurrentUserProfile" @click="goToEdit" class="edit-btn">✏️ Edit</button>
        <button v-else @click="goToChat" class="chat-btn">💬 Chat</button>
      </div>
    </div>

    <!-- Profile Info and Recent Posts as Separate Sections -->
    <div class="profile-sections">
      <ProfileInfo :expertise="profile.expertise" :interests="profile.interests" :pastExperience="profile.pastExperience" />
      <RecentPosts :userId="profile.id" />
    </div>
  </div>
</template>

<style scoped>
/* Main Container */
.profile-view-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

/* Profile Header */
.profile-header {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.profile-info {
  margin-left: 20px;
  flex: 1;
}

.profile-info h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  color: #333;
}

.verified-badge {
  color: #4caf50;
  margin-left: 8px;
}

.gender {
  font-size: 14px;
  color: #666;
}

.stats {
  display: flex;
  gap: 24px;
  margin: 16px 0;
}

.stat-item {
  text-align: center;
}

.stat-count {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.edit-btn,
.chat-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  display: inline-block;
}

.edit-btn:hover,
.chat-btn:hover {
  background-color: #0056b3;
}

/* Profile Sections */
.profile-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
