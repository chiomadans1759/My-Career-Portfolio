import styled from "styled-components";

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: radial-gradient(#eeccff, black);
`;

export const ComponentWrapper = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 60px auto 0;
  box-sizing: border-box;
`;

export const NameIntro = styled.p`
  font-size: 30px;
  position: absolute;
  text-transform: uppercase;
  z-index: 3;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  background-color: #696a6e;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #e66465, #9198e5);
`;

export const BaseText = styled.h2`
  font-size: 100px;
  font-family: "Rubik Doodle Shadow";
  color: red;
  position: absolute;
  z-index: 2;
  -webkit-text-fill-color: #333439;
  -webkit-text-stroke: 3px #201e29;
  text-transform: uppercase;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const SummarySection = styled.div`
  display: flex;
  gap: 68px;
  justify-content: center;
  align-items: center;
`;

export const ActionButton = styled.button`
  display: flex;
  height: 48px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #fff;
  color: #fff;
  background: transparent;
  cursor: pointer;
`;

export const StatisticsDivider = styled.hr`
  background-color: #fff;
  color: #fff;
  -webkit-transform: rotate(90deg);
  left: 130px;
  border: 2px;
  height: 55px;
  width: 2px;
  transform: rotatex(45deg);
`;

export const Statisticscontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SummaryNumber = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  background-color: #696a6e;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #e66465, #9198e5);
  margin-bottom: 0;
`;

export const SummaryTitle = styled.h3`
  color: #fff;
  margin-bottom: 0;
`;

export const SummaryText = styled.p`
  color: #88898c;
`;
