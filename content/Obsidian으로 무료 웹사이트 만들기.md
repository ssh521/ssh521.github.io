---
author: ssh521
title: Obsidian으로 무료 웹사이트 만들기
categories:
  - Development
  - Blog
description: Obsidian과 Quartz를 활용하여 GitHub Pages에 무료로 웹사이트를 구축하고 자동 배포하는 전체 과정을 단계별로 정리한 가이드.
tags:
  - Obsidian
  - Quartz
  - GitHubPages
  - 정적사이트
  - 블로그
date: 2026-02-18
---

# Obsidian으로 무료 웹사이트 만들기

## GitHub Pages + Quartz 자동 배포 완전 가이드

GitHub 계정만 있다면 누구나 무료로 웹사이트를 만들 수 있다. 
Obsidian으로 글을 작성하고, Quartz로 정적 사이트를 생성한 뒤, GitHub Pages로 자동 배포하는 전체 과정을 정리한다.

------------------------------------------------------------------------

![[ChatGPT Image 2026년 2월 18일 오전 01_34_06.png]]

------------------------------------------------------------------------

# 1. 준비물

다음 네 가지가 필요하다.

1.  GitHub 계정
2.  Node.js (LTS 권장)
3.  Git
4.  Obsidian

GitHub Pages는 무료 호스팅을 제공한다.

------------------------------------------------------------------------

# 2. GitHub Pages용 저장소 생성

루트 도메인으로 배포하려면 저장소 이름은 반드시 다음 형식이어야 한다.

    username.github.io

예: GitHub 아이디가 `ssh521`이라면

    ssh521.github.io

### GitHub CLI로 생성

    gh repo create ssh521.github.io --public

또는 GitHub 웹사이트에서 직접 생성해도 된다.

------------------------------------------------------------------------

# 3. 저장소를 로컬에 클론

    git clone git@github.com:ssh521/ssh521.github.io.git
    cd ssh521.github.io

이 저장소가 웹사이트 프로젝트가 된다.

------------------------------------------------------------------------

# 4. Quartz 설치 (GitHub 공식 저장소 이용)

공식 저장소:

https://github.com/jackyzha0/quartz

    git clone https://github.com/jackyzha0/quartz.git quartz-template
    cp -r quartz-template/* .
    cp -r quartz-template/.* . 2>/dev/null
    npm install

프로젝트 구조 예시:

    content/
    package.json
    quartz.config.ts

------------------------------------------------------------------------

# 5. Obsidian과 content 폴더 연결

Obsidian에서 작성한 글이 자동으로 웹사이트에 반영되도록 연결한다.

    ln -s ~/Documents/GitHub/ssh521.github.io/content
		   ~/Documents/ObsidianVault/ssh521.github.io/content

이제 Obsidian에서 `content` 폴더 안에 글을 작성하면 실제 웹사이트 프로젝트에 저장된다.
이 방식은 GitHub Actions 환경과 충돌하지 않으며 가장 안정적이다.

------------------------------------------------------------------------

# 6. 로컬 빌드 테스트

    npx quartz build

빌드 후 다음 파일이 생성되어야 한다.

    public/index.html

------------------------------------------------------------------------

# 7. GitHub Pages 설정

GitHub → ssh521.github.io → Settings → Pages

-   Source: **GitHub Actions**

기본 Jekyll 빌드를 사용하면 Quartz와 충돌할 수 있다.

------------------------------------------------------------------------

# 8. GitHub Actions 자동 배포 설정

경로:

    .github/workflows/deploy.yml

``` yaml
name: Deploy Quartz site

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npx quartz build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

------------------------------------------------------------------------

# 9. 글 작성 → 자동 배포 흐름

    git add .
    git commit -m "new post"
    git push origin main

자동으로:

-   GitHub Actions 실행
-   Quartz 빌드
-   GitHub Pages 배포
-   https://ssh521.github.io/ 업데이트

------------------------------------------------------------------------

# 전체 아키텍처 요약

    Obsidian → content → Quartz → GitHub Actions → GitHub Pages

------------------------------------------------------------------------

# 마무리

이 구조는 다음과 같은 장점이 있다.

-   무료 운영
-   자동 배포
-   Markdown 기반 작성
-   Git 기반 버전 관리
-   서버 관리 불필요

GitHub 계정만 있다면 누구나 개인 웹사이트를 운영할 수 있다.
