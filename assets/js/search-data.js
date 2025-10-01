// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-dissemination",
          title: "dissemination",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dissemination/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses which I have had the pleasure of teaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My CV can be viewed below or by downloading a .pdf version with the button to the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-l24eeds-workshop",
          title: 'L24EEDs workshop',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/L24EEDs/";
            },},{id: "news-i-gave-an-invited-talk-at-the-max-planck-institute-for-evolutionary-biology-in-plön-germany-titled-evolution-of-populations-in-fluctuating-environments",
          title: 'I gave an invited talk at the Max Planck Institute for Evolutionary Biology...',
          description: "",
          section: "News",},{id: "news-poster-presentations-at-iop-physics-of-life-2025-harrogate",
          title: 'Poster presentations at IoP Physics of Life 2025, Harrogate',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/PoL2025/";
            },},{id: "news-a-new-pre-print-collaborating-with-colleagues-at-virginia-tech-is-out-we-investigate-fixation-and-extinction-in-time-fluctuating-spatially-structured-metapopulations-read-it-here-10-48550-arxiv-2504-08433",
          title: 'A new pre-print collaborating with colleagues at Virginia Tech is out! We investigate...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-on-time-fluctuating-metapopulations-fixation-and-extinction-at-the-mini-symposium-spatial-and-temporal-models-of-ecology-and-evolution-of-the-bmc-bamc-2025-in-exeter-uk",
          title: 'I gave an invited talk on “Time-fluctuating metapopulations: fixation and extinction” at the...',
          description: "",
          section: "News",},{id: "news-i-successfully-passed-my-phd-viva-with-editorial-corrections-to-my-thesis-many-thanks-to-my-external-examiners-george-constable-and-steve-fitzgerald-for-making-the-whole-thing-a-pleasant-experience",
          title: 'I successfully passed my PhD viva with editorial corrections to my thesis! Many...',
          description: "",
          section: "News",},{id: "news-i-have-started-as-a-postdoctoral-researcher-in-the-theoretical-biology-group-at-the-max-planck-institute-for-evolutionary-biology-working-with-arne-traulsen-i-will-be-investigating-stress-induced-mutagenesis-on-a-hfsp-funded-project-working-in-collaboration-with-experimentalists-in-the-martin-kupiec-lab-at-tel-aviv-university",
          title: 'I have started as a postdoctoral researcher in the Theoretical Biology group at...',
          description: "",
          section: "News",},{id: "news-i-presented-a-poster-on-our-recent-pre-print-fixation-and-extinction-in-time-fluctuating-spatially-structured-metapopulations-at-esbs-2025-in-munich-germany-it-was-a-great-conference-and-a-lot-of-fun-happy-birthday-erwin",
          title: 'I presented a poster on our recent pre-print “Fixation and extinction in time-fluctuating...',
          description: "",
          section: "News",},{id: "projects-metapopulation-models",
          title: 'Metapopulation models',
          description: "Research into the evolution of populations on metapopulations subject to time-varying environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-cooperative-amr",
          title: 'Cooperative AMR',
          description: "Research into the evolution of cooperative antimicrobial resistance subject to time-varying environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-twofold-ev",
          title: 'Twofold EV',
          description: "Research into the evolution of a population subject to an environment which varies in time in two distinct ways.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-stress-induced-mutagenesis",
          title: 'Stress-induced mutagenesis',
          description: "Research investigating increased mutation rates in populations during periods of stress",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-tennis",
          title: 'Tennis',
          description: "A project inspired by Roger Federer&#39;s 2024 Dartmouth Commencement speech",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/masker.science", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%6B%65%72@%65%76%6F%6C%62%69%6F.%6D%70%67.%64%65", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-5548-5535", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jYiMq3gAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.evolbio.mpg.de/person/146203/15303", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
