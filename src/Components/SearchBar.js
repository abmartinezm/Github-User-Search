import React from 'react'
import iconSearch from '../svg/icon-search.svg'


function SearchBar({handleChange,searchInput, handleClickEvent, theme,handleKeyDown}) {



  return (
    <div className= {theme==='dark' ? 'search-bar dark-items' : 'search-bar shadow' } >
        <img className='search-icon' src={iconSearch} alt="" />
        <input value={searchInput} onKeyDown={handleKeyDown} onChange={handleChange}  type="text" name="" className={theme==='dark' ? 'search-user' : 'search-user placehld' } placeholder="Search Github username..." />
        <button  value={searchInput} onClick={handleClickEvent} className="btn-search" type="submit">Search</button>
    </div>
  )
}

export default SearchBar