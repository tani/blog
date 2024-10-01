<template>
  <div class="w-[fit-content] mx-auto font-sans">
    <Header />
    <div class="flex gap-4">
      <main class="prose prose-zinc">
        <article>
          <ContentDoc />
        </article>
      </main>
      <aside class="w-[20ch]">
        <section class="prose prose-gray border-l border-l-solid pl-5">
          <Profile />
        </section>
      </aside>
    </div>
    <Footer />
  </div>
</template>
