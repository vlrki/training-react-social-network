import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(
            <Pagination.Item key={i} active={i === props.currentPage} onClick={() => { props.onPageChanged(i) }}>
                {i}
            </Pagination.Item>,
        );
    }

    return <Pagination>{pages.map(p => p)}</Pagination>
}

export default Paginator;