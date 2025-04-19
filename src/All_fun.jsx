import React, { useState } from 'react';
import { useContext, useEffect,useRef  } from 'react';
import { CellData } from './App';
import './All_funCss.css';
export function All_fun() {
  // for bold 
  const labBoldRef = useRef(null);
  let {celData, setCelData, cellKey, setCellKey, currentSelectedForData} = useContext(CellData);
  // current boldStyle of selected cell;

  let [boldIsChecked, setBoldIsChecked] = useState('normal');

  useEffect(() => {
    const isBold = currentSelectedForData.current?.getAttribute('data-bold') || 'normal';
    if (labBoldRef.current) {
      isBold === 'bold'
        ? labBoldRef.current.classList.add('bold')
        : labBoldRef.current.classList.remove('bold');
    }
    setBoldIsChecked(isBold);
  }, [currentSelectedForData.current]);

  // console.log('11 ',isBold + boldIsChecked); 
  
  let [fontVal, setFontVal] = useState(12); 

  const boldFn = () => {
    setBoldIsChecked((prev) => {
      const newBold = prev === 'bold' ? 'normal' : 'bold';
      if (currentSelectedForData.current) {
        currentSelectedForData.current.style.fontWeight = newBold;
        currentSelectedForData.current.setAttribute('data-bold', newBold);
        // for click seeing for user
        if (labBoldRef.current) {
          newBold === 'bold'
            ? labBoldRef.current.classList.add('bold')
            : labBoldRef.current.classList.remove('bold');
        }
        console.log('21',newBold);
        
      }
      return newBold;
    });
  };

  // for italic

  const lab_italic = useRef(null);
  let [italicIsChecked, setItalicIsChecked] = useState('normal');

  useEffect(() => {
    const isItalic = currentSelectedForData.current?.getAttribute('data-style') || 'normal';
    if (lab_italic.current) {
      isItalic === 'italic'
        ? labBoldRef.current.classList.add('italic')
        : labBoldRef.current.classList.remove('italic');
    }
    setBoldIsChecked(isItalic);
  }, [currentSelectedForData.current]);


  let italicFn = ()=>{
    setItalicIsChecked((prev)=>{
      let newItalicVal = prev === 'italic' ? 'normal' : 'italic';
  
      if(currentSelectedForData.current){
        currentSelectedForData.current.style.fontStyle = newItalicVal
        currentSelectedForData.current.setAttribute('data-italic', newItalicVal);
      }
      // for click seeing for user
      if (lab_italic.current) {
        newItalicVal === 'italic'
          ? lab_italic.current.classList.add('italic')
          : lab_italic.current.classList.remove('italic');
      }
      console.log('68',newItalicVal); 
  
      return newItalicVal;
    })
  }


  return (
    <>
      <div className='all_fun_cont'>
        <div className='forBg'>
          <div className='left'>
            <div className='font_sixe_cont'>
              <div className='material-symbols-outlined plus'>add</div>
              <input type="number" className='inp' name='num' defaultValue={fontVal}/>
              <div className='material-symbols-outlined minus'>Remove</div>
            </div>

            <div className='bold_div_cont'>
            <label htmlFor="bold_id" className='material-symbols-outlined' id='lab_bold' checked={boldIsChecked} ref={labBoldRef} onClick={boldFn} data-bold={'normal'}   >format_bold</label>
            <input type="checkbox" name="bold" id='bold_id' className='bold_class' style={{ visibility: "hidden" }} defaultValue={false} />
            </div>

            <div className='italic_div_cont'>
            <label htmlFor="italic" className='material-symbols-outlined' id='lab_italic' checked={italicIsChecked} ref={lab_italic} onClick={italicFn} data-italic={'normal'} >format_italic</label>
            <input type="checkbox" name="italic" id='italic' className='italic_class' style={{ visibility: "hidden" }} defaultValue={false} />
            </div>

            <div className='underlineDivContainer'>
              <label htmlFor="underline" className='material-symbols-outlined' id='labUnderline'>format_underlined</label>
              <input type="checkbox" name="underline" id='underline' className='underlineClass' style={{ visibility: "hidden" }} defaultValue={false} />
            </div>


            <div className='colorPickerContainer'>
            <label htmlFor="colorInput" className='colorLabel'>A</label>
            <input type='color' name="colorInput" id='colorInput' className='colorPicker' />
            </div>  


            <div className='bgColor_picker_container'>
            <label htmlFor="bgTxt" className='label_bgColor material-symbols-outlined'>colors</label>
            <input type='color' name="bg" id='bgTxt' className='input_bgColor' />
            </div>

            <div className='textAlignContainer'>
              <label htmlFor="alignLeft" className='alignLabel material-symbols-outlined'>format_align_left</label>
              <input type='radio' name="alignment" id='alignLeft' defaultChecked={true}/>

              <label htmlFor="alignCenter" className='alignLabel material-symbols-outlined'>format_align_center</label>
              <input type='radio' name="alignment" id='alignCenter' />

              <label htmlFor="alignRight" className='alignLabel material-symbols-outlined'>format_align_right</label>
              <input type='radio' name="alignment" id='alignRight' />
            </div>



          </div>

          <div className='right'>

          <span className="material-symbols-outlined arrow">
            keyboard_control_key
          </span>
          <span className="material-symbols-outlined arrow_down">
            keyboard_arrow_down
            </span>

          </div>
        </div>
      </div>
    </>
  );
}