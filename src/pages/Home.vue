<script setup>
import SubscriblyLogo from '../../public/subscribly_logo.png'
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Hero Section -->
    <section class="text-center mb-20">
      <h1 class="text-5xl sm:text-6xl font-bold text-white mb-4">Hi, I'm Sarfaraj Ansari</h1>
      <p class="text-xl text-slate-300 mb-8">A passionate full-stack web developer building beautiful and functional digital experiences</p>
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
        <a href="mailto:sarfarajansari2000@gmail.com">
          Get in Touch
        </a>
      </button>
    </section>

    <!-- Featured Skills -->
    <section class="mb-20">
      <h2 class="text-3xl font-bold text-white mb-8">Featured Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4 text-white flex items-center justify-center text-3xl font-semibold font-serif">F</div>
          <h3 class="text-xl font-semibold text-white mb-2">Frontend Development</h3>
          <p class="text-slate-400">Vue.js, React, Tailwind CSS, and modern JavaScript</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4 text-white flex items-center justify-center text-3xl font-semibold font-serif">B</div>
          <h3 class="text-xl font-semibold text-white mb-2">Backend Development</h3>
          <p class="text-slate-400">Node.js, Express, MongoDB, and REST APIs</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4 text-white flex items-center justify-center text-3xl font-semibold font-serif">FS</div>
          <h3 class="text-xl font-semibold text-white mb-2">Full Stack Solutions</h3>
          <p class="text-slate-400">End-to-end development from design to deployment</p>
        </div>
      </div>
    </section>

    <!-- Recent Projects Preview -->
    <section class="mb-20">
      <h2 class="text-3xl font-bold text-white mb-8">Recent Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition">
          <div class="w-full h-40 bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center justify-center">
            <img :src="SubscriblyLogo" alt="Subscribly Logo" class="h-24 w-24">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">Subscribly (Subscription Management System)</h3>
            <p class="text-slate-400 mb-4">A subscription management system built using astro.</p>
            <div class="flex gap-2">
              <span class="bg-slate-700 text-blue-300 text-xs px-3 py-1 rounded-full">Astro</span>
              <span class="bg-slate-700 text-blue-300 text-xs px-3 py-1 rounded-full">Node.js</span>
              <span class="bg-slate-700 text-blue-300 text-xs px-3 py-1 rounded-full">Supabase</span>
              <span class="bg-slate-700 text-blue-300 text-xs px-3 py-1 rounded-full">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
