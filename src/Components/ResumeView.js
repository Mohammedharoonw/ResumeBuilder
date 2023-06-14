import React, { useEffect, useState } from 'react';

const ResumeView = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    
    const fetchResumeData = async () => {
      try {
        
        const response = await fetch('https://raw.githubusercontent.com/Mohammedharoonw/ResumeData.json/main/data.json');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.log('Error fetching resume data:', error);
      }
    };

    fetchResumeData();
  }, []);

  return (
    <div>
      <h2>View Resume</h2>
      {resumeData ? (
        <>
          <h3>Name: {resumeData.name}</h3>
          <p>Email: {resumeData.email}</p>
          <p>Address: {resumeData.address}</p>
          <p>Phone: {resumeData.phone}</p>

          <h3>Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <p>Institute: {edu.institute}</p>
              <p>Year: {edu.year}</p>
              <p>Degree: {edu.degree}</p>
            </div>
          ))}

          <h3>Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <p>Company: {exp.company}</p>
              <p>Year: {exp.year}</p>
              <p>Designation: {exp.designation}</p>
            </div>
          ))}

          <h3>Skills</h3>
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading resume data...</p>
      )}
    </div>
  );
};

export default ResumeView;
