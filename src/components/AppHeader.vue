<template>
  <v-toolbar color="green">
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />
    <v-toolbar-title>PromoZone</v-toolbar-title>
    <v-spacer />
    <v-btn icon="mdi-magnify" />
    <v-btn icon="mdi-dots-vertical" />

    <template #extension>
      <v-tabs v-model="tab" align-tabs="title">
        <v-menu
          v-for="item in items"
          :key="item.name"
          open-on-hover
          offset-y
          close-on-content-click
        >
          <template #activator="{ props }">
            <v-tab
              v-bind="props"
              :value="item.name"
              @click="$emit('select-tab', item.name)"
            >
              {{ item.name }}
            </v-tab>
          </template>

          <v-list>
            <v-list-item
              v-for="sub in item.subItems"
              :key="sub"
              @click="$emit('select-sub', item.name, sub)"
            >
              <v-list-item-title>{{ sub }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  items: Array
})
const emit = defineEmits(['update:modelValue','select-tab','select-sub','toggle-drawer'])

const tab = ref(props.modelValue)
watch(tab, val => emit('update:modelValue', val))
</script>
