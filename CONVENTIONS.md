# 프로젝트 개요

이 프로젝트는 Next.js 기반의 웹 애플리케이션으로, 현대적인 UI 컴포넌트 라이브러리인 Shadcn UI와 Tailwind CSS를 사용하여 구축되었습니다. 주로 암호화폐 랭킹 보드를 포함한 다양한 인터랙티브 UI 요소를 제공하는 데 중점을 둡니다. TypeScript를 사용하여 타입 안정성과 개발 효율성을 높였습니다.

## 기술 스택

*   **프레임워크**: Next.js (React)
*   **언어**: TypeScript
*   **스타일링**:
    *   Tailwind CSS (유틸리티 우선 CSS 프레임워크)
    *   PostCSS
    *   clsx, tailwind-merge (CSS 클래스 유틸리티)
*   **UI 컴포넌트 라이브러리**: Shadcn UI (Radix UI 기반)
    *   Radix UI Primitives (AlertDialog, DropdownMenu, Menubar, NavigationMenu, RadioGroup, Resizable, ScrollArea, Switch, Tooltip 등)
*   **테마 관리**: next-themes
*   **폼 관리**: react-hook-form, Zod (유효성 검사)
*   **캐러셀**: Embla Carousel
*   **차트**: Recharts (예상)
*   **아이콘**: (별도로 언급되지 않았지만, UI 컴포넌트에서 사용될 가능성 높음)
*   **상태 관리**: React Context API (내장된 훅 사용)
*   **테스팅**: Jest
*   **패키지 매니저**: pnpm

## 프로젝트 구조

*   `app/`: Next.js 라우팅 및 페이지 구성 (루트 레이아웃, 메인 페이지)
*   `components/`: 재사용 가능한 UI 컴포넌트 모음
    *   `components/ui/`: Shadcn UI 컴포넌트 (버튼, 다이얼로그, 카드, 폼, 사이드바 등)
    *   `components/theme-provider.tsx`: 애플리케이션 테마 제공자
*   `hooks/`: 사용자 정의 React 훅 (`useIsMobile`, `useToast` 등)
*   `lib/`: 유틸리티 함수 (예: `cn` 함수)
*   `public/`: 정적 자산 (코인 로고, 플레이스홀더 이미지)
*   `styles/`: 전역 CSS
*   `crypto-ranking-board.tsx`: 암호화폐 랭킹 보드 컴포넌트

## 주요 기능 및 컴포넌트

*   **암호화폐 랭킹 보드**: `crypto-ranking-board.tsx` 파일을 통해 암호화폐의 순위, 이름, 심볼, 가격, 24시간 변동률, 시가총액, 거래량 및 로고를 표시합니다. 숫자 및 가격 형식 지정 유틸리티를 포함합니다.
*   **반응형 디자인**: `useIsMobile` 훅과 Tailwind CSS를 활용하여 다양한 화면 크기에 최적화된 사용자 경험을 제공합니다.
*   **테마 전환**: `ThemeProvider`를 통해 애플리케이션의 라이트/다크 모드를 쉽게 전환할 수 있습니다.
*   **풍부한 UI 컴포넌트**:
    *   **데이터 표시**: 테이블, 차트, 카드, 배지, 아코디언, 툴팁
    *   **내비게이션**: 사이드바, 드롭다운 메뉴, 내비게이션 메뉴, 브레드크럼, 페이지네이션
    *   **사용자 입력 및 제어**: 버튼, 입력 필드, 텍스트 영역, 라디오 그룹, 체크박스, 스위치, 슬라이더, OTP 입력
    *   **모달 및 알림**: 다이얼로그, 시트, 서랍, 알림, 토스트 메시지, 컨텍스트 메뉴, 호버 카드, 팝오버
    *   **기타**: 스켈레톤 로딩, 진행률 바, 리사이즈 가능한 패널, 스크롤 영역, 구분선
*   **전역 알림 시스템**: `useToast` 훅과 `Sonner`를 이용한 유연한 토스트 알림 기능을 제공합니다.
*   **모듈화된 구조**: 재사용성을 높이기 위해 UI 컴포넌트와 훅이 잘 분리되어 있습니다.

## 코딩 규칙

1.  모든 변수명은 알기 쉬운 영어 단어를 쓸 것.
2.  함수에는 반드시 주석으로 설명을 달 것.
3.  React 컴포넌트는 화살표 함수(Arrow Function)를 사용할 것.
