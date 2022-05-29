<script lang="ts">
    import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";
    import { page } from "$app/stores";
    import "../app.css";

    let currentPage: string = "/";
    let isBlobPage: boolean = $page.url.pathname.startsWith("/blobs/");

    $: {
        currentPage = $page.url.pathname;
    }
</script>

{#if isBlobPage}
    <slot />
{:else}
    <main class="flex flex-col min-h-screen justify-between">
        <Nav bind:currentPage />
        <div class="max-w-7xl mx-auto py-6 px-4 mb-auto w-full">
            <slot />
        </div>
        <Footer />    
    </main>
{/if}