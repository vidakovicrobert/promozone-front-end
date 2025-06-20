<template>
  <v-navigation-drawer
    v-model="drawer"
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
      <v-list-item @click="$emit('go','/login')">
        <v-list-item-title>Login/Register</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('go','/stores')">
        <v-list-item-title>All Stores</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$emit('go','/flyers')">
        <v-list-item-title>Flyers</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'
const props = defineProps({ modelValue: Boolean })
const emit  = defineEmits(['update:modelValue','go'])

const drawer = ref(props.modelValue)

watch(drawer, val => emit('update:modelValue', val))

function logout() {
  // your logout logic here
  emit('go','/login')
}
</script>
