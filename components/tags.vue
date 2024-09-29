<script setup lang="ts">
const { data: articles } = await useAsyncData("tags", () =>
  queryContent("/").only("tags").find(),
);
const allTags = articles.value.flatMap((article) => article?.tags ?? []);
const tags = [...new Set(allTags)];
</script>
<template>
	<h2>タグ一覧</h2>
	<ul class="list-none flex gap-2 p-0">
		<li v-for="tag in tags" :key="tag">
      <NuxtLink :href="`/tag/${tag}`">
      {{ tag }}
      </NuxtLink>
    </li>
	</ul>
</template>
