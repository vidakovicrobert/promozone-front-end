<template>
  <v-navigation-drawer
    v-model="drawer"
    class="bg-green"
    theme="dark"
    temporary
  >
    <template #append>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>

    <v-list>
      <v-list-item @click="goToLoginRegister">
        <v-list-item-title>Login/Register</v-list-item-title>
      </v-list-item>
      <v-list-item @click="goToAllStores">
        <v-list-item-title>All stores</v-list-item-title>
      </v-list-item>
      <v-list-item @click="goToFlyers">
        <v-list-item-title>Flyers</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-card>
    <v-toolbar color="green">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>PromoZone</v-toolbar-title>
      <v-spacer />
      <v-btn icon="mdi-magnify" />
      <v-btn icon="mdi-dots-vertical" />

      <template #extension>
        <v-tabs
          v-model="tab"
          align-tabs="title"
        >
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
                @click="goToCategory(item.name)"
              >
                {{ item.name }}
              </v-tab>
            </template>

            <v-list>
              <v-list-item
                v-for="subItem in item.subItems"
                :key="subItem"
                @click="selectSubItem(item.name, subItem)"
              >
                <v-list-item-title>{{ subItem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="item in items"
        :key="item.name"
        :value="item.name"
      >
      <!-- TEXT UNDER TABS
        <v-card flat>
          <v-card-text v-text="text" />
        </v-card>
      -->
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>

  <v-container
    class="bg-surface-variant mb-6"
  >
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const drawer = ref(null);
const tab = ref(null);

/* TEXT UNDER TABS
const text = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
*/

const items = ref([
  {
    name: 'Technology',
    subItems: ['Mobiteli', 'Laptopi', 'Televizori'],
  },
  {
    name: 'Groceries',
    subItems: ['Voće', 'Povrće', 'Meso'],
  },
  {
    name: 'Home and garden',
    subItems: ['Namještaj', 'Biljke', 'Alati'],
  },
  {
    name: 'Sport and fashion',
    subItems: ['Odjeća', 'Obuća', 'Fitness'],
  },
  {
    name: 'Health and beauty',
    subItems: ['Kozmetika', 'Dodaci prehrani', 'Lijekovi'],
  },
]);

const router = useRouter();

const goToCategory = (categoryName) => {
  const formattedCategory = categoryName.toLowerCase().replace(/\s+/g, '-');
  router.push(`/stores/category/${formattedCategory}`);
};

const selectSubItem = (mainTab, subItem) => {
  tab.value = mainTab; // Keeps the parent tab active
  console.log(`Selected: ${subItem} from ${mainTab}`);
};

const goToLoginRegister = () => {
  router.push('/login');
};

const goToAllStores = () => {
  router.push('/stores');
};

const goToFlyers = () => {
  router.push('/flyers');
};
</script>
