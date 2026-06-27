---
title: NativePHP Mobile v3 Quick Start
---


> [!info]
> Laravel 기반 앱을 그대로 활용해 모바일 앱(iOS/Android)을 빠르게 실행할 수 있는 가장 간단한 시작 방법

## 핵심 개념

- NativePHP Mobile은 Laravel 앱을 네이티브 모바일 앱으로 실행 가능하게 해주는 도구
- Swift, Kotlin 없이 PHP/Laravel만으로 모바일 앱 개발 가능
- “웹 → 모바일” 전환을 최소한의 설정으로 구현 가능 ([MCP Market](https://mcpmarket.com/ko/tools/skills/nativephp-mobile-quickstart?utm_source=chatgpt.com "NativePHP Mobile Quickstart: Claude Code Skill for Laravel"))

---

## 전체 흐름 요약

1. Jump 앱으로 빠르게 실행하거나
2. 로컬 환경(Xcode/Android Studio)에서 직접 빌드

---

## 1. 가장 빠른 시작 (Jump 방식)

### Step 1. Jump 앱 설치

- iOS 또는 Android에 Jump 앱 설치

### Step 2. Laravel 프로젝트 실행

#### 신규 프로젝트

```bash
laravel new my-app --using=nativephp/mobile-starter
cd my-app
php artisan native:jump
```

#### 기존 프로젝트

```bash
composer require nativephp/mobile
php artisan native:jump
```

### Step 3. QR 코드 스캔

- Jump 앱으로 QR 코드 스캔 후 즉시 실행

핵심 특징

- Xcode / Android Studio 없이 바로 테스트 가능
- 개발 속도 극대화

---

## 2. 정식 개발 환경 방식 (Install & Run)

### Step 1. 패키지 설치

```bash
composer require nativephp/mobile
```

### Step 2. 네이티브 설정 적용

```bash
php artisan native:install
```

### Step 3. 앱 실행

```bash
php artisan native:run
```

또는 단축 명령 사용 가능

```bash
php native run
```

핵심 특징

- 실제 앱 빌드 환경
- iOS / Android 디바이스 실행 가능

---

## 3. native 명령어 구조 이해

`native:install` 실행 시:

- native CLI 생성
- Laravel artisan 명령을 래핑
- 이후 간단한 실행 가능

예시:

```bash
php artisan native:run
→ php native run
→ ./native run
```

---

## 핵심 정리

- Jump → 빠른 테스트용
- Install & Run → 실제 앱 개발용
- Laravel 프로젝트 그대로 모바일 전환 가능

---

## 활용 관점 인사이트

> Laravel 개발자가 모바일 시장으로 확장하는 가장 빠른 진입 전략

- 기존 웹 서비스를 모바일 앱으로 확장
- MVP 앱 제작 속도 매우 빠름
- 스타트업/사내툴/프로토타입에 매우 유리

---

## 키워드

#NativePHP #Laravel #모바일앱개발 #PHP모바일 #크로스플랫폼 #Jump앱 #Laravel모바일