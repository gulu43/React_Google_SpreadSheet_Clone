import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { CellData } from './App';

import './grid.css';
export function Grid_and_cells() {

    const currentSelected = useRef(null);


    let {celData, setCelData, cellKey, setCellKey, currentSelectedForData} = useContext(CellData);


    let _0_100Array = [];

    for (let i = 0; i < 100; i++) {
        _0_100Array.push(i);  
        // console.log(i);
    }
    
    let _0_100Array_m1 = [];
    for (let k = 1; k <= 100; k++) {
        _0_100Array_m1.push(k);  
        // console.log(i);
    }
    let charArry = [];

    for (let j = 0; j < 26; j++) {
        charArry.push(String.fromCharCode(j+65));
        // console.log(String.fromCharCode(j+65));   
    }
    
   
      

    return (
        <>

            <span className='mian_cont'>
                <span className='number_col'>
                <span key={'corner1'} className='corner'></span>
                {_0_100Array.map((ele,i)=>(
                    <span key={i+1} className='NumberCell'>{ele+1}</span>
                ))}
                </span>
                {
                    charArry.map((ele,i)=>(
                        <span key={ele} className='CharCell'>
                            <span className='CharCell_head'>{ele}</span>
                            {_0_100Array_m1.map((e,j)=>(
                                <span contentEditable='true' className='charcell_inside_cell '  data-cellid={`${ele}${e}`} key={`${ele}${e}`} 
                                
                                onInput={(e)=>{
                                    // e.target.textContent = celData;


                                    // formula
                                    currentSelectedForData.current = e.target;
                                    setCelData(currentSelectedForData.current.textContent);
                                    console.log(currentSelectedForData.current.textContent);
                                    

                                }}
                                
                                onFocus={(e) => {
                                    const cellId = e.target.getAttribute('data-cellid');
                                  
                                    // Always set current selected cell
                                    currentSelectedForData.current = e.target;
                                  
                                    // Even if same cell is clicked again, this ensures re-render
                                    setCellKey(prevKey => prevKey === cellId ? cellId + "_force" : cellId);
                                  
                                    // UI highlight logic
                                    if (currentSelected.current) {
                                      currentSelected.current.classList.remove('selected');
                                    }
                                    e.target.classList.add('selected');
                                    currentSelected.current = e.target;
                                  
                                    // Set text for formula bar or similar
                                    setCelData(e.target.textContent);
                                    console.log('Selected Cell:', cellId);
                                    console.log('Cell Text:', e.target.textContent);
                                  }}
                                  >

                                </span>
                            ))}
                        </span>
                    ))
                }
            </span>
            
        </>
    )
}


