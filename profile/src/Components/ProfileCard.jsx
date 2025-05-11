import React from "react";
import Profile from "../assets/Profile.png";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={Profile} alt="프로필" style={{ maxWidth: "300px", height: "auto" }} />
      <div className="profile-info">
        <h2>강현우</h2>
        <h3>안녕하세요! 같이 협업하고 싶은 클라이언트 개발자 강현우 입니다.</h3>
        <p>공유의 가치를 실현하며 다함께 성장하고 포기하지 않는 개발자 입니다!</p>
        <p>웹 뿐만 아니라 iOS개발도 같이 진행중입니다.</p>
        <h3>수상경력</h3>
        <p>2024 한이음 ICT 공모전 입상 , 주제 : LLM을 활용한 우울증 챗봇</p>
        <p>2024 한이음 ICT 공모전 입상 , 주제 : 시각장애인을 위한 AI 키오스크</p>
        <h3>활동사항</h3>
        <p>2025.03~ : 국내 최대 IT 개발 동아리 SOPT 36기 iOS파트</p>
      </div>
    </div>
  );
};

export default ProfileCard; 