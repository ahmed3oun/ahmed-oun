const aboutThisWebsiteTranslation = {
  en: {
    goBack: "Go Back",
    about: "About this website",
    code: "Source Code",
    altBaseString: "Ahmed OUN - About this website -",
    navigationMenu: {
      titles: {
        introduction: "Introduction",
        design: "Design & UI",
        techStack: "Tech Stack",
        features: "Features Breakdown",
        deployment: "Deployment & Future Plans",
      },
      links: {
        whyBuilt: "Why I Built This",
        technologiesUsed: "Key Technologies",
        githubStyle: "GitHub-Style Inspiration",
        extractingUI: "Extracting GitHub's UI Elements",
        darkMode: "Dark Mode",
        responsiveness: "Responsiveness",
        nextjs: "Next.js",
        tailwind: "Tailwind CSS & Plain CSS",
        contentful: "Contentful as a CMS",
        prisma: "Prisma & Supabase",
        aiIntegration: "AI Integration",
        uiFrameworks: "UI Frameworks",
        welcome: "Welcome",
        portfolio: "Portfolio",
        writings: "Writings",
        devQuiz: "Dev Quiz",
        discussion: "Discussion",
        contacts: "Contacts",
        manupilot: "ManuPilot AI",
        languages: "Multilanguage Support",
        hosting: "Hosting & CI/CD",
        futurePlans: "What's Next?",
      },
      mobileButton: "Navigation Menu",
    },

    content: {
      introduction: {
        sectionNumber: "1. Introduction",
        whyBuilt: {
          title: "Why I Built This",
          paragraphs: [
            `I had a portfolio before, one of my first React projects. It was cool, with a built-in bot pretending to be me, but over time, I felt it was too generic. It looked like every other portfolio out there, and that's not who I am. I like to do things differently, to create something unusual. <b>Isn't that already part of what makes a portfolio interesting?</b>`,
            `I started looking for inspiration, browsing portfolios across different fields: software engineers, UI/UX designers, photographers, graphic artists. Many were visually stunning, but none felt like the kind of portfolio I wanted. They inspired me not in design, but in concept. I wanted my portfolio to feel like a real project, not just a showcase. A portfolio where people could interact, not just browse.`,
            `💡 Then, it hit me. <b>GitHub</b>`,
            `I love GitHub's minimalist yet effective design. It's built for developers, and let's be real: <b>what developer hasn't used GitHub at least once?</b> That's when I knew: I wanted my portfolio to feel like a GitHub clone. Not just in aesthetics, but in functionality: <b>interactive, intuitive, and dev-friendly</b>.`,
          ],
          keyReasonsTitle: "Key reasons I built this",
          keyReasons: [
            `<b>Showcase my work and writing:</b> A portfolio's core purpose. But beyond projects, I've always wanted a personal blog to share thoughts and ideas.`,
            `<b>Create something dev-friendly (and beyond):</b> Inspired by GitHub, but designed so that anyone can navigate it easily.`,
            `<b>Make it interactive:</b> I didn't want visitors to just look at my site; I wanted them to use it. Features like ManuPilot, Discussion, and Dev Quiz make it engaging and unique, making this portfolio feel like a proper GitHub-like project (or at least in part).`,
            `<b>Improve my own skills:</b> This project pushed me to learn new things, solve challenges, and refine my development workflow.`,
          ],
        },
        technologiesUsed: {
          title: "Technologies I Used",
          paragraphs: [
            `To bring this project to life, I used a combination of modern web technologies, libraries, and tools. Here's what I used to build it.`,
            `Don't worry, I'll go into more detail about each one in the next sections.`,
          ],
          technologies: [
            "Next.js",
            "CSS",
            "Tailwind CSS",
            "Prisma",
            "Supabase",
            "OpenAI",
            "Contentful CMS",
            "ShadCN",
            "GitHub",
            "Vercel",
          ],
          note: `You can grab the source code above. But here's the deal: this project is still a work in progress. Some sections are well-structured, others need refinement. I built it fast, fixed bugs on the fly, and balanced it with other commitments. Whenever I get time, I'll keep improving and optimizing the code.`,
        },
      },
      designAndUI: {
        sectionNumber: "2. Design & UI",
        githubStyle: {
          title: "GitHub-Style Inspirations",
          paragraphs: [
            `As mentioned in the introduction, I wanted my portfolio to <b>look and feel like GitHub</b>, from the <b>layout</b> to the <b>colours</b>, <b>fonts</b>, and overall <b>structure</b>. Some might disagree, but I personally love <b>GitHub&apos;s minimalistic design</b>. Plus, using GitHub as a design inspiration makes sense for a portfolio aimed at <b>developers</b>, who {"("}hopefully{")"} might find it a cool idea.`,
            `While the <b>layout</b> is <b>heavily inspired by GitHub</b>, I still made my own modifications where needed. My site doesn&apos;t have all the features that the real GitHub does, but I <b>replicated as many UI elements as possible</b> {"("}buttons, links, tags, and so on{")"} to maintain a <b>familiar experience</b>.`,
            `Here&apos;s how different sections of my portfolio map to GitHub:`,
          ],
          sections: [
            `<b>Welcome Page</b> → Mirrors a <b>GitHub profile page</b>.`,
            `<b>Portfolio Page</b> → Inspired by the <b>repositories page</b>, but I added my own touch, like the option to switch between <b>list view</b> (GitHub-style) and <b>grid view</b>.`,
            `<b>Project Details Page</b> → Partially inspired by a <b>GitHub repository page</b>, but with changes, like <b>no file navigation</b> and a different way of <b>displaying images</b>.`,
            `<b>Writings Page</b> → A mix between <b>GitHub Blog</b> and <b>GitHub Marketplace</b>.`,
            `<b>Blog Posts</b> → Mimic the <b>GitHub Blog post layout</b>.`,
            `<b>Dev Quiz</b> → A unique feature <b>not found on GitHub</b>, but designed in a way that follows <b>GitHub&apos;s UI style</b>.`,
            `<b>Discussions</b> → Closely resembles a <b>GitHub Discussion thread</b>.`,
            `<b>Contact Page</b> → Doesn&apos;t copy a specific GitHub page but follows a <b>similar layout to a profile page</b>.`,
            `<b>ManuPilot</b> → Both the <b>ManuPilot page</b> and <b>quick chat interface</b> are heavily inspired by <b>GitHub Copilot</b>, making it feel like a natural extension of the GitHub ecosystem.`,
            `<b>Navigation Menu, Profile Bar, and Other UI Elements</b> → All <b>mimic GitHub&apos;s UI</b>, keeping the design consistent.`,
          ],
        },
        extractingUI: {
          title: "Extracting GitHub's UI Elements",
          paragraphs: [
            `To make this portfolio feel like <b>GitHub</b>, I didn&apos;t just eyeball the design, instead I went straight to the source. Using the browser&apos;s <b>Inspect Element</b> tool, I extracted key UI details I was looking for.`,
            `This allowed me to get the same UI elements such as <b>spacing, font sizes, colors, padding, border-radius</b>, and more. GitHub&apos;s color palette follows a very simple and, as I&apos;ve already mentioned, minimalistic pattern.`,
          ],
          darkModeExample: "Example background colours - Dark mode",
          lightModeExample: "Example background colours - Light mode",
        },
        darkMode: {
          title: "Dark Mode",
          paragraphs: [
            `Unlike GitHub, which offers multiple light and dark themes, I decided to <b>keep it simple</b> with just <b>one light theme and one dark theme</b>. The goal was to stay true to GitHub&apos;s aesthetic while ensuring an easy-to-maintain color system.`,
          ],
          points: [
            `The theme switches <b>automatically based on system preferences</b>, but users can toggle it manually if they prefer.`,
            `To stay as close as possible to GitHub&apos;s look, I <b>extracted the colors directly using the browser inspector</b> (as shown in the previous section).`,
            `I paid extra attention to <b>contrast and readability</b>, making sure that text, buttons, and borders remain clear and accessible in both themes.`,
          ],
        },
        responsiveness: {
          title: "Responsiveness",
          paragraphs: [
            `This website is <b>fully responsive</b> across multiple devices. However, to enhance the mobile experience, I made the design <b>closer to GitHub&apos;s mobile app</b> when viewed on smaller screens. This was a deliberate choice because, well... I think it looks cool.`,
            `Of course, elements <b>resize dynamically</b> as the screen gets smaller, ensuring a smooth and consistent experience. Aside from the color adjustments that resemble GitHub&apos;s mobile app, the <b>responsiveness follows the same principles as GitHub itself</b>.`,
            `I personally believe that <b>responsiveness is crucial in web development</b>, and I made sure this portfolio adapts well across all devices.`,
          ],
        },
      },
      techStack: {
        sectionNumber: "3. Tech Stack",

        nextjs: {
          title: "Next.js",
          paragraphs: [
            `I chose <b>Next.js</b> with the <b>App Router</b> because it offers the best mix of <b>simplicity, performance, and flexibility</b>. One of its biggest advantages is <b>SEO benefits</b>, who knows, maybe someone will stumble upon my portfolio through search engines. But beyond that, I picked Next.js mainly because of its <b>Server-Side Rendering (SSR) and Client-Side Rendering (CSR) capabilities</b>, which help make the website load faster and more efficiently.`,
            `Another major reason is <b>API Routes</b>. With Next.js, I don't need a separate backend framework like Express.js. Everything can be done <b>directly within Next.js API routes</b>, all in JavaScript.`,
            `Also, I just <b>love how the App Router structures folders and files</b>. It keeps things organized and makes development much smoother.`,
          ],
          howIUseTitle: "How I Use Next.js Features in This Portfolio",
          howIUsePoints: [
            `<b>Server-Side Fetching for Performance</b> → I fetch data on the <b>server-side</b> for things like retrieving content from the <b>CMS (Contentful)</b> or handling <b>OpenAI API</b> requests for ManuPilot AI. This approach helps reduce client-side workload and ensures <b>faster load times</b>. <span class="text-text-link underline">see example</span>.`,
            `<b>Next.js Image Optimization</b> → I always use <b>&lt;Image /&gt;</b> instead of the regular &lt;img /&gt; tag. It automatically optimizes images by <b>resizing, compressing, and serving them in modern formats</b> for better performance.`,
          ],
          paragraphsAfter: [
            `My website relies primarily on <b>Server-Side Rendering (SSR)</b> and <b>Client-Side Rendering (CSR)</b>. While I initially considered using <b>Static Site Generation (SSG)</b>, I realized that most of my content is dynamic—pulling data from <b>Contentful CMS</b>, <b>Supabase</b>, and <b>OpenAI's API</b>. Because of this, I opted for SSR to ensure that visitors always see the latest data without requiring manual re-builds.`,
            `The downside of this approach is that it can make the site slightly slower compared to a fully static approach. I'll admit, this might not have been the most optimal choice due to my limited experience with Next.js at the time. It's something I plan to improve. In the future, I might implement <b>Incremental Static Regeneration (ISR)</b> to strike a better balance between performance and up-to-date content.`,
          ],
        },

        tailwind: {
          title: "Tailwind CSS & Plain CSS",
          paragraphs: [
            `I chose <b>Tailwind CSS</b> because it's an incredibly efficient and flexible utility-first framework. It allows me to write <b>less</b> CSS and keeps my styling <b>directly in the components</b>, which means fewer files to manage. The built-in classes make it easy to maintain consistency across the website while speeding up development.`,
            `However, I didn't rely solely on Tailwind. I also used <b>plain CSS</b> for global styles, which I handled in <b>globals.css</b>. This was mainly for things like <b>custom utility classes, animations, and overriding default styles</b> where needed.`,
            `I did face some <b>visual challenges</b>, and I'll be honest, there are probably some sections where I could have done things better. In a few cases, I ran into layout issues, and to save time, I ended up <b>fixing them with a lot of media queries</b> in <b>globals.css</b>. While this worked, it also <b>increased the file size significantly</b>, which is something I plan to investigate and optimize in the future.`,
            `That said, my priority was to <b>fix the bugs and make sure everything worked</b>, even if some solutions weren't the most elegant. Continuous improvement is part of the journey, and I'll be refining this over time. 🚀`,
          ],
        },

        contentful: {
          title: "Contentful as a CMS",
          paragraphs: [
            `The <b>CMS</b> plays an important role in this project, allowing me to manage content without having to modify the code every time. Honestly, that's the main reason I chose to use a CMS for this portfolio: to keep things <b>flexible and easy to update</b>.`,
            `But why <b>Contentful</b>? Simply because it's <b>fast and easy</b> to use! Setting up content types is incredibly intuitive, and the implementation process is straightforward. Within minutes, you can structure your data exactly how you need it.`,
            `While I didn't use Contentful <b>for everything</b> in this project, most of the content that <b>changes frequently</b> comes from the CMS. This keeps the site dynamic while reducing the need for manual updates in the codebase.`,
          ],
        },

        prisma: {
          title: "Prisma & Supabase",
          paragraphs: [
            `<b>Prisma</b> and <b>Supabase</b> were used exclusively for the <b>Discussion</b> feature of my portfolio. At the time, I was studying these technologies and wanted to gain hands-on experience by implementing them in a real project. Since I had never used Prisma and Supabase before, this was a great opportunity to experiment.`,
            `Looking back, I might not have chosen Supabase for such a small feature, but it was a valuable learning experience. If I expand the project in the future, I already have the foundation for handling <b>database-driven</b> interactions.`,
          ],
        },

        aiIntegration: {
          title: "AI Integration",
          paragraphs: [
            `One of the standout features of this portfolio is <b>ManuPilot</b>, an AI-powered assistant designed to function like <b>GitHub Copilot</b>. I integrated OpenAI's API to create a chatbot that can answer questions, assist with coding, and interact dynamically with users. This was a challenging but exciting implementation, as it required handling <b>streaming responses</b>, <b>API rate limits</b>, and <b>token management</b>.`,
            `The AI works by sending user messages to a <b>server-side API route</b> that interacts with OpenAI's <b>GPT-4</b> model. The API processes each request and returns a response, which is streamed in real time to create a smooth user experience. To prevent exceeding OpenAI's token limit, I implemented a summarization feature that condenses conversations when they get too long.`,
            `The main challenge was <b>efficiently handling real-time responses</b>. Instead of waiting for the entire response to generate before displaying it, I used <b>streaming</b>, which allows text to appear word by word, just like ChatGPT's interface. This makes the experience feel much more natural and responsive.`,
          ],
          links: [
            {
              label: "See example - Back end",
              href: "https://github.com/ahmed3oun/blob/main/src/app/api/manupilot/route.js",
            },
            {
              label: "See example - Front end",
              href: "https://github.com/ahmed3oun/blob/main/src/pages/ManuPilotPage.js",
            },
          ],
        },

        uiFrameworks: {
          title: "UI Frameworks",
          paragraphs: [
            `To keep the UI consistent with GitHub's design, I used <b>ShadCN</b> and <b>React Icons</b> extensively throughout the project. These two libraries closely align with GitHub's aesthetic, making them the perfect choice for this portfolio.`,
          ],
        },
      },
      features: {
        sectionNumber: "4. Features Breakdown",
        welcome: {
          title: "Welcome",
          intro:
            "The <b>Welcome Page</b> serves as the homepage of this website and, as mentioned before, it is heavily inspired by the design of GitHub&apos;s profile page. It is divided into four key sections: the <b>Profile Bar</b>, <b>README</b>, <b>Pinned Tabs</b>, and the <b>Contribution Chart</b>. The <b>Profile Bar</b> is also present on other pages, keeping the layout consistent.",
          profileBarTitle: "Profile Bar",
          profileBarText:
            "The <b>Profile Bar</b> closely aligns with GitHub&apos;s, minus features like followers and following counts. It includes my <b>photo, name, profession, a short about me, and social links</b>, providing a quick overview of who I am.",
          readmeTitle: "README",
          readmeText:
            "The <b>README</b> acts as an <b>About Me</b> section, which is common in portfolios. It introduces me, my background, and showcases my skills. Just like how GitHub profiles often include a README for self-introduction.",
          pinnedTitle: "Pinned Tabs",
          pinnedText:
            "The <b>Pinned Tabs</b> provide quick access to projects and other important sections. This feature is directly inspired by GitHub, where many profiles have pinned repositories for easy access to highlighted work.",
          chartTitle: "Contribution Chart",
          chartText:
            "What GitHub profile doesn&apos;t have a <b>Contribution Chart</b>? I think this is one of the coolest parts of the Welcome Page. However, unlike GitHub&apos;s, my contribution chart isn&apos;t based on actual commits. Instead, it&apos;s an <b>interactive feature</b> where users can write something, which is then mapped into the grid.",
          chartExtra:
            "Users can also <b>change the style</b>, and one of the styles (which I personally find really cool) replaces the blocks with <b>emojis</b> instead.",
          chartManual:
            "Creating this feature required a bit of <b>manual work</b>, as I had to map each letter in JavaScript to display the correct placement on the chart.",
          chartLink: "See example",
        },
        portfolio: {
          title: "Portfolio",
          intro:
            "The <b>Portfolio Page</b> is inspired by GitHub&apos;s repositories page. This is where I showcase my projects. While the design closely resembles GitHub&apos;s, there are <b>clear differences</b>, as I couldn&apos;t fully replicate it due to the lack of certain features that GitHub has. For example, the <b>buttons and filtering</b> at the top are placed differently, and their functionality has been adapted for a portfolio setting.",
          viewSwitch:
            "Users can <b>switch between views</b>, going from the classic GitHub-style repository <b>list view</b> to a <b>grid view</b>. This is something I intentionally redesigned. While it still maintains the GitHub aesthetic, it doesn&apos;t fully copy the repositories page, offering a more visual way to browse projects.",
          projectDetailsTitle: "Project Details",
          projectDetailsIntro:
            "When opening a project, the layout mimics how GitHub displays repositories, with <b>some modifications</b>. For instance, I didn&apos;t implement file/folder navigation like GitHub does, as I felt it was unnecessary for a portfolio. However, I still included a <b>README section</b> and a <b>sidebar</b> that displays project information, such as the technologies and languages used, just like on GitHub.",
          projectScreenshots:
            "Another difference is how I handle <b>project screenshots</b>. Instead of embedding images within the README itself, I created a <b>dedicated tab</b> for project images, keeping them separate from the main content.",
        },
        writings: {
          title: "Writings",
          intro:
            "The <b>Writings Page</b> is where I share my technical content, and it is divided into two sections: <b>Blog</b> and <b>Academic Writings</b>.",
          blogText:
            "The <b>Blog</b> is where I write about development and computer science topics. I enjoy sharing insights, technical deep dives, and best practices.",
          academicText:
            "The <b>Academic Writings</b> section contains my university papers from <b>2021 to 2024</b>. These papers were a significant part of my academic journey, and since many people asked for them, I made them available for download.",
          blogPostTitle: "Blog Post",
          blogPostText:
            "The individual <b>Blog Post</b> pages are heavily inspired by <b>GitHub Blog Posts</b>, featuring a clean and minimal layout with metadata like publish date, tags, and reading time.",
        },
        devQuiz: {
          title: "Dev-Quiz",
          intro:
            "The <b>Dev Quiz</b> is a cool interactive feature of this website, created with the goal of practicing for technical interviews. Personally, I find quizzes and flashcard-style games extremely useful for remembering difficult topics, so I built this hoping others would benefit from it as well.",
          topics:
            "The quiz covers multiple topics, allowing users to choose which category they want to be tested on.",
          number:
            "Users can also select the number of questions, with each one being randomly selected from the available pool.",
          mcq: "The quiz works like any other multiple-choice test: it provides immediate feedback on whether the selected answer is correct or incorrect, along with an explanation.",
          results:
            "At the end of the quiz, users receive their results, showing their score and the time taken to complete the quiz. The score is color-coded: <b>red</b> for low scores, <b>yellow</b> for medium scores, and <b>green</b> for high scores.",
          staticData:
            "Unlike other features, the quiz data is not managed via the CMS. Instead, all questions are stored in JavaScript objects inside an array, grouped in a utility file for easy updates. This makes it much simpler to modify and expand over time.",
          quizLink: "See example",
          note: "Please note that the quiz questions are currently available only in English. The quiz contains more than 450 questions across many topics, and because I handle localization manually, translating every question, along with its correct and incorrect answers, into Italian would be a considerable task. For now, I think it’s reasonable to keep the quiz in English only.",
        },
        discussion: {
          title: "Discussions",
          intro:
            "The <b>Discussions</b> page is designed to mimic <b>GitHub Discussions</b>, which I believe is one of the coolest features of GitHub. The main purpose of this page is to let users leave comments if they want to. Whether it&apos;s something like <i>&quot;Hey, cool portfolio!&quot;</i> or <i>&quot;Maybe you should quit development...&quot;</i> (who knows?).",
          interactions:
            "But beyond just leaving comments, this page offers other interactive features! Users can <b>reply</b> to other comments and even <b>react</b> with a like or emojis. Just like on GitHub!",
          avatars:
            "One of the details to consider is the <b>input field</b>, which looks and functions almost identically to GitHub&apos;s, including <b>Markdown support</b>. However, I added a small twist: the user&apos;s <b>profile picture</b> is <b>randomly generated</b> based on their username using the DiceBear avatar API. Users can also customize their avatar style.",
          backend:
            "As mentioned earlier, this feature was built using <b>Prisma schemas</b> and <b>Supabase</b>, which I had never worked with before this project—making it a great learning experience.",
          comment: "If you think this is a cool feature, drop a comment!",
        },
        contacts: {
          title: "Contacts",
          intro:
            "Honestly, there&apos;s not much to say about this page. It&apos;s a <b>contact form</b>. Wow, what a surprise!",
          text: "I included this so that if you ever feel like reaching out, you can easily do so through the form. It&apos;s a simple contact form built using <b>EmailJS</b>, which I&apos;ve used many times before because it perfectly fits my needs.",
        },
        manupilot: {
          title: "Manupilot AI",
          intro:
            "A cool feature of <b>GitHub</b> is <b>Copilot</b>, so I really wanted to replicate that idea— and that&apos;s how <b>ManuPilot</b> was born.",
          description:
            "Of course, this is just another <b>AI chatbot</b>, but it adds a nice touch to my portfolio since it&apos;s specifically <b>instructed to provide information about me</b>, aside from being a general AI assistant.",
          usage:
            "Powered by <b>OpenAI&apos;s GPT-4</b>, ManuPilot is available in two ways:",
          modes: [
            "<b>Quick Chat</b>: A chat that opens in the <b>bottom-right corner</b> of the website, allowing users to ask quick questions.",
            "<b>ManuPilot Page</b>: A dedicated page where users can interact with the AI in a more immersive way.",
          ],
          additional:
            "Both chats offer a <b>GitHub Copilot-style experience</b>. Currently, the <b>quick chat</b> also allows users to <b>browse projects</b> and talk about them in detail. I plan to bring this feature to the full <b>ManuPilot page</b> in the future, but even now, the AI is <b>instructed to discuss my projects</b>.",
          uploads:
            "In both chats, users can <b>upload code or text files</b> for AI analysis.",
          formatting:
            "The conversation layout closely follows <b>GitHub Copilot&apos;s chat UI</b>. AI responses are properly formatted, with <b>Markdown converted into readable text</b>. The AI can also <b>generate code</b> and <b>return images</b> directly on the screen.",
          closing:
            "Use this AI with caution and <b>stay tuned</b>. This feature is still evolving and will be improved over time!",
        },
        languages: {
          title: "Multilanguage Support",
          intro:
            "The website supports both English and Italian, with seamless switching between the two languages. The default language is detected based on the user's browser settings, but users can manually change it at any time from the navigation bar or sidebar.",
          dynamic:
            "When switching language, both static translations (UI elements) and dynamic CMS content are updated simultaneously for a consistent experience.",
          custom:
            "This was achieved without using heavy i18n libraries. Instead, a lightweight custom Language Context was implemented, alongside locale-specific queries to Contentful.",
          keypoints: [
            "English (en) and Italian (it) are supported.",
            "Default based on browser detection (fallback to English).",
            "Manual switch via buttons.",
            "Full Contentful integration for multilingual fields.",
            "Automatic persistence using cookies and localStorage.",
          ],
          example: "Example:",
        },
      },
      deploymentAndFuturePlans: {
        sectionNumber: "5. Deployment & Future Plans",
        hosting: {
          title: "Hosting & CI/CD",
          p1: "To deploy my website, I chose <b>Vercel</b>. Since Next.js is built by Vercel, it made perfect sense. It provides a seamless deployment experience with automatic optimizations and fast global edge functions. Plus, it takes care of <b>server-side rendering (SSR)</b> and static optimizations without me having to worry about the infrastructure.",
          p2: "The project is hosted directly from <b>GitHub</b>, meaning every time I push changes to the <code>main</code> branch, Vercel automatically builds and deploys the latest version of the site. This makes deployment effortless, and I don't have to manually upload files or restart servers.",
          p3: "In terms of <b>Continuous Integration / Continuous Deployment (CI/CD)</b>, everything runs smoothly with Vercel's automated pipelines. Every commit triggers a new build, and I can preview changes before merging them. If something breaks, I can easily roll back to a previous deployment with a single click.",
          p4: "Overall, Vercel makes my life easier by handling <b>performance optimizations, caching, and CDN distribution</b> automatically. If you're using Next.js, and also, for projects like this one <b>IT'S FREE</b>.",
        },
        futurePlans: {
          title: "What's Next?",
          p1: "Well, as I mentioned before, there are things that <b>need improvement</b>. So if someone asks me <b>\"What's next?\"</b>, my first answer would be that I need to refine what I've already built. There are parts of the project where the <b>code could be optimized</b>, and that's a priority before adding anything new.",
          p2: "Then, there are features that I will continue tweaking over time, making them <b>even closer to GitHub's experience</b>. Some sections are already well done, but others still have room for improvement.",
          p3: "I've also considered adding <b>extra features</b>, but at the end of the day, this is just a portfolio. It's already packed with interactive elements. Some friends suggested adding <b>minigames</b>, but I'm still undecided on that.",
          p4: "One thing that's certain is that I will <b>actively maintain this site</b>. Future plans include:",
          list: [
            "Adding new projects as I build them.",
            "Keeping the <b>blog updated</b>, because having an empty blog makes no sense.",
            "Improving <b>ManuPilot</b> with more features and updates.",
            "Expanding the <b>Dev Quiz</b> as technologies evolve.",
          ],
          p5: "So, the future of this site is all about growth and updates. Some might see that as extra work, but to me, it's a <b>great achievement</b>. I've built a personal site that I actually need to take care of. That means it's not just a static portfolio, but an evolving project.",
        },
      },
      thankYou: {
        title: "Thank You",
        p1: `If you've made it this far, <b>thank you</b> for taking the time
             to read about this website. I hope you found it interesting, and maybe
             even picked up some ideas along the way! This portfolio was a
             <b>fun challenge</b>, and I'll continue improving it over time.`,
        subtitle: "Continue Browsing",
        links: {
          welcome: "Welcome page",
          portfolio: "Explore My Portfolio",
          writings: "Read My Writings",
          devQuiz: "Do a Dev-Quiz",
          discussions: "Join the Discussion",
          contact: "Get In Touch",
          manupilot: "Use ManuPilot AI",
        },
      },
      docFooter: {
        contact: "Contact",
        star: "Give it a star",
        made: "Made by",
      },
    },
    rightBar: {
      title: "What's this?",
      paragraph:
        'Welcome to "About This Website", a behind-the-scenes look at how I built this GitHub-inspired portfolio. If you\'re curious about the design choices, tech stack, or unique features (like the AI chatbot), this is the right place!',
      viewGitHub: "View on GitHub",
      top: "Go to Top",
      bottom: "Go to Bottom",
    },
  },

  fr: {
    "goBack": "Retour",
    "about": "À propos de ce site",
    "code": "Code",
    "altBaseString": "Ahmed OUN - Infos sur le site -",
    "navigationMenu": {
      "titles": {
        "introduction": "Introduction",
        "design": "Design & UI",
        "techStack": "Stack Technologique",
        "features": "Fonctionnalités",
        "deployment": "Déploiement & Projets Futurs"
      },
      "links": {
        "whyBuilt": "Pourquoi ce projet",
        "technologiesUsed": "Technologies clés",
        "githubStyle": "Inspiration style GitHub",
        "extractingUI": "Extraction de l’UI GitHub",
        "darkMode": "Mode sombre",
        "responsiveness": "Responsive Design",
        "nextjs": "Next.js",
        "tailwind": "Tailwind CSS & CSS pur",
        "contentful": "Contentful comme CMS",
        "prisma": "Prisma & Supabase",
        "aiIntegration": "Intégration IA",
        "uiFrameworks": "Frameworks UI",
        "welcome": "Accueil",
        "portfolio": "Portfolio",
        "writings": "Articles",
        "devQuiz": "Quiz Dev",
        "discussion": "Discussions",
        "contacts": "Contact",
        "manupilot": "ManuPilot IA",
        "languages": "Support multilingue",
        "hosting": "Hébergement & CI/CD",
        "futurePlans": "Et maintenant ?"
      },
      "mobileButton": "Menu de navigation"
    },
    "content": {
      "introduction": {
        "sectionNumber": "1. Introduction",
        "whyBuilt": {
          "title": "Pourquoi ce projet",
          "paragraphs": [
            "J'avais déjà un portfolio, l'un de mes premiers projets React. Il était sympa, avec un bot intégré simulant des réponses, mais avec le temps je l'ai trouvé trop générique. Il ressemblait à beaucoup d'autres portfolios en ligne, et ce n'est pas ce que je voulais refléter. J'aime faire les choses différemment, concevoir quelque chose d'atypique. <b>N'est-ce pas justement ce qui rend un portfolio attrayant ?</b>",
            "J'ai commencé à chercher l'inspiration parmi divers portfolios : ingénieurs logiciels, designers UI/UX, photographes, artistes graphiques. Beaucoup étaient superbes visuellement, mais aucun ne correspondait exactement à la vision que j'avais. Ils m'ont inspiré sur le concept : je voulais que mon portfolio ressemble à un vrai projet interactif, pas simplement à une vitrine statique. <b>Un espace avec lequel interagir, pas seulement à feuilleter.</b>",
            "💡 Puis est venue l'idée évidente : <b>GitHub</b>",
            "J'apprécie particulièrement le design épuré et efficace de GitHub. Il est pensé pour les développeurs et, soyons honnêtes, <b>quel développeur ne l'utilise pas régulièrement ?</b> J'ai donc décidé de créer un portfolio inspiré de GitHub : <b>interactif, intuitif et axé sur l'expérience dev</b>."
          ],
          "keyReasonsTitle": "Pourquoi je l’ai réalisé",
          "keyReasons": [
            "<b>Présenter projets et articles :</b> c’est le but premier d’un portfolio, mais je voulais également un blog personnel pour partager mes idées.",
            "<b>Créer une expérience orientée dev (et accessible à tous) :</b> inspirée de GitHub, tout en restant facilement navigable par tous les visiteurs.",
            "<b>Rendre le site interactif :</b> des fonctionnalités comme ManuPilot, Discussions et Dev-Quiz engagent l’utilisateur et font de ce portfolio une véritable application.",
            "<b>Perfectionner mes compétences :</b> ce projet m’a permis d’expérimenter de nouveaux outils, résoudre des défis techniques et affiner mon workflow."
          ]
        },
        "technologiesUsed": {
          "title": "Technologies utilisées",
          "paragraphs": [
            "Pour concevoir ce projet, j’ai combiné plusieurs technologies web modernes, bibliothèques et outils.",
            "Les sections suivantes détaillent le rôle de chacune."
          ],
          "technologies": [
            "Next.js",
            "CSS",
            "Tailwind CSS",
            "Prisma",
            "Supabase",
            "OpenAI",
            "Contentful CMS",
            "ShadCN",
            "GitHub",
            "Vercel"
          ],
          "note": "Le code source est disponible ci-dessus. Le projet continue d'évoluer et je l'améliore et l'optimise au fil du temps."
        }
      },
      "designAndUI": {
        "sectionNumber": "2. Design et UI",
        "githubStyle": {
          "title": "Inspiration style GitHub",
          "paragraphs": [
            "Comme mentionné dans l'introduction, je voulais que mon portfolio <b>reproduise fidèlement l'ambiance de GitHub</b> en termes de <b>disposition</b>, <b>couleurs</b>, <b>typographie</b> et <b>structure</b>. J'adore le <b>minimalisme de GitHub</b> et, pour un portfolio destiné aux développeurs et recruteurs techniques, c'est parfaitement cohérent.",
            "Bien que l'agencement s'en <b>inspire fortement</b>, j'ai adapté certains aspects quand nécessaire. Tout n'a pas été reproduit à l'identique, mais de <b>nombreux composants UI</b> (boutons, liens, tags...) ont été repris pour offrir une sensation familière.",
            "Voici la correspondance entre les sections du site et l'interface GitHub :"
          ],
          "sections": [
            "<b>Page d'Accueil</b> → inspirée d'une <b>page de profil</b> GitHub.",
            "<b>Page Portfolio</b> → inspirée de la <b>page des dépôts</b> avec switch liste/grille.",
            "<b>Page Détails du Projet</b> → semblable à un <b>dépôt</b> sans l'explorateur de fichiers arborescent.",
            "<b>Page Articles</b> → un équilibre entre le <b>GitHub Blog</b> et la Marketplace.",
            "<b>Articles de Blog</b> → reprennent la mise en page épurée des articles GitHub Blog.",
            "<b>Page Quiz Dev</b> → fonctionnalité interactive avec une UI fidèle au style GitHub.",
            "<b>Discussions</b> → inspirée des <b>GitHub Discussions</b>.",
            "<b>Contact</b> → mise en page structurée façon profil.",
            "<b>ManuPilot</b> → chat rapide et page complète dans l'esprit de <b>GitHub Copilot</b>.",
            "<b>Menus, Barre de profil et autres composants</b> → tous inspirés de GitHub."
          ]
        },
        "extractingUI": {
          "title": "Extraction de l’UI GitHub",
          "paragraphs": [
            "Pour reproduire fidèlement l'apparence de GitHub, j'ai utilisé l'outil <b>Inspect</b> des navigateurs pour analyser précisément les <b>espacements, tailles de police, palettes de couleurs, paddings, border-radius</b> etc.",
            "La palette de GitHub est sobre et efficace, idéale pour maintenir une harmonie visuelle."
          ],
          "darkModeExample": "Exemple de couleurs de fond – Mode sombre",
          "lightModeExample": "Exemple de couleurs de fond – Mode clair"
        },
        "darkMode": {
          "title": "Mode sombre",
          "paragraphs": [
            "Contrairement à GitHub qui propose de nombreux thèmes, j'ai retenu <b>un thème clair et un thème sombre</b> par souci de simplicité et de cohérence."
          ],
          "points": [
            "Le thème s'adapte <b>automatiquement</b> aux préférences du système, avec sélection manuelle disponible.",
            "Les couleurs ont été <b>extraites</b> fidèlement pour refléter l'expérience GitHub originale.",
            "Une attention particulière a été portée au <b>contraste et à la lisibilité</b> dans les deux modes."
          ]
        },
        "responsiveness": {
          "title": "Responsive Design",
          "paragraphs": [
            "Le site est <b>entièrement responsive</b>. Sur mobile, l'interface se rapproche de l'application mobile GitHub pour une expérience fluide et naturelle.",
            "Les composants s'adaptent harmonieusement selon les résolutions.",
            "Le <b>responsive design est primordial</b> et chaque breakpoint a été soigneusement ajusté."
          ]
        }
      },
      "techStack": {
        "sectionNumber": "3. Stack Technologique",
        "nextjs": {
          "title": "Next.js",
          "paragraphs": [
            "J'ai choisi <b>Next.js</b> (App Router) pour son alliance de <b>simplicité, performances et flexibilité</b>. Le rendu <b>SSR/CSR</b> garantit des temps de chargement ultra-rapides et un bon référencement SEO.",
            "Avec les <b>API Routes</b>, aucun serveur externe n'est requis : l'ensemble tourne dans Next.js.",
            "L'architecture App Router facilite grandement l'organisation des routes et des composants."
          ],
          "howIUseTitle": "Comment j'utilise Next.js",
          "howIUsePoints": [
            "<b>Récupération côté serveur</b> depuis le CMS et OpenAI pour des temps de réponse optimaux. <span class=\"text-text-link underline\">voir exemple</span>.",
            "<b>Composant &lt;Image /&gt;</b> pour optimiser les images : redimensionnement, compression et formats modernes."
          ],
          "paragraphsAfter": [
            "J'utilise principalement <b>SSR</b> et <b>CSR</b>. Les contenus dynamiques sont alimentés par Contentful, Supabase et OpenAI."
          ]
        },
        "tailwind": {
          "title": "Tailwind CSS & CSS pur",
          "paragraphs": [
            "Tailwind est <b>utility-first</b> : développement rapide, styles intégrés aux composants et maintenance facilitée.",
            "J'utilise <b>globals.css</b> pour les utilitaires spécifiques, animations et surcharges.",
            "Certains ajustements responsive ciblés complètent le framework là où nécessaire.",
            "Améliorations et optimisations continues au fil des itérations 🚀."
          ]
        },
        "contentful": {
          "title": "Contentful comme CMS",
          "paragraphs": [
            "Le <b>CMS</b> me permet de mettre à jour les contenus facilement sans toucher au code.",
            "J'ai choisi <b>Contentful</b> pour sa <b>rapidité et sa flexibilité</b> dans la modélisation des contenus.",
            "Il gère la partie la plus évolutive et dynamique du site."
          ]
        },
        "prisma": {
          "title": "Prisma & Supabase",
          "paragraphs": [
            "Utilisés pour la section <b>Discussions</b>, afin de mettre en pratique ces outils.",
            "Cela pose des bases solides pour des développements orientés bases de données relationnelles."
          ]
        },
        "aiIntegration": {
          "title": "Intégration IA",
          "paragraphs": [
            "<b>ManuPilot</b> est un assistant IA inspiré de GitHub Copilot : il intègre les modèles d'OpenAI.",
            "Les réponses sont diffusées en <b>streaming</b> via les API routes côté serveur pour un affichage mot à mot.",
            "Gestion des limites d'utilisation et synthèse des échanges pour une fluidité continue."
          ],
          "links": [
            {
              "label": "Voir l'exemple – Back-end",
              "href": "https://github.com/ahmed3oun/blob/main/src/app/api/manupilot/route.js"
            },
            {
              "label": "Voir l'exemple – Front-end",
              "href": "https://github.com/ahmed3oun/blob/main/src/pages/ManuPilotPage.js"
            }
          ]
        },
        "uiFrameworks": {
          "title": "Frameworks UI",
          "paragraphs": [
            "Pour rester au plus près du design GitHub, j'ai utilisé <b>ShadCN</b> et <b>React Icons</b> sur l'ensemble de l'application."
          ]
        }
      },
      "features": {
        "sectionNumber": "4. Aperçu des Fonctionnalités",
        "welcome": {
          "title": "Accueil",
          "intro": "La <b>Page d'Accueil</b> s'inspire du profil GitHub : <b>Barre de Profil</b>, <b>README</b>, <b>Éléments Épinglés</b> et <b>Contribution Chart</b>. La <b>Barre de Profil</b> reste accessible sur les autres pages.",
          "profileBarTitle": "Barre de Profil",
          "profileBarText": "La <b>Barre de Profil</b> reprend la disposition GitHub avec <b>photo, nom, rôle, bio et liens réseaux sociaux</b>.",
          "readmeTitle": "README",
          "readmeText": "Le <b>README</b> fait office de section <b>À Propos</b> : présentation, parcours et compétences, comme sur un profil GitHub.",
          "pinnedTitle": "Éléments Épinglés",
          "pinnedText": "Les onglets épinglés permettent un accès rapide aux projets et sections phares, à la manière des dépôts épinglés.",
          "chartTitle": "Contribution Chart",
          "chartText": "Un profil GitHub ne serait pas complet sans <b>Contribution Chart</b> : ici, une version <b>interactive</b> où le texte saisi est projeté sur la grille.",
          "chartExtra": "Il est possible de <b>changer de style</b>, notamment avec des <b>emojis</b>.",
          "chartManual": "Chaque lettre a été minutieusement cartographiée en JavaScript pour un rendu net.",
          "chartLink": "Voir l'exemple"
        },
        "portfolio": {
          "title": "Portfolio",
          "intro": "La <b>Page Portfolio</b> rappelle la liste des dépôts GitHub. J'y présente mes projets avec des filtres et boutons adaptés aux besoins d'un portfolio.",
          "viewSwitch": "Vous pouvez basculer l'affichage : vue <b>liste</b> style GitHub ou vue <b>grille</b> plus visuelle.",
          "projectDetailsTitle": "Détails du projet",
          "projectDetailsIntro": "La page projet reprend la structure d'un dépôt GitHub : <b>README</b> détaillé et <b>barre latérale</b> avec les technologies utilisées.",
          "projectScreenshots": "Les <b>captures d'écran</b> sont présentées dans un onglet dédié."
        },
        "writings": {
          "title": "Articles",
          "intro": "La page <b>Articles</b> regroupe mes publications techniques, divisée entre <b>Blog</b> et <b>Travaux Académiques</b>.",
          "blogText": "Le <b>Blog</b> aborde le développement, l'informatique, les bonnes pratiques et les retours d'expérience.",
          "academicText": "Les <b>Travaux Académiques</b> réunissent mes projets universitaires <b>2021-2024</b>, téléchargeables librement.",
          "blogPostTitle": "Article de Blog",
          "blogPostText": "Chaque article bénéficie d'une mise en page inspirée du <b>GitHub Blog</b> avec métadonnées complètes (date, tags, temps de lecture)."
        },
        "devQuiz": {
          "title": "Quiz Dev",
          "intro": "Le <b>Quiz Dev</b> est un quiz interactif conçu pour tester ses connaissances et s'entraîner aux entretiens techniques.",
          "topics": "Il couvre divers sujets ; l'utilisateur choisit la catégorie de son choix.",
          "number": "Possibilité de sélectionner le nombre de questions, tirées aléatoirement.",
          "mcq": "Questions à choix multiples avec correction immédiate et explications détaillées.",
          "results": "À la fin du quiz, affichage du score (code couleur vert/jaune/rouge) et du temps passé.",
          "staticData": "Les questions sont stockées localement en JS pour un chargement instantané.",
          "quizLink": "Voir l'exemple",
          "note": "Les questions du quiz sont en anglais (450+)."
        },
        "discussion": {
          "title": "Discussions",
          "intro": "La page <b>Discussions</b> s'inspire des <b>GitHub Discussions</b> pour échanger des commentaires et retours d'expérience.",
          "interactions": "En plus des commentaires, il est possible de <b>répondre</b> et d'ajouter des <b>réactions emoji</b>.",
          "avatars": "Le champ de saisie prend en charge le Markdown et attribue un avatar DiceBear selon le nom d'utilisateur.",
          "backend": "Construit avec <b>Prisma</b> et <b>Supabase</b>.",
          "comment": "N'hésitez pas à laisser un message !"
        },
        "contacts": {
          "title": "Contact",
          "intro": "Un formulaire de contact simple et direct pour m'envoyer un message en quelques clics.",
          "text": "Pour toute opportunité ou prise de contact, vous pouvez utiliser ce formulaire propulsé par <b>EmailJS</b>."
        },
        "manupilot": {
          "title": "ManuPilot IA",
          "intro": "Inspiré par <b>GitHub Copilot</b>, voici <b>ManuPilot</b>.",
          "description": "Un assistant IA interactif configuré pour répondre à vos questions sur mon parcours, mes compétences et mes projets.",
          "usage": "Propulsé par <b>OpenAI GPT-4o</b>, accessible sous deux formats :",
          "modes": [
            "<b>Chat Rapide</b> : widget compact en bas à droite pour les questions directes.",
            "<b>Page ManuPilot</b> : interface complète pour une discussion immersive."
          ],
          "additional": "Les deux modes reproduisent l'expérience <b>GitHub Copilot</b> avec mise en forme Markdown.",
          "uploads": "Possibilité de joindre des fichiers de code ou texte pour analyse.",
          "formatting": "Génération de réponses fluides, code formaté et visualisations interactives.",
          "closing": "N'hésitez pas à poser vos questions !"
        },
        "languages": {
          "title": "Support multilingue",
          "intro": "Le site supporte l'Anglais et le Français avec changement instantané. Il s'adapte à la langue de votre navigateur ou à votre choix dans la barre de navigation.",
          "dynamic": "Textes statiques et contenus dynamiques s'actualisent simultanément.",
          "custom": "Implémenté via un <b>Language Context React</b> réactif et des requêtes adaptées.",
          "keypoints": [
            "Support de l'Anglais (en) et du Français (fr).",
            "Détection automatique de la langue du navigateur (fallback en).",
            "Sélecteur de langue dans la barre de navigation.",
            "Synchronisation avec Contentful.",
            "Persistance via cookies et localStorage."
          ],
          "example": "Exemple :"
        }
      },
      "deploymentAndFuturePlans": {
        "sectionNumber": "5. Déploiement et Projets Futurs",
        "hosting": {
          "title": "Hébergement & CI/CD",
          "p1": "Pour le déploiement, j'utilise <b>Vercel / Netlify</b> : intégration directe avec Git, optimisations automatiques et edge functions rapides.",
          "p2": "Le projet est synchronisé avec <b>GitHub</b> : chaque commit sur la branche principale déclenche la build.",
          "p3": "Le pipeline <b>CI/CD</b> teste les modifications et permet des rollbacks instantanés si besoin.",
          "p4": "Gestion automatique de la mise en cache, du CDN et des performances."
        },
        "futurePlans": {
          "title": "Et maintenant ?",
          "p1": "Continuer à peaufiner l'existant : optimisation des performances et de l'accessibilité.",
          "p2": "Affiner encore davantage les détails visuels style GitHub.",
          "p3": "Explorer de nouvelles fonctionnalités utiles et interactives.",
          "p4": "Mes priorités :",
          "list": [
            "Ajouter mes nouveaux projets au fil de leur réalisation.",
            "Maintenir <b>le blog à jour</b> avec des articles techniques.",
            "Enrichir <b>ManuPilot</b> avec de nouvelles fonctionnalités.",
            "Étendre la base de questions du <b>Dev-Quiz</b>."
          ],
          "p5": "Ce portfolio est conçu pour grandir et évoluer dans le temps."
        }
      },
      "thankYou": {
        "title": "Merci",
        "p1": "Merci d'avoir pris le temps de parcourir cette présentation jusqu'au bout ! J'espère que vous avez apprécié la démarche. Ce projet a été un <b>défi passionnant</b> et je continuerai à l'améliorer.",
        "subtitle": "Poursuivre la visite",
        "links": {
          "welcome": "Page d'Accueil",
          "portfolio": "Découvrir le Portfolio",
          "writings": "Lire mes Articles",
          "devQuiz": "Tester le Quiz Dev",
          "discussions": "Participer aux Discussions",
          "contact": "Me Contacter",
          "manupilot": "Utiliser ManuPilot IA"
        }
      },
      "docFooter": {
        "contact": "Contact",
        "star": "Mettre une étoile",
        "made": "Conçu par"
      }
    },
    "rightBar": {
      "title": "De quoi s'agit-il ?",
      "paragraph": "Bienvenue dans « Infos sur le site », les coulisses de la création de ce portfolio inspiré de GitHub. Découvrez les choix de design, la stack technologique et les fonctionnalités interactives mises en place !",
      "viewGitHub": "Voir sur GitHub",
      "top": "Haut de page",
      "bottom": "Bas de page"
    }
  },
};

export default aboutThisWebsiteTranslation;
