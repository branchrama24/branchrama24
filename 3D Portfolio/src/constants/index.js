import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  quiz,
  memorama,
  portfolio,
  threejs,
  java,
  csharp,
  springboot,
  aspnet,
  linkedin,
  tiktok,
  sql,
  mysql,
  nosql,
  agile,
  scrum,
  singleton,
  composite,
  iterator,
  sheldon,
  copyfigma,
  flower,
  catalogo,
  calendario,
  persona,
  react,
  pasosfirmes,
} from "../assets";

export const navLinks = [
    {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "metodologias",
    title: "Metodologias",
  },
  {
    id: "patrones",
    title: "Patrones",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "tech",
    title: "Tecnologias",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
  {
    id: "hero",
    title: "Descargar CV",
  },    
   /*
*/

];

const services = [
  {
    title: "Desarrollador Frontend",
    description:"a",
    icon: web,
  },
  {
    title: "Conocimiento de Backend",
    icon: backend,
  },
  {
    title: "Creador de contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JS",
    icon: javascript,
  },
  {
    name: "TS",
    icon: typescript,
  },
  {
    name: "REACT JS",
    icon: reactjs,
  },
  {
    name: "REACT NATIVE",
    icon: reactjs,
  },
  {
    name: "TAILWIND CSS",
    icon: tailwind,
  },
  {
    name: "GIT",
    icon: git,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MYSQL",
    icon: mysql,
  },
    {
    name: "NODEJS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Desarrollador Frontend",
    company_name: "No-Country",
    icon: creator,
    iconBg: "#383E56",
    date: "Junio 2024 - Agosto 2024",
    points: [
      "Trabajo grupal que consistio en desarrollar en un Banco de ortesis llamado Pasos Firmes,  el cual tiene la finalidad de ayudar a la gente a traves de donaciones.",
    ],
  },
  {
    title: "Desarrollador Frontend",
    company_name: "Dev Place-Aticma",
    icon: creator,
    iconBg: "#383E56",
    date: "Mayo 2022 - Noviembre 2022",
    points: [
      "Me encargué del desarrollo de las vistas y la conexión con el Back-End en una aplicación web de comercio electrónico, bajo la supervisión de un Scrum Master, a lo largo de 4 sprints.",
    ],
  },
  {
    title: "Atención al cliente",
    company_name: "Felimana",
    icon: shopify,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Durante las temporadas de verano, trabajé en atención al cliente en un parque.",
    ],
  },
  {
    title: "Técnico en informática",
    company_name: "Freelance",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2018 - 2020",
    points: [
      "Servicios de reparación y mantenimiento de hardware y dispositivos electrónicos, así como restauración de software.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portafolio",
    description:
      "Bienvenido/a a mi página personal. Aquí encontrarás una recopilación de mis proyectos, trabajos y un poco sobre mí.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link2: "https://thanatosrama4.netlify.app/#about",
    source_code_link: "https://github.com/branchrama24/branchrama24",
  },
  {
    name: "Quiz-app",
    description:
      "Es una serie de opciones de respuesta para cada pregunta, donde una o varias pueden ser correctas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/branchrama24/branchrama24",
    source_code_link2: "https://quizapption.netlify.app/",
  },
  {
    name: "Memorama",
    description:
      "Consiste en encontrar los pares de cartas o imágenes que tienen la misma figura, utilizando la memoria.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: memorama,
    source_code_link:"https://github.com/branchrama24/branchrama24",
    source_code_link2: "https://memoramaapp.netlify.app/",
  },
  {
    name: "Jankenpo-Sheldon",
    description:
      "Es una variante del clásico juego 'piedra, papel o tijera' que se popularizó gracias a la serie de televisión 'The Big Bang Theory'.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sheldon,
    source_code_link:"https://github.com/branchrama24/branchrama24",
    source_code_link2: "https://jankenpo-sheldon.netlify.app/",
  },
  {
    name: "Tetris",
    description:
      "Es un videojuego de lógica de origen soviético, originalmente diseñado y programado por Alekséi Pázhitnov.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link2:"https://github.com/branchrama24/branchrama24",
    source_code_link: "https://github.com/branchrama24/branchrama24",
  },
  {
    name: "Clon de figma",
    description:
      "Figma es una herramienta integral que permite diseñar, prototipar, desarrollar y recopilar comentarios en un solo lugar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "NextJs",
        color: "black-text-gradient",
      },
    ],
    image: copyfigma,
    source_code_link2:"https://github.com/branchrama24/branchrama24",
    source_code_link: "https://github.com/branchrama24/branchrama24",
  },

  {
    name: "Catalogo de juegos",
    description:
      "Una lista que consiste en un conjunto de juegos divididos según su categoría o género.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: catalogo,
    source_code_link: "https://github.com/branchrama24/branchrama24",
    source_code_link2: "https://catalogojuegos.netlify.app",
  },  {
    name: "Clon del calendario de google",
    description:
      "Es un instrumento para medir el tiempo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: calendario,
    source_code_link: "https://gcloncalendar.netlify.app",
    source_code_link2: "https://github.com/branchrama24/branchrama24",
  },
  {
    name: "P3R",
    description:
      "Es un reproductor de música basado en el videojuego Persona 3 Reload.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: persona,
    source_code_link:"https://github.com/branchrama24/branchrama24",
    source_code_link2: "https://p3rtyfy.netlify.app",
  },
  {
    name: "Pasos Firmes",
    description:
      "Trabajo grupal que consistio en desarrollar en un Banco de ortesis llamado Pasos Firmes, el cual tiene la finalidad de ayudar a la gente a traves de donaciones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: pasosfirmes,
    source_code_link:"https://github.com/No-Country-simulation/s16-06-m-java-react",
    source_code_link2: "https://upbeat-commitment-production.up.railway.app/swagger-ui/index.html",
  },
];

