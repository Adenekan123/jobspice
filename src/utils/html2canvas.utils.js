import html2canvas from "html2canvas";
import convertToPDF from "./jspdf.utils";

const snapAndDownloadToPDF = async (element,options,filename,width,height) => {
  html2canvas(element, {
    logging: false,
    useCORS: true,
  }).then(canvas=>{
//    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//   const a = document.createElement("a");
//   a.setAttribute("download", `info.png`);
//   a.setAttribute("href", image);
//   a.click();


    const imgData = canvas.toDataURL();
    convertToPDF(options,imgData,filename,width,height)
  })
};

export default snapAndDownloadToPDF;