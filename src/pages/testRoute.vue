<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Test Route</h1>
        <div v-if="loading">
          Loading...
        </div>
        <div v-else-if="error">
          Error: {{ error }}
        </div>
        <div v-else>
          <pre>{{ data }}</pre>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    // Adjust the endpoint to one provided by your server
    const response = await axios.get('/api/test')
    data.value = response.data
  } catch (err) {
    error.value = err.message || 'Unknown error'
  } finally {
    loading.value = false
  }
})
</script>
