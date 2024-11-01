<template>
  <div class="post-list">
    <PostComponent v-for="post in posts" :key="post.id" :post="post" @likePost="likePost" />
  </div>
</template>

<script setup lang="ts">
import PostComponent from "@/components/Posts/PostComponent.vue";
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    author: "SophiaJ",
    content:
      "Looking to build a team for a sustainable packaging startup. We're aiming to reduce plastic waste in logistics. Seeking people with a background in supply chain or environmental science. DM if interested!",
    state: "LookingForPeople",
    likes: 36,
  },
  {
    id: 2,
    author: "DavidR",
    content: "Anyone attending the Logistics and Tech conference next month? Let's discuss travel logistics and maybe arrange a meetup!",
    state: "EventDiscussion",
    likes: 19,
  },
  {
    id: 3,
    author: "EmmaG",
    content: "Looking for advice on optimizing delivery routes for small businesses. Trying to balance speed and cost-effectiveness. Any experienced logisticians willing to share insights?",
    state: "GeneralDiscussion",
    likes: 22,
  },
  {
    id: 4,
    author: "MikeT",
    content: "Building a research paper on AI applications in logistics. Need someone familiar with data analysis and supply chain management to co-author.",
    state: "LookingForPeople",
    likes: 12,
  },
  {
    id: 5,
    author: "LucyH",
    content: "Can we discuss the recent changes in international shipping policies? How are you all adjusting? Looking forward to some insights from the community.",
    state: "GeneralDiscussion",
    likes: 28,
  },
  {
    id: 6,
    author: "MarkZ",
    content: "Logistics intern here, curious about career paths in logistics. What skills should I focus on to break into management roles?",
    state: "GeneralDiscussion",
    likes: 33,
  },
  {
    id: 7,
    author: "TinaF",
    content: "Planning a community workshop on sustainable supply chains and ethical sourcing. Anyone interested in collaborating or sharing resources?",
    state: "LookingForPeople",
    likes: 24,
  },
  {
    id: 8,
    author: "CarlosM",
    content: "What are your thoughts on the latest logistics automation technologies? Are they truly making a difference or just adding complexity?",
    state: "GeneralDiscussion",
    likes: 31,
  },
  {
    id: 9,
    author: "OliviaK",
    content: "Looking for a project partner for a study on last-mile delivery optimization. Ideally, someone with a background in urban planning or supply chain.",
    state: "LookingForPeople",
    likes: 18,
  },
  {
    id: 10,
    author: "RyanL",
    content: "Hosting a virtual panel on logistics innovations next week. Let me know if anyone is interested in being a speaker or just joining the discussion!",
    state: "EventDiscussion",
    likes: 40,
  },
]);

const likePost = (postId: number) => {
  const post = posts.value.find((post) => post.id === postId);
  if (post) {
    post.likes += 1;
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  background-color: #f0f2f5;
}
</style>
