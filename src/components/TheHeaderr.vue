<template>
    <header>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <RouterLink to="/" class="flex items-center">
      <img src="/homedocs/images/logo.svg" class="h-8 mr-3" alt="logo Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">logo</span>
  </RouterLink >
  <div class="flex items-center md:order-2">
      <!-- <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
      </button> -->

      <button
      @click="toggleMobileMenu"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-user"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

      <!-- Dropdown menu -->
      <div
      v-if="isMobileMenuOpen"
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
    >
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">name</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@logo.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</RouterLink >
          </li>
          <li>
            <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</RouterLink >
          </li>
          <li>
            <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</RouterLink >
          </li>
          <li>
            <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</RouterLink >
          </li>
        </ul>
      </div>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <RouterLink to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</RouterLink >
      </li>
      <li>
        <RouterLink to="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</RouterLink >
      </li>
      <!-- <li>
        <RouterLink to="/jobs" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LogIn</RouterLink >
      </li> -->
      <li>
        <RouterLink to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</RouterLink >
      </li>
    </ul>
    <div class="hidden md:block md:space-x-3 ">

<button
@click="logOutUser"
v-if="isAuthenticated"
class="border-2 border-green mx-10 px-3 py-2 rounded-full text-center hover:bg-secondary hover:text-green">Log Out</button>
<RouterLink v-else class="border-2 mx-12 border-secondary px-3 py-2 rounded-full text-center hover:bg-green-700 hover:text-white"
to="/login">Log In</RouterLink>
</div>
  </div>
  </div>
</nav>

    </header>
  </template>
  
  <!-- <script>
  export default {
    name: 'TheHeaderr',
  };
  </script> -->
  <!-- <script>
  export default {
    name: 'TheHeader',
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script> -->
  <script setup>
  import { RouterLink } from 'vue-router';
  import { useAuthStore } from '../stores/authStore';
  import { useRouter } from 'vue-router';
  import { computed } from 'vue';
  
  const router = useRouter();
  
  const authStore = useAuthStore();
  const isAuthenticated = computed(() =>  authStore.isAuthenticated);
  
  const logOutUser = () => {
      
      authStore.logOut();
      router.push('/');
      
  }
  
  </script>

<style>
  /* Add your custom styles here */
  </style>