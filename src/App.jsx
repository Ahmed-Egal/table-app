import { useState } from 'react'
import './App.css'
import {data} from './data.jsx'

function App() {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  
  

  return (
    <>
    <div className='search-container'>
      <input 
      type='text'
      placeholder='Search for contact...'
      className='search-bar'
      onChange={handleSearch}
    />
    </div>
   
    <table className="table">
     <thead>
       <tr className='row'>
         <th className='td'>First Name</th>
         <th className='td'>Last Name</th>
         <th className='td'>Email</th>
         <th className='td'>Phone number</th>
       </tr>
     </thead>
     <tbody>
      {data.filter((names) => {
        return search.toLowerCase() === "" ? names : names.first_name.toLowerCase() && names.last_name.toLowerCase().includes(search)
      }).map((user) => (
        <tr className='row' key={user.id}>
          <td className='td'>{user.first_name}</td>
          <td className='td'>{user.last_name}</td>
          <td className='td'>{user.email}</td>
          <td className='td'>{user.phone}</td>
        </tr>
      ))}
    
     </tbody>
    </table>
    
    </>
  )
}

export default App
