import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 7 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    let half = (portionSize - portionSize % 2) / 2;

    let start = 1;
    let stop = pagesCount;

    if (currentPage > half) {
        start = currentPage - half;
    } else {
        start = 1;
    }

    if (pagesCount > currentPage + half) {
        stop = currentPage + half;
    } else {
        stop = pagesCount;
    }

    for (let i = start; i <= stop; i++) {
        pages.push(i);
    }

    return (
        <Pagination>
            {currentPage > half && 
                <>
                    <Pagination.Item key={'first'} onClick={() => { onPageChanged(1) }}>
                        &laquo;
                    </Pagination.Item>
                    <Pagination.Item key={'prev'} onClick={() => { onPageChanged(currentPage - 1) }}>
                        Prev
                    </Pagination.Item>
                </>
            }

            {start > 2 && 
                <>            
                    <Pagination.Item key={1} onClick={() => { onPageChanged(1) }}>
                        1
                    </Pagination.Item>
                    <Pagination.Item key={'space-prev'}>
                        ...
                    </Pagination.Item>
                </>
            }

            {pages.map(p => {
                return (
                    <Pagination.Item key={p} active={p === currentPage} onClick={() => { onPageChanged(p) }}>
                        {p}
                    </Pagination.Item>
                );
            })}


            {stop < pagesCount && 
                <>          
                    <Pagination.Item key={'space-prev'}>
                        ...
                    </Pagination.Item>  
                    <Pagination.Item key={1} onClick={() => { onPageChanged(pagesCount) }}>
                        {pagesCount}
                    </Pagination.Item>
                </>
            }

            {pagesCount > currentPage + half &&
                <>
                    <Pagination.Item key={'next'} onClick={() => { onPageChanged(currentPage + 1) }}>
                        Next 
                    </Pagination.Item>
                    <Pagination.Item key={'last'} onClick={() => { onPageChanged(pagesCount) }}>
                        &raquo; 
                    </Pagination.Item>
                </>
            }
        </Pagination>
    );
}

export default Paginator;