// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        APPRWITE_PROJECT: process.env.APPWRITE_PROJECT,
        APPRWITE_KEY: process.env.APPWRITE_KEY
    }
})
