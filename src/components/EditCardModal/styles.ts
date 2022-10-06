import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  @media (max-width: 720px) {
    width: 95%;
  }
`;

export const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000087;
  z-index: 2;
  cursor: pointer;
`;

export const Form = styled.form`
  background-color: white;
  border: 1px solid black;
  width: 400px;
  height: 600px;
  overflow: auto;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #18a9e0;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #137ba3;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 100vh;
  }
`;

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  height: 80px;
  margin: 15px auto;
  @media (max-width: 720px) {
    width: 85%;
    margin: 12px;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #18a9e0;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const SaveButton = styled.button`
  border: none;
  background: none;
  outline: none;
  background-color: #1356ff;
  color: white;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: none;
  background: none;
  outline: none;
  background-color: #ff1818;
  color: white;
  border-radius: 4px;
  padding: 10px 12px;
  margin-left: 12px;
  font-size: 14px;
  cursor: pointer;
`;
