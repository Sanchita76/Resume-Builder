import TEMPLATE_ONE_IMG from '../assets/template-one.jpg'
import TEMPLATE_TWO_IMG from '../assets/template-two.jpg'
import TEMPLATE_THREE_IMG from '../assets/template-three.jpg'

export const resumeTemplates = [
  {
    id: '01',
    label: "Template One",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: 'themeOne',
  },
  {
    id: '02',
    label: "Template Two",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: 'themeTwo',
    label: "Template Two"
  },
  {
    id: '03',
    label: "Template Three",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: 'themeThree',
  },
];

export const themeColorPalette={
    themeOne: [
        ["#EBFDFF","#A1F4FD","#CEFAFE","#00B8DB","#4A5565"],

        ["#E9F8F8","#84EFE7","#93E2DA","#2AC9A0","#3D4C5A"],
        ["#F5F4FF","#E0DBFF","#C9C2F8","#8579D1","#4B4B5C"],
        ["#F0FAFF","#D6F0FF","#AFDEFF","#3399FF","#445361"],
        ["#FFF5F7","#FFEOEC","#FAC6D4","#F6729C","#5A5A5A"],
        ["#F9FAFB","#E4E7EB","#CBD5E0","#7F9CF5","#2D3748"],

        ["#F4FFFD","#D3FDF2","#B0E9D4","#34C79D","#384C48",],
        ["#FFF7F0","#FFE6D9","#FFD2BA","#FF9561","#4C4743",],
        ["#F9FCFF","#E3F0F9","#C0DDEE","#6CACCF","#46445E",],
        ["#FFFDF6","#FFF4D7","#FFE7A0","#FFD000","#57534E",],
        ["#EFFCFF","#C8F0FF","#99E0FF","#4A4A4A","#2B3A42",],

        ["#F7F7F7","#E4E4E4","#CFCFCF","#4A4A4A","#222222",],
        ["#E3F2FD","#90CAF9","#a8d2f4","#1E88E5","#0D47A1",],
    ],
};

export const DUMMY_RESUME_DATA = {
    profileInfo:{
        profileiImg: null,
        previewUrl:"",
        fullName: "Mehuli Biswas",
        designation: "Software Engineer Intern",
        summary:"I'm currently an SWE Intern at CodeClouds IT Solutions Private Limited , working on MERN Stack Development & CRM. I'm a Full Stack Developer.Alonside , I have in-depth  knowledge in DSA Rating: 1548+ @Leetcode & Pupil@Codeforces platforms. I would love to collaborate & learn on new opportunities!",
    },
    contactInfo:{
        email:"mehulibiswas16@gmail.com",
        phone:"8697065705",
        location:"Kolkata , West Bengal",
        linkedin:"https://www.linkedin.com/in/mehuli-biswas-817246334/",
        github:"https://github.com/Sanchita76",
        website:"https://mehulibiswas.vercel.app"
    },
    workExperience:[
        {
            company:"CodeClouds IT Solutions Private Limited",
            role:"Software Development Engineer (SWE) Intern",
            startDate:"2025-09",
            endDate:"2025-10",
            description:"Developed and optimized EcoKart, an e-commerce applications using HTML, CSS ,JavaScript, while acquiring expertise in MERN Stack Development"
        }
    ],
    education:[
        {
            degree:"B.Tech in Computer Science Enginerring",
            institution:"Maulana Abul Kalam Azad University of Technology",
            startDate:"2022-09",
            endDate:"2026-06"
        }
    ],
    skills:[
        {
            "name":"React.js",
            "progress":90
         } , 
         {
            "name":"MongoDB",
            "progress":70
         },
         {
            "name":"Node.js",
            "progress":80
         } , 
         {
            "name":"Express.js",
            "progress":100
         }
    ],
    projects:[
        {
            "title":"Women’s SOS Message Sharing and Live Interaction Application (Team Project)",
            "description":"It has secret SOS messaging feature using Steganography , LLMs , Image Generator.\n An AI avatar with Gemini , ElevenLabs TTS for audio-facial recognition .\n A Legal Help bot using MongoDB , Transformers . \n Worked on Python 3.12 with FastAPI to build asynchronous REST APIs enabling speech-recognition,Twitter messaging , LLM responses, and image generation for SOS communication, and multimedia processing",
            "github":"https://github.com/Sanchita76/GitHub-Plagiarism-Detector",
            "liveDemo":"https://github.com/Sanchita76/GitHub-Plagiarism-Detector.git"
        }
    ],
    certifications:[
        {
            "title":"Networking Fundamentals on Google Cloud",
            "issuer":"Google Cloud",
            "year":"2025"
        }
    ],
    languages:[
        {
            "name":"English",
            "progress":100
        },
        {
             "name":"Hindi",
             "progress":100
        },
        {
             "name":"Bengali",
             "progress":100
        }
    ],
    interests:["Classical Dance" , "Geopolitical Debates" , "Artwork"]
}
