<script lang="ts">
    const projects = [
        {
            name: "Wordle Clone",
            description: "This was my create task project for the AP Computer Science Principles exam. I created a clone of the popular game Wordle.",
            img: "/wordle-example.webp",
            link: "https://github.com/ryanmccauley/wordle/",
            languages: ["Python"]
        }
    ]
</script>

<section>
    <h2 class="text-3xl font-serif pb-2">Projects</h2>
    <div class="grid grid-cols-2 gap-2">
    {#each projects as project}
        <a href={project.link} class="flex items-start gap-4 border border-transparent hover:border-gray-300 p-2">
            <img src={project.img} alt={project.name} class="w-1/6" />
            <div class="flex flex-col gap-1">
                <h4 class="font-serif text-2xl">{ project.name }</h4>
                <p class="text-gray-600">{ project.description }</p>
                <div class="flex items-center gap-1">
                {#each project.languages as language}
                    <span class="border text-sm border-gray-600 font-sans text-gray-600 rounded-full px-2">{ language }</span>
                {/each}
                </div>
            </div>
        </a>
    {/each}
    </div>
</section>