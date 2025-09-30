import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="대전 하늘채 루시에르 배너 이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

// 섹션별 문구를 깔끔하게 관리하고, 조건은 includes로 단순화했습니다.
const contents = (text, isLoaded) => {
    const heroTabs = ['하늘채', '홍보영상', '체크포인트', '당첨자서류안내'];
    const overviewTabs = ['사업개요', '세대안내', '인테리어', '청약안내', '모집공고안내', '인지세납부안내'];
    const complexTabs = ['단지안내', 'E-모델하우스'];
  
    const line = (children) => (
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>{children}</div>
    );
  
    if (heroTabs.includes(text)) {
      return (
        <>
          {line('대전 중구 선화동 도심 프리미엄, 하늘채 루시에르')}
          {line('대전역·서대전역 더블 KTX 생활권, 트램(도시철도 2호선) 수혜 기대')}
          {line('신뢰의 코오롱글로벌 하늘채, 49층 랜드마크 라이프')}
        </>
      );
    } else if (overviewTabs.includes(text)) {
      return (
        <>
          {line('도심 핵심에 자리한 998세대 대단지')}
          {line('전용 84·105·119㎡ 중심, 실용·수납 특화 평면')}
          {line('맘스라운지·피트니스·실내골프·스카이라운지 등 21종 커뮤니티')}
          {line('합리적 분양가와 브랜드 타운 시너지, 대전 하늘채 루시에르')}
        </>
      );
    } else if (text === '입지환경') {
      return (
        <>
          {line('중앙로·은행동 상권까지 도보 생활권, 원스톱 인프라')}
          {line('대전역 1.3km 내 접근, 광역·도시철도 트리플 네트워크')}
          {line('선화초·충남여중·대성고 등 우수 학군 밀집')}
        </>
      );
    } else if (complexTabs.includes(text)) {
      return (
        <>
          {line('단지 동간거리·남향 위주 배치로 채광·프라이버시 극대화')}
          {line('3~4Bay 중심 특화평면, 팬트리·드레스룸 수납 강화')}
          {line('최상층 스카이라운지와 호텔형 커뮤니티가 완성하는 일상')}
        </>
      );
    }
  
    // 기본(미정의 탭) 대응: 안전하게 히어로 카피를 노출
    return (
      <>
        {line('대전 중구 선화동 도심 프리미엄, 하늘채 루시에르')}
        {line('생활·교통·교육을 한 번에, 도심 핵심 라이프')}
        {line('신뢰의 코오롱글로벌 하늘채')}
      </>
    );
  };
  
