<script lang="ts">
    import GitHubIcon from "svelte-icons/fa/FaGithub.svelte";
    import DiscordIcon from "svelte-icons/fa/FaDiscord.svelte";
    import TwitterIcon from "svelte-icons/fa/FaTwitter.svelte";
    import LinkedInIcon from "svelte-icons/fa/FaLinkedin.svelte";
    import PictureIcon from "svelte-icons/fa/FaImage.svelte";
    import RightIcon from "svelte-icons/fa/FaAngleRight.svelte";

    const bgSource: string = "https://unsplash.com/@vackground";
    const github: string = "https://github.com/ryanmccauley";
    const discord: string = "https://discord.com/users/556928967077003275";
    const twitter: string = "https://twitter.com/ryanmccauley24";
    const linkedin: string = "https://www.linkedin.com/in/ryanmccauley24";
</script>

<main
    class="h-screen flex flex-col items-center justify-center"
    style="background-image: url('/background.jpg')"
>
    <a
        href={bgSource}
        class="fixed flex items-center gap-2 left-0 bottom-0 p-6
        text-gray-300 hover:text-gray-100 font-medium"
    >
        <span class="block w-4 h-4">
            <PictureIcon />
        </span>
        vackground
    </a>
    <div class="flex flex-col items-start gap-4">
        <div
            class="flex items-center space-x-4 px-6 py-4 rounded-2xl bg-black text-white"
        >
            <a
                href={github}
                class="block h-8 w-8 transition ease-in-out duration-400 hover:scale-110"
            >
                <GitHubIcon />
            </a>
            <a
                href={discord}
                class="block h-8 w-8 transition ease-in-out duration-400 hover:scale-110"
            >
                <DiscordIcon />
            </a>
            <a
                href={twitter}
                class="block h-8 w-8 transition ease-in-out duration-400 hover:scale-110"
            >
                <TwitterIcon />
            </a>
            <a
                href={linkedin}
                class="block h-8 w-8 transition ease-in-out duration-400 hover:scale-110"
            >
                <LinkedInIcon />
            </a>
        </div>
        <a
            href="/"
            class="h1 text-white font-extrabold bg-black p-8 rounded-2xl text-7xl 
            hover:bg-white hover:text-black transition ease-in-out duration-400 hover:scale-105"
            >Ryan McCauley</a
        >
        <div
            class="grid grid-cols-1 md:grid-cols-2 justify-center w-full gap-4"
        >
            <a
                href="/Resume.pdf"
                class="h3 flex items-center gap-2 text-white font-bold bg-black p-8 rounded-2xl text-4xl
            hover:bg-white hover:text-black transition ease-in-out duration-400 hover:scale-105"
            >
                <span class="block h-8 w-8">
                    <RightIcon />
                </span>
                Resume
            </a>
            <a
                href="/aboutme"
                class="h3 flex flex-col gap-2 text-white font-bold bg-black p-8 rounded-2xl text-4xl
            transition ease-in-out duration-400 hover:scale-105"
            >
                <div class="flex items-center gap-2">
                    <span class="block h-8 w-8">
                        <RightIcon />
                    </span>
                    About Me
                </div>
                <span class="block rounded-2xl bg-blue-700 text-lg px-4 py-2"
                    >Coming Soon!</span
                >
            </a>
            <a
                href="/projects"
                class="h3 flex flex-col gap-2 text-white font-bold bg-black p-8 rounded-2xl text-4xl
            transition ease-in-out duration-400 hover:scale-105"
            >
                <div class="flex items-center gap-2">
                    <span class="block h-8 w-8">
                        <RightIcon />
                    </span>
                    Projects
                </div>
                <span class="block rounded-2xl bg-blue-700 text-lg px-4 py-2"
                    >Coming Soon!</span
                >
            </a>
        </div>
    </div>
</main>
