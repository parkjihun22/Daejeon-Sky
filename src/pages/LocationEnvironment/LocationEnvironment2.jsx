import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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
        {/* 풀 Helmet: title/description/canonical/robots + OG + Twitter + JSON-LD */}
        <title>대전 하늘채 루시에르 - 프리미엄</title>
        <meta
          name="description"
          content="대전 중구 선화동 도심 최중심 998세대 랜드마크. 전용 84·105·119㎡, 지하5~지상49층 6개 동, 더블역세권·트램(2호선 예정)과 프리미엄 커뮤니티·공원형 조경으로 완성되는 하늘채 루시에르의 프리미엄을 확인하세요."
        />
        <link rel="canonical" href="https://intercs.co.kr/LocationEnvironment/primium" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="대전 하늘채 루시에르" />
        <meta property="og:title" content="대전 하늘채 루시에르 - 프리미엄" />
        <meta
          property="og:description"
          content="도심 최중심 998세대·전용 84·105·119㎡·B5~49F. 대전역·서대전역 더블역세권, 트램(2호선 예정), 대형 커뮤니티와 공원형 조경까지—하늘채 루시에르의 차별화된 프리미엄."
        />
        <meta property="og:url" content="https://intercs.co.kr/LocationEnvironment/primium" />
        <meta property="og:image" content="https://intercs.co.kr/img/og/primium.jpg" />
        <meta property="og:image:alt" content="대전 하늘채 루시에르 프리미엄 요약 이미지" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="대전 하늘채 루시에르 - 프리미엄" />
        <meta
          name="twitter:description"
          content="선화동 도심 최중심 998세대 랜드마크. 더블역세권·트램(예정)·프리미엄 커뮤니티·공원형 조경으로 완성되는 생활 프리미엄."
        />
        <meta name="twitter:image" content="https://intercs.co.kr/img/og/primium.jpg" />
        <meta name="twitter:url" content="https://intercs.co.kr/LocationEnvironment/primium" />

        {/* JSON-LD (WebPage + Breadcrumb + 주요 특징 하이라이트) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "대전 하늘채 루시에르 - 프리미엄",
            url: "https://intercs.co.kr/LocationEnvironment/primium",
            description:
              "대전 중구 선화동 도심 최중심 998세대 랜드마크 단지의 프리미엄 핵심 포인트(더블역세권·트램 예정·프리미엄 커뮤니티·공원형 조경·명문 학군)를 소개합니다.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: "https://intercs.co.kr/img/og/primium.jpg",
              width: 1200,
              height: 630
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: "https://intercs.co.kr/" },
                { "@type": "ListItem", position: 2, name: "프리미엄", item: "https://intercs.co.kr/LocationEnvironment/primium" }
              ]
            },
            about: [
              "선화동 도심 최중심 998세대",
              "전용 84·105·119㎡, B5~49F 6개 동",
              "대전역·서대전역 더블역세권",
              "도시철도 1호선(중앙로역) 생활권·트램(2호선 예정)",
              "프리미엄 커뮤니티·공원형 조경",
              "선화초·충남여중·충남여고·대성고 등 명문 학군"
            ]
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 (스크린리더용) */}
      <h1 className={styles.screenReaderOnly}>대전 하늘채 루시에르 - 프리미엄</h1>
      <p className={styles.screenReaderOnly}>
        대전 중구 선화동 도심 최중심에 자리한 하늘채 루시에르의 프리미엄을 소개합니다.
        총 998세대, 전용 84·105·119㎡로 구성되며 지하 5층부터 지상 49층까지 6개 동 규모입니다.
        대전역·서대전역 더블역세권과 트램(2호선 예정) 교통 수혜, 프리미엄 커뮤니티와 공원형 조경,
        풍부한 생활·교육 인프라를 갖춘 차별화된 주거 가치를 제시합니다.
      </p>

      {/* 히어로 카피 */}
      <div className={styles.textBox}>
        <div>도심 프리미엄의 정점</div>
        <div>대전 하늘채 루시에르, 일상의 품격을 높이다</div>
      </div>


      <img
        src={page1}
        className={styles.image3}
        alt="대전 하늘채 루시에르-image1"
      />

      
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
