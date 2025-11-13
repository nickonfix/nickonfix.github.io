// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experience",
          title: "Experience",
          description: "A description of my research internships and other projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "sorted by year",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-graduated-from-bharati-vidyapeeth-college-of-engineering",
          title: 'Graduated from Bharati Vidyapeeth College of Engineering!',
          description: "",
          section: "News",},{id: "news-joined-as-a-research-intern-at-atheropoint-llc",
          title: 'Joined as a Research Intern at Atheropoint LLC',
          description: "",
          section: "News",},{id: "news-applying-to-phd-and-master-s-programs",
          title: 'Applying to PhD and Master’s Programs',
          description: "",
          section: "News",},{id: "projects-knee-osteo-arthritis-detection-using-deep-learning",
          title: 'Knee Osteo-Arthritis Detection using Deep learning',
          description: "Live link -- https://liveknee.onrender.com/",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P1/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%69%78%6E%69%63%6B@%69%63%6C%6F%75%64.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nickonfix", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/DebugNick/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/heyvisitor", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/CmonNicktf", "_blank");
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
