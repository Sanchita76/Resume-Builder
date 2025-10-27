// export const validateEmail = (email) => {
//   const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]{5,}@(gmail\.com|codeclouds\.co\.in|rcciit\.org\.in)$/;
//   if (!emailRegex.test(email)) { return "Email should end with '@gmail.com' or '@codeclouds.co.in' and start with alphabets and minimum 6 characters.";
//   } else { return null; } };
import moment from 'moment';
import html2canvas from "html2canvas";

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]{5,}@(gmail\.com|codeclouds\.co\.in|rcciit\.org\.in)$/;
    return emailRegex.test(email);
};

//get lighest average color
  export const getLightColorFromImage=(imageUrl)=>{
    return new Promise((resolve, reject) => {
        //Check if imageUrl is valid
        if(!imageUrl || typeof imageUrl !=='string'){
            return reject(new Error('invalid image URL'));
        }
        const img = new Image();

        //If not a abase64 string set crossOrigin !importanat for CORS
        if(!imageUrl.startsWith('data:')){
            img.crossOrigin='anonymous';
        }

        img.src=imageUrl;

        img.onload=()=>{
            const canvas=document.createElement('canvas');
            const ctx=canvas.getContext('2d');

            canvas.width=img.width;
            canvas.height=img.height;
            ctx.drawImage(img,0,0);

            const imageData=ctx.getImageData(0,0,canvas.width,canvas.height).data;
            
            let r=0,g=0,b=0,count=0;

            for(let i=0;i<imageData.length;i+=4){
                const red =imageData[i];
                const green =imageData[i+1];
                const blue =imageData[i+2];
                const brightness=(red+green+blue)/3;

                //Only count light pixels (tweak threshold as needed)
                if(brightness>180){
                    r+=red;
                    g+=green;
                    b+=blue;
                    count++;
                }
            }

            if(count===0){
                resolve('#ffffff'); //fallback if no light pixels found
            }else{
                r=Math.round(r/count);
                g=Math.round(g/count);
                b=Math.round(b/count);
                resolve(`rgb(${r},${g},${b})`);
            }
        };

        img.onerror=(e)=>{
            console.error('Failed to load image:',e);
            reject(new Error('Image could not be loaded or is blocked by CORS'));
        };
    });
  };

  //Eg : Mar 2025
  export  function formatYearMonth(yearMonth){
    return yearMonth?moment(yearMonth,"YYYY-MM").format("MMM YYYY"):"";
  }

export const fixTailwindColors=(element)=>{
    const elements=element.querySelectorAll("*");

    elements.forEach((el)=>{
        const style=window.getComputedStyle(el);

        ["color","backgroundColor","borderColor"].forEach((prop)=>{
            const value=style[prop];
            if(value.includes("oklch")){
                el.style[prop]="#000";//or any safe callback
            }
        });
    });
};

// //convert component to image
// export async function captureElementAsImage(element){
//     if(!element) throw new Error("No element provided");

//     const canvas=await html2canvas(element);
//     return canvas.toDataURL("image/png");
// }
export async function captureElementAsImage(element) {
  if (!element) throw new Error("No element provided");

  // Wait for all images inside element to load
  const imgs = Array.from(element.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      img =>
        new Promise(resolve => {
          if (img.complete) resolve();
          else {
            img.onload = img.onerror = () => resolve();
          }
        })
    )
  );

  // Small delay to ensure layout settles
  await new Promise(r => setTimeout(r, 300));

  const canvas = await html2canvas(element, {
    useCORS: true,
    logging: false,
    scale: 2,
  });
  return canvas.toDataURL("image/png");
}


//Utility to convert base64 data URL toa a File object
export const dataUrltoFile=(dataUrl,fileName)=>{
    const arr=dataUrl.split(",");
    const mime=arr[0].match(/:(.*?);/)[1];
    const bstr=atob(arr[1]);
    let n=bstr.length;
    const u8arr=new Uint8Array(n);

    while(n--){
        u8arr[n]=bstr.charCodeAt(n);
    }

    return new File([u8arr],fileName,{type:mime});
};
 