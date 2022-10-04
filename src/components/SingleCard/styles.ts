import styled from 'styled-components';

export const SingleCardContainer = styled.div`
  position: relative;
  box-shadow: 0px 0px 10px #e8e8e8;
  border-radius: 6px;
  margin: 12px;
  :hover {
    box-shadow: 0px 0px 10px #d8d8d8;
    .card-languages {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 920px) {
    width: 95%;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div<{ picture: string; status: string }>`
  background-image: url(${(props) => props.picture});
  background-position: center;
  background-size: cover;
  width: 320px;
  height: 200px;
  :hover {
    .edit-file-container {
      opacity: ${(props) => props.status === 'ready' && 1};
    }
  }
  @media only screen and (max-width: 920px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding-top: 16px;
  padding-left: 16px;
`;

export const CardStatus = styled.p`
  font-size: 12px;
  margin: 0;
  margin-top: 4px;
  color: gray;
  padding-bottom: 16px;
  padding-left: 16px;
`;

export const CardLanguages = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  opacity: 0;
  transition: 0.2s ease-in-out;
`;

export const LanguageMessage = styled.p`
  font-size: 12px;
  margin: 0;
  margin-top: 4px;
  color: gray;
  padding-left: 4px;
  text-transform: uppercase;
`;

export const EditFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000000a8;
  z-index: 1;
  opacity: 0;
  transition: 0.2s ease-in-out;
`;

export const EditFileButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background: none;
  outline: none;
  padding: 8px 24px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  :hover {
    background-color: #666666;
  }
`;

export const DeleteRecycleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  outline: none;
  border: none;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  svg {
    font-size: 18px;
  }
  :hover {
    background-color: #666666;
  }
`;

export const ErrorFileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffb6c2;
  z-index: 1;
  transition: 0.2s ease-in-out;
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  svg {
    color: red;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding-left: 8px;
  font-size: 14px;
  width: 85%;
`;

export const ErrorButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 1rem;
  padding-right: 1rem;
`;

export const DeleteFileButton = styled.button`
  background-color: white;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  padding: 8px 24px;
  font-size: 14px;
  cursor: pointer;
`;

export const ReportIssueButton = styled.button`
  background-color: #732ef5;
  outline: none;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 18px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const TranscribingFileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #cbcbcb80;
  z-index: 1;
  transition: 0.2s ease-in-out;
`;

export const TranscribingMessage = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 4rem;
`;

export const ProgressContainer = styled.div`
  width: 80%;
  padding-left: 2px;
  padding-right: 2px;
  height: 10px;
  border-radius: 5px;
  border: solid 3px #4e4e4e;
  background-color: #1e1e1e;
  position: absolute;
  top: calc(50% - 13px);
  left: 2rem;
`;

export const TrackContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  overflow: hidden;
  -webkit-animation: prgBar 5s linear 0s infinite alternate;
  animation: prgBar 5s linear 0s infinite alternate;
  @keyframes prgBar {
    0% {
      width: 0%;
    }
    9.99% {
      width: 0%;
    }
    10% {
      width: 10%;
    }
    95% {
      width: 100%;
    }
  }
`;

export const BarContainer = styled.div`
  height: 5px;
  width: 6px;
  background-color: #00ffff;
  position: relative;
  border-radius: 2px;
  box-shadow: 0px 0px 5px #00ffff;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 100px;
  top: 3px;
  float: left;
  clear: top;
`;
