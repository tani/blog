<template>
  <div class="w-[fit-content] mx-auto font-sans">
    <Header />
    <div class="flex gap-4">
      <main class="prose prose-zinc">
        <h2>記事一覧</h2>
        <ContentList v-slot="{ list }">
          <article v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path">
              {{ article.title }} 
            </NuxtLink>
            <p>
              {{ article.description }}
            </p>
          </article>
        </ContentList>
      </main>
      <aside class="w-[30ch]">
        <section class="prose prose-gray border-l border-l-solid pl-5">
          <Profile />
        </section>
      </aside>
    </div>
    <Footer />
  </div>
</template>
