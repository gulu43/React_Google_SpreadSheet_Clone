import React, { useState, useEffect, useRef, useContext } from 'react';
import { CellData } from './App';
import './All_funCss.css';

export function All_fun() {
  const labBoldRef = useRef(null);
  const lab_italic = useRef(null);
  const lab_underline = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  const { celData, setCelData, cellKey, setCellKey, currentSelectedForData } = useContext(CellData);

  const [boldIsChecked, setBoldIsChecked] = useState('normal');
  const [italicIsChecked, setItalicIsChecked] = useState('normal');
  const [underlineIsChecked, setUnderlineIsChecked] = useState('none');
  const [fontVal, setFontVal] = useState(12);
  const [alignment, setAlignment] = useState('left');

  // Bold
  useEffect(() => {
    if (!currentSelectedForData.current) return;
    const isBold = currentSelectedForData.current.getAttribute('data-bold') || 'normal';
    setBoldIsChecked(isBold);
    labBoldRef.current?.classList.toggle('bold', isBold === 'bold');
  }, [cellKey]);

  const boldFn = () => {
    if (!currentSelectedForData.current) return;
    const newBold = boldIsChecked === 'bold' ? 'normal' : 'bold';
    currentSelectedForData.current.style.fontWeight = newBold;
    currentSelectedForData.current.setAttribute('data-bold', newBold);
    labBoldRef.current?.classList.toggle('bold', newBold === 'bold');
    setBoldIsChecked(newBold);
  };

  // Italic
  useEffect(() => {
    if (!currentSelectedForData.current) return;
    const isItalic = currentSelectedForData.current.getAttribute('data-italic') || 'normal';
    setItalicIsChecked(isItalic);
    lab_italic.current?.classList.toggle('Uni_select', isItalic === 'italic');
  }, [cellKey]);

  const italicFn = () => {
    if (!currentSelectedForData.current) return;
    const newItalic = italicIsChecked === 'italic' ? 'normal' : 'italic';
    currentSelectedForData.current.style.fontStyle = newItalic;
    currentSelectedForData.current.setAttribute('data-italic', newItalic);
    lab_italic.current?.classList.toggle('Uni_select', newItalic === 'italic');
    setItalicIsChecked(newItalic);
  };

  // Underline
  useEffect(() => {
    if (!currentSelectedForData.current) return;
    const isUnderline = currentSelectedForData.current.getAttribute('data-underline') || 'none';
    setUnderlineIsChecked(isUnderline);
    lab_underline.current?.classList.toggle('Uni_select', isUnderline === 'underline');
  }, [cellKey]);

  const underlineFn = () => {
    if (!currentSelectedForData.current) return;
    const newUnderline = underlineIsChecked === 'underline' ? 'none' : 'underline';
    currentSelectedForData.current.style.textDecoration = newUnderline;
    currentSelectedForData.current.setAttribute('data-underline', newUnderline);
    lab_underline.current?.classList.toggle('Uni_select', newUnderline === 'underline');
    setUnderlineIsChecked(newUnderline);
  };

  // Font size
  const changeFont = (val) => {
    setFontVal((prev) => {
      const newVal = Math.max(1, prev + val);
      if (currentSelectedForData.current) {
        currentSelectedForData.current.style.fontSize = `${newVal}px`;
      }
      return newVal;
    });
  };

  useEffect(() => {
    if (currentSelectedForData.current) {
      const fontSize = parseInt(window.getComputedStyle(currentSelectedForData.current).fontSize) || 12;
      setFontVal(fontSize);
    }
  }, [cellKey]);

  // Text & Background color
  const handleTextColor = (e) => {
    if (currentSelectedForData.current) {
      currentSelectedForData.current.style.color = e.target.value;
    }
  };

  const handleBgColor = (e) => {
    if (currentSelectedForData.current) {
      currentSelectedForData.current.style.backgroundColor = e.target.value;
    }
  };

  // Alignment
  const handleAlignment = (e) => {
    const value = e.target.value;
    setAlignment(value);
    if (currentSelectedForData.current) {
      currentSelectedForData.current.style.textAlign = value;
    }

    leftRef.current?.classList.toggle('Uni_select', value === 'left');
    centerRef.current?.classList.toggle('Uni_select', value === 'center');
    rightRef.current?.classList.toggle('Uni_select', value === 'right');
  };

  useEffect(() => {
    if (!currentSelectedForData.current) return;
    const align = window.getComputedStyle(currentSelectedForData.current).textAlign || 'left';
    setAlignment(align);

    leftRef.current?.classList.toggle('Uni_select', align === 'left');
    centerRef.current?.classList.toggle('Uni_select', align === 'center');
    rightRef.current?.classList.toggle('Uni_select', align === 'right');
  }, [cellKey]);

  return (
    <div className='all_fun_cont'>
      <div className='forBg'>
        <div className='left'>
          <div className='font_sixe_cont'>
            <div className='material-symbols-outlined plus' onClick={() => changeFont(1)}>add</div>
            <input type='number' className='inp' value={fontVal} readOnly />
            <div className='material-symbols-outlined minus' onClick={() => changeFont(-1)}>remove</div>
          </div>

          <label htmlFor='bold_id' className='material-symbols-outlined' id='lab_bold' ref={labBoldRef} onClick={boldFn}>format_bold</label>
          <input type='checkbox' id='bold_id' style={{ visibility: 'hidden' }} />

          <label htmlFor='italic' className='material-symbols-outlined' id='lab_italic' ref={lab_italic} onClick={italicFn}>format_italic</label>
          <input type='checkbox' id='italic' style={{ visibility: 'hidden' }} />

          <label htmlFor='underline' className='material-symbols-outlined' id='labUnderline' ref={lab_underline} onClick={underlineFn}>format_underlined</label>
          <input type='checkbox' id='underline' style={{ visibility: 'hidden' }} />

          <label htmlFor='colorInput' className='colorLabel'>A</label>
          <input type='color' id='colorInput' className='colorPicker' onChange={handleTextColor} />

          <label htmlFor='bgTxt' className='label_bgColor material-symbols-outlined'>colors</label>
          <input type='color' id='bgTxt' className='input_bgColor' onChange={handleBgColor} />

          <div className='textAlignContainer'>
            <label className='alignLabel material-symbols-outlined' ref={leftRef}>
              <input type='radio' name='alignment' value='left' onChange={handleAlignment} checked={alignment === 'left'} />
              format_align_left
            </label>

            <label className='alignLabel material-symbols-outlined' ref={centerRef}>
              <input type='radio' name='alignment' value='center' onChange={handleAlignment} checked={alignment === 'center'} />
              format_align_center
            </label>

            <label className='alignLabel material-symbols-outlined' ref={rightRef}>
              <input type='radio' name='alignment' value='right' onChange={handleAlignment} checked={alignment === 'right'} />
              format_align_right
            </label>
          </div>
        </div>

        <div className='right'>
          <span className='material-symbols-outlined arrow'>keyboard_control_key</span>
          <span className='material-symbols-outlined arrow_down'>keyboard_arrow_down</span>
        </div>
      </div>
    </div>
  );
}
