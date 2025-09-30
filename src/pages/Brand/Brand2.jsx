import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			<title>대전 하늘채 루시에르 - 홍보영상</title>
			<meta
				name="description"
				content="대전 중구 선화동 도심 최중심에 들어서는 하늘채 루시에르 홍보영상. 총 998세대(전용 84·105·119㎡), 지하 5층~지상 49층 6개 동 규모와 프리미엄 커뮤니티를 영상으로 확인하세요."
			/>
			<link rel="canonical" href="https://intercs.co.kr/Brand/video" />
			<meta name="robots" content="index,follow" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

			{/* SEO: 접근성용 페이지 제목/보이스오버 텍스트 */}
			<h1 className={styles.screenReaderOnly}>대전 하늘채 루시에르 - 홍보영상</h1>
			<p className={styles.screenReaderOnly}>
			대전 중구 선화동 도심 최중심에 들어서는 하늘채 루시에르의 홍보영상입니다.
			총 998세대(전용 84·105·119㎡), 지하 5층~지상 49층 6개 동 규모와 프리미엄 커뮤니티 등
			주요 특장점을 영상으로 소개합니다.
			</p>

			{/* 히어로 카피 */}
			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
			<div>원도심 최중심에서 빛나는 프리미엄</div>
			<div>대전 하늘채 루시에르, 새로운 주거 기준을 제시합니다</div>
			</div>



			<div className={styles.videoContainer}>
				<YouTube
					videoId="eO1pOeJbbSs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
