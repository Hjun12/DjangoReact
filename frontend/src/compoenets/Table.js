import React from "react";
import { useTable } from "react-table";
//import faker from "faker/locale/ko";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <section class="sub_wrap">
      <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
        <div class="li_top">
          <div>
            <h2 class="s_tit1">This is where Table will come</h2>
          </div>
        </div>
        <div class="list_cont list_cont_admin">
          <table class="table_ty1 fp_tlist" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody class="table_ty2 fp_tlist" {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default Table;
