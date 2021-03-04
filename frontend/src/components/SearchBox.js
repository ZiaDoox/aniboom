import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  console.log(history);
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <i className='fas fa-search hide-sm' aria-hidden='true'></i>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Recherche...'
        className='form-control-sm mr-sm-2 ml-sm-3'
      ></Form.Control>
    </Form>
  )
}

export default SearchBox
