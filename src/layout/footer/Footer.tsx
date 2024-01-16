import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Yury</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon viewBox={"0 0 21px 21px"} width={'21px'} height={"21px"} iconId={'instagram'}></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon viewBox={"0 0 21px 21px"} width={'21px'} height={"21px"}  iconId={'telegram'}></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon viewBox={"0 0 21px 21px"} width={'21px'} height={"21px"}  iconId={'vk'}></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon viewBox={"0 0 21px 21px"} width={'21px'} height={"21px"}  iconId={'linkedin'}></Icon>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    color: #FFF;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.10);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`


