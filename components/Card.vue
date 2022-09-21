<script setup lang="ts">
interface CardProps {
  card: {
    img: string;
    title: string;
    author: string;
  };
}
const { isDarkMode } = useDarkMode();
defineProps<CardProps>();
</script>

<template>
  <div class="card" :class="isDarkMode ? 'dark-mode' : null">
    <img class="image" :src="card.img" alt="" />
    <div class="content">
      <h3 class="title">{{ card.title }}</h3>
      <p class="author">{{ card.author }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 1px 1px 5px black;
  background: white;
  width: 30%;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
}
.image {
  width: 100%;
  height: 200px;
}
.content {
  padding: 10px;
}
.author {
  margin-top: 10px;
}

.dark-mode.card {
  background-color: black;
  color: white;
}
.dark-mode .title {
}
</style>