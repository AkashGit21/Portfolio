import React from 'react';
import styled from 'styled-components';

const Activities = styled.article`
    width: 70%;
    height: 100%;
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

const activities = (props) =>{

    const activitiesList = (
        <div></div>
    );

    return ( 
        <Activities>
            <ActivityTypeContainer>
                {props.info.map(activity => {
                    return (
                            <ActivityType> {activity.field} </ActivityType>
                    );
                })}
            </ActivityTypeContainer>
            <ActivitiesListContainer>
                <ActivitiesList>{activitiesList}</ActivitiesList>
            </ActivitiesListContainer>
        </Activities>

    );
}

export default activities;