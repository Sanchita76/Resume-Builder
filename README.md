<div align="center">

# IntelliResume:   📝ATS Resume Builder
*Get ATS-Friendly Professional Resumes Instantly!*

</div>

<div align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
<img src="https://forthebadge.com/images/badges/uses-brains.svg" />
<img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" />
<br>
<img src="https://img.shields.io/github/repo-size/Sanchita76/Resume-Builder?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/Sanchita76/Resume-Builder?style=for-the-badge" />
<img src="https://img.shields.io/github/issues-raw/Sanchita76/Resume-Builder?style=for-the-badge" />
   
<img src="https://img.shields.io/github/forks/Sanchita76/Resume-Builder?style=for-the-badge" />
<img src="https://img.shields.io/github/issues-pr-closed/Sanchita76/Resume-Builder?style=for-the-badge" /><br>
   <img src="https://img.shields.io/github/stars/Sanchita76/Resume-Builder?style=for-the-badge" />
   <img src="https://img.shields.io/github/contributors/Sanchita76/Resume-Builder?style=for-the-badge" />
    <img src="https://img.shields.io/github/issues-pr-closed/Sanchita76/Resume-Builder?style=for-the-badge" />
       <img src="https://img.shields.io/github/last-commit/Sanchita76/Resume-Builder?style=for-the-badge" />
        
   </div>

---

### IntelliResume - About the Project
**IntelliResume** is a **FullStack ATS-Friendly** Resume Builder Application designed to simplify the resume creation process. With a range of customizable templates, users can: Choose from various **ATS-Friendly** templates , Create and customize their ideal resume , **Modify template colors** and designs dynamically , **Upload photos** to add authenticity , **Delete old resumes** with ease<br><br>
Our application boasts a robust tech stack, ensuring a seamless user experience. Some key technical highlights include:<br>
**Front-end:** User-friendly and scalable UI/UX design, ,**Back-end:** Robust Full Stack architecture for efficient data management , **Functionality:** Dynamic template customization, photo upload, and resume management capabilities

---

### Key Features ✨

- **1.Secure Login/Signup with JWT Authentication**  
     &nbsp;&nbsp;&nbsp;&nbsp; ***A.User Registration*** :<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - User sends a POST request with their details (name, email, password, and profile image URL).<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - It checks if the user already exists, hashes the password for security, and returns a JSON Web Token (JWT) upon successful registration.<br>
&nbsp;&nbsp;&nbsp;&nbsp; ***A.User Login*** :<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - User sends a POST request with their email and password. The system verifies the credentials.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - If they're correct, a JWT is generated and returned to the user.
  
- **2.Upload Account Photo**  
  &nbsp;&nbsp;&nbsp;&nbsp;Upload a profile picture during signup to personalize your account, and view it every time you log in<br>

- **3.Choose Templates or Start with a Default Template**  
  &nbsp;&nbsp;&nbsp;&nbsp; -Browse various templates on the Home Page, select one, and enter a resume title to begin inputting details.<br>
   &nbsp;&nbsp;&nbsp;&nbsp; - Alternatively, log in, click "Get Started," and use the Default Template design, which can be modified anytime.<br>

- **4.Comprehensive Resume Sections**  
 &nbsp;&nbsp;&nbsp;&nbsp; ***A.Personal Information:*** :Full Name, Current Designation, Short Summary<br>
 &nbsp;&nbsp;&nbsp;&nbsp; ***B.Contact Info:*** :Email, Portfolio Website, Address, GitHub, LinkedIn, Coding Profiles, Additional Links<br>
&nbsp;&nbsp;&nbsp;&nbsp; ***C.Work Experience:*** :Company Name, Role, Start & End Date, Contribution<br>
&nbsp;&nbsp;&nbsp;&nbsp; ***D.Projects:*** :Project Title, Summary, Live Demo URL, Repository Link<br>
&nbsp;&nbsp;&nbsp;&nbsp; ***E.Interests, Skills, Languages, Certifications:*** :CShowcase your expertise and interests<br>
These sections are editable, allow multi-entry functionality with the "Add Another" button, and can be saved at any point using the "Save & Next," "Download," and "Preview" buttons.<br>

- **5. Customizable Themes**  
 &nbsp;&nbsp;&nbsp;&nbsp; ***A.Change Templates:*** Switch among various templates with live effects on your current resume<br>
 &nbsp;&nbsp;&nbsp;&nbsp; ***B.Change Color Palette:*** Select from multiple color palettes to view changes on your resume.<br>

- **6.Intuisive UI/UX :** A response Web Application running on all types of screens(iPad , Samsung S8+ , Android etc..),with Reviews section, FAQs section , Footer , Template Showcase Section , Resume that got shortlisted by renowned companies , Key Features list
---


### Pre-Requisites 📰

Before running DevFeed locally, ensure that you have the following software installed on your machine:

