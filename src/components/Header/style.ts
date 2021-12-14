import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  align-items: center;

  padding: 2rem 1rem 12rem;
  justify-content: space-between;

  button { 
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);

    padding: 0 2rem;
    border-radius: 0.25rem;
    border: 0;

    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;