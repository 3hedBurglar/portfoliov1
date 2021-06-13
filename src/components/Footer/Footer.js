import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact No.</LinkTitle>
          <LinkItem href="tel:+919560607661">9560607661</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href="mailto:fslrahman2040@gmail.com">
            fslrahman2040@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Write Code To Get Paid Not Get paid To Write Code! <br />{" "}
            Accomplishing One Project at a Time.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/3hedBurglar">
            <FiGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <FiInstagram style={{ margin: "0 15px" }} size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/faisal-rahman-b90182137/">
            <FiLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <SocialIconsContainer>
        <CompanyContainer
          style={{
            alignItems: "center",
            margin: "30px auto 0 auto",
          }}
        >
          © {year} | Faisal
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