* **Node.js 🚀**: Make sure you have Node.js installed. You can download it from the official [Node.js website](https://nodejs.org).
* **npm (Node Package Manager) 📦**: npm is usually installed automatically with Node.js. You can verify its installation by running `npm -v` in your terminal or command prompt. If you don't see a version number, you can install it by following the instructions on the [npm website](https://www.npmjs.com/get-npm).

Make sure to have these prerequisites in place before proceeding with the setup. Now you're ready to run DevFeed locally and start exploring its awesome features! 💪

#### Installing Specific Node Version

* `nvm install 24.11.0`
* `nvm use 24.11.0`

#### Verifying Installation

* **Check installed versions:** `nvm list`
* **Verify active version:** `node -v`

#### Verify Clean Alignment (No Conflicts)

Run these commands and check the outputs:
* `where node`
* `where npm`
* `where npx`
* `npm prefix -g`

---

### System Set Up ⚙️
Follow these steps to get the development environment running!

#### 1. Clone Your Forked Repository

After forking the project, clone your forked copy to your local machine.

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git clone [https://github.com/YOUR-USERNAME/Resume-Builder.git](https://github.com/YOUR-USERNAME/Resume-Builder.git)

# Navigate into the new project directory
cd Resume-Builder
```
> **Note:** Your original instructions had `git clone https://github.com/Sanchita76/Resume-Builder.git`. You should always clone the fork you created, not the original repository, to be able to push your changes.

#### 2. Install Frontend Dependencies (runs at http://localhost:5173)

First, move into the frontend folder. (Your instructions show `cd frontend` then `cd resume-builder`, so we'll follow that.)

```bash
cd frontend
cd resume-builder
```

Now, run the commands to remove old dependencies (if any) and install fresh ones.

**On Windows (cmd or PowerShell):**
```bash
:: Remove existing node_modules and package-lock.json
rd /s /q node_modules
del package-lock.json

:: Install dependencies and start the dev server
npm install
npm run dev
```

**On Linux / macOS (bash or zsh):**
```bash
# Remove existing node_modules and package-lock.json
rm -rf node_modules
rm package-lock.json

# Install dependencies and start the dev server (Backend 
npm install
npm run dev
```

Leave this terminal running.

#### 3. Install Backend Dependencies  (runs on PORT:8000)

Now, **open a new terminal window** and navigate back to the project's root directory (`Resume-Builder`).

```bash
# Navigate to the backend folder from the root
cd backend
```

Just like before, run the commands to ensure a clean installation.

**On Windows (cmd or PowerShell):**
```bash
:: Remove existing node_modules and package-lock.json
rd /s /q node_modules
del package-lock.json

:: Install dependencies and start the dev server
npm install
npm run dev
```

**On Linux / macOS (bash or zsh):**
```bash
# Remove existing node_modules and package-lock.json
rm -rf node_modules
rm package-lock.json

# Install dependencies and start the dev server
npm install
npm run dev
```
#### Replace MongoDB_URI in cd backend->.env with your own MongoDB_URI connection string

You should now have both the frontend and backend servers running on your local machine.

---

### Tech Stacks Used
- Frontend : React.js , TailwindCSS (V3.18.4)
- Backend : Node.js , Express.js , JavaScript
- Database : MongoDB

### Screenshots from UI

#### Home Page
###### Templates Section
<img width="455" height="351" alt="Screenshot 2025-11-03 235355" src="https://github.com/user-attachments/assets/c2787666-9e31-4795-9d46-686f4e19600e" /><br>

###### Features Offered
<img width=
   "455" height="351" alt="Screenshot 2025-11-03 235407" src="https://github.com/user-attachments/assets/35b383d3-a1f8-4061-81f0-5cd32d526bf4" />
<br>

###### FAQS Section
<img width="455" height="350" alt="Screenshot 2025-11-03 235417" src="https://github.com/user-attachments/assets/33e1295b-4cf8-481c-ba40-a6f7881ea421" />
<br>

###### Reviews Section & Footer
<img width="455" height="350" alt="Screenshot 2025-11-03 235425" src="https://github.com/user-attachments/assets/324828fb-b239-455d-ab4a-80f8daaec139" />
<br>

###### Resume Dashboard
<img width="455" height="350" alt="Screenshot 2025-11-03 235441" src="https://github.com/user-attachments/assets/c7862b0e-319b-4fff-907b-2264f9b5e86f" />
<br>

###### Resume Edit Section
<img width="455" height="350" alt="Screenshot 2025-11-03 235454" src="https://github.com/user-attachments/assets/48a25a92-3802-4464-adc8-baa038ecd816" />
<br>

###### Change Theme Section
<img width="455" height="350" alt="Screenshot 2025-11-03 235506" src="https://github.com/user-attachments/assets/bc37c3cd-d3f7-4dfa-b201-0ec7f35976a2" />
<br>
<img width="455" height="310" alt="Screenshot 2025-11-03 235516" src="https://github.com/user-attachments/assets/672eb7bd-5118-4059-a82d-a35ad6bf2b31" />
<br>

###### Preview & Download Section
<img width="455" height="350" alt="Screenshot 2025-11-03 235531" src="https://github.com/user-attachments/assets/eef08123-904a-4176-9681-872f4738a7a3" />
<br>

###### Mobile view
<img width="455" height="300" alt="Screenshot 2025-11-03 235714" src="https://github.com/user-attachments/assets/fb5115a5-6357-4638-a44a-7b40dd1eba96" />
<br>

### SRS Document 📜
##### DFD Diagram View
<img width="500" height="548" alt="image" src="https://github.com/user-attachments/assets/a19a3ed7-a043-4d99-b552-cc05e3eeb126" />

##### ER Diagram View
<img width="455" height="355" alt="image" src="https://github.com/user-attachments/assets/bbdac960-0e03-4cf8-84c3-825fd0b6beeb" />
