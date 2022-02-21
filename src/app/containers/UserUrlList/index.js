//Paginacion con URL
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { fetchUserList } from '../../actions/list'
import UserListChangePage from '../../components/Buttons/UserListChangePage'
import UserListItemPagButtons from '../../components/Buttons/UserListItemPagButtons'
import FooterContainer from '../../components/FooterContainer'
import { RowCards } from '../../components/Responsive/ResponsiveStylesComponents'
import { Row } from '../../components/Responsive/ResponsiveStylesComponents'
import Spinner from '../../components/Spinner'
import UserListItemCard from '../../components/UserListItemCard'
import UserSelectFilter from '../../components/UserSelectFilter'
import HrUserList from '../../components/UsersStyleComponent/HrUserList'
import UserListContainer from '../../components/UsersStyleComponent/UserListContainer'

const UserUrlList = () => {
  
  const history = useHistory()
  const dispatch = useDispatch()
  const search = useLocation().search;
  const {expand} = useSelector(state=>state.ui)
  const { page,totalPages, pageSize, list } = useSelector(state => state.list)
  //Creo un array vacio con el numero de paginas(length) necesario para hacer un map del mismo
  const pagesArray = [...Array(totalPages)]
  //Ir a la pagina donde se hace click
  const handlePageClick = (targetPage) => {
    history.push(`users?page=${targetPage}&pageSize=${pageSize}`)
    // dispatch(fetchUserList(targetPage, pageSize))
  }
  //Cambiar el tamaño de elementos mostrados en pantalla recogiendo el valor del select
  const handleChangePageSize = (e) => {
    history.push(`users?page=1&pageSize=${e.target.value}`)
  }
  //Funcion para Avanzar la pagina mediant url
  const handleNextPage = () =>{
    (page<totalPages) && (history.push(`users?page=${page+1}&pageSize=${pageSize}`))
  }
  //Funcion para Retroceder la pagina mediant url
  const handlePrevPage = () =>{
    (page>1) && (history.push(`users?page=${page-1}&pageSize=${pageSize}`))
  }
  //Cada vez que hay un cambio en la url se activa este efecto para restablecer o inicializar las variables
  // (page y pageSize) totalPages viene cuando haces una peticion y se guarda en el State de Redux
  useEffect(() => {
    //Recojo el parámetro page de la url
    const page = Number(new URLSearchParams(search).get('page')) || 1;
    
    //Recojo el parámetro page size de la url
    const pageSize = Number(new URLSearchParams(search).get('pageSize')) || 2;

    //Cargo la lista de usuarios de la página y tamaño de página dadas en url
    dispatch(fetchUserList(page, pageSize));

  }, [history])

  //Loading hasta que se inicializan las variables
  if(!page){
    return <Spinner />
  }

    return (
      <UserListContainer expand={expand}>
        <Row>
          <h1>Usuarios</h1>
        </Row>
        <HrUserList />
          <RowCards>
            {list.map((item, index) => (
            <UserListItemCard key={item.id} {...item} />
            ))}
          </RowCards>
          <Row flexDirection="row" justify="center">
            <UserListChangePage onClick={handlePrevPage}>
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
            <UserListChangePage onClick={handleNextPage}>
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

export default UserUrlList;