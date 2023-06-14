import React, { useState } from 'react';

const ResumeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleSkillChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Resume</h2>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label htmlFor="phone">Phone</label>
      <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            value={edu.institute}
            onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
            placeholder="Institute"
          />
          <input
            type="text"
            value={edu.year}
            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            placeholder="Year"
          />
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            placeholder="Degree"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>

      <h3>Experience</h3>
      {experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            placeholder="Company"
          />
          <input
            type="text"
            value={exp.year}
            onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
            placeholder="Year"
          />
          <input
            type="text"
            value={exp.designation}
            onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
            placeholder="Designation"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>

      <h3>Skills</h3>
      <input type="text" value={skills} onChange={handleSkillChange} placeholder="Add skills..." />

      <button type="submit">Save Resume</button>
    </form>
  );
};

export default ResumeForm;
