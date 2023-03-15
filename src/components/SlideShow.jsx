import React, { useCallback, useEffect, useRef } from "react";
import { ReactComponent as Arrowleft } from "../../public/iconmonstr-angel-left-circle-thin.svg";
import { ReactComponent as Arrowright } from "../../public/iconmonstr-angel-right-circle-thin.svg";
import styled from "styled-components";

const SlideShow = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "1500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideShow = useRef(null);

  const siguiente = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloSlideShow.current = setInterval(() => {
        siguiente();
      }, intervalo);

      // slideshow.current.addEventListener("mouseenter", () => {
      //   clearInterval(intervaloSlideShow.current);
      // });

      // slideshow.current.addEventListener("mouseleave", () => {
      //   intervaloSlideShow.current = setInterval(() => {
      //     siguiente();
      //   }, 5000);
      // });
    }
  }, [autoplay, intervalo, siguiente]);

  return (
    <>
      <ContenedorPrincipal>
        <ContenedorSlideShow ref={slideshow}>{children}</ContenedorSlideShow>
        {controles && (
          <Controles>
            <Boton onClick={anterior}>
              <Arrowleft />
            </Boton>
            <Boton derecho onClick={siguiente}>
              <Arrowright />
            </Boton>
          </Controles>
        )}
      </ContenedorPrincipal>
    </>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.5s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const TextoSlide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;

  // @media (max-width: 768px) {
  //   position: relative;
  // }
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.5s ease all;
  // &:hover {
  //   background: rgba(0, 0, 0, 0.2);
  //   path {
  //     fill: #fff;
  //   }
  // }

  path {
    filter: ${(props) =>
      props.derecho
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export { SlideShow, Slide, TextoSlide };
