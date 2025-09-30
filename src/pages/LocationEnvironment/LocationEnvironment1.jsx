import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

// 1) 입지 카드 데이터 교체 (대전 중구 선화동 기준)
const LocationSection = [
  {
    img: section2Image1,
    titleText: "선화 재개발 클러스터 최전면<br />미래가치 높은 도심 핵심 입지",
    contentText:
      "선화동 도심 최중심 998세대 랜드마크<br />대전역세권 개발·트램(2호선) 수혜 기대",
  },
  {
    img: section2Image2,
    titleText: "행정·의료 인프라 프리미엄<br />생활밀착 편의",
    contentText:
      "중구청·대전중부경찰서 인접(주변)<br />대전성모병원·선병원 등 종합의료 접근 용이",
  },
  {
    img: section2Image3,
    titleText: "도심·광역 교통 우수<br />편리한 접근성",
    contentText:
      "지하철 1호선 중앙로역 생활권·트램(2호선 예정) 수혜 기대<br />대전역·서대전역 더블역세권으로 KTX/SRT 이용 편리",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />도보 생활권",
    contentText:
      "은행동·으능정이 문화거리·지하상가 도보권<br />NC백화점·중앙시장 등 쇼핑·문화 가까운 라이프",
  },
  {
    img: section2Image5,
    titleText: "교육 프리미엄<br />초·중·고 학세권",
    contentText:
      "선화초 도보 통학권(주변)<br />충남여중·충남여고·대성중·대성고 등 명문학군 인접",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />쾌적한 녹지 생활",
    contentText:
      "보문산·선화양지공원 등 녹지 접근성 우수<br />단지 내 공원형 조경으로 일상 속 힐링",
  },
];

// 2) 페이지 컴포넌트(메타/OG/트위터/JSON-LD/히어로 카피 수정)
const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 풀 스택 Helmet: title / description / canonical / robots + OG + Twitter + JSON-LD */}
        <title>대전 하늘채 루시에르 - 입지환경</title>
        <meta
          name="description"
          content="대전 중구 선화동 도심 최중심 입지. 대전역·서대전역 더블역세권과 도시철도 1호선(중앙로역) 생활권, 트램(2호선 예정) 교통 수혜. 은행동·으능정이 문화거리·중앙시장·NC백화점 등 풍부한 생활 인프라와 선화초·충남여중·충남여고·대성고 등 명문 학군까지 갖춘 프리미엄 입지입니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://intercs.co.kr/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="대전 하늘채 루시에르" />
        <meta property="og:title" content="대전 하늘채 루시에르 - 입지환경" />
        <meta
          property="og:description"
          content="대전역·서대전역 더블역세권, 중앙로역 도보권, 트램(2호선 예정) 수혜. 은행동 상권·문화거리와 풍부한 생활 인프라를 누리는 선화동 도심 프리미엄 입지."
        />
        <meta property="og:url" content="https://intercs.co.kr/LocationEnvironment/intro" />
        <meta property="og:image" content="https://intercs.co.kr/img/og/location.jpg" />
        <meta property="og:image:alt" content="대전 하늘채 루시에르 입지 환경 요약 이미지" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="대전 하늘채 루시에르 - 입지환경" />
        <meta
          name="twitter:description"
          content="선화동 도심 최중심, 더블역세권·트램(예정)·풍부한 생활·교육 인프라를 갖춘 프리미엄 입지."
        />
        <meta name="twitter:image" content="https://intercs.co.kr/img/og/location.jpg" />
        <meta name="twitter:url" content="https://intercs.co.kr/LocationEnvironment/intro" />

        {/* JSON-LD (WebPage + Breadcrumb) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "대전 하늘채 루시에르 - 입지환경",
            url: "https://intercs.co.kr/LocationEnvironment/intro",
            description:
              "대전 중구 선화동 도심 최중심 입지. 대전역·서대전역 더블역세권과 중앙로역(도시철도 1호선) 생활권, 트램(2호선 예정) 교통 수혜. 은행동·으능정이 문화거리·중앙시장·NC백화점 등 풍부한 생활 인프라와 우수 학군을 갖춘 프리미엄 입지.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: "https://intercs.co.kr/img/og/location.jpg",
              width: 1200,
              height: 630
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: "https://intercs.co.kr/" },
                { "@type": "ListItem", position: 2, name: "입지환경", item: "https://intercs.co.kr/LocationEnvironment/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 (스크린리더용) */}
      <h1 className={styles.screenReaderOnly}>대전 하늘채 루시에르 - 입지환경</h1>
      <p className={styles.screenReaderOnly}>
        대전 하늘채 루시에르는 중구 선화동 도심 최중심 입지에 위치합니다.
        대전역·서대전역 더블역세권과 도시철도 1호선 중앙로역 도보권, 트램(2호선 예정) 교통 수혜로 이동이 편리합니다.
        은행동·으능정이 문화거리, 중앙시장, NC백화점 등 생활·문화 인프라가 풍부하고,
        선화초·충남여중·충남여고·대성중·대성고 등 우수 학군이 인접해 교육 여건도 뛰어납니다.
      </p>

      {/* 히어로 카피 */}
      <div className={styles.textBox}>
        <div>도심 최중심, 모든 인프라가 가까운 곳</div>
        <div>대전 하늘채 루시에르에서 누리는 프리미엄 입지</div>
      </div>



      <img
        src={page1}
        className={styles.image2}
        alt="대전 하늘채 루시에르입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 대전 하늘채 루시에르 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
