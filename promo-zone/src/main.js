import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

// Vuetify configuration
const vuetify = createVuetify();

// Create and configure app instance
const app = createApp(App);
app.use(router).use(vuetify).mount('#app');

// Handle potential errors during mounting
app.config.errorHandler = (err) => {
    console.error('Vue App Error:', err);
};
