<!-- <template>
    <div class="login-page">
       <h1>Login</h1>
       <form @submit.prevent="handleSubmit">
         <label for="email">Email</label>
         <input type="email" id="email" v-model="email" required />
         <br />
         <label for="password">Password</label>
         <input type="password" id="password" v-model="password" required />
         <br />
         <button type="submit">Login</button>
       </form>
       <section class="bg-gray-50 dark:bg-gray-900">
         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://feventsigegg.wixsite.com/portfolio" alt="logo">
          Moon    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                      dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-green-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-green-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
   </template>
   
   <script>
   export default {
    data() {
       return {
         email: '',
         password: ''
       }
    },
    methods: {
       handleSubmit(e) {
         e.preventDefault();
         this.$store.dispatch('auth/login', {
           email: this.email,
           password: this.password
         });
       }
    }
   }
   </script> -->






   <template>
    <div class="login-page">
       <!-- <h1>Login</h1> -->
       <!-- <form @submit.prevent="logInUser">
         <label for="email">Email</label>
         <input type="email" id="email" v-model="email" required />
         <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600"> {{ error.$message }} </span>
   
         <br />
         <label for="password">Password</label>
         <input v-model="password" type="password" id="password" required />
         <span v-if="v$.email.$error" class="text-red-600">Please enter a valid email</span> -->

         <!-- <span v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-600"> {{ error.$message }} </span> -->
   <!-- <br />
         <button type="submit">Login</button>
       </form> -->
       <section class="bg-gray-50 dark:bg-gray-900">
         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://feventsigegg.wixsite.com/portfolio" alt="logo">
          Moon    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form @submit.prevent="submit" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input v-model="state.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                      dark:focus:border-blue-500" placeholder="name@company.com" required="">
                      <span v-if="v$.email.$error" class="text-red-600">Please enter a valid email</span>

                      <!-- <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600"> {{ error.$message }} </span> -->
                  </div>
   
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="state.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                      <span v-if="v$.password.$error" class="text-red-600"> Password is required</span>
   
                      <!-- <span v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-600"> {{ error.$message }} </span> -->
                  </div>
   
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-green-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <!-- <span v-if="!v$.value.$invalid" class="text-red-600">invallid email or password. {{ error }}</span> -->
                  <!-- <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600"> invalid credential</span> -->
                  <div v-if="error" class="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center max-w-md">

<svg viewBox="0 0 24 24" class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">

    <path fill="currentColor"

        d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">

    </path>

</svg>

<span class="text-red-800"> {{ error }} </span>

</div>
                  <!-- <span class="text-red-600"> error{{ error }}</span> -->
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-green-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
   </template>
    
    
   <script setup>
   
   import { computed, reactive } from 'vue'
   import { useAuthStore } from '../stores/authStore'
   import { storeToRefs } from 'pinia'
   import { useRouter } from 'vue-router'
  //  import NotificationBar from './NotificationBar.vue';
   import useVuelidate from '@vuelidate/core' 
   import { required, email, minLength, helpers } from '@vuelidate/validators'
   const state = reactive({
     email: '',
     password: ''
   })
   const rules = computed(() => {
     return {
       email: {
         required: helpers.withMessage("Email is required", required), 
         email: helpers.withMessage("Please enter a valid email address", email)
       },
   
       password: {
         required: helpers.withMessage("Password is required", required),
         minLength: helpers.withMessage("Password should be at least 8 characters long", minLength(8))
       }
     }
   })
   
   const v$ = useVuelidate(rules, state) 
   const authStore = useAuthStore()
   const { error } = storeToRefs(authStore)
 
   async function submit() {
     const isvalid = await v$.value.$validate()
     if (isvalid) {
       authStore.login({
         email: state.email,
         password: state.password
       })
         console.log('Valid');
     } else {
       console.log('Validation Error');
     }
   }

  //  const router = useRouter();

// //login user

// const logInUser = async () => {
//     v$.value.$validate()
//     if (!v$.value.$invalid) {
//         try {
//             const response = await axios.post('http://localhost:4000/auth/login', { email: email.value, password: password.value })

//             const authStore = useAuthStore()
//             authStore.logIn({ token: response.data.token, user: response.data.user });

//             router.push('jobs');
//         } catch (error) {
//             console.error(error)
//             alert(error.response.data.message);
//         }

//     } else if (v$.value.email.$error) {
//         alert('Please enter a valid email')
//     } else if (v$.value.password.$error) {
//         alert('Password is required')

//     };

// }
//    </script>
   
     