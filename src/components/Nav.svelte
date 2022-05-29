<script lang="ts">
    import { page } from '$app/stores';
    import Link from './Link.svelte';

    export let currentPage: string;

    const pages = [
        {
            name: "Home",
            href: "/",
            isActive: true,
        },
        {
            name: "Resume",
            href: "/resume",
            isActive: false,
        },
    ];
</script>

<section class="w-100 bg-gray-100 flex flex-col items-center justify-center p-6 gap-2 border-b">
    <h1 class="text-4xl font-serif font-bold">Ryan McCauley</h1>
    <div class="flex items-center gap-2">
    {#each pages as page}
        <Link href={page.href} styling class="text-2xl font-light" underlined={page.href == currentPage}>
            {page.name}
        </Link>
        <!-- <a href={page.href} class="text-blue-600 text-2xl font-light" class:link_underline="{currentPage==page.href}">
            { page.name }
        </a> -->
    {/each}
    </div>
</section>