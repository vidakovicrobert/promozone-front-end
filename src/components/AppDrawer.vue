<template>
  <v-navigation-drawer
    v-model="internalDrawer"
    class="bg-green"
    theme="dark"
    temporary
  >
    <template #append>
      <div class="pa-2">
        <v-btn
          block
          @click="logout"
        >
          Logout
        </v-btn>
      </div>
    </template>

    <v-list>
      <v-list-item @click="$emit('go', '/login')">
        <v-list-item-title>Login/Register</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('go', '/stores')">
        <v-list-item-title>All Stores</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('go', '/flyers')">
        <v-list-item-title>Flyers</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue','go'])

// Two-way binding for v-model
const internalDrawer = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

function logout() {
  // Add your logout logic here
  emit('go', '/login')
}
</script>
