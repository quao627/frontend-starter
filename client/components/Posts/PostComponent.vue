<template>
  <div v-if="post" class="post-card">
    <!-- Post Header -->
    <div class="post-header">
      <div class="author-details">
        <h2 @click="goToProfile" class="author-name">{{ post.author }}</h2>
        <span class="post-state">{{ post.state === "LookingForPeople" ? "🔍 Looking for People" : "💬 General Discussion" }}</span>
      </div>
    </div>

    <!-- Post Content -->
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>

    <!-- Post Footer -->
    <div class="post-footer">
      <div class="likes" @click="$emit('likePost', post.id)">
        <span>👍 {{ post.likes }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  post: Object,
});

const router = useRouter();

const goToProfile = () => {
  // Assuming each post has an `authorId` to identify the author's profile
  if (props.post) {
    router.push(`/profile/${props.post.authorId}`).catch((error) => {
      console.error("Failed to navigate to profile:", error);
    });
  }
};
</script>

<style scoped>
/* Post card styling */
/* click on author name to navigate to author's profile and add underline when hovered */
.author-name {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

.post-card {
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
}

/* Post header with author and avatar */
.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.author-details h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.author-details .post-state {
  font-size: 12px;
  color: #666;
}

/* Post content */
.post-content p {
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 16px;
}

/* Post footer with likes aligned to the right */
.post-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.likes {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #007bff;
  font-size: 16px;
  transition: color 0.2s;
}

.likes:hover {
  color: #0056b3;
}

.likes span {
  display: flex;
  align-items: center;
}
</style>
