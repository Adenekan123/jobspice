import jsPDF from "jspdf";

const convertToPDF = (options,imgData,filename,width,height) =>{
    const pdf = new jsPDF(options);
    pdf.addImage(imgData, 'JPEG',width,height)
    pdf.save(filename);
}

export default convertToPDF;