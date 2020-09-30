import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import SectionContainer from './SectionContainer/SectionContainer';
import Education from '../components/Education/Education';
import Activities from '../components/Activities/Activities';

const Info = {
  activities:[
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
  ],

  projects: [

  ],
  education: [
      {
        standard:"Bachelors Of Technology (B. Tech)",
        institute: "Indian Institute Of Information Technology Surat (2017-21) ",
        scoreType: "Cumulative G.P.A",
        score: " 8.28 / 10.00 "
      },
      {
        standard:"Standard XIIth (H.S.C)",
        institute: "Delhi Public School (2016-17) ",
        scoreType: "Overall Percentage",
        score: " 92.40% / 100% "
      },
      {
        standard:"Standard Xth (S.S.C)",
        institute: "St. Joseph's Academy Ghaziabad (2014-15) ",
        scoreType: "Overall Percentage",
        score: " 94.00% / 100% "
      }
  ]  
}

class App extends Component {  

  render() {
    return (
      <div className="App">
        <Layout/>        
        <SectionContainer title="Activities"> <Activities info={Info.activities}/> </SectionContainer>   
        <SectionContainer title="Education"> <Education info={Info.education}/> </SectionContainer>
      </div>
    );
  }
}

export default App;
