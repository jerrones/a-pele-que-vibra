import styled from "styled-components";

export const PlayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding: 10px;
  color: #fff;
`;

export const PlayButton = styled.button`
  font-size: 16px;
  padding: 10px;
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ProgressBar = styled.input`
  width: 60%;
  margin: 0 15px;
`;

export const TimeText = styled.span`
  font-size: 0.8rem;
`;
