<script setup lang="ts">
    const email = useState('email')
    const statusMessage = useState('statusMessage')

    async function onFormSubmit(event: Event) {
        event.preventDefault()
        statusMessage.value = null

        const response = await $fetch('/api/sign-up-newsletter', {
            method: 'POST',
            body: JSON.stringify({ email: email.value })
        }).then((response) => JSON.parse(response))

        if(response.type !== undefined) {
            statusMessage.value = response.message
        } else {
            statusMessage.value = 'Your email has been added to the list. 🎉'
        }
    }
</script>

<template>
    <form @submit="onFormSubmit">
        <h2>Newsletter Sign Up</h2>
        <p>Enter your email address to receive updates.</p>
        <input type="email" v-model="email" />
        <button>Sign Up</button>
        <p v-if="statusMessage">{{ statusMessage }}</p>
    </form>
</template>