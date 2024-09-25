/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Astrid Hofmann",
  title: "Hi all, I'm Astrid",
  subTitle: 
    "Student and Engineer in all things related to Data and AI. My experience lies in LLMs and SotA vision models, with an additional splash of classical Data Engineering. My true passion has been and always will be mathmatics, visualization and AI Interpretability."
  ,
  resumeLink:
    "/developerFolio/cv.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/leehawk787",
  gmail: "astrid.v.h@web.de",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Focus on StoA models with a mixture of research and experimenting, while learning more about emerging mathmatical theories for AI",
  skills: [
    emoji(
      "⚡ Train and finetune >1B-parameter models with diverse modalities and datasets"
    ),
    emoji("⚡  Build interactive and beautiful visualizations of data and models"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      url: "logos/python.png"
    },
    {
      skillName: "sqlite3",
      url: "logos/sqlite.png"
    },
    {
      skillName: "pytorch",
      url:"logos/torch.png"
    },
    {
      skillName: "lightning",
      url: "logos/lightning.png"
    },
    {
      skillName: "typescript",
      url: "logos/ts.png"
    },
    {
      skillName: "javascript",
      url: "logos/js.png"
    },
    {
      skillName: "git",
      url: "logos/git.png"
    },
    {
      skillName: "dash",
      url: "logos/dash.png"
    },
    {
      skillName: "kubernetes",
      url: "logos/k8.png"
    },
    {
      skillName: "docker",
      url: "logos/docker.png"
    },
    {
      skillName: "pandas",
      url: "logos/pandas.png"
    },
    {
      skillName: "polars",
      url: "logos/polars.png"
    },
    {
	    skillName: "great expectations",
	    url: "logos/ge.png"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Julius Maximilians Universität Würzburg",
      logo: require("./assets/images/jmu.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "October 2021 - August 2024",
      desc: "CS Master with personal focus and excellent grades in:",
      descBullets: [
        "Algorithmic Design and Complexity",
        "Stochastic and Propability Theory",
	"Data technologies, LLMs and Computer Vision"
      ]
    },
    {
      schoolName: "Julius Maximilians Universität Würzburg",
      logo: require("./assets/images/jmu.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "April 2017 - Feburary 2021",
      desc: "Broad CS basics, additional coursework in:",
      descBullets: ["Operating Systems", 
      "Linguistics", "Genetics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "EuInAction",
      companylogo: require("./assets/images/eua2.jpg"),
      date: "November 2021 – Present",
      desc: "United a 40GB corpus of messy research data of 5Million parliament speeches and legislative procedures.",
      
    },]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "University Projects",
  projects: [
    {
      image: require("./assets/images/slicer.png"),
      projectName: "Slicer Finetune",
      projectDesc: "Reproducing the results of an ACL 2022 paper",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/leehawk787/slicer-reproduction"
        },
	      {
		      name : "Original Paper",
		      url : "https://aclanthology.org/2022.emnlp-main.740/"
	      },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sd.png"),
      projectName: "Stable Diffusion Lecture",
      projectDesc: "Designed and held a 1.5h Lecture for Bachelor CS Students, explaining core intuitions and technologies of SD models.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/leehawk787/StableDiffusionSlides"
        }
      ]
    },
    {
      image: require("./assets/images/tsne_image.png"),
      projectName: "Multiligualizing CLIP models",
      projectDesc: "Adapting CLIP for low-resource languages. (Masterthesis, ongoing)",
      footerLink: [
        {
          name: "Github",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/stars.jpg"),
      projectName: "Star Removal",
      projectDesc: "Pipeline for Star-Detection and Removal. (Masterproject, ongoing)",
      footerLink: [
        {
          name: "Github",
          url: ""
        }
      ]
    },
	  //greenpeace report
	  //bachelorthesis
	  //astropraktikum
	  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Small and Non-Profit Projects",
  subtitle:
    "Things i did on the side, mostly for friends and my community.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
	  {
		  title: "Student Council",
		  description: "Student represenative in appointment committees and hands-on event organization"
	  },
	  {
		  url: "https://fachschaft.informatik.uni-wuerzburg.de/lib/exe/fetch.php?media=wiki:asinus:asinus_ws22_final_online.pdf",
		  title: "Asinus",
description:"Editor and leadwriter of a computer science student magazine"
	  }, 
	  {
		  url: "/Main.pdf",
		  title: "Adding to a Greenpeace Report",
description:"Evaluated two datacenters via greenpeace methodology and newer criteria."
	  }, 
    {
      url: "http://pachelbelkanon.de",
      title: "pachelbelkanon.de", 
      description:"A static announcement website for my music schools concert.",
        
    },
    {
      title: "BezirksJugendRing",
      description:
        "Automated excel sheets for the employees of our federal youth organization"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📫"),
  subtitle:
    "Discuss a project, offer an opportunity or just want to say hi? My Inbox is open for all.",
  email_address: "astrid.v.h@web.de"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
	techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
