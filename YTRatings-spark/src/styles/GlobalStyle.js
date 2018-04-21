import { injectGlobal } from 'styled-components';

/* eslint-disable*/
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Mukta+Mahee');

  body{
    font-family: 'Mukta Mahee', sans-serif;
    color: #EDEBF2;
    background-color: #0D1D26;
  }
  span{
  color: #8DA1A6;
  }
  div.header{
  color: #EDEBF2 !important;
   font-weight: 900 !important;
  }
  div.description{
  color: #EDEBF2 !important;
  }
  div.ui.segment{
  background-color: #0D1D26;
  }
  .ui.inverted.segment, .ui.primary.inverted.segment {
  
    background: #0D1D26 !important;
}
h3.ui.header{
color: #EDEBF2;
}
.ui.medium.image{
height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
td{
background: #EDEBF2 !important;
}
`;
