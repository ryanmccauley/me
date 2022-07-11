<script lang="ts">
    import Link from "../components/Link.svelte";
    import IoIosCloudDownload from 'svelte-icons/io/IoIosCloudDownload.svelte'

    const googleDocs = "https://docs.google.com/document/d/1R4SxnESqQNiC9AaZpAU8EgE45jBJC0BDm1YaXYja61w/edit?usp=sharing";

    const educations = [
        {
            name: "Lawton Chiles High School",
            location: "Tallahassee, FL",
            timePeriod: "August 2019 - Present",
            gpa: {
                value: "4.61",
                scale: "4.0",
            },
            activities: "Coding Club (President), Cybersecurity Club (Vice President) Cubing Club (Vice President), VEX Robotics Club (Vice President) Inter Club Council (Webmaster), Mu Alpha Theta (Webmaster), Wharton Investment Club (Webmaster), App Development Club (Lead Developer), Chemistry Club (Secretary)",
            descriptions: [
                "A total of 25 Advanced Placement and Dual Enrollment courses taken.",
                "1540 SAT Score",
            ],
        },
        {
            name: "Florida State University",
            location: "Tallahassee, FL",
            timePeriod: "August 2021 - Present",
            gpa: {
                value: "4.0",
                scale: "4.0",
            },
            activities: "ACM International Collegiate Programming Contest Club",
            descriptions: [],
            coursework: [
                "CGS3066: Web Design & Programming",
                "CGS3406: Objected-Oriented Programming in C++",
                "CGS3416: Java Programming for Non Specialists",
                "COP2258: Problem Solving with Objected-Oriented Programming",
                // "COP3014: Programming I",
                // "COP3363: Introduction to Programming with C++",
                // "CGS3465: Introduction to Python Programming",
            ]
        },
        {
            name: "Tallahassee Community College",
            location: "Tallahassee, FL",
            timePeriod: "January 2022 - May 2022",
            gpa: {
                value: "4.0",
                scale: "4.0",
            },
            descriptions: [],
            coursework: [
                "COP2220: Introduction to C++ Programming",
                "CGS2100: Microcomputer Applications for Business",
            ],
        },
        {
            name: "Stanford University",
            subprogram: "High School Summer College",
            location: "Online",
            timePeriod: "June 2021 - August 2021",
            gpa: {
                value: "4.112",
                scale: "4.0",
            },
            descriptions: [],
            coursework: [
                "CS106B: Programming Abstractions",
                "CS193C: Client-Side Internet Technologies",
            ],
        },
        {
            name: "Princeton University",
            subprogram: "Program in Algorithmic and Combinatorial Thinking",
            location: "Online",
            timePeriod: "June 2022 - Present",
            gpa: {
                value: "N",
                scale: "A",
            },
            descriptions: [],
        },
    ];

    const experiences = [
        {
            company: {
                name: "F&I Sentinel",
                website: "https://fandisentinel.com/",
            },
            role: "Software Engineer",
            start: "May 2022",
            end: "Present",
            location: "Tallahassee, FL",
            descriptions: [
                "Worked with a team to create new features on the frontend using VueJS and on the backend using C# .NET.",
            ]
        },
        {
            company: {
                name: "Mission Mentor",
                website: "https://www.missionmentor.org/",
            },
            role: "Software Engineer Intern",
            start: "February 2022",
            end: "May 2022",
            location: "Boston, MA",
            descriptions: [
                "Worked with a team to implement new features on the frontend using React.",
            ]
        },
        {
            company: {
                name: "Nomja",
            },
            role: "Founder",
            start: "December 2020",
            end: "September 2021",
            location: "Tallahassee, FL",
            descriptions: [
                "Collaborated with other founders to create a B2B SaaS retail and restaurant software company.",
                "Developed a full-stack web application written with Go, JavaScript & Python and implemented MongoDB, Redis, ReactJS & Twilio that allowed users to manage their accounts."
            ]
        }
    ];

    const volunteering = [
        {
            name: "Student Volunteer",
            location: "Leon County Schools",
            descriptions: ["Assisted a teacher at Montford Middle School with grading and creating course work."],
            timePeriod: "December 2019 - Present",
        },
        {
            name: "Tutor & Web Developer",
            location: "Helping Hand Tutoring",
            descriptions: ["Constructed and maintained a web application using ReactJS that allows students to sign up for tutoring sessions for various subjects."],
            timePeriod: "May 2020 - Present",
        },
    ];

    const awards = [
        {
            name: "USA Computing Olympiad Silver Division",
            date: "December 2020",
            tag: "Programming",
        },
        {
            name: "45th place in the Carnegie Mellon Informatics and Mathematics Competition (CMIMC) Optimization Round",
            date: "January 2021",
            tag: "Programming",
        },
        {
            name: "12th place in the Florida State University ACM Spring Programming Contest",
            date: "March 2021",
            tag: "Programming",
        },
        {
            name: "Silver Medalist in the National Spanish Exam (NSE) Level 4",
            date: "April 2021",
            tag: "Languages",
        },
        {
            name: "AP Scholar with Distinction",
            date: "July 2021",
            tag: "Academic",
        },
        {
            name: "1st place in the Florida Virtual School Coding Competition",
            date: "May 2021",
            tag: "Programming",
        },
        {
            name: "Florida Biliteracy Seal in Spanish",
            date: "July 2021",
            tag: "Languages",
        },
        {
            name: "2nd place in the Florida State University ACM Fall Programming Contest",
            date: "October 2021",
            tag: "Programming",
        },
        {
            name: "19th place in the University of Pennsylvania Philadelphia Classic Programming Contest",
            date: "November 2021",
            tag: "Programming",
        },
        {
            name: "3rd place in the Capital Regional Science and Engineering Fair",
            date: "February 2022",
            tag: "Academic",
        },
        {
            name: "Silver Medalist in the National Spanish Exam (NSE) Level 5",
            date: "May 2022",
            tag: "Languages",
        },
        {
            name: "Bronze Medalist in the National Portuguese Exam (NPE) Level 1",
            date: "May 2022",
            tag: "Languages",
        },
        {
            name: "Florida State Science and Engineering Fair (SSEF) Finalist",
            date: "March 2022",
            tag: "Academic",
        },
        {
            name: "23rd place in the Carnegie Mellon Informatics and Mathematics Competition (CMIMC) Optimization Round",
            date: "March 2022",
            tag: "Programming",
        },
        {
            name: "US National Chemistry Olympiad (USNCO) National Finalist",
            date: "April 2022",
            tag: "Chemistry",
        },
        {
            name: "1st place in the Florida State University ACM Spring Programming Contest",
            date: "April 2022",
            tag: "Programming",
        },
        {
            name: "President's List at Tallahassee Community College",
            date: "May 2022",
            tag: "Academic",
        },
    ];

    awards.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
