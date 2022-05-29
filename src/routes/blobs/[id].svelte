<script lang="ts">
    import { onMount } from "svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = `
  # This is a test markdown example

This is a test paragraph`;
</script>

<div class="max-w-7xl mx-auto py-6 px-4 mb-auto prose">
    <SvelteMarkdown {source} />
</div>