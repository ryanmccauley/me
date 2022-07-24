<script lang="ts">
    import FaGithub from "svelte-icons/fa/FaGithub.svelte";
    import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
    import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
    import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
    import FaDiscord from "svelte-icons/fa/FaDiscord.svelte";
    import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";

    const RESUME = "https://docs.google.com/document/d/1R4SxnESqQNiC9AaZpAU8EgE45jBJC0BDm1YaXYja61w/edit?usp=sharing";
    const EMAIL = "mccauleyr.com";
</script>

<section class="max-w-7xl mx-auto py-12 px-4 flex flex-col gap-16">
    <div class="flex flex-col items-center gap-3">
        <img class="w-1/5 rounded-full shadow" src="assets/head.jpeg" alt="Me" />
        <h1 class="font-serif font-bold text-4xl">Ryan McCauley</h1>
        <div class="flex items-center gap-4 opacity-80">
            <a href="https://www.github.com/ryanmccauley/" class="h-8 text-black hover:text-gray-700">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/ryanmccauley24/" class="h-8 text-pink-600 hover:text-pink-400">
                <FaInstagram />
            </a>
            <a href="https://www.twitter.com/ryanmccauley24/" class="h-8 text-sky-500 hover:text-sky-300">
                <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/ryanmccauley24/" class="h-8 text-blue-900 hover:text-blue-700">
                <FaLinkedin />
            </a>
            <a href="https://discord.com/users/556928967077003275/" class="h-8 text-indigo-700 hover:text-indigo-500">
                <FaDiscord />
            </a>
            <a href="mailto:ryan@mccauleyr.com" class="h-8 text-gray-700 hover:text-gray-500">
                <FaEnvelope />
            </a>
        </div>
    </div>
    <div class="flex flex-col items-center gap-2">
        <h2 class="font-serif font-bold text-2xl">About Me</h2>
        <p class="text-justify">
            I am a highly motivated person spending my time working on various projects. I enjoy working with other people and have been programming
            since I was 11, about { new Date().getFullYear() - 2015 } years ago. I currently live in Tallahassee, FL where I work as a software engineer at F&I Sentinel
            responsible for working with a team to build their frontend application with VueJS and backend with C#. In my free time, I love to create fun projects and compete
            in programming contests. Since starting high school, I have competed in many competitions including:
            USA Computing Olympiad, Carnegie Mellon Informatics and Mathematics Competition, Florida State University ACM Programming Contest, and many others. Since I have started
            programming, I have accrued knowledge and dabbled in different programming technologies and frameworks including Java, JavaScript, TypeScript, C++, C#, Go, SQL,
            PHP, Python, HTML, CSS, NodeJS, React, Svelte, Vue, MySQL, MongoDB, Redis, CassandraDB, AWS & GCP.
        </p>
    </div>
    <div class="flex flex-col items-center gap-2">
        <h2 class="font-serif text-xl">Interested in working with me?</h2>
        <div class="flex items-center justify-center gap-2 w-1/2">
            <a class="font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-2xl px-4 py-1 w-36 text-center" href={`mailto:${EMAIL}`}>Email</a>
            <a class="font-medium text-blue-600 hover:text-blue-500 border border-blue-600 hover:border-blue-500 rounded-2xl px-4 py-1 w-36 text-center" href={RESUME}>Resume</a>
        </div>
    </div>
</section>