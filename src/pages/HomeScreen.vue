<template>
  <AppDrawer
    v-model="drawer"
    @go="go"
  />

  <v-card>
    <AppHeader
      v-model="tab"
      :items="items"
      @toggle-drawer="drawer = !drawer"
      @select-tab="goToCategory"
      @select-sub="selectSubItem"
    />

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in items"
        :key="item.name"
        :value="item.name"
      >
        <!-- Optional content per tab -->
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>

  <v-container class="bg-surface-variant mb-6">
    <v-row
      align="center"
      style="height: 500px;"
      no-gutters
    >
      <v-col
        v-for="n in 1"
        :key="n"
      >
        <v-sheet class="pa-2 ma-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AppDrawer from '@/components/AppDrawer.vue'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()
const drawer = ref(false)
const tab = ref(null)

const items = [
  { name: 'Technology',    subItems: ['Mobiteli','Laptopi','Televizori'] },
  { name: 'Groceries',     subItems: ['Voće','Povrće','Meso'] },
  { name: 'Home and garden', subItems: ['Namještaj','Biljke','Alati'] },
  { name: 'Sport and fashion', subItems: ['Odjeća','Obuća','Fitness'] },
  { name: 'Health and beauty', subItems: ['Kozmetika','Dodaci prehrani','Lijekovi'] },
]

function go(path) {
  router.push(path)
}

function goToCategory(name) {
  const slug = name.toLowerCase().replace(/\s+/g,'-')
  router.push(`/stores/category/${slug}`)
}

function selectSubItem(main, sub) {
  tab.value = main
  console.log(`Selected ${sub} in ${main}`)
}
</script>
