import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(JSON.parse(localStorage.getItem('firstName')) || {})
  const token = ref(localStorage.getItem('token')|| '')
  const isLoading = ref(false)
  const isAuthenticated = ref(token ? false : true)
  const error = ref('')

  async function login(user) {
    isLoading.value = true
    try {
      const { data } = await axios.post('http://localhost:4000/auth/login', user)
      user.value = data.role
      token.value = data.token
      isAuthenticated.value = true
      localStorage.setItem('token', JSON.stringify(token.value))
      localStorage.setItem('user', JSON.stringify(user.value))

      // console.log('Login', data)
      // console.log('token', data.token)
      // console.log('token', data.user)
      // console.log('token', data.firstName)
      router.push('/jobs')

    } catch (err) {
      error.value = err.response.data.message || 'Error'
      console.log('Error', err)
      router.replace({ name: 'Login' })
    } finally {
      isLoading.value = false
    }
  }

  async function logOut() {
    try {
      // If your backend provides a logout endpoint, you can call it here
      // await axios.post('http://localhost:4000/auth/logout', { token: token.value });

      // Clear user data and reset state
      user.value = '';
      token.value = '';
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      error.value = '';
isAuthenticated.value = false;
      // Redirect to login page
      router.replace({ name: 'login' });
    } catch (err) {
      console.error(err);
    }
  }


  return { user, token, login, logOut, error, isLoading, isAuthenticated }

})




