import { storeToRefs } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "@/stores/user";
import ChatsListView from "@/views/ChatListView.vue";
import ChatView from "@/views/ChatView.vue";
import EditProfile from "@/views/EditProfile.vue";
import EventView from "@/views/EventView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import PostView from "@/views/PostView.vue";
import ProfileView from "@/views/ProfileView.vue";
import SettingView from "@/views/SettingView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: PostView,
    },
    {
      path: "/setting",
      name: "Settings",
      component: SettingView,
      meta: { requiresAuth: true },
    },
    {
      path: "/post",
      name: "Post",
      component: PostView,
      meta: { requiresAuth: true },
    },
    {
      path: "/create-post",
      component: () => import("@/components/Posts/CreatePostForm.vue"),
    },
    {
      path: "/event",
      name: "Event",
      component: EventView,
      meta: { requiresAuth: true },
    },
    {
      path: "/events/:id",
      component: () => import("@/components/Event/EventDetail.vue"),
    },
    {
      path: "/chat",
      name: "Chat",
      component: ChatsListView,
      meta: { requiresAuth: true },
    },
    {
      path: "/chat/:id",
      component: ChatView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile/:name",
      component: ProfileView,
    },
    {
      path: "/profile/edit",
      component: EditProfile,
    },
    // {
    //   path: "/profile/edit",
    //   component: () => import("@/components/Profile/EditProfile.vue"), // This is the edit profile page
    // },
    // {
    //   path: "/chat/:id",
    //   component: () => import("@/components/Chat/ChatView.vue"), // Chat with user
    // },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: { requiresAuth: false },
      beforeEnter: (to, from) => {
        const { isLoggedIn } = storeToRefs(useUserStore());
        if (isLoggedIn.value) {
          return { name: "Settings" };
        }
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

/**
 * Navigation guards to prevent user from accessing wrong pages.
 */
router.beforeEach((to, from) => {
  const { isLoggedIn } = storeToRefs(useUserStore());

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    return { name: "Login" };
  }
});

export default router;
