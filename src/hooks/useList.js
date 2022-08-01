import { useState, useContext } from "react";

import api from '../services/api';

export default function useList(){

    const [searchBarText, setSearchBarText] = useState('');
    const [userList, setUserList] = useState([]);
    const [shownList, setShownList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const { innerHeight: height } = window;
    const usersOnScreen = Math.round(((height-100)/50)/2);

    const getUserArray = async () =>{
      const response = await api.get('/');
      setUserList(response.data)
      setShownList(response.data.slice(0,usersOnScreen))
      calculatePageNumber(response.data.length)
      setActualPage(1)
    }

    const changePage = (newPage) => {
      if(newPage <= pageNumber && newPage >= 1){
        setActualPage(newPage)
        const start = newPage === 1 ? 0 : (newPage - 1) * usersOnScreen
        const end = start + usersOnScreen
        setShownList(userList.slice(start, end))
      }
    }
    
    const deleteFunction = async (id) => {        
      await api.delete(`/person/${id}`)
      getUserArray()
    }
 

  const isTextContained = (user, searchText) => {
    return (user.cpf.includes(searchText) || user.name.toLowerCase().includes(searchText.toLowerCase())) ? true : false
  }

  const createSearchList = (searchText) => {
    const searchList = []
    for (let index = 0; index < userList.length; index++) {
      if(isTextContained(userList[index], searchText)){
        searchList.push(userList[index])
      }
    }
    return searchList
  }
  
 
  const handleSearchChange = (e) => {
    setSearchBarText(e.target.value)
    if(e.target.value.length === 0){
      changePage(actualPage)
    } else {
      setShownList(createSearchList(e.target.value))
    }
  }

  const clearSearchText = () =>{
    setSearchBarText('')
    changePage(actualPage)
  }

  const calculatePageNumber = (params) => {
    setPageNumber(Math.ceil(params/usersOnScreen))
  }

  return{ 
    shownList, 
    userList, 
    searchBarText, 
    handleSearchChange, 
    clearSearchText, 
    pageNumber, 
    getUserArray, 
    deleteFunction, 
    changePage,
    actualPage
    }


}