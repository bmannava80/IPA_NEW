import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters } from "react-data-grid-addons";
import { useEffect, useRef, useState } from "react"
import ExpanderView from "./Expander/ExpanderView";
import Expander from "./Expander";
import _ from "lodash";
import RowDetail from "./RowDetail"
import RowDetailView from "./RowDetail/RowDetailView"

export default function Example() {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([])
    const [showTable, setShowtable] = useState(false);
    const [rowDetail,setRowDetail] = useState(false)
    const [tableHeight, setTableHeight] = useState(400)
    const [tableWidth, setTableWidth] = useState(400)


    const setBaseState = (item) => {
        item = JSON.parse(item)
        setColumns(old => {
            const arr = item.columns.map(item => {
                item.filterable = false
                item.sortable = false
                if(item.key === "id"){
                    item.getRowMetaData =  row => ({ row, setRowDetail: setRowDetail })
                    item.formatter = RowDetail;
                }
                if(item.key === "expanded"){
                    item.getRowMetaData = row => ({ row, setRows })
                    item.formatter= Expander
                }
                return item
            })
            return arr
        })
        
        setRows(item.rows);
        
        setTableHeight(old => {
            let height = 500;
            for (let i = 0; i < item.rows.length; i++) {
                if (item.rows[i].expanded === 1) {
                    height = height + 110;
                } else{
                    height += 35
                }
            }
            return height
        })
        
        setTableWidth(old => {
            let width = 0
            item.columns.map(item => {
                width = width + (item.width === -1 ? 0 : item.width)
            })
            // width += 200;
            return width
        })

        setShowtable(true);
    }

    useEffect(() => {
        let item = localStorage.getItem("printable_view");
        if (item) {
            setBaseState(item)
        } else{
            setShowtable(false)
        }


    }, [])


    return (
        <>
            {
                showTable ?
                <>
                <Table rows={rows} rowDetail={rowDetail} setRowDetail={setRowDetail} columns={columns} tableWidth={tableWidth} tableHeight={tableHeight}/>
                </>
                :
                    <p className="text-sm">No Data</p>
            }
        </>
    );
}


const Table = ({columns, tableWidth, rows, tableHeight, rowDetail, setRowDetail}) => {
    
    
    return (
        <>
        {
            !rowDetail &&
            <div className="w-full overflow-x-scroll">
            <div style={{ width: tableWidth }} className="p-4">
                <p className="text-base font-normal">
                    Extract Roster
                </p>
                <ReactDataGrid
                    minHeight={tableHeight}
                    width={"100%"}
                    columns={columns}
                    headerRowHeight={35}
                    rowGetter={i => rows[i]}
                    rowsCount={rows.length}
                    rowRenderer={({ renderBaseRow, ...props }) => {
                        return (
                            <>

                                {
                                    renderBaseRow(
                                        { ...props }
                                    )
                                }
                                {
                                    props.row.expanded === 1 &&
                                    <ExpanderView data={props.row} />
                                }
                            </>
                        )
                    }}

                />
            </div>
        </div>
        }

                {
                    rowDetail &&
                    <RowDetailView rowDetail={rowDetail} setRowDetail={setRowDetail} />
                  }
        </>
    )
}