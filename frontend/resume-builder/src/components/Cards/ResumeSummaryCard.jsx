import React ,{useEffect,useState} from 'react';
import {getLightColorFromImage} from '../../utils/helper';

const ResumeSummaryCard=({imgUrl,title,lastUpdated,onSelect,createdAt})=>{
    
    const [bgcolor,setBgColor]=useState("#ffffff");

    useEffect(()=>{
        if(imgUrl){
            getLightColorFromImage(imgUrl)
            .then((color)=>{
                setBgColor(color);
            })
            .catch(()=>{
                setBgColor("#ffffff");
            });
        }
    },[imgUrl])


    return <div
    className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-xs lg:max-w-sm xl:max-w-md 
               bg-white rounded-2xl border border-gray-200 hover:border-purple-300 
               overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
    style={{backgroundColor:bgcolor}}
    onClick={onSelect}
    >
        <div className="w-full h-48 sm:h-52 md:h-70 lg:h-60 overflow-hidden">
            {imgUrl ?(
                <img 
                src={imgUrl}
                alt=""
                // className="w-full h-full object-contain"
                className="w-300px h-300px object-contain object-center"
                // style="height: 100%; object-fit: cover; object-position: 30% 58%;"
                />
            ):(
                <div></div>
        //         <div className="flex items-center justify-center h-full text-gray-400">
        //   No Preview
        // </div>
            )}
        </div>

        <div className="w-full bg-white px-4 py-3">
            <p className="text-sm font-semibold text-gray-800 truncate" style={{ fontSize: '8px' }}>{title}</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed font-[Trebuchet MS]" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
              Created On : {createdAt} <br />
            {/* </p>
            <p className="text-xs font-comicsans text-green-500 mt-0.5" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}> */}
              Last Updated : {lastUpdated}
            </p>
        </div>
    </div>

};

export default ResumeSummaryCard;
