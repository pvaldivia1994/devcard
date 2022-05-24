import React from "react";

export const SkillItem = ({sk}) => {

  const {title, desc, icons} = sk;
  
  return (
    <div className="item col-6 col-lg-3">
      <div className="item-inner">
        <div className="item-icon">
         { icons.map((icon, index) => <i key={index} className={icon}></i>) }
          
        </div>
        <h3 className="item-title">{title}</h3>
        <div className="item-desc">
          {desc}
        </div>
      </div>
    </div>
  );
};
