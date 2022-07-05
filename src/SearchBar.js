import React from 'react'

const SearchBar = ({color, setColor,isDarkText, setIsDarkText}) => {
  return (
    <div className='searchBar'>
        <input 
            type="text"
            placeholder='Enter a color'
            onChange={(e) => setColor(e.target.value)}
            value={color}
        />
        <button 
            onClick={() => setIsDarkText(!isDarkText)}>
                Toggle text color
        </button>
    </div>
  )
}

export default SearchBar