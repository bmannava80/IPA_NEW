import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters } from "react-data-grid-addons";
import { useEffect, useRef, useState } from "react"
import ExpanderView from "./Expander/ExpanderView";
import _ from "lodash";

const LISTING_LIMIT = 10;

const selectors = Data.Selectors;

const handleFilterChange = filter => filters => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

function getValidFilterValues(rows, columnId) {
  return rows
    .map(r => r[columnId])
    .filter((item, i, a) => {
      return i === a.indexOf(item);
    });
}

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters });
}

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



function DataGrid({ setPdfRows, gridRef, setPage, page, rows, columns, setColumns, setRows, setRowDetail }) {
  function paginate(array, page_size, page_number) {
    const copy_arr = JSON.parse(JSON.stringify(array))
    return copy_arr.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const getMinHeight = (props) => {
    let height = 500;
    for(let i = 0; i < rows.length; i++){
      if(rows[i].expanded === 1){
        height = height + 110;
      }
    }
    return height
  }

  const [filters, setFilters] = useState({});
  const rowsCopy = JSON.parse(JSON.stringify(rows))
  // const rowsCopy = _.cloneDeep(rows)

  const filteredRows = getRows(paginate(rowsCopy, LISTING_LIMIT, page), filters);

  useEffect(() => {
    setPdfRows(getRows(paginate(rowsCopy, LISTING_LIMIT, page), filters))
  }, [rows, columns, page])

  return (
    <>

      <ReactDataGrid
        ref={gridRef}
        minHeight={getMinHeight()}
        width={"100%"}
        columns={columns}
        headerRowHeight={35}
        rowGetter={i => filteredRows[i]}
        rowsCount={filteredRows.length}
        onAddFilter={filter => {
          setFilters(handleFilterChange(filter))
        }}
        onClearFilters={() => setFilters({})}
        getValidFilterValues={columnKey => getValidFilterValues(filteredRows, columnKey)}
        onGridSort={(sortColumn, sortDirection) => {
          setPage(1)
          setRows(sortRows(rowsCopy, sortColumn, sortDirection))
        }
        }
        rowRenderer={({ renderBaseRow, ...props }) => {
          const arr = []
          for (let key in props.row) {
            arr.push({row: props.row,key: key, value: props.row[key]});
          }
          return (
            <>
            
              {
                renderBaseRow(
                  {...props}
                )
              }
              {
                props.row.expanded === 1&&
                <ExpanderView data={props.row} />
              }
            </>
          )
        }}

      />
    </>
  );
}



const Container = ({ setPdfRows, gridRef, tableWidth, page, setPage, rows, columns, setColumns, setRows, setRowDetail }) => {
  return(

    <div className="w-full overflow-x-scroll">
      <div style={{width: tableWidth}}>
      <DataGrid setPdfRows={setPdfRows} gridRef={gridRef} setRowDetail={setRowDetail} page={page} rows={rows} columns={columns} setColumns={setColumns} setRows={setRows} setPage={setPage} />
    </div>
    </div>
    ) 
}

export default Container