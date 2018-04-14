import styled from 'styled-components';
import media from './Media';

let constants = {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 120,
    fontSizeAll: 40,
    fontSizeH1: 57
};

let intFrameHeight = window.innerHeight;

export const CremeStyle = styled.div`
background-color: #f2efdc;
`;

export const PurpleStyle = styled.div`
background-color: #7E778D;
`;

export const Container = styled.div`
/* text settings  */
  text-align: center;
  text-shadow: 2px 2px 2px black;

    /* padding */
    padding-left: ${constants.paddingLeft / 2}px;
    padding-right: ${constants.paddingRight / 2}px;
    padding-top: ${constants.paddingTop / 2}px;
    /* fonts */
    *{font-size: ${constants.fontSizeAll / 2}px;}
    h1 {font-size: ${constants.fontSizeH1 / 2}px;}
  ${media.giant`
    /* padding */
    padding-left: ${constants.paddingLeft * 2}px;
    padding-right: ${constants.paddingRight * 2}px;
    padding-top: ${constants.paddingTop * 2}px;
    /* fonts */
    *{font-size: ${constants.fontSizeAll * 2}px;}
    h1 {font-size: ${constants.fontSizeH1 * 2}px;}
  `}
  ${media.tablet`
    /* padding */
    padding-left: ${constants.paddingLeft / 1.5}px;
    padding-right: ${constants.paddingRight / 1.5}px;
    padding-top: ${constants.paddingTop / 1.5}px;
    /* fonts */
    *{font-size: ${constants.fontSizeAll / 2}px;}
    h1 {font-size: ${constants.fontSizeH1 / 1.5}px;}
  `}
  ${media.desktop`
    /* padding */
    padding: ${intFrameHeight * (0.40)}px;
    /* fonts */
    *{font-size: ${constants.fontSizeAll}px;}
    h1 {font-size: ${constants.fontSizeH1}px;}
  `}
`;

export const BannerStyle = styled.div`
.p-hero {
height: 100vh;
width: 100vw;
position: relative;
display: table;
overflow: hidden;
color: #ffffff;
.p-hero__overlay {
  background: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100vh;
  position: absolute;
}
.p-hero__image {
  background: url('http://sci.esa.int/science-e-media/img/80/heic0901d.jpg')no-repeat;
  background-size: cover;
  background-position: center center;
}
.p-hero__content {
  position: relative;
  height: 100vh;
  width: 100%;
  font-family: $base-font-family;
  /* vertically align its content */
  display: table;
  overflow: hidden;
  .p-hero__headline {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
}
}
`;

export const Logo = styled.img`
  width:100px;
  height: 100px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;

export const ScrollDown = styled.div`
color: #00A8A8;
font-size: ${constants.fontSizeAll / 1.7}px;
position: absolute;
bottom: 3%;
left: 50%;
transform: translate(-50%, -50%);
margin: 0 auto;
${media.giant`
  /* fonts */
  font-size: ${constants.fontSizeAll * 2}px;}
`}
${media.tablet`
  /* fonts */
  font-size: ${constants.fontSizeAll / 2.2}px;}
`}
${media.phone`
  /* fonts */
  font-size: ${constants.fontSizeAll / 3.3}px;}
`}
`;
