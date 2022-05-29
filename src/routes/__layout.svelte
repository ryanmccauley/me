<script lang="ts">
    import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";
    import { page } from "$app/stores";
    import "../app.css";

    let currentPage: string = "/";

    $: {
        currentPage = $page.url.pathname;
    }
</script>

<Nav bind:currentPage={currentPage} />
<div class="max-w-7xl mx-auto py-6 px-4">
    <slot />
</div>
<Footer />