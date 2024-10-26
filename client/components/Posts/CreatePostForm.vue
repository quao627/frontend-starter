<template>
  <div class="create-post-container">
    <button class="back-button" @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>

    <h1>Create a Post</h1>

    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" v-model="post.author" id="author" required />
      </div>

      <div class="form-group">
        <label for="content">Post Content</label>
        <textarea v-model="post.content" id="content" required></textarea>
      </div>

      <div class="form-group">
        <label for="state">Post Type</label>
        <select v-model="post.state" id="state">
          <option value="LookingForPeople">🔍 Looking for People</option>
          <option value="GeneralDiscussion">💬 General Discussion</option>
        </select>
      </div>

      <button type="submit" class="submit-post-btn">Post</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const post = ref({
  author: "",
  content: "",
  state: "LookingForPeople",
  likes: 0,
});

const submitPost = () => {
  // Logic to submit the post (e.g., API call, store update, etc.)
  console.log("Post submitted:", post.value);
  router.push("/posts").catch((error) => {
    console.error("Failed to navigate:", error);
  });
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.create-post-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 24px;
}

label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  color: #333;
}

input,
textarea {
  width: 95%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

select {
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #007bff;
  box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.2);
}

textarea {
  height: 120px;
  resize: vertical;
}

.submit-post-btn {
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
}

.submit-post-btn:hover {
  background-color: #0056b3;
}

.back-button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 24px;
  transition: color 0.2s;
}

.back-button:hover {
  color: #0056b3;
}

.back-button i {
  margin-right: 8px;
}
</style>
