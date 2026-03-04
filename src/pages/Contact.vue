<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/emailjs'

// Initialize EmailJS
if (emailConfig?.PUBLIC_KEY) {
  emailjs.init(emailConfig?.PUBLIC_KEY)
}

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const error = ref(false)
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  
  try {
    const templateParams = {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message
    }

    await emailjs.send(
      emailConfig.SERVICE_ID,
      emailConfig.TEMPLATE_ID,
      templateParams
    )

    submitted.value = true
    error.value = false
    
    // Clear form after successful submission
    setTimeout(() => {
      submitted.value = false
      formData.value = { name: '', email: '', message: '' }
      loading.value = false
    }, 3000)
  } catch (err) {
    console.error('Email send error:', err)
    error.value = true
    loading.value = false
  }
}
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <section class="mb-16">
      <h1 class="text-5xl font-bold text-white mb-4">Get In Touch</h1>
      <p class="text-xl text-slate-300">Have a project in mind? Let's talk!</p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <!-- Contact Information -->
      <div class="md:col-span-1">
        <h2 class="text-2xl font-bold text-white mb-8">Contact Information</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Email</h3>
            <a href="mailto:sarfarajansari2000@gmail.com" class="text-blue-400 hover:text-blue-300 transition">
              sarfarajansari2000@gmail.com
            </a>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+918808231700" class="text-blue-400 hover:text-blue-300 transition">
              +91 88082 31700
            </a>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Location</h3>
            <p class="text-slate-300">
              Lucknow, India
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div class="flex gap-4">
              <a href="https://www.linkedin.com/in/sarfaraj-ansari" target="_blank" class="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </a>
              <a href="https://github.com/sarfaraz-ansari" target="_blank" class="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="md:col-span-2">
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 class="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-white font-semibold mb-2">Your Name</label>
              <input 
                v-model="formData.name"
                type="text" 
                placeholder="John Doe"
                required
                class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-white font-semibold mb-2">Email Address</label>
              <input 
                v-model="formData.email"
                type="email" 
                placeholder="john@example.com"
                required
                class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-white font-semibold mb-2">Message</label>
              <textarea 
                v-model="formData.message"
                placeholder="Tell me about your project..."
                rows="6"
                required
                class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              :disabled="loading"
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="submitted" class="mt-6 p-4 bg-green-900 border border-green-700 rounded-lg">
            <p class="text-green-200">✓ Message sent successfully! I'll get back to you soon.</p>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="mt-6 p-4 bg-red-900 border border-red-700 rounded-lg">
            <p class="text-red-200">✗ EmailJS is not configured. Please set up your email service credentials in the config file.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Info -->
    <section class="bg-slate-800 border border-slate-700 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-white mb-4">Available For</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <p class="text-slate-400 mb-2">Full-time Positions</p>
          <p class="text-blue-400">Unavailable</p>
        </div>
        <div>
          <p class="text-slate-400 mb-2">Freelance Projects</p>
          <p class="text-blue-400">Available</p>
        </div>
        <div>
          <p class="text-slate-400 mb-2">Consulting</p>
          <p class="text-blue-400">Available</p>
        </div>
        <div>
          <p class="text-slate-400 mb-2">Mentoring</p>
          <p class="text-blue-400">Available</p>
        </div>
      </div>
    </section>
  </main>
</template>
