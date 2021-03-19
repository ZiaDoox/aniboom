import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, category, page, sortMethod, isAdmin = false, keyword = '' }) => {
  const determineUrl = (x) => {
    if(!isAdmin) {
      if(keyword) {
        return `/search/${keyword}/page/${x+1}`
      }else {
        if(sortMethod) {
          return `/products/${category}/page/${x + 1}/${sortMethod}`
        }else {
          return `/products/${category}/page/${x+1}`
        }
      }
    }else {
      return `/admin/productlist/${x + 1}`
    }
  }
  return (
    pages > 1 && (
      <Pagination className='m-2 justify-content-center'>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              determineUrl(x)
            /* 
              !isAdmin
                ? keyword 
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/products/${category}/page/${x + 1}/${sortMethod}`
                : `/admin/productlist/${x + 1}`
                */
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
