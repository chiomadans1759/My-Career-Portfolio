import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { SectionTitle } from "./shared";
import { ContactPageWrapper } from "./styles/contact";

export const Contact = () => {
  const [activeFaq, setAtiveFaq] = useState(1);
  return (
    <ContactPageWrapper>
      <SectionTitle baseText="CONTACT ME" title="Send me email" />
    </ContactPageWrapper>
  );
};
