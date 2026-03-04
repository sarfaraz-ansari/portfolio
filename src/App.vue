<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Navigation -->
    <nav class="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <router-link 
          to="/"
          class="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Sarfaraj Ansari
        </router-link>
        <div class="flex gap-6 text-slate-300">
          <router-link 
            to="/"
            :class="['hover:text-white transition', { 'text-blue-400': route.name === 'Home' }]"
          >
            Home
          </router-link>
          <router-link 
            to="/about"
            :class="['hover:text-white transition', { 'text-blue-400': route.name === 'About' }]"
          >
            About
          </router-link>
          <router-link 
            to="/projects"
            :class="['hover:text-white transition', { 'text-blue-400': route.name === 'Projects' }]"
          >
            Projects
          </router-link>
          <router-link 
            to="/contact"
            :class="['hover:text-white transition', { 'text-blue-400': route.name === 'Contact' }]"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <router-view />

    <!-- Footer -->
    <footer class="border-t border-slate-700 mt-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400">
        <p>&copy; 2026 Sarfaraj Ansari. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
