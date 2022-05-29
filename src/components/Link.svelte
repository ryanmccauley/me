<script lang="ts">
    export let href: string;
    export let styling: boolean = false;
    export let underlined: boolean = false;
    
    let clazz: string = "";
    export { clazz as class };
</script>

<style>
    .link {
        @apply text-blue-500;
    }

    .underlined {
        @apply underline;
    }
</style>

<a href={href} class={`underline-offset-4 decoration-1 ${clazz || ''}`} class:link={styling} class:underlined={underlined}>
    <slot />
</a>