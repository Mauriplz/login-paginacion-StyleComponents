import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList } from '../../actions/list'
import UserListChangePage from '../../components/Buttons/UserListChangePage'
import UserListItemPagButtons from '../../components/Buttons/UserListItemPagButtons'
import FooterContainer from '../../components/FooterContainer'
import { Row, RowCards } from '../../components/Responsive/ResponsiveStylesComponents'
import Spinner from '../../components/Spinner'
import UserListItemCard from '../../components/UserListItemCard'
import UserSelectFilter from '../../components/UserSelectFilter'
import HrUserList from '../../components/UsersStyleComponent/HrUserList'
import UserListContainer from '../../components/UsersStyleComponent/UserListContainer'

const UserList = () => {

  const dispatch = useDispatch()
  const {expand} = useSelector(state=>state.ui)
  //pageSize esta definido en REdux para darle un valor por defecto al numero de elementos por pagina
  const { page, pageSize, totalPages, list } = useSelector(state => state.list)
  //Creo un array vacio con el numero de paginas(length) necesario para hacer un map del mismo
  const pagesArray = [...Array(totalPages)]

  const handlePageClick = (targetPage) => {
    dispatch(fetchUserList(targetPage, pageSize))
  }

  const handleChangePageSize = (e) => {
    dispatch(fetchUserList(1, e.target.value))
  }

  const handleAvPage = () =>{
    (page<totalPages) && (dispatch(fetchUserList(page+1, pageSize)))
  }

  const handleRePage = () =>{
    (page>1) && (dispatch(fetchUserList(page-1, pageSize)))
  }

  useEffect(() => {
    dispatch(fetchUserList(1, pageSize));
  }, [])

  if(!page){
    return <Spinner />
  }

  return (
    <UserListContainer expand={expand}>
      <Row>
        <h1>Usuarios</h1>
        <UserSelectFilter 
          onChange={handleChangePageSize} 
          value={pageSize} 
        />
      </Row>
      <HrUserList />
      <RowCards>
        {list.map((item, index) => (
         <UserListItemCard key={item.id} {...item} />
        ))}
      </RowCards>
      <Row flexDirection="row" justify="center">
        <UserListChangePage onClick={handleRePage}>
          <i className="fas fa-angle-left"></i>
        </UserListChangePage>
        {pagesArray.map((item, i) => {
          const number = i + 1
          return (
            <UserListItemPagButtons 
              key={number} 
              number={number} 
              page={page} 
              onClick={() => handlePageClick(number)}
            />
          )
        })}
        <UserListChangePage onClick={handleAvPage}>
          <i className="fas fa-angle-right"></i>
        </UserListChangePage>
      </Row>

      <Row justify="center">
        <UserSelectFilter onChange={handleChangePageSize} value={pageSize} />
      </Row>
      <FooterContainer />
    </UserListContainer>
  )
}

export default UserList;