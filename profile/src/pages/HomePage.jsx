import React from "react";
import FeatureCard from "../components/FeatureCard";
import "../components/Style.css";

const HomePage = () => {
  const features = [
    {
      title: "프론트엔드를 선택한 이유?",
      description: "개발을 공부하면서 사용자와의 소통에 대해 중요성을 인지하고, 더 접하게 상호작용 가능한 프로젝트를 개발하고자 프론트엔드 개발자를 꿈게 되었습니다. ",
    },
    {
      title: "일에 있어 가장 중요한 부분은?",
      description: "항상 나보다는 상대방을 먼저 생각하는 마인드를 가지고 일합니다. 또한 다양한 사용자들이 편리하게 서비스를 이용할 수 있게 기여하고자 합니다.",
    },
    {
      title: "노력하는 부분이 있다면?",
      description: "머물러 있는것이 아닌 계속 시도하고 실패하며 성장합니다. 웹 뿐만 아니라 앱 또한 다루는 개발자로 성장하고 싶어 iOS개발도 배우고 있습니다.",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다! 강현우의 포트폴리오입니다. </h2>
      <h3>Interview</h3>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
