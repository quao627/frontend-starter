<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import RecentPosts from "../components/Posts/RecentPosts.vue";
import ProfileInfo from "../components/Profile/ProfileInfo.vue";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
const route = useRoute();
const router = useRouter();
const profile = ref({
  id: 0,
  verified: true,
  name: "NA",
  gender: "NA",
  expertise: "NA",
  interests: "NA",
  pastExperience: "NA",
  posts: 0,
  friends: 0,
});
const IsVerified = computed(() => {
  return profile.value.verified;
});

const isCurrentUserProfile = computed(() => {
  return route.params.name == undefined || route.params.name === currentUsername.value;
});

// Updated fetchProfile function to update profile directly
const fetchProfile = async (name: string) => {
  try {
    const userName = name ? name : currentUsername.value;
    const response = await fetch(`http://localhost:3000/api/users/${userName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch user");
    const data = await response.json();
    const userID = Number(data._id);

    const response2 = await fetch(`http://localhost:3000/api/profiles/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response2.ok) throw new Error("Failed to fetch profile");
    const data2 = await response2.json();
    Object.assign(profile.value, data2.profileInfo); // Update profile directly
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

// Call fetchProfile in onMounted to ensure it runs after the component loads
onMounted(async () => {
  await fetchProfile(Array.isArray(route.params.name) ? route.params.name[0] : route.params.name);
});

const goToEdit = async () => {
  try {
    await router.push(`/profile/edit`);
    console.log("Edit profile clicked");
  } catch (error) {
    console.error("Failed to navigate to edit profile:", error);
  }
};

const goToChat = async () => {
  try {
    await router.push(`/chat/${profile.value.id}`);
    console.log("Chat with user clicked");
  } catch (error) {
    console.error("Failed to navigate to chat:", error);
  }
};
</script>

<template>
  <div class="profile-view-container">
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-info">
        <h2>{{ profile.name }} <span class="verified-badge" v-if="IsVerified">✔️</span></h2>
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
