<script setup lang="ts">
import Footer from "../components/footer.vue";
import Profile from "../components/profile.vue";
import Tags from "../components/tags.vue";
const { data: articles } = await useAsyncData("home", () =>
  queryContent("/").find(),
);
</script>
<template>
	<div class="w-[fit-content] mx-auto">
		<Header />
		<div class="flex justify-center gap-4">
			<main class="prose prose-zinc">
				<h2>記事一覧</h2>
				<ul class="list-none p-0">
					<li class="border border-solid rounded-lg m-2 p-2" v-for="article in articles" :key="article._id">
						<a :href="article._path">
							{{ article.title }}
						</a>
						<p>
							{{ article.description }}
						</p>
					</li>
				</ul>
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
