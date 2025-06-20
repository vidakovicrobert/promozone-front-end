<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-tabs v-model="tab">
      <v-tab key="login">
        Login
      </v-tab>
      <v-tab key="register">
        Register
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <!-- LOGIN FORM -->
      <v-tab-item key="login">
        <v-card-text>
          <v-form
            ref="loginForm"
            @submit.prevent="handleLogin"
          >
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-card-actions>
              <v-btn
                type="submit"
                block
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-tab-item>

      <!-- REGISTER FORM -->
      <v-tab-item key="register">
        <v-card-text>
          <v-form
            ref="registerForm"
            @submit.prevent="handleRegister"
          >
            <v-text-field
              v-model="name"
              label="Name"
              required
            />
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-card-actions>
              <v-btn
                type="submit"
                block
              >
                Register
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const tab = ref('login')

const name = ref('')
const email = ref('')
const password = ref('')

// validation rules
const emailRules = [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]

const passwordRules = [
  v => !!v || 'Password is required',
  v => v.length >= 6 || 'Password must be at least 6 characters',
]

// form refs for validation
const loginForm = ref(null)
const registerForm = ref(null)

async function handleLogin() {
  if (!loginForm.value.validate()) {
    return
  }

  try {
    const { data } = await axios.post('/login', {
      email: email.value,
      password: password.value,
    })
    // do something with returned data, e.g. store token
    console.log('Logged in user:', data.user)
    router.push('/')
  } catch (err) {
    console.error(err)
    // show error to user
  }
}

async function handleRegister() {
  if (!registerForm.value.validate()) {
    return
  }

  try {
    const { data } = await axios.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    })
    console.log('Registered user:', data.user)
    // maybe auto-login or switch to login tab
    tab.value = 'login'
  } catch (err) {
    console.error(err)
    // show error to user
  }
}
</script>
