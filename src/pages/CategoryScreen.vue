<template>
  <v-container>
    <v-row>
      <v-col
        v-for="store in stores"
        :key="store.name"
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-title>{{ store.name }}</v-card-title>
          <v-card-subtitle>{{ store.location }}</v-card-subtitle>
          <v-card-text>
            <p>Category: {{ store.category }}</p>
            <p v-if="store.isFavorite">
              Favorite Store
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const stores = ref([]);
const route = useRoute();
const category = route.params.category; // Get category from route params

// Fetch stores by category
const fetchStores = async (category) => {
  try {
    const response = await axios.get(`http://localhost:4000/stores/category/${category}`);
    stores.value = response.data;
  } catch (error) {
    console.error('Error fetching stores:', error);
  }
};

// Call fetchStores when component is mounted or when category changes
onMounted(() => {
  if (category) {
    fetchStores(category);
  }
});
</script>
