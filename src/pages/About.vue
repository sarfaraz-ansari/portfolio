<script setup>
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <section class="mb-16">
      <h1 class="text-5xl font-bold text-white mb-4">About Me</h1>
      <p class="text-xl text-slate-300">Know more about my background and expertise</p>
    </section>

    <!-- About Content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div class="md:col-span-2">
        <h2 class="text-3xl font-bold text-white mb-6">Who I Am</h2>
        <div class="space-y-4 text-slate-300 text-lg leading-relaxed">
          <p>
            I'm Sarfaraj Ansari, a full-stack web developer with a passion for creating clean, efficient, and user-friendly web applications. With several years of experience in web development, I've had the opportunity to work on various projects that range from simple websites to complex web applications.
          </p>
          <p>
            My journey in web development started with a curiosity about how websites work. Over time, I've developed expertise in modern front-end frameworks like Vue.js and React, and robust back-end solutions using Node.js and various databases.
          </p>
          <p>
            I believe in writing clean code, following best practices, and continuously learning new technologies. My approach to development is focused on solving real problems and delivering value to users.
          </p>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="space-y-6">
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div class="text-4xl font-bold text-blue-400 mb-2">3+</div>
          <p class="text-slate-300">Years of Experience</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div class="text-4xl font-bold text-blue-400 mb-2">10+</div>
          <p class="text-slate-300">Projects Completed</p>
        </div>
        <!-- <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div class="text-4xl font-bold text-blue-400 mb-2">30+</div>
          <p class="text-slate-300">Happy Clients</p>
        </div> -->
      </div>
    </div>

    <!-- Skills Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-white mb-8">Technical Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Frontend</h3>
          <ul class="space-y-2 text-slate-300">
            <li>✓ Vue.js</li>
            <li>✓ React</li>
            <li>✓ Tailwind CSS</li>
            <li>✓ JavaScript / TypeScript</li>
            <li>✓ HTML5 / CSS3</li>
            <li>✓ Responsive Design</li>
          </ul>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Backend</h3>
          <ul class="space-y-2 text-slate-300">
            <li>✓ Node.js</li>
            <li>✓ Express.js</li>
            <li>✓ MongoDB</li>
            <li>✓ MySQL / Supabase</li>
            <li>✓ REST APIs</li>
          </ul>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Tools & Others</h3>
          <ul class="space-y-2 text-slate-300">
            <li>✓ Git / GitHub</li>
            <li>✓ Docker</li>
            <li>✓ Vite / Webpack</li>
            <li>✓ Responsive Design</li>
            <li>✓ Firebase</li>
            <li>✓ Shopify</li>
            <li>✓ Figma Plugin</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-8">Education & Qualifications</h2>
      <div class="space-y-6">
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-2">Bachelor of Technology in Information Technology</h3>
          <p class="text-blue-400 mb-2">AKTU Lucknow | 2020 - 2024</p>
          <p class="text-slate-400">Completed degree with focus on web development and software engineering.</p>
        </div>
      </div>
    </section>
  </main>
</template>
