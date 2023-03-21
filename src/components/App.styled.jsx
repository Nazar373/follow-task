import styled, { createGlobalStyle } from "styled-components";

import Background from "../images/background.png";

export const GlobalStyle = createGlobalStyle`
ul, button {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
button {
  padding: 0;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImageBackground = styled.div`
  height: 168px;
  background-image: url(${Background});
  margin: 28px 36px 18px;
`;

export const Border = styled.div`
  height: 8px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserImage = styled.img`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
  // background: #ebd8ff;
  // shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
  //   inset 0px -2.19582px 4.39163px #ae7be3,
  //   inset 0px 4.39163px 3.29372px #fbf8ff;
  // border-radius: 50%;
  // border: 8px solid #ebd8ff;
  height: 100px;
  width: 100px;
`;

export const DataList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 62px;
  margin-bottom: 26px;
`;

export const DataItem = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  &:first-child {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #373737;
`;

export const FollowingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #373737;
`;
