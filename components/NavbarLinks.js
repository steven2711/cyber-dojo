import styled from "styled-components";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const StyledNavbarLinks = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;

  ul {
    display: flex;
    align-items: center;
    height: 100%;

    &:nth-child(1) {
      justify-content: space-evenly;
      width: 100%;
    }

    &:nth-child(2) {
      justify-content: space-evenly;
      width: 20%;
    }
  }

  ul li a {
    color: var(--mainWhite);
    font-weight: bold;
  }

  ul li a:hover {
    color: var(--navLinksHover);
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--navLinksHover);
    padding-bottom: 3px;
  }

  @media (max-width: 950px) {
    position: fixed;
    overflow: hidden;

    top: 0;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: var(--navMobileBackground);
    color: var(--navLinks);
    transition: all 0.3s ease;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};

    ul {
      flex-direction: column;
      font-size: 1.5rem;
      opacity: ${({ open }) => (open ? "1" : "0")};
      transition: opacity 0.3s linear;
      transition-delay: 0.3s;

      &:nth-child(1) {
        height: 40%;
      }

      &:nth-child(2) {
        height: 30%;
      }
    }

    ul li a {
      color: var(--navLinks);
    }
  }
`;

export default function NavbarLinks({ open, setOpen }) {
  const paths = ["websites", "seo", "digital-marketing", "about", "contact"];

  return (
    <StyledNavbarLinks open={open}>
      <ul>
        {paths.map((path, index) => (
          <li key={index}>
            <Link href={`/${path}`} onClick={() => setOpen(!open)}>
              <a>{path}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <a href="#" target="_blank" rel="noopener">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </StyledNavbarLinks>
  );
}
