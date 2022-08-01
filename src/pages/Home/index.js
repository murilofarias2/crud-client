import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import UserCard from "../../components/UserCard";
import FriendlyMessage from "../../components/FriendlyMessage";
import UserPages from '../../components/UserPages'
import { Link } from 'react-router-dom'
import useList from '../../hooks/useList'
import {Context} from '../../Context/AuthContext'
import React, { useEffect, useContext } from 'react'


export default function Home() {

  const { shownList, userList, searchBarText, handleSearchChange, clearSearchText, getUserArray, deleteFunction, changePage, pageNumber, actualPage } = useList()
  const { handleLogout } = useContext(Context);
  const username = localStorage.getItem('username');

  useEffect(() => {
    getUserArray()
  },[])


  return (
    <div> 
      <div className={styles.greetingContainer}>
          <h3>{`Seja bem vindo, ${username}!`}</h3>  
          <FontAwesomeIcon 
              icon={faSignOutAlt} 
              className={styles.logoutBarIcon}
              size='lg'
              onClick={handleLogout}
            />
      </div>     

      <div className={styles.addBar}>
        <h2>Lista de usuários</h2>
        <Link to='/userRegister'>
          <button>+</button>
        </Link>
      </div>


      { userList[0] ? (
        <div>
          <div className={styles.searchBar}>
            <FontAwesomeIcon 
              icon={faSearch} 
              inverse 
              className={styles.searchBarIcon}
            />
            
            <input 
              type="text" 
              placeholder="Busca por nome ou CPF" 
              value={searchBarText} 
              onChange={handleSearchChange} 
              />
            
            <FontAwesomeIcon 
              icon={faTimes} 
              inverse 
              className={styles.searchBarIcon} 
              onClick={clearSearchText}
              style={!searchBarText && {"visibility":"hidden"}}
            />
          
          </div>
          <div>
            <ul>
                {shownList.map((element, index) => {
                  return <UserCard id={element._id} key={index} name={element.name} cpf = {element.cpf} deleteFunction={()=>{deleteFunction(element._id)}} />
                })}
            </ul>
          </div>
          {(pageNumber > 1 && !searchBarText) && <UserPages changePage={changePage} pageNumber={pageNumber} actualPage={actualPage}/>}
        </div>


      ) : (<FriendlyMessage/>)}

      

      
    




    </div>
  )}
