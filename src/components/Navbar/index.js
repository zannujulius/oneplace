import React, { useState } from "react";
import "./style.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai/";
import profileAvatar from "../../../src/assets/svg/profileAvatar.svg";
import nftPonk from "../../../src/assets/images/ponks.png";
function Navbar(props) {
  const [dd, setDd] = useState(false);
  const handleClick = () => {
    setDd(!dd);
  };
  return (
    <div>
      <nav>
        <div className="nav-center">
          <div className="nbc">
            <div className="nbi"></div>
            <div className="nbn">one Place</div>
          </div>
          <div className="nc">
            <div className="nc-item__cover">
              <div className="nc-item__icon">
                <img src={nftPonk} alt="" />
              </div>
              <div className="nc-item__title">NFT ponks</div>
            </div>
            <div className="nc-item__cover">
              <div className="nc-item__icon">
                <img src={nftPonk} alt="" />
              </div>
              <div className="nc-item__title">Exchange</div>
            </div>
            <div className="nc-item__cover">
              <div
                className="nc-item__icon"
                style={{
                  background: "dodgerblue",
                }}
              >
                <img src="" alt="" />
              </div>
              <div className="nc-item__title">Stores</div>
            </div>
          </div>
          <div className="nr">
            {/* like */}
            <div className="nr-iconc">
              <div className="nr-icon">
                <AiFillHeart fontSize={22} color="#5f5f5f" />
              </div>
              <div className="nlike-count">8</div>
            </div>
            {/* cart */}
            <div className="nr-iconc">
              <div className="nr-icon">
                <AiOutlineShoppingCart fontSize={22} color="#5f5f5f" />
              </div>
              <div className="ncart-count">12</div>
            </div>
            {/* profile */}
            <div className="nr-profile__cover" onClick={handleClick}>
              {/* dropdown */}
              <div className={dd ? "nr-dd active" : "nr-dd"}>
                <div className="dd-text">Profile</div>
                <hr />
                <div className="dd-login__cover">
                  <div className="dd-text">Logout</div>
                  <div className="dd-login__icon">
                    <FiLogIn fontSize={15} color="dodgerblue" />
                  </div>
                </div>
              </div>
              {/* profile content */}
              <div className="nr-profile">
                <img src={profileAvatar} alt="" />
              </div>
              <div className="nr-name">James</div>
              <div className="nr-arrow">
                <IoMdArrowDropdown fontSize={20} color="grey" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
