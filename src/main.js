// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// HTTP Client
import axios from 'axios'

// Set API base URL
axios.defaults.baseURL = 'http://localhost:4000'

const app = createApp(App)

// Register Vuetify, router, and any other plugins
registerPlugins(app)

app.mount('#app')
