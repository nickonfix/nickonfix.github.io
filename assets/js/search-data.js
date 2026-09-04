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
          description: "journal articles, patents and preprints, sorted by year",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Research Engineer at AtheroPoint LLC, working on transformers and attention-based deep learning for biomedical imaging.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-atheropoint-llc-as-a-research-engineer",
          title: 'Joined AtheroPoint LLC as a Research Engineer.',
          description: "",
          section: "News",},{id: "news-graduated-from-bharati-vidyapeeth-college-of-engineering",
          title: 'Graduated from Bharati Vidyapeeth College of Engineering!',
          description: "",
          section: "News",},{id: "news-our-paper-has-been-accepted-for-publication-in-measurement",
          title: 'Our paper has been accepted for publication in Measurement!',
          description: "",
          section: "News",},{id: "news-u-s-patent-application-19-738-450-method-and-apparatus-for-cardiovascular-disease-risk-assessment-filed-with-the-uspto",
          title: 'U.S. patent application 19/738,450, Method and Apparatus for Cardiovascular Disease Risk Assessment, filed...',
          description: "",
          section: "News",},{id: "news-our-twelve-fused-model-study-is-published-in-diagnostics-mdpi-16-16-2538",
          title: 'Our twelve-fused-model study is published in Diagnostics (MDPI), 16(16):2538.',
          description: "",
          section: "News",},{id: "news-second-u-s-patent-filed-with-the-uspto-method-and-apparatus-for-cardiovascular-risk-assessment-using-an-ensemble-of-deep-neural-networks",
          title: 'Second U.S. patent filed with the USPTO: Method and Apparatus for Cardiovascular Risk...',
          description: "",
          section: "News",},{id: "projects-knee-osteo-arthritis-detection-using-deep-learning",
          title: 'Knee Osteo-Arthritis Detection using Deep learning',
          description: "A deep-learning framework for early detection of knee osteoarthritis from ultrasound scans.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P1/";
            },},{id: "projects-research-engineer-atheropoint-llc",
          title: 'Research Engineer — AtheroPoint LLC',
          description: "Transformer/Mamba-based carotid ultrasound segmentation and automated cIMT &amp; plaque-burden measurement, deployed in AtheroEdge 4.0.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P0/";
            },},{id: "projects-python-developer-llm-fine-tuning-green-rider-technologies",
          title: 'Python Developer, LLM Fine-Tuning — Green Rider Technologies',
          description: "Multilingual instruction-tuning data curation and LoRA fine-tuning of Gemini 1.0 Pro and LLaMA 2, with automated benchmarking.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P2/";
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
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5gcQwrUAAAAJ", "_blank");
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
