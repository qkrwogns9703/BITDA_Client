import React from 'react'; 
import styled from 'styled-components'; 

type LandingBtnProps = {
  text: string;    
}

const StyleLandingBtn = styled.button`
  color: #F6F5F5; 
  background-color: #ED6663; 
  border: 1px solid #ED6663; 
  border-radius: 5px; 
  font-size: 12px; 
  width: 100px; 
  height: 40px; 
` 

const LandingBtn = ({ text }: LandingBtnProps ) => {

  return (
    <StyleLandingBtn>{text}</StyleLandingBtn>
  )
}

export default LandingBtn; 

//reference
// import React from 'react'; 
// import styled from 'styled-components'; 

// const StyleTestBtn = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.color || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// interface TestBtnProps {
//   color: string; 
// }

// const TestBtn = ({ color }: TestBtnProps) => {
//   return (
//     <div>
//       <StyleTestBtn color={color} />
//     </div>
//   )
// }; 

// export default TestBtn; 

// 구글 클라이언트 아이디
// 161712089232-v1udttltgin8n37iou92c03qrckdrvkv.apps.googleusercontent.com

// 카카오 클라이언트 아이디
// a58db4c46f3113c111f06599a69d529b