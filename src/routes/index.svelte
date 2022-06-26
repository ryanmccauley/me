<script>
    import Link from "../components/Link.svelte";

    const technologies = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Svelte",
        "Vue",
        "TailwindCSS",
        "Bootstrap",
        "NodeJS",
        "Python",
        "Java",
        "Go",
        "C++",
        "SQL",
        "MongoDB",
        "Redis",
        "CassandraDB",
        "AWS & GCP"
    ]
</script>

<svelte:head>
    <title>Ryan McCauley - Home</title>
</svelte:head>

<div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4">
    <div class="flex flex-col">
        <div class="mb-6 flex flex-col sm:flex-row space-between items-center gap-6">
            <img class="sm:w-1/3 lg:w-1/4" src="https://avatars.githubusercontent.com/u/69946731?v=4" alt="Picture of me!" />
            <div>
                <h2 class="text-3xl font-serif">About</h2>
                <p class="text-lg mb-6">
                    Hi, my name is Ryan McCauley and I am highly passionate about programming. Currently I am a software engineer at
                    <Link styling underlined href="https://fandisentinel.com/">F&I Sentinel</Link>
                    and a student at Lawton Chiles High School. I wrote my first line of code when I was 11, ~6 years ago.
                </p>
                <h2 class="text-2xl font-serif">Interests</h2>
                <p class="text-lg">In my free time, I love to create various projects and compete in programming contests. Since starting high school,
                    I have competed in many competitions including: USA Computing Olympiad, Carnegie Mellon Informatics and Mathematics Competition, Florida State
                    University ACM Programming Contest, and many others.</p>
            </div>
        </div>
        <h2 class="text-2xl font-serif">Skills</h2>
        <p class="text-lg">During my journey programming, I have learned many languages and technologies in various regions of computer science which include:</p>
        <div class="pt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 mb-6">
            {#each technologies as technology}
                <p class="border px-2 py-1 bg-gray-100">{ technology }</p>
            {/each}
        </div>
        <p class="text-lg">If you are interested in working with me, email me at
            <Link styling underlined href="mailto:ryanmcly@gmail.com">
                ryanmcly@gmail.com
            </Link>
        </p>
    </div>
</div>