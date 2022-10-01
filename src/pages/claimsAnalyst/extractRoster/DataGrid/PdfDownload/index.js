import React from 'react'
import {GrDocumentPdf} from "react-icons/gr";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

const PdfDownload = ({columns, rows}) => {
    const downloadPdf = () => {
        const doc = new jsPDF();
        const arr = [];
        const filteredHead = columns.filter(item => item.name)
        arr.push(filteredHead.map(item => item.name))
        autoTable(doc, {
            styles: {
                overflow: "linebreak",
                fontSize: 6,
            },
            head: arr,
            body: rows.map(item => {
                const arr = [];
                columns.map(col => {
                    if(col.key !== "expanded"){
                        arr.push(item[col.key])
                    }
                })
                return arr;
            }),
        })

        doc.save('table.pdf')
    }
      
    return (
    <>
        <div onClick={downloadPdf} className="cursor-pointer  font-bold flex items-center space-x-2 border-r-2 border-gray-200 py-0 px-3">
          <GrDocumentPdf className="text-xl" />
          <p className="p-0 m-0 text-color-primary">
          PDF View
          </p>
        </div>
    </>
  )
}

export default PdfDownload