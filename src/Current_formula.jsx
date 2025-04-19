import React from 'react';
import { useContext } from 'react';
import { CellData } from './App';

export function Current_formula() {
    let {celData, setCelData, cellKey, setCellKey, currentSelectedForData} = useContext(CellData);
  return (
    <>
      <div style={flex}>
        <div style={currentCell}>{cellKey}</div>
        <div style={fx}>fx </div>
        <input type='text' style={imp} name='cellData' value={celData}
            onChange={
                ((e)=>{
                setCelData(e.target.value);

                if (currentSelectedForData?.current) {
                    currentSelectedForData.current.textContent = e.target.value;
                    // implement regex with condition for formula and calculation 
                }
            })
            }
        ></input>
      </div>
    </>
  );
}

let flex={
    display: 'flex',
    fontSize: '16px',
    alignItems: 'center',
    marginBottom: '5px'
};
let currentCell ={
    display: 'flex',
    width : '100px',    
    height : '25px',
    fontWeight: 'bold',
    paddingLeft: '10px',
    borderRight : '2px solid gray',
    alignItems: 'center',
};
let fx={
    paddingLeft: '5px',
    opacity:'0.5',
    marginRight: '15px',
};
let imp={
    border: 'none',     
    fontSize: '16px' 
    
}