</script>

<svelte:head>
    <title>Ryan McCauley - Resume</title>
</svelte:head>

<section>
    <div class="border-b py-4">
        <div class="flex items-center justify-end w-full">
            <a href={googleDocs} type="button" class="border border-gray-600 font-sans text-gray-600 rounded-full px-2 flex items-center gap-2">
                <span class="w-4 h-4 block">
                    <IoIosCloudDownload />
                </span>
                Download
            </a>
        </div>
        <h2 class="text-3xl font-serif pb-2">Education</h2>
        {#each educations as school}
        <div class="py-2">
            <div class="flex items-center justify-between font-serif text-xl">
                <div class="flex items-center gap-2">
                    <h3>{ school.name }</h3>
                    {#if school.subprogram }
                    <p class="italic">| { school.subprogram }</p>
                    {/if}
                </div>
                <div class="flex items-center gap-2 text-lg">
                    <p class="italic">{ school.timePeriod }</p>
                    |
                    <p>{ school.location }</p>
                </div>
            </div>
            <p class="font-serif">GPA: { school.gpa.value }/{ school.gpa.scale }</p>
            <ul class="list-disc mx-8">
                {#if school.activities }
                    <li><span class="font-medium">Activities:</span> { school.activities }</li>
                {/if}
                {#each school.descriptions as description}
                    <li>{ description }</li>
                {/each}
            </ul>
            {#if school.coursework }
                <p class="font-serif">Selected Coursework:</p>
                <ul class="list-disc mx-8">
                    {#each school.coursework as course}
                    <li>{ course }</li>
                    {/each} 
                </ul>   
            {/if}
        </div>
        {/each}
    </div>
    <div class="py-4 border-b">
        <h2 class="text-3xl font-serif pb-2">Experience</h2>
        {#each experiences as experience}
        <div class="py-2">
            <div class="flex items-center justify-between font-serif text-xl">
                <h3>{ experience.role } at <Link styling={experience.company.website != undefined} href={experience.company.website}>{experience.company.name}</Link></h3>
                <div class="flex items-center gap-2 text-lg">
                    <p class="italic">{ experience.start } - { experience.end }</p>
                    |
                    <p>{ experience.location }</p>
                </div>
            </div>
            <ul class="list-disc mx-8">
                {#each experience.descriptions as description}
                <li>{ description }</li>
                {/each}
            </ul>
        </div>
        {/each}
    </div>
    <div class="py-4 border-b">
        <h2 class="text-3xl font-serif pb-2">Volunteering</h2>
        {#each volunteering as volunteer}
        <div class="py-2">
            <div class="flex items-center justify-between font-serif text-xl">
                <h3>{ volunteer.name } at { volunteer.location }</h3>
                <div class="flex items-center gap-2 text-lg">
                    <p class="italic">{ volunteer.timePeriod }</p>
                </div>
            </div>
            <ul class="list-disc mx-8">
                {#each volunteer.descriptions as description}
                <li>{ description }</li>
                {/each}
            </ul>
        </div>
        {/each}
    </div>
    <div class="py-4">
        <h2 class="text-3xl font-serif pb-2">Awards</h2>
        <div class="masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-4-col">
        {#each awards as award}
            <div class="break-inside border border-gray-300 bg-gray-200 p-2 font-serif mb-3">
                <h4 class="text-xl ordinal">{ award.name }</h4>
                <div class="flex items-center justify-between">
                    <p class="italic">{ award.date }</p>
                    <p class="border text-sm border-gray-600 font-sans text-gray-600 rounded-full px-2">{ award.tag }</p>
                </div>
            </div>    
        {/each}
        </div>
    </div>
</section>
