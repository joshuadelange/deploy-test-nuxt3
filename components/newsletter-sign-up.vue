<script setup lang="ts">
    const email = useState('email')

    async function onFormSubmit(event: Event) {
        event.preventDefault()

        const response = await $fetch('/api/sign-up-newsletter')
        console.log(response)
    }
</script>

<template>
    <form @submit="onFormSubmit">
        <h2>Newsletter Sign Up</h2>
        <p>Enter your email address to receive updates.</p>
        <input type="email" v-model="email" />
        <button>Sign Up</button>
    </form>
</template>