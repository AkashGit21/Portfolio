import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../../containers/SectionContainer/SectionContainer';

const Activities = styled.article`
    width: 70%;
    min-height: 100%;
    margin-left: 10%;
    margin-top: 10%;    
`;

const ActivityTypeContainer = styled.div`
    display: inline-block;
    width: 30%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
`;

const ActivityType = styled.section`
    display: block;
    padding: 5px;
    background-color: black;
    border: 2px solid green;
    border-radius: 15px;
`;

const ActivitiesListContainer = styled.div`
    display: inline-block;
    width: 70%;
    height: 100%;
    margin: 0;
    padding: 0;
`;

const ActivitiesList = styled.section`    
    display: block;
    padding: 5px;
    background-color: black;
    border: 2px solid green;
    border-radius: 5px;
`;

const activitiesData = [
    {
      field: "Technical", 
      activitiesList:[
        "Secured 21st position at Cadathon MANIT (an Inter NIT Coding Contest) among 6000 students.",
        "Won Inception 3.1 organized by ACM NIT-Surat",
        "Won Codewars organized by Hertz SVNIT.",
        "ABC" 
      ]
    }, {
      field: "School", 
      activitiesList:[
        "Secured 21st position at Cadathon MANIT (an Inter NIT Coding Contest) among 6000 students.",
        "Won Inception 3.1 organized by ACM NIT-Surat",
        "Won Codewars organized by Hertz SVNIT.",
        "ABC" 
      ]
    }, {
      field: "Extra Curricular", 
      activitiesList:[
        "Secured 21st position at Cadathon MANIT (an Inter NIT Coding Contest) among 6000 students.",
        "Won Inception 3.1 organized by ACM NIT-Surat",
        "Won Codewars organized by Hertz SVNIT.",
        "ABC" 
      ]
    }
]

const activities = () =>{

    const activitiesList = (
        <div></div>
    );

    return ( 
        <SectionContainer title="Activities"> 
            <Activities>
                <ActivityTypeContainer>
                    {activitiesData.map(activity => {
                        return (
                                <ActivityType> {activity.field} </ActivityType>
                        );
                    })}
                </ActivityTypeContainer>
                <ActivitiesListContainer>
                    <ActivitiesList>{activitiesList}</ActivitiesList>
                </ActivitiesListContainer>
            </Activities>
        </SectionContainer> 
    );
}

export default activities;