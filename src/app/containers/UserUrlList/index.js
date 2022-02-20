import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchUserList } from '../../actions/list'
import { ColumnGrid } from '../../components/Responsive/ResponsiveStylesComponents'
import { Row } from '../../components/Responsive/ResponsiveStylesComponents'
import Spinner from '../../components/Spinner'
import UserListContainer from '../../components/UsersStyleComponent/UserListContainer'

const UserUrlList = () => {
  
  const history = useHistory()
  const dispatch = useDispatch()
  const search = useLocation().search;
  const {expand} = useSelector(state=>state.ui)
  const { page, pageSize, totalPages, list } = useSelector(state => state.list)
  //Creo un array vacio con el numero de paginas(length) necesario para hacer un map del mismo
  const pagesArray = [...Array(totalPages)]

  const handlePageClick = (targetPage) => {
    history.push(`users?page=${targetPage}&pageSize=${pageSize}`)
    // dispatch(fetchUserList(targetPage, pageSize))
  }

  const handleChangePageSize = (e) => {
    history.push(`users?page=1&pageSize=${e.target.value}`)

    // dispatch(fetchUserList(1, e.target.value))
  }

  useEffect(() => {
    //Recojo el parámetro page de la url
    const page = new URLSearchParams(search).get('page') || 1;
    //Recojo el parámetro page size de la url
    const pageSize = new URLSearchParams(search).get('pageSize') || 2;
    //Cargo la lista de usuarios de la página y tamaño de página dadas en url
    dispatch(fetchUserList(page, pageSize));
    // dispatch(fetchUserList(1, pageSize))
  }, [history])

  if(!page){
    return <Spinner />
  }

  return (
    <UserListContainer expand={expand}>
      <Row justify="center">
        {list.map((item, i) => (
          <ColumnGrid sm={6} md={4} lg={4} style={{ backgroundColor: 'salmon' }} key={i}>{item.first_name}</ColumnGrid>
        ))}
      </Row>
      <Row justify="center">
        {pagesArray.map((item, index) => {
          const number = index + 1
          return (
            <div key={index} className={number === page ? 'active' : ''} onClick={() => handlePageClick(number)}>{number}</div>
          )
        })}
      </Row>

      <Row justify="center">
        <select onChange={handleChangePageSize} value={pageSize}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={6}>6</option>
        </select>
      </Row>
      
    </UserListContainer>
  )
}

export default UserUrlList;