import './App.css';
import { Logo_files} from './Logo_files';
import { All_fun } from './All_fun';
import { Grid_and_cells } from './Grid_and_cells';
import { Current_formula } from './Current_formula';
import { createContext, useContext, useState, useRef } from 'react';

export let CellData = createContext();
function App() {
  let [celData, setCelData] = useState('');
  const [cellKey, setCellKey] = useState('');
  let currentSelectedForData = useRef(null);
  return (
    <>
    <CellData.Provider value={ {celData, setCelData,cellKey, setCellKey, currentSelectedForData} }>

      <Logo_files/>
      <All_fun/>
      <Current_formula/>
      <Grid_and_cells/>

    </CellData.Provider >  
    </>
  )
}

export default App
