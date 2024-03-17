
import { useState } from 'react'
import './App.css'
import Head from './components/Header/Head_img/Head'
import Header from './components/Header/Header'
import Our from './components/Recipes/Our'
import Recipes from './components/Recipes/Recipes'
import Side from './components/Recipes/Side'

function App() {
const[table,setTable] = useState([])
const wantToCook = recipe=>{
  const newRecipe=[...table,recipe]
  setTable(newRecipe);
}
  return (
    <>
      
     <Header></Header>
     <Head></Head>
     <Our></Our>

     <div className=' mt-7  mr-5 flex flex-col justify-evenly lg:flex-row ml-40 '>
     <Recipes wantToCook={wantToCook}></Recipes>
     <Side table={table}></Side>
     </div>
    </>
  )
}

export default App
