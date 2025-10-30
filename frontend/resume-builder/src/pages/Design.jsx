import React, { useState,useEffect} from 'react';
import showi from '../assets/show-1.jpeg';
import showii from '../assets/show-2.jpeg';
import showiii from '../assets/show-3.jpeg';
import showiv from '../assets/show-4.jpeg';
import showv from '../assets/show-5.jpeg';
import comp from '../assets/comp.jpg';
import { useNavigate } from 'react-router-dom';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from "../components/Modal";
import {UserContext} from "../context/userContext";
import { useContext } from 'react';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';
import LandingPage from './LandingPage';

const Design=()=>{
  // Why Choose Us
    const { user } = useContext(UserContext);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const navigate = useNavigate();

    const handleCTA=()=>{
        if(!user){
            setOpenAuthModal(true);
        }else{
            navigate("/dashboard");
        }
    };


    // FAQS
    const FAQs = [
  {
    question: 'How do I use the Resume Builder app?',
    answer: 'With Resume Builder, select and customize a template, then build a resume with guided steps or by importing an existing file. Our platform makes it simple to build a resume by offering expert tips and a user-friendly interface. You’ll add your experience, education, key skills, and more, aided by expert tips, suggested phrases, and an AI writer tool. Then, save your resume by creating a free account. You can use our resume maker to download your TXT resume or upgrade to a paid subscription to download your professionally designed PDF resume.',
  },
  {
    question: 'Do I need to download an app to use the resume builder on mobile?',
    answer: 'No download is required — you can use our builder directly in your phone’s browser. We also offer a mobile-friendly browser app for a faster, more streamlined experience.',
  },
  {
    question: 'What makes Resume Builder the best resume tool?',
    answer: 'Using the Resume Builder app, you have a 23% higher chance of getting a job, and users experience 38% more interviews. You’ll get resume help from experts every step of the way, with 25+ professional resume templates and AI-enabled suggestions to write a resume that gets results.',
  },
  {
    question: 'What is the main purpose of a resume builder?',
    answer: 'The main purpose of a resume builder is to help you generate a resume quickly and professionally—no design or formatting skills required. Whether you\'re using a resume creator or a free resume generator, these tools streamline the process of organizing your work history, skills, and education. Resume Builder also offers tailored templates, so whether you\'re creating a resume for builder jobs in construction or applying to corporate roles, you’ll find an option that fits.',
  },

  {
    question: 'Is my information secure and compliant with data privacy laws?',
    answer: 'Absolutely. Resume Builder is fully compliant with GDPR and CCPA regulations. Your data is encrypted and never sold or shared when using our platform, including our free AI resume builder. You can feel confident knowing your information is protected while you build a resume or save drafts for later editing.',
  },{
    question: 'Should I download my new resume as a PDF or text file?',
    answer: 'We recommend downloading your resume in both PDF and text format. A professionally designed PDF resume has a visual impact, and its appearance is consistent across computer screens and systems. But you may need a text format resume for some job applications, so it\'s good to have both available.',
  },{
    question: 'Does Resume Builder provide customer support?',
    answer: 'Our customer service representatives are available 24 hours a day. Representatives can help with any technical difficulties, questions about your account, or any other questions you may have. See our contact info to get in touch.'
  },
];
   const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

    return (
        <div><br/>
    {/* Why Choose Section */}
            <section className="mt-5">
  <h2 className="text-3xl font-bold text-center mb-4" style={{fontFamily:"cursive", color:"crimson"}}>
    Get hired 36% faster with our feature-packed and easy-to-use resume builder app!<br/>
  </h2>
  <p className="text-0.7xl font-bold text-black-600 text-center mb-8">
    IntelliResume.com is now part of Bold LLC. For more information visit our <a href="#" className="text-blue-500 underline">Terms of Use</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.<br/>
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-purple-500 mr-2">📋📲</span>Powerful resume builder
      </h3>
      <p className="text-gray-600">
        Use our potent creation tools and expert guidance to create the perfect resume for your next job application.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-purple-500 mr-2">👤📄</span>Professional Templates
      </h3>
      <p className="text-gray-600">
        Choose from 25+ applicant tracking systems (ATS)-friendly modern and professional templates.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-purple-500 mr-2">🎨</span>Customize Fonts & Colors
      </h3>
      <p className="text-gray-600">
        Select custom fonts and colors on any resume template.
      </p>
    </div>
    <div>


      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-purple-500 mr-2">📋</span> Free Resume Examples
      </h3>
      <p className="text-gray-600">
        Use our more than 500 resume examples and templates to see what a great resume looks like in your field.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-purple-500 mr-2">📝ATS</span>ATS-Friendly Templates
      </h3>
      <p className="text-gray-600">
        Sail through applicant tracking systems with resume templates that appeal to both machines and humans.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <span className="text-purple-500 mr-2">🔍</span> Expert Tips & Guidance
      </h3>
      <p className="text-gray-600">
        Get help every step of the way as you build your resume with expert tips and suggested phrases.
      </p>
    </div>
  </div>
  <div className="flex justify-center mt-8">
    <button 
      className="bg-orange-500 text-sm font-semibold text-white px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer"
      onClick={handleCTA}
    >
      Create Your Resume Now!
    </button>
  </div>
</section>


{/* Features Section */}
<br/><br/>
<section className="mt-5">
            <h2 className="text-2xl font-bold text-center mb-12">
                Features That Make You Shine !
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
                    <p className="text-gray-600">
                        Update your resume sections with live preview and instant formatting.
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">
                        Beautiful Templates</h3>
                        <p className="text-gray-600">
                            Choose from modern , professional templates that are easy to customize.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">
                       Download in PDF Format</h3>
                        <p className="text-gray-600">
                            Export your resume instantly in high-quality PDF format, perfect for job applications and sharing.


                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">
                       Free & Easy to Use</h3>
                        <p className="text-gray-600">
                            No sign-up required to try. Just pick a resume template, fill your details, and download – all for free.


                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-semibold mb-3">
                       AI Resume Analysis</h3>
                        <p className="text-gray-600">
                            Get an instant ATS score and detailed feedback to improve your resume's impact.


                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-semibold mb-3">ATS-Friendly Templates</h3>
                        <p className="text-gray-600">
                            Our CV templates are optimized to pass Applicant Tracking Systems used by top companies and recruiters.
                        </p>
                    </div>
                </div>
           </section>

<br/><br/>
{/* Image Section */}
<div className="w-full h-full">
  <img
    src={comp}
    alt="Features Image"
    className="w-full h-auto object-cover"
  />
</div>


<br/><br/><br/>
{/* FAQS Section */}
<div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4" style={{fontFamily:"cursive", color:"olive"}}>Frequently Asked Questions About Resume Builder</h2><br/>
        {FAQs.map((faq, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg">{faq.question}</span>
              <button
                onClick={() => toggleFAQ(index)}
                className="text-xl font-bold text-purple-600 cursor-pointer w-6 text-center"
              >
                {openFAQ === index ? '-' : '+'}
              </button>
            </div>
            {openFAQ === index && (
              <div className="pt-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Design;


