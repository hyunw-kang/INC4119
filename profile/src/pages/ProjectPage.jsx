import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/Chat.png";
import calculImage from "../assets/Calculator.png";
import kioskImage from "../assets/kisok.png";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "프로젝트1",
      description: "LLM을 활용한 우울증 방지 챗봇 프로젝트 WEB 파트",
      image: sampleImage,
      link : "https://m.youtube.com/watch?v=znBBE0HGdks"
    },
    {
      title: "프로젝트2",
      description: "시각장애인을 위한 AI키오스크 Frontend",
      image : kioskImage,
      link : "https://www.youtube.com/watch?v=XYeDyz9636Q"
    },
    {
      title: "나의 프로젝트3",
      description: "학교 실습 계산기 만들기",
      image : calculImage
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
