import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/brand.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
                <Helmet>
                <title>대전 하늘채 루시에르 - 브랜드 소개 | 하늘채(Hanulchae)</title>
                <meta
                    name="description"
                    content="코오롱글로벌 하늘채의 브랜드 철학과 품질 기준. 검증된 시공 역량과 세심한 설계, 프리미엄 커뮤니티로 삶의 품격을 높입니다."
                />
                {/* 권장: 트래킹 파라미터 제거한 정규화 URL */}
                <link rel="canonical" href="https://luciere-hanulchae.com/brand/intro" />
                <meta name="robots" content="index,follow" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="대전 하늘채 루시에르" />
                <meta property="og:title" content="대전 하늘채 루시에르 - 브랜드 소개" />
                <meta
                    property="og:description"
                    content="하늘채의 사용자 중심 설계와 프리미엄 주거 문화. 코오롱글로벌의 신뢰로 완성되는 도심 랜드마크 라이프."
                />
                <meta property="og:url" content="https://luciere-hanulchae.com/brand/intro" />
                <meta property="og:image" content="https://luciere-hanulchae.com/images/og/brand-intro.jpg" />
                <meta property="og:image:alt" content="대전 하늘채 루시에르 브랜드 이미지" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="대전 하늘채 루시에르 - 브랜드 소개" />
                <meta
                    name="twitter:description"
                    content="하늘채의 철학·품질·디자인 가치와 코오롱글로벌의 시공 신뢰를 소개합니다."
                />
                <meta name="twitter:image" content="https://luciere-hanulchae.com/images/og/brand-intro.jpg" />

                {/* 구조화 데이터(Organization + WebSite) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: '하늘채(Hanulchae)',
                    url: 'https://luciere-hanulchae.com',
                    logo: 'https://luciere-hanulchae.com/images/logo/hanulchae.png',
                    brand: {
                        '@type': 'Brand',
                        name: '하늘채',
                    },
                    sameAs: [],
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: '대전 하늘채 루시에르',
                    url: 'https://luciere-hanulchae.com',
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: 'https://luciere-hanulchae.com/search?q={search_term_string}',
                        'query-input': 'required name=search_term_string',
                    },
                    })}
                </script>
                </Helmet>

                <Header isChanged={isScroll} />
                <FixIcon />

                {/* 배너 타이틀: 브랜드명 유지 */}
                <Bener title="대전 하늘채 루시에르" />

                <MenuBar contents={menuContents} />

                {/* SEO: 메인 페이지 타이틀/보이스오버 텍스트 업데이트 */}
                <h1 className={styles.screenReaderOnly}>대전 하늘채 루시에르 - 브랜드 소개</h1>
                <p className={styles.screenReaderOnly}>
                하늘채는 코오롱글로벌이 선보이는 주거 브랜드로, 신뢰 가능한 시공 역량과 사용자 중심 설계,
                프리미엄 커뮤니티로 삶의 품격을 높입니다. 대전 하늘채 루시에르는 도심 핵심 입지와
                브랜드 타운 시너지를 바탕으로 새로운 주거 기준을 제시합니다.
                </p>

                {/* 히어로 카피 */}
                <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>원도심 최중심에서 누리는 일상</div>
                <div>대전 하늘채 루시에르, 새로운 주거 기준</div>
                </div>



            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="대전 하늘채 루시에르 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
