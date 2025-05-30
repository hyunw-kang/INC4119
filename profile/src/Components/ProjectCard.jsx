import React from "react";

/**
 * 프로젝트 카드 컴포넌트
 * @param {string} title - 프로젝트의 제목
 * @param {string} description - 프로젝트의 설명
 * @param {string} image - 프로젝트의 이미지 URL (선택적)
 * @param {string} link - 프로젝트의 외부 링크 URL (선택적)
 */
const ProjectCard = ({ title, description, image, link }) => {
  const handleImageClick = () => {
    // link가 유효한 경우 유튜브 링크로 이동
    if (link && link.includes("youtube.com")) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>
      {/* 프로젝트 이미지가 있는 경우 표시 */}
      {image && (
        <div className="project-image" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
          <img src={image} alt={title} style={{ width: "300px", height: "300px" }} />
        </div>
      )}
      <p>{description}</p>
      {/* 프로젝트 링크가 있는 경우 버튼 표시 */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          프로젝트 보기
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
