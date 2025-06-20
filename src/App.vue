<template>
  <v-app>
    <!-- App Drawer and Header moved here -->
    <AppDrawer
      v-model="drawer"
      @go="go"
    />
    <AppHeader
      v-model="tab"
      :items="items"
      @toggle-drawer="drawer = !drawer"
      @select-tab="goToCategory"
      @select-sub="selectSubItem"
    />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AppDrawer from '@/components/AppDrawer.vue'
import AppHeader from '@/components/AppHeader.vue'
//import AppFooter from '@/components/AppFooter.vue'

// Drawer open/close state
const drawer = ref(false)
// Active tab name for header
const tab = ref('')

// Menu items for header tabs
const items = [
  { name: 'Technology',    subItems: ['Mobiteli','Laptopi','Televizori'] },
  { name: 'Groceries',     subItems: ['Voće','Povrće','Meso'] },
  { name: 'Home and garden', subItems: ['Namještaj','Biljke','Alati'] },
  { name: 'Sport and fashion', subItems: ['Odjeća','Obuća','Fitness'] },
  { name: 'Health and beauty', subItems: ['Kozmetika','Dodaci prehrani','Lijekovi'] },
]

const router = useRouter()

// Navigation handler from drawer
function go(path) {
  drawer.value = false // auto-close drawer
  router.push(path)
}

// Category tab click handler
function goToCategory(name) {
  const slug = name.toLowerCase().replace(/\s+/g, '-')
  router.push(`/stores/category/${slug}`)
}

// Sub-item click handler
function selectSubItem(main, sub) {
  tab.value = main
  console.log(`Selected ${sub} from ${main}`)
}
</script>
