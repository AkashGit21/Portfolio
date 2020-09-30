import React from 'react';
import styled from 'styled-components';

const Education = styled.article`
    width: 70%;
    margin-left: 10%;
    margin-top: 10%;    
`;

const EducationType = styled.section`
    background-color: white;
    color: black;
    width: 100%;    
    margin-bottom: 10px;
    border-radius: 5px;
`;

const Standard = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 40%;
    text-align: left;
`;

const Institute = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 60%;
    text-align: left;
`;

const Grade = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    padding: 0;
    width: 40%;
    font-style: italic;
    text-align: left;
`;

const Score = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    padding: 0;
    font-weight: bold;
    width: 60%;
    text-align: leftt;
`;

const education = (props) =>{
    return ( 
        <Education>
            {props.info.map(edu => {
                return( <EducationType key={edu.standard}> 
                            <Standard> {edu.standard} </Standard> 
                            <Institute> {edu.institute} </Institute>
                            <Grade> {edu.scoreType} </Grade>
                            <Score> {edu.score} </Score>
                        </EducationType>);
            })}
        </Education>
        
    );
}

export default education;