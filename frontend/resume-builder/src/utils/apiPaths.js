export const BASE_URL="http://localhost:8000";

//utils/apiPaths.js
export const API_PATHS={
    AUTH:{
        REGISTER:"/api/auth/register",//Signup
        LOGIN:"/api/auth/login",//Authenticate user 7 return JWT token
        GET_PROFILE:"/api/auth/profile",//Get logged-in user details

    },
     
    RESUME:{
        CREATE:"/api/resume",//POST - Create a new resume
        GET_ALL:"/api/resume",//GET - Get all resumes of logged-in user
        GET_BY_ID:(id)=>`/api/resume/${id}`,//GET - Get resume by ID
        UPDATE :(id)=>`/api/resume/${id}`,//PUT - Update resume by ID
        DELETE:(id)=>`/api/resume/${id}`,//DELETE - Delete resume by ID
        UPLOAD_IMAGES:(id)=>`/api/resume/${id}/upload-images` //PUT - Upload thumbnail & resume profile images
     },

     IMAGE:{
        UPLOAD_IMAGE:"api/auth/upload-image",
     }
};