const methodologies= [
  {
    title: "Agile",
    company_name: "Metodologia de trabajo",
    icon: agile,
    iconBg: "#383E56",
    date: "",
    points: [
      "Es un enfoque de gestión de proyectos que se centra en la colaboración y la adaptación al cambio, lo cual permite la creación de planes flexibles.",
    ],
  },
  {
    title: "Scrum",
    company_name: "Patron estructural",
    icon: scrum,
    iconBg: "#383E56",
    date: "",
    points: [
      "Se fundamenta en un marco de trabajo que establece roles, eventos y artefactos para orientar a los equipos en el desarrollo de productos complejos.",
    ],
  },
];

const patterns= [
    {
      title: "Singleton",
      company_name: "Patron creacional",
      icon: singleton,
      iconBg: "#383E56",
      date: "",
      points: [
        "Es un patrón de diseño creacional que garantiza que una clase tenga una única instancia, al mismo tiempo que proporciona un punto de acceso global a esa instancia.",
      ],
    },
    {
      title: "Composite",
      company_name: "Patron estructural",
      icon: composite,
      iconBg: "#383E56",
      date: "",
      points: [
        "Es un patrón de diseño estructural que facilita la composición de objetos en estructuras de árbol y permite trabajar con esas estructuras como si fueran objetos individuales.",
      ],
    },
    {
      title: "Iterator",
      company_name: "Patron de comportamiento",
      icon: iterator,
      iconBg: "#383E56",
      date: "",
      points: [
        "Se trata de un patrón de diseño de comportamiento que posibilita el recorrido de elementos en una colección sin exponer su estructura subyacente, ya sea una lista, una pila, un árbol, u otros.",
      ],
    },
    
  ];


const aboutme=[
  {
    name: "Creador de contenido",
    description:
      "Mi hobby es crear contenido en TikTok. Actualmente, cuento con más de 10,000 seguidores.",
    tags: [
      {
        name: "tiktok",
        color: "blue-text-gradient",
      },
    ],
    image: tiktok,
    source_code_link: "https://www.tiktok.com/@branchrama",
  },
  {
    name: "Desarrollador Frontend",
    description:
      "Soy un desarrollador especializado en el frontend, con un enfoque específico en React.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: react,
    source_code_link: "https://roadmap.sh/pdfs/roadmaps/frontend.pdf",
  },
  {
    name: "Conocimiento Backend",
    description:
      "Cuento con conocimientos en el backend. Puedo contribuir al desarrollo de los aspectos lógicos.",
    tags: [
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
    ],
    image: backend,
    source_code_link: "https://roadmap.sh/pdfs/roadmaps/backend.pdf",
  },
]

export { services, technologies, experiences, testimonials, projects, methodologies,patterns,aboutme};