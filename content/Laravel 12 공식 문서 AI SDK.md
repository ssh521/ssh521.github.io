---
title: Laravel 12 AI SDK 요약
description: Laravel 12 공식 문서 AI SDK
date: 2026-02-19
tags:
  - AI_SDK
  - Laravel
---
> [!INFO]
> Laravel 12에서 제공하는 AI SDK는 통합된 API를 통해 다양한 AI 기능(에이전트, 이미지, 오디오, 임베딩 등)을 Laravel 친화적인 방식으로 쉽게 구현하도록 해준다.

### 소개
Laravel AI SDK는 OpenAI, Anthropic, Gemini 등 다양한 AI 공급자와 상호작용할 수 있는 **일관된 API**를 제공한다. 이를 통해 **지능형 에이전트, 이미지 생성, 오디오 합성·전사, 벡터 임베딩 생성** 등을 Laravel 애플리케이션에서 손쉽게 구현할 수 있다.

### 설치 및 설정
AI SDK는 Composer를 통해 설치한다.

```
composer require laravel/ai
```

설치 후 `vendor:publish` 명령으로 설정 파일 및 마이그레이션을 게시하고 데이터베이스 마이그레이션을 실행한다.

환경 설정은 `config/ai.php`와 `.env`를 통해 제공자별 API 키 및 기본 모델을 지정할 수 있다. 지원되는 제공자는 OpenAI, Anthropic, Gemini, Mistral 등 다양한 서비스가 포함된다.

### 에이전트 (AI-Agents)
에이전트는 Laravel 내에서 특정 목적을 수행하는 **AI 상호작용 단위**이다. 각 에이전트 클래스는 **시스템 프롬프트, 대화 맥락, 도구, 출력 스키마**를 포함할 수 있다.

에이전트는 `php artisan make:agent` 명령으로 생성하며, `prompt()` 메서드를 통해 모델에 입력 데이터를 보내고 응답을 받는다.

### 구조화된 출력
AI SDK는 **JSON 스키마를 기반으로 하는 구조화된 출력**을 생성할 수 있어, 단순 텍스트 대신 **검증 가능한 구조화된 데이터**를 반환한다.

### 멀티모달 및 추가 기능
AI SDK는 텍스트 뿐 아니라 **이미지 생성, 음성 합성(TTS), 음성 전사(STT), 임베딩, 파일 처리**와 같은 멀티모달 기능을 지원한다.

### 스트리밍 및 고급 사용
응답을 실시간 스트리밍하거나 큐, 브로드캐스팅, 벡터 스토어, 다시 정렬(reranking) 등의 고급 기능도 포함된다.

### 제공자 지원 및 확장성
여러 AI 제공자를 설정할 수 있고, **기본 베이스 URL 변경** 또는 프록시 서비스 이용도 가능하다.


#Laravel #AI_SDK #AI_통합 #에이전트 #이미지생성 #오디오 #임베딩 #구조화된출력 #멀티모달