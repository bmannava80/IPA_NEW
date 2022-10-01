import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiFillCaretDown, AiFillCaretRight, AiOutlineFilter } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { Filters } from "react-data-grid-addons";

import createRowData from './createRowData'
import Pagination from './Pagination';
import Container from './Container';
import View from './View';
import PdfDownload from './PdfDownload';
import RowDetail from "./RowDetail"
import Expander from "./Expander"
import RowDetailView from "./RowDetail/RowDetailView"
import AdvancedSortContainer from './AdvancedSortContainer';
import ReorderContainer from './ReorderContainer';
import PrintablePdf from "./PrintablePdf"
import _ from 'lodash';

const DataGrid = () => {
  const [rows, setRows] = useState(createRowData(50));
  const [defaultRows, setDefaultRows] = useState(_.cloneDeep(rows));
  const [page, setPage] = useState(1);
  const [detach, setDetach] = useState(false);
  const [rowDetail, setRowDetail] = useState(false);
  const gridRef = useRef()
  const gridRef2 = useRef()
  const [reorder, setReorder] = useState(false);
  const [hide, setHide] = useState(false)
  const [pdfRows, setPdfRows] = useState(_.cloneDeep(rows))

  useEffect(() => {
    if(hide){
    } else{
      setTimeout(() => {
        setHide(true)
      },10)
    }
  }, [hide])

  const {
    NumericFilter,
    AutoCompleteFilter,
    MultiSelectFilter,
    SingleSelectFilter
  } = Filters;
  const defaultColumnProperties = {
    filterable: true,
    sortable: true
  };

  const [columns, setColumns] = useState([
    {
      frozen: true,
      key: 'expanded',
      name: '',
      width: 30,
      getRowMetaData: row => ({ row, setRows }),
      formatter: Expander
    },
    {
      frozen: true,
      key: "id",
      width: 200,
      name: "ID",
      getRowMetaData: row => ({ row, setRowDetail: setRowDetail }),
      formatter: RowDetail
      // filterRenderer: NumericFilter
    },
    {
      frozen: true,
      key: "firstName",
      name: "First Name",
      width: 200,
      //   filterRenderer: AutoCompleteFilter
    },
    {
      frozen: true,
      key: "lastName",
      name: "Last Name",
      width: 200,
      //   filterRenderer: AutoCompleteFilter
    },
    {
      frozen: true,
      key: "jobTitle",
      name: "Job Title",
      width: 200,
      // filterRenderer: MultiSelectFilter
      filterRenderer: SingleSelectFilter
      

    },
    {
      frozen: true,
      key: "jobArea",
      name: "Job Area",
      width: 200,
      //   filterRenderer: SingleSelectFilter
    },
    {
      frozen: true,
      key: "jobType",
      name: "Job Type",
      width: 200,
    },
    {
      frozen: true,
      key: "email",
      name: "Email",
      width: 200,
    },
    {
      frozen: true,
      key: "street",
      name: "Street",
      width: 200,
    },
    {
      frozen: true,
      key: "zipCode",
      name: "ZipCode",
      width: 200,
    },
    {
      frozen: true,
      key: "date",
      name: "Date",
      width: 200,
    },
    {
      frozen: true,
      key: "catchPhrase",
      name: "Catch Phrase",
      width: 200,
    }
  ].map((c, i) => {
    if(i > 0){
      return { ...c, ...defaultColumnProperties }
    } else{
      return c
    }
  })
  )

  const [tableWidth, setTableWidth] = useState(() => {
    let width = 0
    columns.map(item => {
      width = width + item.width
    })
    width += 200;
    return width
  });

  useEffect(() => {
    setTableWidth(old => {
      let width = 0
      columns.map(item => {
        width = width + (item.width === -1 ? 0 : item.width)
      })
      // width += 200;
    return width
    })
  }, [columns])


  const [advancedSort, setAdvancedSort] = useState({
    hideColumnSort: false,
    visible: false,
    applied: false,
    filters: [
      {
        sort: "",
        direction: "ASC",
      },
      {
        sort: "",
        direction: "ASC",
      },
      {
        sort: "",
        direction: "ASC",
      },
    ]
  })

  useEffect(() => {
    const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
      const comparer = (a, b) => {
        if (sortDirection === "ASC") {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else if (sortDirection === "DESC") {
          return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
        else {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }
      };
      return sortDirection === "NONE" ? [...rows].sort(comparer) : [...rows].sort(comparer);
    };

    if (advancedSort.applied) {
      // set columns to not sortable
      setColumns(old => {
        let copy = _.cloneDeep(old);
        copy = copy.map((item, index) => {
          if (index > 0) {
            item.sortable = false;
          }
          return item
        })
        return copy
      })
      // set columns to not sortable

      advancedSort.filters.map(item => {
        if (item.sort) {
          const rowsCopy = JSON.parse(JSON.stringify(rows))
          setRows(sortRows(rowsCopy, item.sort, item.direction))
        }
      })
    } else {
      setRows(old => {
        const copy = _.cloneDeep(defaultRows);
        return copy;
      })
      // set columns to sortable
      setColumns(old => {
        let copy = _.cloneDeep(old);
        copy = copy.map((item, index) => {
          if (index > 0) {
            item.sortable = true
          }
          return item
        })
        return copy
      })
      // set columns to sortable
    }
  }, [advancedSort])


  return (
    <>
      {
        detach &&
        <div className='e-popup-container-bg' onClick={() => setDetach(false)}>

        </div>
      }


      <div className={rowDetail ? "hidden" : "block"}>
        <div className="relative">
          <div className="overflow-x-auto overflow-y-visible">
            <div className="grid-toolbar flex border-t-2 border-b-2 border-l-2 border-r-2 border-gray-200">
              <View setReorder={setReorder} gridRef={gridRef} advancedSort={advancedSort} setAdvancedSort={setAdvancedSort} detach={detach} setDetach={setDetach} setColumns={setColumns} columns={columns} />
              {
                      advancedSort.applied &&
                      <>
                        <div onClick={() => {
                          setAdvancedSort(old => {
                            let copy = _.cloneDeep(old);
                            copy.applied = false;
                            copy.filters = copy.filters.map(item => {
                              item.sort = "";
                              item.direction = "ASC";
                              return item
                            })
                            return copy
                          })
                        }} className={`cursor-pointer  font-bold flex items-center space-x-2 border-r-2  py-0 px-3 color-primary text-white`}>
                          <p className="m-0 p-0">
                            Remove Advanced Sorting
                          </p>
                          <FaTimes />
                        </div>
                      </>
                    }
              <PrintablePdf columns={columns} rows={pdfRows} />
              <PdfDownload columns={columns} rows={pdfRows} />

              <div onClick={() => setDetach(true)} className="cursor-pointer  font-bold flex items-center space-x-2 border-r-2 border-gray-200 py-0 px-3">
                <p className="p-0 m-0">
                  Detach
                </p>
                <AiOutlineFullscreen className="text-xl" />

              </div>

              <Pagination page={page} setPage={setPage} rows={rows} />




            </div>
          </div>
        </div>
        {
          hide && 
          <Container setPdfRows={setPdfRows} gridRef={gridRef} tableWidth={tableWidth} setRowDetail={setRowDetail} rows={rows} page={page} setPage={setPage} setRows={setRows} columns={columns} setColumns={setColumns} />

        }
      </div>
      {
        rowDetail &&
        <RowDetailView rowDetail={rowDetail} setRowDetail={setRowDetail} />
      }


      {
        detach &&
        <div className={"animation-in e-popup-container"}>
          <div className="bg-white w-11/12 shadow-lg">
            <div className={"flex justify-end p-4"}>
              <FaTimes className="e-icon" onClick={() => {
                setDetach(false)
                setRowDetail(false)
              }} />
            </div>
            <div className={"e-popup-body w-full overflow-x-auto"}>


              <div className={rowDetail ? "hidden" : "block"}>
                <div className="overflow-x-auto">
                  <div className="grid-toolbar flex border-t-2 border-b-2 border-l-2 border-r-2 border-gray-200">
                    <View setReorder={setReorder} gridRef={gridRef2} advancedSort={advancedSort} setAdvancedSort={setAdvancedSort} detach={detach} setDetach={setDetach} setColumns={setColumns} columns={columns} />
                    {
                      advancedSort.applied &&
                      <>
                        <div onClick={() => {
                          setAdvancedSort(old => {
                            let copy = _.cloneDeep(old);
                            copy.applied = false;
                            copy.filters = copy.filters.map(item => {
                              item.sort = "";
                              item.direction = "ASC";
                              return item
                            })
                            return copy
                          })
                        }} className={`cursor-pointer  font-bold flex items-center space-x-2 border-r-2  py-0 px-3 ${detach ? "color-primary text-white" : "border-gray-200"}`}>
                          <p className="m-0 p-0">
                            Remove Advanced Sorting
                          </p>
                          <FaTimes />
                        </div>
                      </>
                    }

                    <PrintablePdf columns={columns} rows={pdfRows} />
                    <PdfDownload columns={columns} rows={pdfRows} />

                    <div onClick={() => {
                      setDetach(false)
                      setRowDetail(false)
                    }} className={`cursor-pointer  font-bold flex items-center space-x-2 border-r-2  py-0 px-3 ${detach ? "color-primary text-white" : "border-gray-200"}`}>
                      <p className="p-0 m-0">
                        Detach 
                      </p>
                      {detach ?
                        <AiOutlineFullscreenExit className="text-xl" />
                        :
                        <AiOutlineFullscreen className="text-xl" />
                      }
                    </div>

                    <Pagination page={page} setPage={setPage} rows={rows} />




                  </div>
                </div>
                {
                  hide &&
                <Container setPdfRows={setPdfRows} gridRef={gridRef2} tableWidth={tableWidth} setRowDetail={setRowDetail} rows={rows} page={page} setPage={setPage} setRows={setRows} columns={columns} setColumns={setColumns} />

                }
              </div>
              {
                rowDetail &&
                <RowDetailView rowDetail={rowDetail} setRowDetail={setRowDetail} />
              }


            </div>
          </div>
        </div>

      }

      {
        advancedSort.visible &&
        <AdvancedSortContainer columns={columns} setAdvancedSort={setAdvancedSort} advancedSort={advancedSort} />
      }
      {
        reorder &&
        <ReorderContainer rows={rows} setRows={setRows} setHide={setHide} gridRef={gridRef} columns={columns} setColumns={setColumns} setReorder={setReorder}/>
      }

    </>
  )
}

export default DataGrid