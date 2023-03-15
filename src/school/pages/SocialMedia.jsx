import React from "react";
import Logofb from "../../imgs/fb-logo-sinfondo.png";
import Logoinsta from "../../imgs/insta-logo-sinfondo.png";
import LogoTikTok from "../../imgs/tiktok-logo.png";
import styled from "styled-components";
import "../../index.css";

export const SocialMedia = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <Titulo>Siguenos en todas nuestras redes!!</Titulo>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Facebook</h5>
                <a href="https://www.facebook.com/profile.php?id=100077590719540">
                  <img
                    src={Logofb}
                    alt="Logo de Facebook"
                    width="50px"
                    height="50px"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Instagram</h5>
                <a href="https://www.instagram.com/vida.educativa/">
                  <img
                    src={Logoinsta}
                    alt="Logo de Instagram"
                    width="50px"
                    height="50px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container text-center mt-5">
        <div className="">
          <SocialHeader>Facebook</SocialHeader>
          <br />
          <a href="https://www.facebook.com/profile.php?id=100077590719540">
            <img
              src={Logofb}
              alt="Logo de Facebook"
              width="50px"
              height="50px"
            />
          </a>
        </div>
      </div>

      <div className="container text-center mt-5">
        <SocialHeader>Instagram</SocialHeader>
        <br />
        <a href="https://www.instagram.com/vida.educativa/">
          <img
            src={Logoinsta}
            alt="Logo de Facebook"
            width="50px"
            height="50px"
          />
        </a>
      </div>

      <div className="container text-center mt-5">
        <SocialHeader>Tik Tok</SocialHeader>
        <br />
        <a href="https://www.tiktok.com/@vida.educativa">
          <img
            src={LogoTikTok}
            alt="Logo de Facebook"
            width="50px"
            height="50px"
          />
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

const Titulo = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #f3f3f3;
  text-shadow: 2px 2px 1px #000000;
`;

const SocialHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f3f3f3;
  text-shadow: 2px 2px 1px #000000;
`;
