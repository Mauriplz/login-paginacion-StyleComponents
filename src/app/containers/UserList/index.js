import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchUserList } from '../../actions/list'
import { ColumnGrid } from '../../components/Responsive/ResponsiveStylesComponents'
import { Row } from '../../components/Responsive/ResponsiveStylesComponents'

const UserList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const search = useLocation().search;
  const { page, pageSize, totalPages, list } = useSelector(state => state.list)
  const pagesArray = [...Array(totalPages)]



  const handlePageClick = targetPage => {
    history.push(`users?page=${targetPage}&pageSize=${pageSize}`)
    // dispatch(fetchUserList(targetPage, pageSize))
  }

  const handleChangePageSize = e => {
    history.push(`users?page=1&pageSize=${e.target.value}`)

    // dispatch(fetchUserList(1, e.target.value))
  }

  useEffect(() => {
    const page = new URLSearchParams(search).get('page') || 1;
    const pageSize = new URLSearchParams(search).get('pageSize') || 1;
    dispatch(fetchUserList(page, pageSize))
    // dispatch(fetchUserList(1, pageSize))
  }, [history])


  return (
    <>
      <Row justify="">
        {list.map((item, index) => (
          <ColumnGrid sm={6} md={4} lg={4} style={{ backgroundColor: 'salmon' }} key={index}>{item.first_name}</ColumnGrid>
        ))}
      </Row>
      <Row justify="">
        {pagesArray.map((item, index) => {
          console.log(index)
          const number = index + 1
          return (
            <div className={number === page ? 'active' : ''} onClick={() => handlePageClick(number)}>{number}</div>
          )
        })}
      </Row>
      <Row justify="">
        <select onChange={handleChangePageSize} value={pageSize}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={6}>6</option>
        </select>
      </Row>
    </>
  )
}

export default UserList;