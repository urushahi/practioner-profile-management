import React, { useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useTable, usePagination } from 'react-table';

const ReactTable = ({ columns, data }) => {
  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <div className='scrollable flex-grow-1'>
        <table {...getTableProps()} className='table mt-5x'>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))}
                </tr>
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className='pagination mt-5x'>
        <div className='btn-group mr-2x'>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className='btn btn-secondary--outlined  btn--sm'
          >
            <MdChevronLeft />
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className='btn btn-secondary--outlined  btn--sm'
          >
            <MdChevronRight />
          </button>
        </div>
        <p>
          Page
          <span className='color-secondary--base text-500 mx-2x'>
            {pageIndex + 1} of {pageOptions.length}
          </span>
        </p>
        <span>
          | Go to page:
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className='form-group__control mx-2x'
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className='form-group__control mx-2x'
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default ReactTable;
