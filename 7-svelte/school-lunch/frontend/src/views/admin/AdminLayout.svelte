<script>
    import { Route } from 'svelte-router-spa'
    import { onMount } from 'svelte'
    import { user } from '../../stores.js'
    
    export let currentRoute
    let initialized = false

    onMount(() => (
        user.set({
            name: 'User', schoolName: 'School'
        }),
        initialized = true
    ))
</script>

<div>
    Admin Layout
    {#if initialized}
        <Route {currentRoute} />
    {/if}
</div>
