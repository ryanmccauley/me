<script lang="ts">
    import FaGithub from "svelte-icons/fa/FaGithub.svelte";
    import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
    import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
    import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
    import FaDiscord from "svelte-icons/fa/FaDiscord.svelte";
    import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
    import Link from "./Link.svelte";
</script>

<footer class="w-100 bg-gray-100 flex flex-col items-center justify-center p-6 gap-2 border-t">
    <div class="flex items-center gap-4">
        <a href="https://www.github.com/ryanmccauley/" class="h-8 text-gray-700">
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/ryanmccauley24/" class="h-8 text-pink-600">
            <FaInstagram />
        </a>
        <a href="https://www.twitter.com/ryanmccauley24/" class="h-8 text-sky-500">
            <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/ryanmccauley24/" class="h-8 text-blue-900">
            <FaLinkedin />
        </a>
        <a href="https://discord.com/users/556928967077003275/" class="h-8 text-indigo-700">
            <FaDiscord />
        </a>
        <a href="mailto:ryanmcly@gmail.com" class="h-8 text-gray-700">
            <FaEnvelope />
        </a>
    </div>
    <div class="flex flex-col md:flex-row gap-1 items-center text-gray-400 font-light">
        <p>Created by Ryan McCauley.</p>
        <p>Inspired by <Link styling href="https://www.ekzhang.com">Eric Zhang</Link>.</p>
    </div>
    <Link class="text-gray-400 text-sm font-light" underlined href="https://app.beampipe.io/domain/ryanmccauley.me">Page Analytics</Link>
</footer>