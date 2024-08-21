import { mp42 } from "../assets";

export const loading = [
  {
    text: "Hello",
  },
  {
    text: "Bonjour",
  },
  {
    text: "स्वागत हे",
  },
  {
    text: "Ciao",
  },
  {
    text: "Olá",
  },
  {
    text: "おい",
  },
  {
    text: "Hallå",
  },
  {
    text: "Guten tag",
  },
  {
    text: "Hallo",
  },
];

// menu data ---------------------------------------

export const data = {
  navigation: {
    title: "Navigation",
    links: [
      {
        href: "",
        text: "Home",
        active: true,
      },
      {
        href: "",
        text: "Work",
        active: false,
      },
      {
        href: "",
        text: "About",
        active: false,
      },
      {
        href: "",
        text: "Contact",
        active: false,
      },
    ],
  },
  socials: {
    title: "Socials",
    links: [
      {
        href: "",
        text: "Awwwards",
      },
      {
        href: "",
        text: "Instagram",
      },
      {
        href: "",
        text: "Twitter",
      },
      {
        href: "",
        text: "LinkedIn",
      },
    ],
  },
};

// recent work --------

// workItems.js
export const works = [
  {
    title: "TWICE",
    description: "Interaction & Development",
    link: "",
    image:
      "https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg",
    bgColor: "#F1F1F1",
    year: "2024",
  },
  {
    title: "The Damai",
    description: "Design & Development",
    link: "",
    image:
      "https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2.jpg",
    bgColor: "#E0D9D1",
    year: "2024",
  },
  {
    title: "FABRIC™",
    description: "Design & Development",
    link: "",
    image:
      "https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray.jpg",
    bgColor: "#48494A",
    year: "2023",
  },
  {
    title: "Aanstekelijk",
    description: "Design & Development",
    link: "",
    image:
      "https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk.jpg",
    bgColor: "#101010",
    year: "2023",
  },
];

// more work
export const buttonData = [
  {
    href: "",

    buttonText: "More work",
    countNumber: "11",
  },
];

// scrolling projects -------------------

// data.js
export const items = [
  {
    type: "image",
    src: "https://dennissnellenberg.com/assets/img/home-item-1.jpg",
    alt: "Home Item 1",
  },
  {
    type: "video",
    src: mp42,
    alt: "Home Item 2",
  },
  {
    type: "image",
    src: "https://dennissnellenberg.com/assets/img/home-item-3.jpg",
    alt: "Home Item 3",
  },
  {
    type: "video",
    src: "https://dennissnellenberg.com/assets/img/home-item-4.mp4",
    alt: "Home Item 4",
  },
];

// row2 ---------/

export const mediaItems = [
  {
    type: "video",
    src: "https://dennissnellenberg.com/assets/img/home-item-5.mp4",
    className: "playpauze",
  },
  {
    type: "image",
    src: "https://dennissnellenberg.com/assets/img/home-item-6.jpg",
    style: {
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
  },
  {
    type: "video",
    src: "https://dennissnellenberg.com/assets/img/home-item-7.mp4",
    className: "playpauze",
  },
  {
    type: "image",
    src: "https://dennissnellenberg.com/assets/img/home-item-8.jpg",
    style: {
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
  },
];

// footer------------

// footerData.js
export const footerData = {
  sections: [
    {
      title: "Let’s work together",
      links: [
        {
          href: "mailto:manpicode@gmail.com",
          text: "manpicode@gmail.com",
        },
        {
          href: "tel:+12345678",
          text: "+12 3 45 45 44 44",
        },
      ],
    },
    {
      title: "Socials",
      links: [
        {
          href: "",
          text: "Awwwards",
        },
        { href: "", text: "Instagram" },
        { href: "", text: "Twitter" },
        {
          href: "",
          text: "LinkedIn",
        },
      ],
    },
  ],
  credits: {
    version: "2022 © Edition",
    localTime: "09:41 PM CET",
  },
};
