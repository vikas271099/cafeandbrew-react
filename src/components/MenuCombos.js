import * as React from "react";
const combo001 = require("../../src/images/001.jpeg");
const combo002 = require("../../src/images/002.jpeg");
const combo003 = require("../../src/images/003.jpeg");

function MenuCombo() {
  const Comboimages = [combo001, combo002, combo003];
  return (
    <>
     
        <div className="menu-page-bg">
            <div className="menu-page">
                <div className="menu-items">
          <h3>{"Special Combo"}</h3>
          <div className="combocontainer">
          {Comboimages?.map((item) => {
            return (
              <>
                <div className="comboimage">
                  <img src={item} alt="" />
                </div>
              </>
            );
          })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuCombo;
