<script setup lang="ts">
const { data: articles } = await useAsyncData("home", () =>
  queryContent("/").find(),
);
</script>
<template>
	<div class="grid grid-cols-4 w-[120ch] mx-auto gap-4">
		<header class="col-span-4">
			<h1>たにぐちのブログ</h1>
		</header>
		<main class="col-span-3 border-t-solid border-b-solid">
			<h2>記事一覧</h2>
			<ul>
				<li v-for="article in articles" :key="article._id">
					{{article.title}} / {{article.description}}
				</li>
			</ul>
		</main>
		<aside class="col-span-1">
			<section>
				<h2>著者情報</h2>
				<code><pre>@tani</pre></code>
				<p>
					数理論理学と形式言語理論に興味をもっています。
					自然言語とプログラミング言語にも興味があります。
				</p>
			</section>
			<section>
				<h2>タグ一覧</h2>
			</section>
			<section>
				<h2>関連記事</h2>
			</section>
		</aside>
		<footer class="col-span-4">
			<p>
				Copyright &copy; 2024 Masaya Taniguchi All Rights Reserved.
			</p>
		</footer>
	</div>
</template>
