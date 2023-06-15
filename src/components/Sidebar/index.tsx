import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';
import { MdContacts } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  title: string;
  description: string;
  icon:string;
  path: string;
  active:boolean
};

export const Sidebar = ({active, title, description, icon, path }: Props) => {
  const ActiveIcon = active ? { background:"#25CD89" } : { background: "#494A7C"};;
  
  
    return (
    <div className="containerBar">
      <Link to={path}>
        <div className="info">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="icon" style={ActiveIcon}>
       { icon ==='profile' &&
       <MdContacts fill='white' className='icon-1' />

       }
        { icon ==='book' &&
       <FaBook fill='white' className='icon-2'/>

       }
 { icon ==='mail' &&
       <GrMail fill='white' className='icon-3'/>

       }
        { icon ==='check' &&
       <AiOutlineCheck fill='white' className='icon-4'/>

       }


        </div>
        <div className="point" style={ActiveIcon}></div>
      </Link>
    </div>
  );
};
