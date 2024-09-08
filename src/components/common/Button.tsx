import styled from "styled-components";

export type TButton ={
    width:string;
    height:string;
    borderRadius:string;
    children?: React.ReactNode;//자식 타입 설정
    onClick:()=>void;
    fontColor?:string;
    fontSize?:string;
    backgroundColor?:string;
    margin?:string
    border?:string;
    style?:React.CSSProperties;
    position?:string;
    right?:string;
    top?:string;
};

const Btn = styled.button<TButton>`
    width: ${({width})=>width};
    height:${({height})=>height};
    border-radius:${({borderRadius})=>borderRadius};
    background-color: ${({backgroundColor})=>backgroundColor};
    font-size: ${({fontSize})=>fontSize};
    color:${({fontColor})=>fontColor};
    //position:relative;

    border:${({border})=>border};
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    margin:${({margin})=>margin};
    &:hover { cursor: pointer; };
    position: ${({position})=>position};
    right: ${({right})=>right};
    top: ${({top})=>top};

`


const Button = (props:TButton) => {
    const {children}=props;
  return (
    <>
    <Btn {...props}>
    {children}</Btn>
    </>
  );
}
export default Button