import React from "react";
import { SlideShow, Slide, TextoSlide } from "../../components";
import "../../index.css";
import styled from "styled-components";
import img1 from "../../imgs/image1.png";
import img2 from "../../imgs/image2.png";
import img3 from "../../imgs/image3.png";
import img4 from "../../imgs/image4.png";

export const Inicio = () => {
  return (
    <>
      <div className="container text-center">
        <Titulo>Bienvenidos a Miss Angie Mx</Titulo>
        <hr />
      </div>
      <main>
        <SlideShow
          controles={true}
          autoplay={true}
          velocidad="1000"
          intervalo="4000"
        >
          <Slide>
            <img src={img1} alt="img1" />
            <TextoSlide>
              <p>La mejor escuela! ¡COMPROBADO!</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <img src={img2} alt="img2" />
            <TextoSlide>
              <p>La mejor escuela! ¡COMPROBADO!</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <img src={img3} alt="img3" />
            <TextoSlide>
              <p>La mejor escuela! ¡COMPROBADO!</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <img src={img4} alt="img4" />
            <TextoSlide>
              <p>La mejor escuela! ¡COMPROBADO!</p>
            </TextoSlide>
          </Slide>
        </SlideShow>
      </main>

      <div className="container text-center">
        <Titulo2>¿Por qué elegirnos?</Titulo2>
        <hr />
        <Parrafo className="card-text">
          Nuestros alumnos tienen avances significativos en su aprendizaje y
          desarrollo.
          <br />
          <br />
          Algunos incluso han sido llevados a competencias nacionales.
        </Parrafo>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Parrafo className="card-text">
                  Nuestros alumnos tienen avances significativos en su
                  aprendizaje y desarrollo.
                  <br />
                  <br />
                  Algunos incluso han sido llevados a competencias nacionales.
                </Parrafo>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      <br />

      <div className="container text-center">
        <Titulo2>¿Cuales son los grados que aceptamos?</Titulo2>
        <hr />
        <Parrafo className="card-text">
          <ul>
            <li>3er grado de Preescolar</li>
            <li>Primaria</li>
          </ul>
        </Parrafo>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Parrafo className="card-text">
                  <ul>
                    <li>3er grado de Preescolar</li>
                    <li>Primaria</li>
                  </ul>
                </Parrafo>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      <br />

      <div className="container text-center">
        <Titulo2>Metodos de pago aceptados!</Titulo2>
        <hr />
        <Parrafo className="card-text">
          Efectivo y Transferencia Bancaria
        </Parrafo>
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
  color: #f2f2f2;
  text-shadow: 2px 2px 1px #000000;
`;

const Titulo2 = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #f2f2f2;
  text-shadow: 2px 2px 1px #000000;
`;

const Parrafo = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #f2f2f2;
  text-shadow: 2px 2px 1px #000000;
  text-align: center;
`;
