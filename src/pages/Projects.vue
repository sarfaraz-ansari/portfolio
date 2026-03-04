<script setup>
import SubscriblyLogo from '../../public/subscribly_logo.png'
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <section class="mb-16">
      <h1 class="text-5xl font-bold text-white mb-4">Projects</h1>
      <p class="text-xl text-slate-300">A showcase of my recent work and achievements</p>
    </section>

    <!-- Featured Project -->
    <section class="mb-20">
      <h2 class="text-3xl font-bold text-white mb-8">Featured Projects</h2>
      <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden mb-12">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="w-full h-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
            <img :src="SubscriblyLogo" alt="subscribly logo">
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-white mb-4">Subscribly (Subscription Management System)</h3>
            <p class="text-slate-300 mb-6">A subscription management system built using astro.</p>
            <div class="mb-6">
              <p class="text-sm font-semibold text-slate-400 mb-3">TECHNOLOGIES USED</p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">Astro</span>
                <span class="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">Node.js</span>
                <span class="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">Supabase</span>
                <span class="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full">TypeScript</span>
              </div>
            </div>
            <div class="flex gap-4">
              <a href="https://subscribly.sarfaraj.in/" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                Visit Site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Projects -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-8">Other Notable Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project 1 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
          <div class="w-full h-40 bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center">
            <div class="text-5xl font-bold font-serif text-white/90">AISitehunt</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">AISitehunt (Website Listing Platform)</h3>
            <p class="text-slate-400 mb-4">A website listing platform that allows marketers and owners to promote their websites.</p>
            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700 text-green-300 text-xs px-3 py-1 rounded-full">Vuejs</span>
                <span class="bg-slate-700 text-green-300 text-xs px-3 py-1 rounded-full">Firebase</span>
                <span class="bg-slate-700 text-green-300 text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </div>
            <a href="https://aisitehunt.pages.dev/" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">Visit Site →</a>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
          <div class="w-full h-40 bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
            <div class="text-5xl font-bold font-serif text-white/90">SEOrush</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">SEOrush (Digital Marketing Tools)</h3>
            <p class="text-slate-400 mb-4">A digital marketing tools platform that allows marketers and owners to improve their online presence.</p>
            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700 text-purple-300 text-xs px-3 py-1 rounded-full">Nuxt.js</span>
                <span class="bg-slate-700 text-purple-300 text-xs px-3 py-1 rounded-full">Cloudflare Workers</span>
                <span class="bg-slate-700 text-purple-300 text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </div>
            <a href="https://se-orush-sarfaraz-ansaris-projects-99e158b7.vercel.app/" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">Visit Site →</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
