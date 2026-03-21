> [!info]
> 한마디로 — **Claude Code를 Laravel 개발에 특화시키는 Skills 모음집**입니다.

**JP Caparas**가 만든 **Claude Code 전용 Laravel 플러그인**입니다. Claude Code의 `/plugin` 마켓플레이스를 통해 설치하며, `laravel:brainstorm`, `laravel:write-plan`, `laravel:execute-plan`, `laravel:laravel-check` 같은 Laravel 전용 커맨드들이 추가됩니다. [GitHub](https://github.com/jpcaparas/superpowers-laravel)

## 전체 52개 Skills 카테고리별 정리

### 🏗️ 아키텍처 / 설계

| Skill                                 | 내용                                                 |
| ------------------------------------- | -------------------------------------------------- |
| `laravel:controller-cleanup`          | Form Request, Action/Service, DTO로 Controller 다이어트 |
| `laravel:interfaces-and-di`           | 인터페이스 + DI로 결합도 낮추기                                |
| `laravel:ports-and-adapters`          | 헥사고널 아키텍처로 외부 시스템 연동                               |
| `laravel:strategy-pattern`            | Strategy 패턴으로 런타임 동작 선택                            |
| `laravel:template-method-and-plugins` | Template Method로 핵심 로직 안정화                         |
| `laravel:complexity-guardrails`       | 순환 복잡도 낮추기, 플래트닝 기법                                |

### ⚡ 성능

|Skill|내용|
|---|---|
|`laravel:performance-eager-loading`|N+1 방지, lazy-loading protection|
|`laravel:performance-select-columns`|필요한 컬럼만 SELECT|
|`laravel:performance-caching`|쿼리 캐싱, 태그, 락, 무효화 전략|
|`laravel:data-chunking-large-datasets`|`chunk()`, `chunkById()`, `lazy()`, `cursor()`|

### 🔒 보안 / 인증

|Skill|내용|
|---|---|
|`laravel:policies-and-authorization`|Policy/Gate, `authorize()`, `authorizeResource()`|
|`laravel:rate-limiting`|유저/라우트별 RateLimiter|
|`laravel:transactions-and-consistency`|멀티 쓰기 트랜잭션, 멱등성 패턴|

### 🧪 테스트

|Skill|내용|
|---|---|
|`laravel:tdd-with-pest`|RED-GREEN-REFACTOR, Pest/PHPUnit, 병렬 실행|
|`laravel:controller-tests`|HTTP 어서션 기반 컨트롤러 테스트|
|`laravel:e2e-playwright`|Playwright E2E, 시드/인증/Sail 통합|

### 📡 API

|Skill|내용|
|---|---|
|`laravel:api-resources-and-pagination`|API Resource, 조건부 필드, 캐시 친화적 응답|
|`laravel:api-surface-evolution`|버전 관리, 하위 호환성 유지|
|`laravel:form-requests`|유효성 검증을 Form Request로 분리|

### 🛠️ 인프라 / 운영

|Skill|내용|
|---|---|
|`laravel:queues-and-horizon`|Queue/Horizon 운영, 실패 처리|
|`laravel:task-scheduling`|`withoutOverlapping`, `onOneServer`|
|`laravel:exception-handling-and-logging`|구조화 로그, 채널 전략|
|`laravel:filesystem-uploads`|Storage, visibility, URL 생성|
|`laravel:config-env-storage`|S3/R2/MinIO 이식 가능한 스토리지 설정|

## 설치방법

```bash
# 1. jpcaparas 마켓플레이스 등록
/plugin marketplace add jpcaparas/superpowers-laravel

# 2. 플러그인 설치
/plugin install superpowers-laravel@superpowers-laravel-marketplace

# 3. 설치 확인 (Claude Code 재시작 후)
/help
# 아래 커맨드들이 보이면 성공:
# /superpowers-laravel:brainstorm
# /superpowers-laravel:write-plan
# /superpowers-laravel:execute-plan
# /superpowers-laravel:laravel-check
# /superpowers-laravel:laravel-tdd
```

### ⚠️ 주의사항 커뮤니티 플러그인은 하나만 선택하세요. 

`superpowers-laravel`과 `everything-claude-code`를 동시에 설치하면 기능이 겹쳐서 컨텍스트 윈도우만 낭비됩니다. 

**Laravel 생태계 추천 조합:** 
- superpowers-laravel ← Skills/워크플로우 
+ Context7 MCP ← 최신 Laravel 공식 문서 조회 
+ GitHub MCP ← PR/이슈 관리

## Context7 MCP 추가

```
# Claude Code 터미널 안에서
/plugin marketplace add upstash/context7
/plugin install context7@upstash
```

**사용법**
```
# 예시
"Laravel 12의 Rate Limiting 구현 방법을 알려줘. use context7"
"Livewire 3.x에서 파일 업로드 처리 방법. use context7"

# 특정 라이브러리 지정
"use library /laravel/laravel for API and docs"
```


## 확인 및 삭제

```
# 설치된 MCP 목록 확인
claude mcp list

# Claude Code 안에서도 확인 가능
/mcp

# 특정 MCP 상세 확인
claude mcp get context7

# 제거
claude mcp remove context7
```