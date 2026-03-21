---
title: Obsidian 노트를 Claude AI에 연결하기
tags:
  - Obsidian
  - Claude
description: Obsidian 노트를 Claude AI에 연결하기 — obsidian-mcp-tools 설치 가이드
date: 2026-03-21
---
>[!info] 
>Claude가 내 Obsidian Vault를 직접 읽고 검색하게 만드는 방법

## 이런 분들께 도움이 됩니다

- Obsidian으로 개발 노트, 업무 메모 등을 관리하고 있는 분
- Claude에게 질문할 때마다 노트 내용을 복붙하는 게 귀찮으신 분
- MCP(Model Context Protocol)가 뭔지 궁금하신 분

---

## MCP가 뭔가요?

**MCP(Model Context Protocol)** 는 AI 앱이 외부 데이터 소스나 도구와 소통하는 방식을 표준화한 오픈 프로토콜입니다. 쉽게 말해 Claude가 내 PC의 앱이나 데이터에 "안전하게" 접근할 수 있도록 연결해주는 규격입니다.

USB-C 포트처럼 — 어떤 기기든 같은 규격으로 꽂으면 연결되는 것과 비슷한 개념입니다.

---

## obsidian-mcp-tools 란?

GitHub: https://github.com/jacksteamdev/obsidian-mcp-tools (⭐ 577)

Obsidian Vault와 Claude를 MCP로 연결해주는 오픈소스 플러그인입니다. 두 가지 컴포넌트로 구성됩니다.

- **Obsidian 플러그인** — Vault 안에 설치해서 MCP 기능을 활성화
- **로컬 MCP 서버** — 내 PC에서 실행되며 Claude ↔ Vault 사이의 보안 브릿지 역할

> Claude는 Vault 파일에 직접 접근하지 않습니다. 반드시 MCP 서버 API를 통해서만 통신하기 때문에 보안상 안전합니다.

---

## 할 수 있는 것

### 1. Vault 노트 읽기 / 참조

Claude가 내 Obsidian 노트를 읽고 답변에 활용합니다.

```
"내 Obsidian에서 Docker 관련 노트 찾아서 요약해줘"
```

### 2. 시맨틱 검색 (의미 기반 검색)

키워드가 정확히 일치하지 않아도 **의미가 비슷한 노트**를 찾아줍니다.

```
"n8n으로 슬랙 알림 만드는 법 관련 노트 있어?"
→ 'Slack webhook', '슬랙 연동' 등 다양한 표현의 노트도 찾아냄
```

### 3. Templater 템플릿 실행

Claude와 대화하면서 Obsidian Templater 템플릿을 실행할 수 있습니다.

```
"새 API 연동 노트 템플릿으로 만들어줘"
```

---

## 사전 준비

| 항목 | 필수 여부 |
|---|---|
| Obsidian v1.7.7 이상 | ✅ 필수 |
| Claude Desktop 앱 (Mac / Windows) | ✅ 필수 |
| Local REST API 플러그인 | ✅ 필수 |
| Smart Connections 플러그인 | 시맨틱 검색 사용 시 |
| Templater 플러그인 | 템플릿 실행 사용 시 |

Claude Desktop은 https://claude.ai/download 에서 받을 수 있습니다.

---

## 설치 순서

### Step 1 — Obsidian 플러그인 설치

Obsidian → Settings → Community plugins → Browse에서 아래 플러그인을 검색해 설치합니다.

**필수**
- `Local REST API`
- `MCP Tools

**권장**
- `Smart Connections` (시맨틱 검색)
- `Templater` (템플릿 실행)

### Step 2 — Local REST API 활성화

1. Settings → **Local REST API** 클릭
2. **Enable** 토글 켜기
3. API Key가 자동 생성됨 (별도 저장 불필요, 이후 자동 사용)

### Step 3 — MCP 서버 설치 (핵심 단계)

1. Settings → **MCP Tools** 클릭
2. **"Install Server"** 버튼 클릭

이 버튼 하나로 아래가 자동 처리됩니다.

- OS에 맞는 MCP 서버 바이너리 다운로드
- Claude Desktop 설정 파일(`claude_desktop_config.json`) 자동 수정
- 권한 및 경로 자동 설정

### Step 4 — Claude Desktop 재시작

Claude Desktop을 **완전히 종료 후 재시작**하면 MCP 연결이 활성화됩니다.

---

## 연결 확인

Claude Desktop에서 아래처럼 질문해보세요.

```
내 Obsidian vault에서 최근에 작성한 노트 보여줘
```

응답 중에 Vault 내용이 반영되거나, 채팅창 하단에 🔌 플러그인 연결 아이콘이 보이면 성공입니다.

---

## 서버 파일 위치

| 항목 | 경로 |
|---|---|
| 서버 바이너리 | `{vault}/.obsidian/plugins/obsidian-mcp-tools/bin/` |
| 로그 (macOS) | `~/Library/Logs/obsidian-mcp-tools` |
| 로그 (Windows) | `%APPDATA%\obsidian-mcp-tools\logs` |
| 로그 (Linux) | `~/.local/share/obsidian-mcp-tools/logs` |

뭔가 잘 안 될 때는 로그 파일을 먼저 확인하는 것이 빠릅니다.

---

## 자주 겪는 문제

### 서버가 시작되지 않아요

→ Claude Desktop이 실행 중인지 확인하세요. MCP 서버는 Claude Desktop이 켜져 있어야 동작합니다.

### Claude가 Vault에 접근 못 해요

→ Local REST API 플러그인이 **Enable** 상태인지, 기본 포트 `27123`이 방화벽에 막혀있지 않은지 확인하세요.

### Windows에서 보안 경고가 뜨는데 괜찮나요?

→ Windows Defender 경고가 뜰 수 있습니다. 이 바이너리는 GitHub Actions에서 빌드되고 **SLSA Level 3 서명**이 적용된 공식 파일이라 안전합니다. 아래 명령으로 직접 검증도 가능합니다.

```bash
# GitHub CLI 설치 후
gh attestation verify --owner jacksteamdev <바이너리 경로>
```

---

## 보안 구조 한눈에 보기

MCP 서버의 보안 구조를 간단히 정리하면 이렇습니다.

```
Claude Desktop ←──────────→ MCP 서버 (로컬) ←──────────→ Obsidian Vault
                 (암호화 통신)                (API Key 인증)
```

- Claude가 Vault 파일에 직접 접근하는 경로는 없음
- API Key는 OS의 자격증명 저장소(Keychain 등)에 보관
- 바이너리는 오픈소스 + SLSA 서명으로 무결성 검증 가능

---

## 한 가지 주의사항

현재 이 프로젝트는 **메인테이너를 모집 중**입니다. 활발하게 유지되고 있는 프로젝트이지만, 업무용 중요 시스템에 바로 도입하기 전에 이 점을 참고하시면 좋겠습니다.

---

## 마치며

Obsidian에 노트를 꾸준히 쌓아온 분이라면 이 플러그인이 생각보다 훨씬 강력하게 느껴질 겁니다. Claude가 내 지식 베이스를 직접 참조하면서 답변해주는 경험은 단순한 챗봇과는 차원이 다릅니다.

설치에 5분도 안 걸리니, 한번 시도해보세요.

---

*이 글에서 사용한 버전: obsidian-mcp-tools v0.2.27 / Claude Desktop 기준*
