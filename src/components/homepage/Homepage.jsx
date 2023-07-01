import React from "react";
import "./homepage.css";
import { BiSolidDashboard } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiFillDatabase } from "react-icons/ai";
import { BsChatTextFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function Homepage() {
  return (
    <div className="homebarAllContainer">
      <div className="leftRightMidAllContainer">
        <div className="leftbarAllContainer">
          <h2>School</h2>
          <div className="leftBar-icons">
            <li className="Allleftbar-iicons">
              <BiSolidDashboard className="icon" />
              <span>Dashboard</span>
            </li>

            <li className="Allleftbar-iicons">
              <BsMessenger />
              <span>Messenger</span>
            </li>

            <li className="Allleftbar-iicons">
              <SlCalender />
              <span>Calender</span>
            </li>

            <li className="Allleftbar-iicons">
              <AiFillDatabase />
              <span>Database</span>
            </li>

            <li className="Allleftbar-iicons">
              <BsChatTextFill />
              <span>ChatTex</span>
            </li>

            <li className="Allleftbar-iicons">
              <AiFillSetting />
              <span>Setting</span>
            </li>
          </div>
        </div>

        <div className="homebarAllcontainer">
          <div className="navBar-container">
            <div className="topdiv">
              <div className="spantag">
                <span>
                  <AiOutlineSearch />
                </span>
                <span>Search</span>
              </div>
              <h2 className="data">Database</h2>
              <div className="namelist">
                <div>student</div>
                <div>teacher</div>
                <div>staff</div>
              </div>
            </div>
            <div className="imgbar">
              <img className="imagebar" src="./images/rajan.jpg" alt="" />
            </div>
          </div>
          <div className="downBar-coontainer">
            <div className="raj">
              <div className="datalist">
                <div>Name</div>
                <div>Id</div>
                <div>Class</div>
                <div>Age</div>
                <div>Gender</div>
                <div>Email</div>
              </div>
            </div>

            <div className="raj1">
              <div className="raj1list">
                <img src="./images/rajan.jpg" alt="" />
                <span className="rajan">Rajan</span>
                <div>012</div>
                <div>BCA</div>
                <div>21</div>
                <div>Male</div>
                <div>rajanshahi1267@gmail.com</div>
              </div>
            </div>
            <div className="raj2">
              <div className="raj1list">
                <img src="./images/rajan.jpg" alt="" />
                <span className="rajan">loki</span>
                <div>013</div>
                <div>BCA</div>
                <div>21</div>
                <div>Male</div>
                <div>lokichaulagain1267@gmail.com</div>
              </div>
            </div>
            <div className="raj3">
              <div className="raj1list">
                <img src="./images/cute.jpeg" alt="" />
                <span className="rajan">subedi</span>
                <div>014</div>
                <div>BCA</div>
                <div>19</div>
                <div>Female</div>
                <div>subedi1232@gmail.com</div>
              </div>
            </div>
            <div className="raj4">
              <div className="raj1list">
                <img src="./images/gita.jpg" alt="" />
                <span className="rajan">Gita</span>
                <div>015</div>
                <div>BBS</div>
                <div>21</div>
                <div>Female</div>
                <div>gitabista1263@gmail.com</div>
              </div>
            </div>
            <div className="raj5">
              <div className="raj1list">
                <img src="./images/rajan.jpg" alt="" />
                <span className="rajan">tapi</span>
                <div>012</div>
                <div>BBA</div>
                <div>24</div>
                <div>Male</div>
                <div>tapishahi4568@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="righttbarAllcontainer">
          <div className="rightNavr-coontainer">
            <div className="navbarNoti">
              <IoIosNotifications className="noti" />
              <img src="./images/rajan.jpg" alt="" />
              <span>Alone Boy</span>
            </div>
          </div>
          <div className="rightmidbar-container">
            <div className="image2-container">
              <img src="./images/rajan.jpg" alt="" />
              <h4>
                rajan shahi.. <br />{" "}
                <span className="git">BCA Student 2022</span>
              </h4>
            </div>
          </div>
          <div className="rightbardown-Container">
            <div className="myAbout">
              <h2>About :</h2>
              <p>
                Aryan School of engineering and management shape the attitudes
                and behaviour of future business leaders thhrough business
                education, research,management,IT.....
              </p>
              <div className="react-icons">
                <span className="iconlast">
                  <BsFacebook />
                </span>
                <span className="iconlast">
                  <MdOutgoingMail />{" "}
                </span>
                <span className="iconlast">
                  <RiContactsFill />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
