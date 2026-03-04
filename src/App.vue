<script setup>
import { ref } from 'vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

const currentPage = ref('home')

const pages = {
  home: Home,
  about: About,
  projects: Projects,
  contact: Contact
}

const navigateTo = (page) => {
  currentPage.value = page
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Navigation -->
    <nav class="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <button 
          @click="navigateTo('home')"
          class="text-2xl font-bold text-white hover:text-blue-400 transition cursor-pointer"
        >
          Sarfaraj Ansari
        </button>
        <div class="flex gap-6 text-slate-300">
          <button 
            @click="navigateTo('home')"
            :class="['hover:text-white transition cursor-pointer', { 'text-blue-400': currentPage === 'home' }]"
          >
            Home
          </button>
          <button 
            @click="navigateTo('about')"
            :class="['hover:text-white transition cursor-pointer', { 'text-blue-400': currentPage === 'about' }]"
          >
            About
          </button>
          <button 
            @click="navigateTo('projects')"
            :class="['hover:text-white transition cursor-pointer', { 'text-blue-400': currentPage === 'projects' }]"
          >
            Projects
          </button>
          <button 
            @click="navigateTo('contact')"
            :class="['hover:text-white transition cursor-pointer', { 'text-blue-400': currentPage === 'contact' }]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <component :is="pages[currentPage]" />

    <!-- Footer -->
    <footer class="border-t border-slate-700 mt-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400">
        <p>&copy; 2024 Sarfaraj Ansari. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
