import psnaLogo from './assets/psna-logo.jpeg';
import schoolLogo from './assets/school-logo.jpeg';
export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Photographer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Vishnu';

export const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "PSNA College of Engineering and Technology",
      duration: "2021 - 2025",
      logo: psnaLogo,  
      url: "https://psnacet.edu.in",  
      highlights: [
        "CGPA: 8.0 (upto 6th semester)",
       
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "HNUPR Matric Higher Secondary School",
      duration: "2019 - 2022",
      logo: schoolLogo, 
      highlights: [
        "Percentage: HSC : 75%, SSLC : 97%"
      ]
    }
  ];
  



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
