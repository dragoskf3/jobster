import styled from "styled-components";

const wrapper = styled.main`
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10rem;
  }
  img {
    width: 600px;
  }
  .link-text {
    color: var(--primary-400);
    text-decoration: underline;
  }
`;

export default wrapper;
