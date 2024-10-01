<script setup lang="ts">
import Footer from "../components/footer.vue";
import Profile from "../components/profile.vue";
import Tags from "../components/tags.vue";
</script>
<template>
	<div class="w-[fit-content] mx-auto">
		<Header />
		<div class="flex justify-center gap-4">
			<main class="prose prose-zinc">
				<h2>記事一覧</h2>
				<ContentList v-slot="{ list }">
					<article v-for="article in list" :key="article._path">
						{{ article.title }}
						{{ article.description }}
					</article>
				</ContentList>
			</main>
			<aside class="w-[20ch]">
				<section>
					<Profile />
				</section>
				<section>
					<Tags />
				</section>
			</aside>
		</div>
		<Footer />
	</div>
</template>
