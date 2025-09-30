import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
	{ label: '사업명', value: '대전 하늘채 루시에르' },
	{ label: '사업위치', value: '대전광역시 중구 선화동 95-3번지 일원' },
	{ label: '대지면적', value: '19,637.30㎡' },
	{ label: '건축면적', value: '11,851.2990㎡' },
	{ label: '연면적', value: '197,970.4850㎡' },
	{ label: '건축규모', value: '지하 5층 ~ 지상 49층, 6개 동' },
	{ label: '세대수', value: '총 998세대 (1회차 일반분양 657세대)' },
	{ label: '주차대수', value: '공동주택 1,566대 (총계 1,722대: 근린 156대 포함)' },
	{ label: '주택형', value: '전용 84·105·119㎡' },
  ];
  
  
const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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
			{/* 페이지별 메타: title/description/og/canonical 관리 */}
			<title>대전 하늘채 루시에르 - 사업안내</title>
			<meta
				name="description"
				content="대전 중구 선화동 도심 최중심, 총 998세대(전용 84·105·119㎡), 지하 5층~지상 49층 6개 동. 대전역·서대전역 접근성과 트램(2호선) 수혜, 프리미엄 커뮤니티 등 사업 개요와 입지를 확인하세요."
			/>
			<meta name="robots" content="index,follow" />
			<link rel="canonical" href="https://intercs.co.kr/BusinessGuide/intro" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="대전 하늘채 루시에르" />
			<meta property="og:title" content="대전 하늘채 루시에르 - 사업안내" />
			<meta
				property="og:description"
				content="선화동 도심 최중심 998세대 랜드마크. 전용 84·105·119㎡, 지하5~지상49층 6개 동 규모와 교통·생활 인프라, 프리미엄 커뮤니티를 한눈에."
			/>
			<meta property="og:url" content="https://intercs.co.kr/BusinessGuide/intro" />
			<meta property="og:image" content="https://intercs.co.kr/img/og/business.jpg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="대전 하늘채 루시에르 - 사업안내" />
			<meta
				name="twitter:description"
				content="대전 중구 선화동 998세대(84·105·119㎡), 지하5~지상49층 6개 동. 교통·생활·교육 인프라와 프리미엄 커뮤니티를 갖춘 사업 개요."
			/>
			<meta name="twitter:image" content="https://intercs.co.kr/img/og/business.jpg" />
			<meta name="twitter:url" content="https://intercs.co.kr/BusinessGuide/intro" />

			{/* JSON-LD (대표 이미지/브레드크럼 포함) */}
			<script type="application/ld+json">
				{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "대전 하늘채 루시에르 - 사업안내",
				url: "https://intercs.co.kr/BusinessGuide/intro",
				description:
					"대전 중구 선화동 도심 최중심, 총 998세대(전용 84·105·119㎡), 지하5~지상49층 6개 동 규모의 사업 개요와 입지 정보를 제공합니다.",
				primaryImageOfPage: {
					"@type": "ImageObject",
					contentUrl: "https://intercs.co.kr/img/og/business.jpg",
					width: 1200,
					height: 630
				},
				breadcrumb: {
					"@type": "BreadcrumbList",
					itemListElement: [
					{ "@type": "ListItem", position: 1, name: "홈", item: "https://intercs.co.kr/" },
					{ "@type": "ListItem", position: 2, name: "사업안내", item: "https://intercs.co.kr/BusinessGuide/intro" }
					]
				}
				})}
			</script>
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />

			{/* SEO: 페이지 제목/설명 (스크린리더용) */}
			<h1 className={styles.screenReaderOnly}>대전 하늘채 루시에르 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>
			대전 중구 선화동 도심 최중심에 들어서는 하늘채 루시에르의 사업 개요입니다.
			총 998세대(전용 84·105·119㎡), 지하 5층부터 지상 49층까지 6개 동 규모와
			프리미엄 커뮤니티, 교통·생활 인프라의 장점을 소개합니다.
			</p>

			{/* 히어로 카피 */}
			<div className={styles.textBox}>
			<div>원도심 최중심 프리미엄</div>
			<div>대전 하늘채 루시에르, 새로운 주거 기준</div>
			</div>


			<img className={styles.img3} src={page1} alt="대전 하늘채 루시에르-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
