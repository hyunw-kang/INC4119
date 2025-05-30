import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
  const skills = ["HTML/CSS", "JavaScript", "TypeScript", "React", "Node.js", "Swift"];

  return (
    <div className="about-container">
      <h2>자기소개</h2>
      <ProfileCard />
      <SkillsList skills={skills} />
    </div>
  );
};

export default AboutPage; 