import React, { FC } from "react";
import { ComponentWrapper } from "./styles/shared";
import { MeBanner, HomePageWrapper, JobTitle, NameIntro, NameBanner } from "./styles/home";
import { SectionTitle } from "./shared"
import MeGrayIcon from "../images/me-gray.png"

export const Home: FC = () => {
  return (
    <ComponentWrapper>
      <HomePageWrapper>
        <SectionTitle baseText="Frontend Engineer" title="Hi, My Name Is"/>
        <NameBanner>Oluchi Okpala</NameBanner>
        <MeBanner src={MeGrayIcon}/>
      </HomePageWrapper>
    </ComponentWrapper>
  );
};
