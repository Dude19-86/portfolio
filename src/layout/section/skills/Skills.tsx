import React from 'react';
import {Skill} from "../skill/Skill";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                <Skill iconId={'code'}
                       title={'html5'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis culpa cum deleniti dicta doloribus eligendi eos fugit, illum itaque iure nemo odio rem sit soluta suscipit ut vitae voluptas!'}/>
                <Skill iconId={'css'}
                       title={'css3'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis culpa cum deleniti dicta doloribus eligendi eos fugit, illum itaque iure nemo odio rem sit soluta suscipit ut vitae voluptas!'}/>
                <Skill iconId={'react'}
                       title={'react'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis culpa cum deleniti dicta doloribus eligendi eos fugit, illum itaque iure nemo odio rem sit soluta suscipit ut vitae voluptas!'}/>
                <Skill iconId={'typeScript'}
                       title={'typeScript'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis culpa cum deleniti dicta doloribus eligendi eos fugit, illum itaque iure nemo odio rem sit soluta suscipit ut vitae voluptas!'}/>
                <Skill iconId={'styledComponents'}
                       title={'styled components'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis culpa cum deleniti dicta doloribus eligendi eos fugit, illum itaque iure nemo odio rem sit soluta suscipit ut vitae voluptas!'}/>
                <Skill iconId={'figma'}
                       title={'WEB DESIGN'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis culpa cum deleniti dicta doloribus eligendi eos fugit, illum itaque iure nemo odio rem sit soluta suscipit ut vitae voluptas!'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: rgba(237, 168, 232, 0.99);
    min-height: 100vh;
`



