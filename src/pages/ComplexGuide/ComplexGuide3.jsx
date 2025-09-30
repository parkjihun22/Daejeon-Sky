import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide3/community.jpg";



const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>대전 하늘채 루시에르 - 커뮤니티</title>
        <meta
          name="description"
          content="대전 하늘채 루시에르 커뮤니티 시설을 소개합니다. 피트니스센터, 실내골프연습장, GX룸, 독서실, 어린이집, 게스트하우스, 사우나 등 입주민의 생활 품격을 높이는 다양한 프리미엄 편의시설을 만나보세요."
        />
        <link rel="canonical" href="https://intercs.co.kr/ComplexGuide/community" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="커뮤니티" />
      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>대전 하늘채 루시에르 - 커뮤니티</h1>
      <p className={styles.screenReaderOnly}>
        대전 중구 선화동 도심 최중심에 들어서는 하늘채 루시에르의 커뮤니티 시설을 소개합니다.
        피트니스센터, 실내골프연습장, GX룸, 독서실, 어린이집, 게스트하우스, 사우나 등
        입주민이 편리하게 이용할 수 있는 특화 시설을 통해 삶의 품격을 높이고
        건강한 공동체 문화를 만들어갑니다.
      </p>

      {/* 히어로 카피 */}
      <div className={styles.textBox}>
        <div>라이프스타일을 완성하는 공간</div>
        <div>대전 하늘채 루시에르, 프리미엄 커뮤니티를 누리다</div>
      </div>




      {/* 이미지에 애니메이션 효과 추가 */}
      <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="대전 하늘채 루시에르 커뮤니티 안내 -image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>



      <Footer />
    </div>
  );
};

export default ComplexGuide3;
