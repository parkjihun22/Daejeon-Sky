import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/SalesInfo/SalesInfoAnnouncement/supply.jpg";
import pdfIcon from "../../assets/icons/pdf-icon.png";  // PDF 아이콘 이미지 임포트


const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/SalesInfo/guide" },
    // { title: "정당계약안내문", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const { pathname } = useLocation();

  // 페이지 로드 시 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 이벤트로 헤더 상태 변경
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  // PDF 새 창으로 열기 함수
  const openPDF = () => {
    setIsLoading(true); // PDF 로딩 시작
    const pdfUrl = "/announcement.pdf"; // 실제 PDF 파일 경로로 수정
    const newWindow = window.open(pdfUrl, "_blank");

    // PDF 로딩 후 로딩 상태 해제
    newWindow.onload = () => {
      setIsLoading(false);
    };
  };

  return (
    <div className={styles.container}>

      
      <Helmet>
        <title>대전 하늘채 루시에르 - 모집공고 안내</title>
        <meta
          name="description"
          content="대전 하늘채 루시에르 모집공고를 한눈에 확인하세요. 공급 세대수·공급 면적·분양가, 청약 일정·자격, 당첨자 발표·계약 절차 및 유의사항을 안내합니다."
        />
        <link rel="canonical" href="https://intercs.co.kr/SalesInfo/announcement" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="모집공고안내" />
      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 (스크린리더용) */}
      <h1 className={styles.screenReaderOnly}>
        대전 하늘채 루시에르 - 모집공고안내
      </h1>
      <p className={styles.screenReaderOnly}>
        대전 중구 선화동에 들어서는 대전 하늘채 루시에르의 입주자 모집공고 안내입니다.
        총 998세대(전용 84·105·119㎡), 지하 5층~지상 49층 6개 동 규모의 공급 세대수·공급 면적·분양가와
        특별공급 및 1순위 청약 일정, 청약 자격 요건, 당첨자 발표와 계약 절차, 제출 서류 및 유의사항을
        한눈에 확인하실 수 있도록 정리합니다.
      </p>

      {/* 히어로 카피 */}
      <div className={styles.textBox}>
        <div>입주자 모집공고를 확인하세요</div>
        <div>대전 하늘채 루시에르</div>
      </div>



      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="대전 하늘채 루시에르모집공고안내-image1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
         />
      {/* 입주자 모집공고 PDF로 보기 버튼 */}
       <button onClick={openPDF} className={styles.pdfButton}>
                <img src={pdfIcon} alt="PDF 아이콘" className={styles.pdfIcon} /> 
                <span>모집공고 PDF<br/>확인하기</span>
            </button>


      {/* 로딩 중일 때 표시할 스피너 */}
      {isLoading && (
        <div className={styles.loader}>
          <p>파일을 로딩 중입니다...</p>
          {/* 여기에 스피너 아이콘 추가 가능 */}
          <div className={styles.spinner}></div>
        </div>
      )}
      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplexGuide1;
