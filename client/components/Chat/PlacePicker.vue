<template>
  <div class="place-picker">
    <h3>Pick a Place</h3>
    <ul>
      <li v-for="place in places" :key="place" @click="$emit('selectPlace', place)">📍 {{ place }}</li>
    </ul>
    <button @click="$emit('close')" class="close-btn">Close</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const places = ref(["Central Park", "Museum of Art", "City Library", "Riverwalk"]);
</script>

<style scoped>
.place-picker {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

h3 {
  font-size: 18px;
  margin-bottom: 12px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  background-color: #f9f9f9;
}

li:hover {
  background-color: #e0e0e0;
}

.close-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
}

.close-btn:hover {
  background-color: #0056b3;
}
</style>
