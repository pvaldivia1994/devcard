import React from "react";
import type { Skill } from "../../types";

type SkillItemProps = {
  sk: Skill;
};

export const SkillItem = ({sk}: SkillItemProps) => {

  const {title, desc, icons} = sk;
  
  return (
    <div className="item col-6 col-lg-3">
      <div className="item-inner">
        <div className="item-icon">
         { icons.map((icon, index) => <i key={index} className={icon}></i>) }
          
        </div>
        <h3 className="item-title">{title}</h3>
        <div className="item-desc">
          { desc.map((ds, index) => <p key={index} className="mb-1">{ds}</p>) }
        </div>
      </div>
    </div>
  );
};
