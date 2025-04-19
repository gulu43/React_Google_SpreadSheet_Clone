import React from 'react';
import './logoCSS.css';
import img from './assets/spreadsheets-48.png'

export function Logo_files() {
  return (
    <>
      <div id="upper_part">
        <div id="left_upper">
          <div id="left_upper_logo">
            <img src={img} alt="logo" />
          </div>

          <div id="left_upper_star_and_txt">
            <div id="titlw_and_staar">
              <input type='txt' style={{ fontSize: '18px', border: 'none', marginLeft:10 , width: 170 } } className="" name='sheetName' defaultValue='Untitled spreadsheet' placeholder='Untitled spreadsheet' ></input>
              <span id="star_id" className="material-symbols-outlined">star</span>
            </div>

            <div id="all_text">
              {['File', 'Edit', 'View', 'Insert', 'Format', 'Data', 'Tools', 'Extensions', 'Help'].map((item, index) => (
                <div key={index} className="text_all">{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div id="right_upper">
          <span className="material-symbols-outlined">comment</span>

          <div id="meet_icon_div">
            <span className="material-symbols-outlined">videocam</span>
            <select id="meet_drop">
              <option value="">Join or start meeting</option>
            </select>
          </div>

          <div id="Share_icon_div">
            <div className="material-symbols-outlined">lock</div>
            <div className="text_all">Share</div>
            <select id="share_drop">
              <option value="">Copy link</option>
            </select>
          </div>

          <span className="material-symbols-outlined">kid_star</span>
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </div>
    </>
  );
}