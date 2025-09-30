// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>대전 하늘채 루시에르</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>대전광역시 중구 선화동 95-3 외 다수필지</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 5층 ~ 지상 49층, 6개 동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 84·105·119㎡</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 998세대</span>
        </li>
        <li>
          <strong>주차대수</strong>
          <span>총 1,566대 (공동주택)</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="대전 하늘채 루시에르 입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="대전 하늘채 루시에르 입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
        <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
        <p className={styles.premiumSubtitle}>
          선화동 도심 최중심 입지와 행정·의료·생활 인프라를 누리는<br />
          대전 하늘채 루시에르 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];


function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "도심 최중심, 49층 랜드마크 프리미엄",
      desc:
        "선화 재개발 최전면 입지<br/>998세대 대단지(브랜드 타운 시너지)<br/>코오롱글로벌 하늘채"
    },
    {
      img: slide2,
      title: "행정·의료·생활 인프라 원스톱",
      desc:
        "중앙로·은행동 메인 상권 도보권<br/>대전성모병원·선병원 등 종합의료 인접<br/>백화점·지하상가·문화시설 풍부"
    },
    {
      img: slide3,
      title: "더블역세권 + 트램 수혜",
      desc:
        "대전역·서대전역 접근 용이(KTX/SRT)<br/>도시철도 1호선 이용 편리·2호선(트램) 수혜 기대<br/>대종로·순환도로 등 차량 접근 우수"
    },
    {
      img: slide4,
      title: "교육·학세권 프리미엄",
      desc:
        "선화초 도보통학 생활권(주변)<br/>충남여중·충남여고·대성고 등 명문학군 인접(주변)<br/>단지 내 육아·학습 특화 커뮤니티 계획"
    },
    {
      img: slide5,
      title: "프리미엄 커뮤니티",
      desc:
        "피트니스·실내골프·사우나·무비살롱<br/>게스트하우스·맘스라운지 등 특화시설<br/>최상층 스카이라운지로 도심 조망"
    },
    {
      img: slide6,
      title: "설계·조경 가치",
      desc:
        "남향 위주·3~4Bay 중심 특화평면<br/>동간거리 확보로 채광·프라이버시 극대화<br/>지상 차 없는 공원형 단지"
    }
  ];

  // ... 기존 컴포넌트 렌더링 로직 유지

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
