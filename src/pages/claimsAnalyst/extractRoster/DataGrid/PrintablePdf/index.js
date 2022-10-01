import React from 'react'
import {GrDocumentPdf} from "react-icons/gr";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';
const PrintablePdf = ({columns, rows}) => {
    const saveToLocalStorage = () => {
        const data = {
            columns,
            rows
        }
        localStorage.setItem("printable_view", JSON.stringify(data))
        window.open("printable-view", '_blank');
    }
      
    return (
    <>
        <div onClick={saveToLocalStorage} className="cursor-pointer  font-bold flex items-center space-x-2 border-r-2 border-gray-200 py-0 px-3">
          <p className="p-0 m-0">
          Printable View
          </p>
        </div>
    </>
  )
}

export default PrintablePdf