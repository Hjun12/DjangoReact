import {useTable} from 'react-table';
import React, {useMemo, useEffect, useState} from 'react';

function ReactTable({columns, data}) {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns, data});
    return (
        <section>
            <article>
                <div>
                    <div>
                        <h2>일주일간 영화 관람객 변화 데이터</h2>
                    </div>
                </div>
                <div>
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
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

function Table() {
    const columns = useMemo(() => [
        {
            Header: '영화제목',
            accessor: 'movieNm'
        },
        {
            Header: 'd-7',
            accessor: 'rank'
        },
        {
            Header: 'd-6',
            accessor: 'salesAmt'
        },
        {
            Header: 'd-5',
            accessor: 'salesAcc'
        },

        {
            Header: 'd-4',
            accessor: 'audiCnt'
        },
        {
            Header: 'd-3',
            accessor: 'audiAcc'
        },
        {
            Header: 'd-2',
            accessor: 'showCnt'
        }
    ]);

    const [peopleData, setdata] = useState([]);
    const getData = async () => {
        console.log('1');
        const json = await (console.log('2-2'),
        await fetch(
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b398357597117dd62ba92064607ac7a3&targetDt=20220104`
        )).json();
        console.log('2-3');
        setdata(json.boxOfficeResult.dailyBoxOfficeList);
        console.log('2');
    };

    useEffect(() => {
        getData();
    }, [{}]);

    console.log('3');

    return <ReactTable columns={columns} data={peopleData} />;
}
export default Table;
