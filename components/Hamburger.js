import styled from "styled-components";

const StyledHamburger = styled.div`
  width: 2.5rem;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  @media (max-width: 950px) {
    display: flex;
  }

  @media (max-width: 650px) {
    margin-right: 1rem;
  }

  div {
    background-color: ${({ open }) =>
      open ? "var(--navHamburger)" : "var(--navHamburger)"};
    width: 100%;
    height: 0.15rem;
    margin: 0.3rem 0;
    text-align: center;
    border-radius: 10px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: 2px 9px;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(1005)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: 9px -3px;
    }
  }
`;

export default function Hamburger({ open, setOpen }) {
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
}
