import React from 'react'; 
import styled from 'styled-components'; 

type BtnWithEventProps = {
  text: string;   
  value?: string; 
  handleSubmit?: (e: any) => void; 
  handleClick?: (e: any) => void;
}

export const StyleBtnWithEvent = styled.button`
  color: #F6F5F5; 
  background-color: var(--color-primary); 
  border: 1px solid var(--color-primary); 
  border-radius: 5px; 
  font-size: 1.5rem; 
  width: 45%; 
  height: 4.8rem;
  margin: 3px auto; 
` 

const BtnWithEvent = ({ text, value = "", handleClick, handleSubmit }: BtnWithEventProps ) => {

  return (
    <StyleBtnWithEvent value={value} onClick={handleClick || handleSubmit}>{text}</StyleBtnWithEvent>
  )
}

export default BtnWithEvent; 