import React ,{useEffect,useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axiosInstance from '../../utils/axiosInstance';
import {API_PATHS} from '../../utils/apiPaths';
import DashboardLayout from "../../components/layouts/DashboardLayout";
import {LuCirclePlus} from "react-icons/lu";
import moment from "moment";
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard";
import CreateResumeForm from "./CreateResumeForm";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const navigate=useNavigate();
  const location = useLocation(); // ✅ detect when route changes (after navigation back)
  const [openCreateModal,setOpenCreateModal]=useState(false);
  const [allResumes,setAllResumes]=useState(null);

  const fetchAllResumes=async()=>{
    try{
      const response=await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      setAllResumes(response.data);
    }catch(error){
      console.error("error fetching resumes:",error);
    }
  };
 
  // ✅ Refetch whenever we open dashboard OR location changes
  useEffect(()=>{
    fetchAllResumes();
  },[location]);

  return (<DashboardLayout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                    gap-4 sm:gap-6 md:gap-7 pt-2 pb-6 px-4 md:px-6 lg:px-10">
      <div
      className="flex flex-col gap-5 items-center justify-center 
                   bg-white rounded-2xl border border-purple-100 hover:border-purple-300 
                   hover:bg-purple-50/30 cursor-pointer shadow-sm hover:shadow-md 
                   transition-all duration-200 h-64 sm:h-72"
      onClick={()=> setOpenCreateModal(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-purple-200/20 rounded-2xl">
            <LuCirclePlus className="text-xl text-purple-500"/>
        </div>

        <h3 className="font-medium text-gray-800 text-center">Add New Resume</h3>
      </div>
      {allResumes?.map((resume)=>(
        <ResumeSummaryCard
        key={resume?._id}
        imgUrl={resume?.thumbnailLink || null}
        // title={resume.title}
        title={
    <span className="text-base sm:text-lg font-bold text-orange-700 font-trebuchet">
      {resume.title}
    </span>
  }
        //created at
        createdAt={
      resume?.createdAt
        ? moment(resume.createdAt).format("Do MMM YYYY")
        : ""
    }
    //updated at
        lastUpdated={
          resume?.updatedAt
             ? moment(resume.updatedAt).format("Do MMM YYYY")
             :""
          }
          onSelect={()=>navigate(`/resume/${resume?._id}`)}
          />
        ))}
    </div>

    <Modal
        isOpen={openCreateModal}
        onClose={()=>{
          setOpenCreateModal(false)
        }}
        hideHeader
        >
          <div>
            <CreateResumeForm
              onSuccess={() => {
              setOpenCreateModal(false); // close modal
              fetchAllResumes();         // refresh the resume list
//               useEffect(() => {
//   fetchAllResumes();
// }, [openCreateModal === false]);
             }}
        />

          </div>
        </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
