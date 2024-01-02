import React, { FC } from "react";
import { SectionTitleWrapper, NameIntro, BaseText } from "../styles/shared"

interface SectionTitleProps {
  baseText: string;
  title: string;
}

interface SummaryCardProps {
  subHeading: string;
  heading: string;
  desc: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ baseText, title }) => {
  return (
    <SectionTitleWrapper>
      <NameIntro>{title}</NameIntro>
      <BaseText>{baseText}</BaseText>
    </SectionTitleWrapper>
  );
};

export const SummaryCard: FC<SummaryCardProps> = ({ heading, subHeading, desc }) => {
  return (
    <SectionTitleWrapper>
      <NameIntro>{heading}</NameIntro>
      <BaseText>{subHeading}</BaseText>
      <BaseText>{desc}</BaseText>
    </SectionTitleWrapper>
  );
};
