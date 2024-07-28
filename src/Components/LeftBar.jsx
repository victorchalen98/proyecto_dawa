import "../stylesheets/LeftBar.css";
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
//import Watch from "../assets/4.png";
//import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";
//import { useContext } from "react";

const LeftBar = () => {


  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu-one">
          <div className="user-leftbar">
          <img className="img-user" src="https://www.mmafacts.com/wp-content/uploads/2022/04/alex_pereira.png" alt=""/>
            <span className="span-user">Victor Chalen</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Friends} alt="" />
            <span className="span-one" >Amigos</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Groups} alt="" />
            <span className="span-one">Grupos</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Market} alt="" />
            <span className="span-one">Tienda</span>
          </div>
        </div>
        <hr className="hr-left-bar"/>
        <div className="menu-two">
          <span className="span-titles">Tus Atajos</span>
          <div className="item-two">
            <img className="img-two"src={Events} alt="" />
            <span className="span-two">Eventos</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Gaming} alt="" />
            <span className="span-two">Juegos</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Gallery} alt="" />
            <span className="span-two">Galeria</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Videos} alt="" />
            <span className="span-two">Videos</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Messages} alt="" />
            <span className="span-two">Mensajes</span>
          </div>
        </div>
        <hr className="hr-left-bar"/>
        <div className="menu-three">
          <span className="span-titles">Otros</span>
          <div className="item-three">
            <img className="img-three" src={Tutorials} alt="" />
            <span className="span-three">Tutoriales</span>
          </div>
          <div className="item-three">
            <img className="img-three" src={Courses} alt="" />
            <span className="span-three">Cursos</span>
          </div>
          <div className="item-three">
            <img className="img-three"src={Fund} alt="" />
            <span className="span-three">Voluntariado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;