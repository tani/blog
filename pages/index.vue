<script setup lang="ts">
import Footer from "../components/footer.vue";
import Profile from "../components/profile.vue";
</script>
<template>
  <div class="w-[fit-content] mx-auto">
    <Header />
    <div class="flex gap-4">
      <main class="prose prose-zinc">
        <h2>記事一覧</h2>
        <content-list v-slot="{ list }">
          <article v-for="article in list" :key="article._path">
            <nuxt-link :to="article._path">
              {{ article.title }} 
            </nuxt-link>
            <p>
              {{ article.description }}
            </p>
          </article>
        </content-list>
      </main>
      <aside class="w-[20ch]">
        <section>
          <Profile />
        </section>
      </aside>
    </div>
    <Footer />
  </div>
</template>
