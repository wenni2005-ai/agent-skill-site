#!/usr/bin/env python3
"""Expand agent-skill-site content: skills, tutorials, news."""

import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

# ── New Skills ──────────────────────────────────────────────────────────────

NEW_SKILLS = [
    {
        "slug": "rag-pipeline",
        "title": "RAG Pipeline Builder",
        "description": "构建检索增强生成流水线，连接向量数据库与 LLM，实现知识库问答。",
        "category": "ai",
        "tags": ["rag", "vector-db", "llm", "knowledge-base", "embedding"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/rag-pipeline",
        "downloadUrl": "https://clawhub.ai/skills/rag-pipeline",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## RAG Pipeline Builder\n\n构建端到端的检索增强生成（RAG）流水线，让 AI Agent 基于你的私有知识库精准回答问题。\n\n```bash\nclawhub install rag-pipeline\n```\n\n### 核心功能\n\n- **多数据源接入**：支持 PDF、Markdown、Notion、数据库等数据源\n- **智能分块**：按语义边界切分文档，保留上下文完整性\n- **向量索引**：内置 Chroma、Pinecone、Weaviate 适配器\n- **重排序**：Cross-encoder 重排序提升检索精度\n- **流式输出**：答案实时流式返回，提升用户体验\n\n### 快速开始\n\n```json\n{\n  \"dataSource\": \"notion://my-kb\",\n  \"vectorDb\": \"chroma\",\n  \"llm\": \"gpt-4.1\",\n  \"chunkSize\": 512,\n  \"topK\": 5,\n  \"rerank\": true\n}\n```\n\n### 工作流程\n\n```\n文档加载 → 文本分块 → 向量化 → 存入索引\n                              ↓\n用户提问 → 问题向量化 → 相似检索 → 重排序 → LLM 生成答案\n```"
    },
    {
        "slug": "prompt-chain",
        "title": "Prompt Chain Orchestrator",
        "description": "编排多步骤 Prompt 链，支持条件分支、并行执行和中间结果缓存。",
        "category": "ai",
        "tags": ["prompt", "chain", "orchestration", "llm", "workflow"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/prompt-chain",
        "downloadUrl": "https://clawhub.ai/skills/prompt-chain",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Prompt Chain Orchestrator\n\n将复杂任务拆解为多步 Prompt 链，每步输出作为下一步输入，支持条件分支和并行执行。\n\n```bash\nclawhub install prompt-chain\n```\n\n### 核心功能\n\n- **DAG 编排**：定义 Prompt 之间的依赖关系图\n- **条件分支**：根据上一步输出选择不同路径\n- **并行执行**：独立步骤同时运行，缩短总耗时\n- **结果缓存**：相同输入命中缓存，节省 Token 开销\n- **错误恢复**：单步失败自动重试或降级\n\n### 链定义示例\n\n```yaml\nchain:\n  - id: research\n    prompt: \"调研 {topic} 的最新进展\"\n    output: research_result\n  - id: outline\n    prompt: \"基于 {research_result} 生成文章大纲\"\n    output: outline\n  - id: draft\n    prompt: \"根据 {outline} 撰写完整文章\"\n    output: draft\n    depends_on: [outline]\n  - id: review\n    prompt: \"审核 {draft} 的逻辑和事实准确性\"\n    output: feedback\n    depends_on: [draft]\n```"
    },
    {
        "slug": "csv-analyst",
        "title": "CSV Data Analyst",
        "description": "自动分析 CSV 数据集，生成统计摘要、趋势图表和洞察报告。",
        "category": "data",
        "tags": ["csv", "data-analysis", "statistics", "visualization", "report"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/csv-analyst",
        "downloadUrl": "https://clawhub.ai/skills/csv-analyst",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## CSV Data Analyst\n\n上传 CSV 文件，自动完成数据清洗、统计分析和可视化，生成可读的洞察报告。\n\n```bash\nclawhub install csv-analyst\n```\n\n### 核心功能\n\n- **自动探查**：识别列类型、缺失值、异常值分布\n- **统计摘要**：均值、中位数、分位数、相关系数矩阵\n- **趋势分析**：时间序列自动检测，趋势线和季节分解\n- **图表生成**：直方图、散点图、热力图、箱线图\n- **自然语言报告**：将数据特征转化为可读文字总结\n\n### 使用示例\n\n```json\n{\n  \"file\": \"sales_2026.csv\",\n  \"analysis\": {\n    \"summary\": true,\n    \"correlation\": true,\n    \"timeSeries\": {\"column\": \"date\", \"value\": \"revenue\"},\n    \"charts\": [\"histogram\", \"scatter\", \"heatmap\"]\n  },\n  \"output\": \"report.md\"\n}\n```"
    },
    {
        "slug": "api-tester",
        "title": "API Integration Tester",
        "description": "自动测试 REST/GraphQL API，验证响应结构、状态码和性能基线。",
        "category": "development",
        "tags": ["api", "testing", "rest", "graphql", "automation"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/api-tester",
        "downloadUrl": "https://clawhub.ai/skills/api-tester",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## API Integration Tester\n\n自动化 API 测试工具，验证端点响应结构、状态码、延迟和数据一致性。\n\n```bash\nclawhub install api-tester\n```\n\n### 核心功能\n\n- **Schema 校验**：JSON Schema 验证响应结构\n- **断言引擎**：支持 JSONPath 断言、数值比较、正则匹配\n- **性能基线**：P50/P95/P99 延迟监控，回归自动告警\n- **链式测试**：一个接口的输出作为下一个接口的输入\n- **报告输出**：生成 HTML/Markdown 测试报告\n\n### 测试定义\n\n```yaml\nendpoints:\n  - name: 获取用户列表\n    method: GET\n    url: /api/users\n    expect:\n      status: 200\n      schema: user-list-schema.json\n      latency_p95: <200ms\n  - name: 创建用户\n    method: POST\n    url: /api/users\n    body: {\"name\": \"test\", \"email\": \"test@example.com\"}\n    expect:\n      status: 201\n      jsonpath: \"$.id\"\n      chain: {save: user_id}\n```"
    },
    {
        "slug": "code-reviewer",
        "title": "AI Code Reviewer",
        "description": "自动审查代码变更，检测 Bug、安全漏洞、风格问题和性能瓶颈。",
        "category": "development",
        "tags": ["code-review", "security", "quality", "automation", "github"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/code-reviewer",
        "downloadUrl": "https://clawhub.ai/skills/code-reviewer",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## AI Code Reviewer\n\n基于 LLM 的智能代码审查工具，自动检测 Bug、安全漏洞、代码异味和性能问题。\n\n```bash\nclawhub install code-reviewer\n```\n\n### 核心功能\n\n- **Bug 检测**：识别空指针、越界、竞态条件等常见 Bug\n- **安全审计**：SQL 注入、XSS、硬编码密钥、不安全依赖\n- **风格检查**：命名规范、函数复杂度、代码重复\n- **性能分析**：N+1 查询、内存泄漏、不必要的同步操作\n- **PR 集成**：自动在 GitHub PR 上添加行级评论\n\n### 配置示例\n\n```json\n{\n  \"languages\": [\"typescript\", \"python\"],\n  \"rules\": {\n    \"security\": \"strict\",\n    \"complexity\": {\"maxCyclomatic\": 10},\n    \"naming\": \"camelCase\"\n  },\n  \"github\": {\n    \"autoComment\": true,\n    \"summarize\": true\n  }\n}\n```"
    },
    {
        "slug": "docker-manager",
        "title": "Docker Container Manager",
        "description": "管理 Docker 容器生命周期：部署、扩缩容、日志查看、健康检查。",
        "category": "devops",
        "tags": ["docker", "container", "devops", "deployment", "orchestration"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/docker-manager",
        "downloadUrl": "https://clawhub.ai/skills/docker-manager",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Docker Container Manager\n\n通过自然语言管理 Docker 容器：部署、扩缩容、查看日志、执行健康检查。\n\n```bash\nclawhub install docker-manager\n```\n\n### 核心功能\n\n- **自然语言操作**：「部署 nginx 并开放 80 端口」→ 自动生成 docker run 命令\n- **Compose 管理**：一键启动/停止/重启 docker-compose 服务\n- **健康监控**：容器状态巡检，异常自动告警和重启\n- **日志聚合**：实时查看多容器日志流，支持过滤和搜索\n- **资源优化**：分析容器资源使用，推荐调整建议\n\n### 使用示例\n\n```\n> 部署一个 PostgreSQL 数据库，用户名 admin，持久化数据到 /data/pg\n\n✓ 生成并执行：\ndocker run -d --name postgres \\\n  -e POSTGRES_USER=admin \\\n  -v /data/pg:/var/lib/postgresql/data \\\n  -p 5432:5432 \\\n  postgres:16\n\n> 查看所有运行中的容器状态\n\nNAME        STATUS    CPU    MEMORY    UPTIME\npostgres    running   2%     128MB     3h 12m\nnginx       running   0.1%   32MB      1d 5h\n```"
    },
    {
        "slug": "secret-scanner",
        "title": "Secret Scanner",
        "description": "扫描代码仓库中的敏感信息泄露：API Key、密码、证书私钥。",
        "category": "devops",
        "tags": ["security", "secrets", "scanning", "git", "compliance"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/secret-scanner",
        "downloadUrl": "https://clawhub.ai/skills/secret-scanner",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## Secret Scanner\n\n扫描 Git 仓库和文件系统，检测意外提交的敏感信息：API Key、密码、Token、私钥。\n\n```bash\nclawhub install secret-scanner\n```\n\n### 核心功能\n\n- **全历史扫描**：不只扫描当前代码，还扫描 Git 历史中的泄露\n- **60+ 规则**：覆盖 AWS、GCP、Azure、Stripe、GitHub、Slack 等主流服务\n- **熵值检测**：高熵字符串自动标记为可疑密钥\n- **自动修复**：检测到泄露后自动建议 git filter-branch 清除\n- **CI/CD 集成**：作为 pre-commit hook 或 CI 步骤运行\n\n### 扫描结果示例\n\n```\n🔴 CRITICAL  src/config.py:12  AWS Secret Access Key\n🟡 WARNING   .env.local:3       Database Password\n🟡 WARNING   history:abc123     Stripe API Key (deleted but in git history)\n\n建议操作：\n1. 轮换所有已泄露的密钥\n2. git filter-branch 清除历史中的密钥\n3. 添加 .gitignore 规则\n```"
    },
    {
        "slug": "notion-sync",
        "title": "Notion Database Sync",
        "description": "双向同步 Notion 数据库与本地文件，支持自动化工作流触发。",
        "category": "integration",
        "tags": ["notion", "sync", "database", "automation", "productivity"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/notion-sync",
        "downloadUrl": "https://clawhub.ai/skills/notion-sync",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Notion Database Sync\n\n双向同步 Notion 数据库与本地 Markdown/JSON 文件，支持增量同步和自动化触发。\n\n```bash\nclawhub install notion-sync\n```\n\n### 核心功能\n\n- **双向同步**：Notion ↔ 本地文件，修改任一侧自动同步到另一侧\n- **增量更新**：只同步变更的页面，避免全量拉取\n- **格式转换**：Notion Block → Markdown 自动转换，保留格式\n- **关系解析**：Notion Relation 属性解析为 wikilink\n- **Webhook 触发**：Notion 页面更新时自动触发 Agent 工作流\n\n### 配置示例\n\n```json\n{\n  \"databases\": [\n    {\n      \"id\": \"your-db-id\",\n      \"localPath\": \"./notes/projects\",\n      \"format\": \"markdown\",\n      \"sync\": \"bidirectional\"\n    }\n  ],\n  \"schedule\": \"*/10 * * * *\",\n  \"onUpdate\": \"notify\"\n}\n```"
    },
    {
        "slug": "image-batch-processor",
        "title": "Image Batch Processor",
        "description": "批量处理图片：压缩、格式转换、水印、裁剪、AI 增强。",
        "category": "creative",
        "tags": ["image", "batch", "compression", "watermark", "ai-enhancement"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/image-batch-processor",
        "downloadUrl": "https://clawhub.ai/skills/image-batch-processor",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Image Batch Processor\n\n批量图片处理工具：一键完成压缩、格式转换、加水印、裁剪和 AI 超分辨率增强。\n\n```bash\nclawhub install image-batch-processor\n```\n\n### 核心功能\n\n- **批量压缩**：智能压缩，目标体积内最大化画质\n- **格式转换**：PNG ↔ JPEG ↔ WebP ↔ AVIF 互转\n- **水印**：文字/图片水印，支持位置、透明度、平铺\n- **智能裁剪**：AI 主体检测 + 居中裁剪\n- **AI 增强**：超分辨率放大、去噪、色彩校正\n\n### Pipeline 示例\n\n```json\n{\n  \"input\": \"./raw-photos/\",\n  \"output\": \"./optimized/\",\n  \"pipeline\": [\n    {\"action\": \"resize\", \"width\": 1920, \"height\": 1080, \"mode\": \"cover\"},\n    {\"action\": \"watermark\", \"text\": \"© 2026\", \"position\": \"bottom-right\"},\n    {\"action\": \"compress\", \"targetSize\": \"200KB\"},\n    {\"action\": \"convert\", \"format\": \"webp\"}\n  ]\n}\n```"
    },
    {
        "slug": "log-analyzer",
        "title": "Log Analyzer",
        "description": "智能分析应用日志，自动发现异常模式、错误聚类和根因线索。",
        "category": "devops",
        "tags": ["logs", "analysis", "monitoring", "debugging", "devops"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/log-analyzer",
        "downloadUrl": "https://clawhub.ai/skills/log-analyzer",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Log Analyzer\n\nAI 驱动的日志分析工具，自动从海量日志中提取异常模式、错误聚类和根因线索。\n\n```bash\nclawhub install log-analyzer\n```\n\n### 核心功能\n\n- **异常检测**：基于统计和模式识别自动发现异常日志\n- **错误聚类**：相似错误自动归组，避免重复分析\n- **时间线分析**：追踪错误从首次出现到爆发的演变过程\n- **根因定位**：关联错误前后的上下文日志，推断根本原因\n- **自然语言总结**：将技术日志翻译成可理解的诊断报告\n\n### 分析示例\n\n```\n> 分析 /var/log/app/error.log 最近 24 小时\n\n📊 分析结果：\n- 总日志行数：128,456\n- 错误率：2.3%（2,954 行）\n- 聚类为 5 个错误模式\n\n🔴 Pattern 1: 数据库连接超时（1,842 次）\n   首次出现：04:23:15\n   爆发时间：06:00-07:30\n   可能根因：数据库连接池耗尽，建议检查 max_connections\n\n🟡 Pattern 2: API 限流 429（892 次）\n   触发来源：上游服务 xai-api\n   建议：增加重试间隔或申请更高配额\n```"
    },
    {
        "slug": "social-media-poster",
        "title": "Social Media Multi-Poster",
        "description": "一键发布到多个社交平台：Twitter/X、微博、小红书、LinkedIn。",
        "category": "creative",
        "tags": ["social-media", "twitter", "weibo", "xiaohongshu", "posting"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/social-media-poster",
        "downloadUrl": "https://clawhub.ai/skills/social-media-poster",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Social Media Multi-Poster\n\n一个内容，多平台分发。自动适配各平台字数限制、图片尺寸和话题标签格式。\n\n```bash\nclawhub install social-media-poster\n```\n\n### 核心功能\n\n- **多平台分发**：Twitter/X、微博、小红书、LinkedIn、Threads\n- **智能适配**：自动裁剪图片、截断文字、转换话题格式\n- **定时发布**：设置发布时间，定时自动执行\n- **数据分析**：发布后追踪各平台互动数据\n- **A/B 测试**：同一内容多版本分发，对比效果\n\n### 使用示例\n\n```json\n{\n  \"content\": \"OpenClaw 2026.4 发布了！新增 Agent 记忆系统、多模型调度和 TTS 语音 🔥\",\n  \"platforms\": [\"twitter\", \"weibo\", \"linkedin\"],\n  \"images\": [\"cover.png\"],\n  \"schedule\": \"2026-04-26T09:00:00+08:00\",\n  \"tags\": {\"twitter\": [\"#AI\", \"#OpenClaw\"], \"weibo\": [\"#AI开发\", \"#智能体\"]}\n}\n```"
    },
    {
        "slug": "vector-db-query",
        "title": "Vector DB Query Tool",
        "description": "统一接口查询多种向量数据库：Chroma、Pinecone、Weaviate、Milvus。",
        "category": "ai",
        "tags": ["vector-database", "embedding", "similarity-search", "chroma", "pinecone"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/vector-db-query",
        "downloadUrl": "https://clawhub.ai/skills/vector-db-query",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Vector DB Query Tool\n\n统一查询接口，一套代码适配 Chroma、Pinecone、Weaviate、Milvus、Qdrant 等主流向量数据库。\n\n```bash\nclawhub install vector-db-query\n```\n\n### 核心功能\n\n- **统一 API**：相同的查询接口适配 5+ 种向量数据库\n- **混合检索**：向量相似 + 关键词过滤组合查询\n- **批量操作**：批量插入、批量删除、批量更新\n- **索引管理**：创建/删除/重建索引，调整参数\n- **迁移工具**：不同向量数据库之间的数据迁移\n\n### 查询示例\n\n```json\n{\n  \"db\": \"chroma\",\n  \"collection\": \"documents\",\n  \"query\": \"如何部署 Kubernetes 集群\",\n  \"topK\": 10,\n  \"filter\": {\"category\": \"devops\", \"year\": {\"$gte\": 2025}},\n  \"include\": [\"document\", \"metadata\", \"distance\"]\n}\n```"
    },
    {
        "slug": "dependency-updater",
        "title": "Dependency Auto-Updater",
        "description": "自动检测并更新项目依赖，生成 Changelog 和兼容性报告。",
        "category": "devops",
        "tags": ["dependencies", "npm", "pip", "automation", "security"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/dependency-updater",
        "downloadUrl": "https://clawhub.ai/skills/dependency-updater",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Dependency Auto-Updater\n\n自动检测过时依赖、安全漏洞，一键更新并生成 Changelog 和兼容性报告。\n\n```bash\nclawhub install dependency-updater\n```\n\n### 核心功能\n\n- **多包管理器**：npm、pip、cargo、go mod\n- **安全优先**：优先标记和更新有 CVE 漏洞的依赖\n- **兼容性检查**：分析 breaking changes，生成迁移指南\n- **自动 PR**：创建更新分支，提交 PR 并附带 Changelog\n- **定时巡检**：每日/每周自动检查，有更新时通知\n\n### 巡检报告示例\n\n```\n📦 依赖巡检报告 — 2026-04-25\n\n🔴 安全更新（3）：\n  - axios 1.6.0 → 1.7.2  CVE-2026-1234 CSRF 漏洞\n  - lodash 4.17.20 → 4.17.21  原型污染\n  - express 4.18.2 → 4.19.0  HTTP 响应拆分\n\n🟡 功能更新（5）：\n  - next 16.0.0 → 16.1.1  Turbopack 稳定\n  - tailwindcss 4.0.0 → 4.1.0  新增容器查询\n\n✅ 已创建 PR #42: security-patch-2026-04-25\n```"
    },
    {
        "slug": "changelog-generator",
        "title": "Changelog Generator",
        "description": "从 Git 提交历史自动生成结构化 Changelog，支持 Conventional Commits。",
        "category": "development",
        "tags": ["changelog", "git", "conventional-commits", "automation", "release"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/changelog-generator",
        "downloadUrl": "https://clawhub.ai/skills/changelog-generator",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Changelog Generator\n\n从 Git 提交历史自动生成结构化 Changelog，遵循 Conventional Commits 规范。\n\n```bash\nclawhub install changelog-generator\n```\n\n### 核心功能\n\n- **自动分类**：feat → 新功能、fix → 修复、perf → 性能优化\n- **Breaking Changes**：自动提取 `BREAKING CHANGE` 标注\n- **贡献者统计**：列出每个版本的贡献者\n- **关联 Issue**：自动关联 `#123` 格式的 Issue\n- **多格式输出**：Markdown、JSON、HTML\n\n### 生成示例\n\n```markdown\n# v2.1.0 (2026-04-25)\n\n## ✨ 新功能\n- 支持 RAG Pipeline Builder (#142) @zhangsan\n- 新增 Docker Manager 技能 (#145) @lisi\n\n## 🐛 修复\n- 修复向量检索精度问题 (#143) @wangwu\n\n## ⚠️ Breaking Changes\n- `vectorDb` 配置格式变更，请参考迁移指南 (#140)\n```"
    },
    {
        "slug": "uptime-monitor",
        "title": "Uptime Monitor",
        "description": "监控网站和服务可用性，支持多区域探测、告警和状态页面。",
        "category": "devops",
        "tags": ["monitoring", "uptime", "alerting", "status-page", "health-check"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/uptime-monitor",
        "downloadUrl": "https://clawhub.ai/skills/uptime-monitor",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Uptime Monitor\n\n多区域网站可用性监控，自动告警和状态页面生成。\n\n```bash\nclawhub install uptime-monitor\n```\n\n### 核心功能\n\n- **HTTP/HTTPS 监控**：检测状态码、响应时间、SSL 证书\n- **多区域探测**：从不同地理位置同时检测\n- **告警通知**：邮件、Slack、Discord、Webhook\n- **状态页面**：自动生成公开的状态页\n- **SLA 计算**：自动计算月度可用性百分比\n\n### 配置示例\n\n```json\n{\n  \"targets\": [\n    {\"url\": \"https://agentskil.qzz.io\", \"interval\": 60},\n    {\"url\": \"https://api.example.com/health\", \"interval\": 30}\n  ],\n  \"regions\": [\"us-east\", \"eu-west\", \"asia-east\"],\n  \"alerts\": {\n    \"channel\": \"discord\",\n    \"onDown\": true,\n    \"onRecovery\": true,\n    \"onSslExpiry\": 7\n  }\n}\n```"
    },
    {
        "slug": "backup-scheduler",
        "title": "Backup Scheduler",
        "description": "定时备份数据库和文件，支持增量备份、加密和云端存储。",
        "category": "devops",
        "tags": ["backup", "database", "encryption", "cloud-storage", "scheduling"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/backup-scheduler",
        "downloadUrl": "https://clawhub.ai/skills/backup-scheduler",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Backup Scheduler\n\n定时备份 PostgreSQL、MySQL、MongoDB 和文件目录，支持增量备份、加密和云端上传。\n\n```bash\nclawhub install backup-scheduler\n```\n\n### 核心功能\n\n- **多数据库支持**：PostgreSQL、MySQL、MongoDB、Redis\n- **增量备份**：只备份变更部分，节省存储和时间\n- **AES-256 加密**：备份文件自动加密，安全存储\n- **云端上传**：S3、GCS、Azure Blob、Backblaze B2\n- **保留策略**：7 天日备 + 4 周周备 + 12 月月备\n- **恢复测试**：定期自动验证备份可恢复性\n\n### 配置示例\n\n```json\n{\n  \"sources\": [\n    {\"type\": \"postgresql\", \"host\": \"db.example.com\", \"database\": \"production\"},\n    {\"type\": \"directory\", \"path\": \"/data/uploads\"}\n  ],\n  \"schedule\": \"0 2 * * *\",\n  \"encryption\": {\"enabled\": true, \"key\": \"vault:backup-key\"},\n  \"storage\": {\"type\": \"s3\", \"bucket\": \"my-backups\"},\n  \"retention\": {\"daily\": 7, \"weekly\": 4, \"monthly\": 12}\n}\n```"
    },
    {
        "slug": "linear-connector",
        "title": "Linear Project Connector",
        "description": "连接 Linear 项目管理，同步任务状态、自动创建 Issue 和更新进度。",
        "category": "integration",
        "tags": ["linear", "project-management", "issue-tracking", "automation"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/linear-connector",
        "downloadUrl": "https://clawhub.ai/skills/linear-connector",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Linear Project Connector\n\n与 Linear 项目管理系统深度集成，自动同步任务、更新状态和生成报告。\n\n```bash\nclawhub install linear-connector\n```\n\n### 核心功能\n\n- **双向同步**：Agent 操作 ↔ Linear 状态自动同步\n- **自动创建 Issue**：从对话中识别待办事项，自动创建 Linear Issue\n- **进度报告**：每日/每周自动生成项目进度摘要\n- **智能分配**：根据团队成员负载和专长推荐任务分配\n- **Webhook 联动**：Issue 状态变更触发 Agent 工作流\n\n### 使用示例\n\n```json\n{\n  \"team\": \"engineering\",\n  \"project\": \"agent-platform\",\n  \"autoCreate\": true,\n  \"labels\": [\"bug\", \"feature\", \"tech-debt\"],\n  \"report\": {\n    \"schedule\": \"0 9 * * 1-5\",\n    \"channel\": \"slack\",\n    \"include\": [\"blockers\", \"velocity\", \"stale-issues\"]\n  }\n}\n```"
    },
    {
        "slug": "discord-bot-builder",
        "title": "Discord Bot Builder",
        "description": "快速搭建 Discord 机器人：命令注册、事件处理、Slash 命令和按钮交互。",
        "category": "integration",
        "tags": ["discord", "bot", "slash-commands", "interaction", "gaming"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/discord-bot-builder",
        "downloadUrl": "https://clawhub.ai/skills/discord-bot-builder",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Discord Bot Builder\n\n快速搭建功能完整的 Discord 机器人，支持 Slash 命令、按钮交互、模态框和自动化。\n\n```bash\nclawhub install discord-bot-builder\n```\n\n### 核心功能\n\n- **Slash 命令**：自动注册到 Discord，支持参数和选项\n- **按钮交互**：可点击按钮触发 Agent 动作\n- **事件监听**：消息、加入/离开、反应等事件\n- **定时任务**：在频道中定时发送消息或执行操作\n- **权限控制**：基于角色和频道的访问控制\n\n### 命令定义示例\n\n```json\n{\n  \"commands\": [\n    {\n      \"name\": \"analyze\",\n      \"description\": \"分析一个 GitHub 仓库\",\n      \"options\": [{\"name\": \"repo\", \"type\": \"string\", \"required\": true}],\n      \"handler\": \"github-analyzer\"\n    },\n    {\n      \"name\": \"deploy\",\n      \"description\": \"部署项目到 Vercel\",\n      \"options\": [{\"name\": \"project\", \"type\": \"string\"}],\n      \"handler\": \"vercel-deployer\",\n      \"permissions\": [\"admin\"]\n    }\n  ]\n}\n```"
    },
    {
        "slug": "sql-optimizer",
        "title": "SQL Query Optimizer",
        "description": "分析慢查询，推荐索引优化和查询重写方案，提升数据库性能。",
        "category": "data",
        "tags": ["sql", "database", "optimization", "indexing", "performance"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/sql-optimizer",
        "downloadUrl": "https://clawhub.ai/skills/sql-optimizer",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## SQL Query Optimizer\n\nAI 驱动的 SQL 优化工具，分析执行计划、推荐索引和查询重写方案。\n\n```bash\nclawhub install sql-optimizer\n```\n\n### 核心功能\n\n- **执行计划分析**：解析 EXPLAIN 输出，标注性能瓶颈\n- **索引推荐**：基于查询模式推荐最优索引组合\n- **查询重写**：自动将低效写法转换为等价高效写法\n- **N+1 检测**：识别 ORM 生成的 N+1 查询模式\n- **多数据库支持**：PostgreSQL、MySQL、SQLite\n\n### 优化示例\n\n```\n原查询（耗时 2.3s）：\nSELECT * FROM orders WHERE user_id IN (SELECT id FROM users WHERE region = 'CN');\n\n优化建议：\n1. 使用 JOIN 替代子查询：\n   SELECT o.* FROM orders o JOIN users u ON o.user_id = u.id WHERE u.region = 'CN';\n2. 添加复合索引：\n   CREATE INDEX idx_users_region_id ON users(region, id);\n3. 预计优化后耗时：<50ms\n```"
    },
    {
        "slug": "email-auto-handler",
        "title": "Email Auto-Handler",
        "description": "自动分类、摘要和回复邮件，支持规则引擎和模板生成。",
        "category": "productivity",
        "tags": ["email", "automation", "classification", "reply", "gmail"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/email-auto-handler",
        "downloadUrl": "https://clawhub.ai/skills/email-auto-handler",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Email Auto-Handler\n\nAI 邮件助手：自动分类、生成摘要、草拟回复，让你只处理真正重要的邮件。\n\n```bash\nclawhub install email-auto-handler\n```\n\n### 核心功能\n\n- **智能分类**：自动将邮件归类为客户、通知、个人、垃圾邮件\n- **摘要生成**：长邮件自动提炼为 3 句话摘要\n- **草拟回复**：根据上下文生成回复草稿，确认后发送\n- **规则引擎**：自定义规则自动执行（转发、归档、标记）\n- **跟进提醒**：标记需要跟进的邮件，定时提醒\n\n### 分类规则示例\n\n```json\n{\n  \"rules\": [\n    {\"from\": \"*@client.com\", \"action\": \"label:客户\", \"draft_reply\": true},\n    {\"subject\": \"*invoice*\", \"action\": \"label:财务,forward:finance@team.com\"},\n    {\"from\": \"noreply@*\", \"action\": \"label:通知,archive\"},\n    {\"priority\": \"high\", \"action\": \"pin,notify\"}\n  ]\n}\n```"
    },
    {
        "slug": "chart-generator",
        "title": "Chart Generator",
        "description": "从数据生成专业图表：折线图、柱状图、饼图、桑基图等，支持 SVG/PNG 输出。",
        "category": "data",
        "tags": ["chart", "visualization", "svg", "data", "report"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/chart-generator",
        "downloadUrl": "https://clawhub.ai/skills/chart-generator",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Chart Generator\n\n用自然语言描述图表需求，自动生成专业级可视化图表。\n\n```bash\nclawhub install chart-generator\n```\n\n### 核心功能\n\n- **自然语言输入**：「画一个过去 7 天的访问量折线图」→ 直接出图\n- **10+ 图表类型**：折线、柱状、饼图、雷达、桑基、旭日图等\n- **多格式输出**：SVG、PNG、PDF、Mermaid 代码\n- **主题适配**：亮色/暗色主题，品牌色自定义\n- **交互式**：生成可交互的 HTML 图表\n\n### 使用示例\n\n```json\n{\n  \"description\": \"对比 Q1-Q4 各产品线收入\",\n  \"data\": {\n    \"labels\": [\"Q1\", \"Q2\", \"Q3\", \"Q4\"],\n    \"datasets\": [\n      {\"name\": \"SaaS\", \"values\": [120, 150, 180, 210]},\n      {\"name\": \"API\", \"values\": [80, 95, 110, 130]}\n    ]\n  },\n  \"type\": \"bar\",\n  \"theme\": \"dark\",\n  \"output\": \"svg\"\n}\n```"
    },
    {
        "slug": "ssl-monitor",
        "title": "SSL Certificate Monitor",
        "description": "监控 SSL 证书有效期和配置，到期前自动提醒，检测安全配置漏洞。",
        "category": "devops",
        "tags": ["ssl", "certificate", "monitoring", "security", "tls"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/ssl-monitor",
        "downloadUrl": "https://clawhub.ai/skills/ssl-monitor",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## SSL Certificate Monitor\n\n持续监控 SSL/TLS 证书状态，到期前自动告警，检测安全配置问题。\n\n```bash\nclawhub install ssl-monitor\n```\n\n### 核心功能\n\n- **到期监控**：提前 30/14/7/1 天分级告警\n- **配置审计**：检测 TLS 版本、密码套件、HSTS 等\n- **多域名管理**：批量管理数百个域名证书\n- **自动续期**：集成 Let's Encrypt ACME 自动续期\n- **合规报告**：生成 SSL Labs 评级和合规报告\n\n### 监控结果示例\n\n```\n域名                  到期日     剩余  评级  状态\nagentskil.qzz.io     2026-07-09  75天  A    ✅ 正常\napi.example.com      2026-05-01   6天  B    🔴 即将过期\nold.example.com      2026-03-01  -55天  F   ❌ 已过期\n\n⚠️ 安全配置问题：\n- old.example.com: 仍支持 TLS 1.0，建议禁用\n- api.example.com: 未启用 HSTS\n```"
    },
    {
        "slug": "github-event-driver",
        "title": "GitHub Event Driver",
        "description": "监听 GitHub 事件（PR/Issue/Push），自动触发 Agent 工作流。",
        "category": "integration",
        "tags": ["github", "webhook", "event-driven", "automation", "ci-cd"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/github-event-driver",
        "downloadUrl": "https://clawhub.ai/skills/github-event-driver",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## GitHub Event Driver\n\n监听 GitHub Webhook 事件，自动触发 Agent 工作流：PR 审查、Issue 分配、自动部署。\n\n```bash\nclawhub install github-event-driver\n```\n\n### 核心功能\n\n- **事件监听**：push、PR、Issue、Review、Release 等全事件\n- **条件路由**：根据分支、标签、文件路径等条件触发不同工作流\n- **自动审查**：PR 提交后自动运行代码审查\n- **Issue 分配**：新 Issue 自动分类、打标签、分配负责人\n- **部署联动**：合并到 main 后自动触发部署\n\n### 路由配置\n\n```json\n{\n  \"routes\": [\n    {\n      \"event\": \"pull_request\",\n      \"action\": \"opened\",\n      \"filter\": {\"base\": \"main\"},\n      \"workflow\": \"code-reviewer\"\n    },\n    {\n      \"event\": \"issues\",\n      \"action\": \"opened\",\n      \"filter\": {\"labels\": [\"bug\"]},\n      \"workflow\": \"bug-triage\"\n    },\n    {\n      \"event\": \"push\",\n      \"filter\": {\"ref\": \"refs/heads/main\"},\n      \"workflow\": \"deploy-production\"\n    }\n  ]\n}\n```"
    },
    {
        "slug": "video-thumbnail-generator",
        "title": "Video Thumbnail Generator",
        "description": "自动从视频中提取关键帧，生成高质量缩略图和预览图集。",
        "category": "creative",
        "tags": ["video", "thumbnail", "ffmpeg", "keyframe", "media"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/video-thumbnail-generator",
        "downloadUrl": "https://clawhub.ai/skills/video-thumbnail-generator",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Video Thumbnail Generator\n\n自动从视频中提取最佳关键帧，生成缩略图、预览图集和 GIF 预览。\n\n```bash\nclawhub install video-thumbnail-generator\n```\n\n### 核心功能\n\n- **AI 选帧**：基于画面质量、人脸检测、场景变化选择最佳帧\n- **多尺寸输出**：同时生成 1920x1080、640x360、128x72 等尺寸\n- **预览图集**：生成视频时间线预览网格图\n- **GIF 预览**：截取精彩片段生成 GIF 动图\n- **批量处理**：一次处理整个目录的视频\n\n### 使用示例\n\n```json\n{\n  \"input\": \"video.mp4\",\n  \"output\": {\n    \"thumbnail\": {\"width\": 1280, \"count\": 1, \"aiSelect\": true},\n    \"sprite\": {\"interval\": 10, \"columns\": 5},\n    \"gif\": {\"startTime\": 5, \"duration\": 3, \"fps\": 10, \"width\": 320}\n  }\n}\n```"
    },
    {
        "slug": "calendar-automator",
        "title": "Calendar Automator",
        "description": "智能日历管理：自动安排会议、检测冲突、生成日程摘要。",
        "category": "productivity",
        "tags": ["calendar", "google-calendar", "scheduling", "conflict-detection", "automation"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/calendar-automator",
        "downloadUrl": "https://clawhub.ai/skills/calendar-automator",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Calendar Automator\n\nAI 日历助手：自动安排会议、检测时间冲突、生成每日日程摘要。\n\n```bash\nclawhub install calendar-automator\n```\n\n### 核心功能\n\n- **智能排期**：根据优先级和时长自动安排会议时间\n- **冲突检测**：发现重叠日程并提供调整建议\n- **日程摘要**：每日早晨发送当天日程概览\n- **邮件联动**：邮件中识别会议邀请，自动添加到日历\n- **时区处理**：跨时区会议自动换算和提示\n\n### 自动排期示例\n\n```\n> 帮我安排下周一的 3 个会议：产品评审 1h、技术方案 30min、1v1 45min\n\n✅ 已安排：\n- 09:00-10:00  产品评审（大会议室）\n- 10:30-11:00  技术方案（线上）\n- 14:00-14:45  1v1（小会议室）\n\n⚠️ 注意：11:00-12:00 已有「客户演示」，请确认技术方案不会超时\n```"
    },
    {
        "slug": "data-cleaning-toolkit",
        "title": "Data Cleaning Toolkit",
        "description": "数据清洗工具包：去重、补缺、标准化、异常值处理。",
        "category": "data",
        "tags": ["data-cleaning", "deduplication", "normalization", "etl", "quality"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/data-cleaning-toolkit",
        "downloadUrl": "https://clawhub.ai/skills/data-cleaning-toolkit",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Data Cleaning Toolkit\n\n数据清洗一站式工具：去重、补缺、标准化、异常值检测和处理。\n\n```bash\nclawhub install data-cleaning-toolkit\n```\n\n### 核心功能\n\n- **智能去重**：精确匹配 + 模糊匹配（Levenshtein 距离）\n- **缺失值补全**：均值/中位数/插值/LLM 生成\n- **格式标准化**：日期、电话、地址、人名统一格式\n- **异常值检测**：IQR、Z-score、孤立森林\n- **数据画像**：生成数据质量报告和修复建议\n\n### Pipeline 示例\n\n```json\n{\n  \"input\": \"messy_data.csv\",\n  \"steps\": [\n    {\"action\": \"dedup\", \"mode\": \"fuzzy\", \"threshold\": 0.9},\n    {\"action\": \"fill_missing\", \"columns\": {\"age\": \"median\", \"name\": \"llm-guess\"}},\n    {\"action\": \"normalize\", \"rules\": {\n      \"date\": \"YYYY-MM-DD\",\n      \"phone\": \"+86 XXX XXXX XXXX\"\n    }},\n    {\"action\": \"outlier\", \"method\": \"iqr\", \"handle\": \"clip\"}\n  ],\n  \"output\": \"clean_data.csv\"\n}\n```"
    },
    {
        "slug": "slack-workflow-builder",
        "title": "Slack Workflow Builder",
        "description": "构建 Slack 自动化工作流：消息路由、审批流程、状态汇报。",
        "category": "integration",
        "tags": ["slack", "workflow", "automation", "messaging", "approval"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/slack-workflow-builder",
        "downloadUrl": "https://clawhub.ai/skills/slack-workflow-builder",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Slack Workflow Builder\n\n在 Slack 中构建自动化工作流：消息路由、审批流程、定时汇报和事件触发。\n\n```bash\nclawhub install slack-workflow-builder\n```\n\n### 核心功能\n\n- **消息路由**：根据关键词/频道自动转发到正确团队\n- **审批流程**：Slash 命令发起审批，按钮确认/拒绝\n- **定时汇报**：每日/每周自动发送团队状态报告\n- **事件桥接**：GitHub/Jira/Linear 事件推送到 Slack\n- **交互组件**：按钮、下拉菜单、日期选择器\n\n### 工作流示例\n\n```json\n{\n  \"name\": \"部署审批\",\n  \"trigger\": {\"command\": \"/deploy\", \"channel\": \"#ops\"},\n  \"steps\": [\n    {\"type\": \"message\", \"text\": \"{{user}} 请求部署 {{project}} 到 {{env}}\"},\n    {\"type\": \"buttons\", \"options\": [\"✅ 批准\", \"❌ 拒绝\"], \"approvers\": [\"@lead\"]},\n    {\"type\": \"condition\", \"if\": \"approved\", \"then\": \"trigger-deploy\", \"else\": \"notify-rejection\"}\n  ]\n}\n```"
    },
    {
        "slug": "fine-tuning-assistant",
        "title": "Fine-Tuning Assistant",
        "description": "辅助模型微调全流程：数据准备、训练配置、效果评估和部署。",
        "category": "ai",
        "tags": ["fine-tuning", "model-training", "evaluation", "deployment", "mlops"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/fine-tuning-assistant",
        "downloadUrl": "https://clawhub.ai/skills/fine-tuning-assistant",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Fine-Tuning Assistant\n\n端到端模型微调助手：从数据准备到部署上线的全流程自动化。\n\n```bash\nclawhub install fine-tuning-assistant\n```\n\n### 核心功能\n\n- **数据准备**：格式转换、质量检查、自动增强\n- **训练配置**：推荐超参数，生成训练脚本\n- **效果评估**：自动评测 BLEU/ROUGE/准确率等指标\n- **A/B 测试**：新旧模型对比，统计显著性检验\n- **一键部署**：训练完成自动部署到 API 端点\n\n### 微调流程\n\n```\n原始数据 → 格式转换 → 数据清洗 → 训练/验证集分割\n    ↓\n超参数推荐 → 训练启动 → 实时监控 → 检查点保存\n    ↓\n自动评估 → 与基线对比 → 通过 → 部署到推理端点\n```\n\n### 配置示例\n\n```json\n{\n  \"model\": \"gpt-4.1-mini\",\n  \"data\": \"training_data.jsonl\",\n  \"hyperparams\": {\n    \"epochs\": 3,\n    \"batchSize\": 16,\n    \"learningRate\": 0.0001\n  },\n  \"eval\": {\"metrics\": [\"accuracy\", \"bleu\"], \"baseline\": \"gpt-4.1-mini-base\"}\n}\n```"
    },
    {
        "slug": "agent-memory-system",
        "title": "Agent Memory System",
        "description": "为 AI Agent 构建分层记忆系统：短期工作记忆、长期知识库和遗忘曲线。",
        "category": "agent-framework",
        "tags": ["agent", "memory", "knowledge", "forgetting-curve", "persistence"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/agent-memory-system",
        "downloadUrl": "https://clawhub.ai/skills/agent-memory-system",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## Agent Memory System\n\n为 AI Agent 构建三层记忆架构：热记忆（活跃任务）、温记忆（稳定偏好）、冷记忆（历史归档），带遗忘曲线自动衰减。\n\n```bash\nclawhub install agent-memory-system\n```\n\n### 核心功能\n\n- **三层记忆**：HOT（当前活跃）→ WARM（稳定配置）→ COLD（历史归档）\n- **遗忘曲线**：自动衰减低访问频率的记忆\n- **永久标记**：重要决策标记 `[permanent]`，永不衰减\n- **访问追踪**：记录每次记忆访问，更新重要度评分\n- **自动归档**：7 天以上日志自动归档，30 天后压缩摘要\n\n### 评分公式\n\n```\nscore = similarity × exp(-0.05 × days) + 0.2 × ln(1 + access_count)\n\nscore > 0.7 → HOT（每次加载）\n0.3 ~ 0.7 → WARM（稳定偏好）\n≤ 0.3 → COLD（归档存储）\n```\n\n### 使用示例\n\n```json\n{\n  \"layers\": {\n    \"hot\": {\"file\": \"memory/hot/HOT_MEMORY.md\", \"maxAge\": 3},\n    \"warm\": {\"file\": \"memory/warm/WARM_MEMORY.md\"},\n    \"cold\": {\"file\": \"MEMORY.md\"}\n  },\n  \"decay\": {\"lambda\": 0.05, \"alpha\": 0.2},\n  \"archive\": {\"dir\": \"memory/archive/\", \"maxAge\": 7}\n}\n```"
    },
    {
        "slug": "multilingual-translator",
        "title": "Multilingual Content Translator",
        "description": "高质量多语言翻译，保持原文风格，支持术语表和上下文适配。",
        "category": "productivity",
        "tags": ["translation", "i18n", "localization", "multilingual", "terminology"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/multilingual-translator",
        "downloadUrl": "https://clawhub.ai/skills/multilingual-translator",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Multilingual Content Translator\n\nAI 驱动的高质量翻译工具，保持原文语气和风格，支持术语表和上下文适配。\n\n```bash\nclawhub install multilingual-translator\n```\n\n### 核心功能\n\n- **风格保持**：技术文档、营销文案、学术论文等不同风格适配\n- **术语表**：自定义专业术语的固定译法\n- **上下文感知**：根据上下文选择正确含义\n- **批量翻译**：整个文档或目录一键翻译\n- **双语对照**：输出原文+译文对照格式\n\n### 配置示例\n\n```json\n{\n  \"source\": \"zh-CN\",\n  \"target\": \"en-US\",\n  \"style\": \"technical\",\n  \"glossary\": {\n    \"智能体\": \"Agent\",\n    \"提示词\": \"Prompt\",\n    \"微调\": \"Fine-tuning\",\n    \"向量数据库\": \"Vector Database\"\n  },\n  \"output\": \"bilingual\"\n}\n```"
    },
    {
        "slug": "seo-auditor",
        "title": "SEO Auditor",
        "description": "全面 SEO 审计：技术 SEO、内容质量、外链分析和优化建议。",
        "category": "productivity",
        "tags": ["seo", "audit", "optimization", "search-engine", "content-quality"],
        "version": "1.0.0",
        "author": "AgentSkill Hub",
        "githubUrl": "https://clawhub.ai/skills/seo-auditor",
        "downloadUrl": "https://clawhub.ai/skills/seo-auditor",
        "platform": ["openclaw"],
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## SEO Auditor\n\n全面 SEO 审计工具，覆盖技术 SEO、内容质量、外链和搜索表现。\n\n```bash\nclawhub install seo-auditor\n```\n\n### 核心功能\n\n- **技术审计**：Core Web Vitals、移动适配、结构化数据、Sitemap\n- **内容分析**：关键词密度、标题层级、内链结构、内容重复\n- **外链分析**：引用域名、锚文本分布、有毒链接检测\n- **竞品对比**：与竞品的 SEO 指标对比\n- **优化建议**：按优先级排序的可执行优化清单\n\n### 审计报告摘要\n\n```\n🎯 总分：72/100\n\n🔴 高优先级（5项）：\n- LCP 4.2s → 优化图片，目标 <2.5s\n- 缺少 H1 标签（3 个页面）\n- robots.txt 屏蔽了 /api/ 目录\n\n🟡 中优先级（8项）：\n- 12 个页面缺少 meta description\n- 内链密度偏低（平均 3 个内链/页）\n\n🟢 低优先级（4项）：\n- Open Graph 图片尺寸不一致\n```"
    }
]

# ── New Tutorials ───────────────────────────────────────────────────────────

NEW_TUTORIALS = [
    {
        "slug": "multi-agent-collaboration",
        "title": "多 Agent 协作开发实战",
        "description": "用 OpenClaw 搭建多 Agent 团队：任务拆解、并行开发、代码审查自动化。",
        "tags": ["agent", "multi-agent", "collaboration", "openclaw", "workflow"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## 多 Agent 协作开发实战\n\n### 架构设计\n\n一个高效的多 Agent 团队需要明确的角色分工：\n\n```\n执行官（coordinator）\n  ├── 编程员（coder）— 写代码\n  ├── 研究员（researcher）— 搜索调研\n  ├── 编辑（writer）— 总结润色\n  └── 运维（operator）— 执行检查\n```\n\n### Step 1：配置 Agent 团队\n\n在 `openclaw.json` 中定义你的 Agent 团队：\n\n```json\n{\n  \"agents\": {\n    \"list\": [\n      {\"id\": \"coordinator\", \"model\": \"nvidia/z-ai/glm5\"},\n      {\"id\": \"coder\", \"model\": \"openai-codex/gpt-5.4\"},\n      {\"id\": \"researcher\", \"model\": \"nvidia/moonshotai/kimi-k2.5\"},\n      {\"id\": \"writer\", \"model\": \"openrouter/qwen/qwen3.6-plus:free\"}\n    ]\n  }\n}\n```\n\n### Step 2：任务拆解与分发\n\n执行官收到需求后，拆解为子任务并分发：\n\n```markdown\n需求：开发一个 API 端点\n\n拆解：\n1. researcher → 调研最佳实践和竞品实现\n2. coder → 编写 API 代码和测试\n3. writer → 编写 API 文档\n4. operator → 部署到测试环境\n```\n\n### Step 3：结果整合\n\n所有子任务完成后，执行官负责：\n- 去重：去掉重复内容\n- 纠偏：修正方向偏差\n- 补洞：发现遗漏并补充\n- 定稿：输出最终可交付成果\n\n### 关键原则\n\n1. **专人专事**：不要让 coder 去做搜索\n2. **串行 vs 并行**：有依赖关系的串行，独立的并行\n3. **轻量沟通**：子任务结果不要原样转发，先提炼再传递"
    },
    {
        "slug": "agent-memory-architecture",
        "title": "Agent 记忆系统设计",
        "description": "为 AI Agent 构建持久记忆：分层存储、遗忘曲线和上下文加载策略。",
        "tags": ["agent", "memory", "architecture", "persistence", "context"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": True,
        "content": "## Agent 记忆系统设计\n\n### 为什么需要记忆？\n\nAgent 每次启动都是「失忆」状态，没有记忆就无法：\n- 记住用户偏好\n- 延续昨日工作\n- 从错误中学习\n\n### 三层记忆架构\n\n```\n🔥 HOT  — 当前活跃任务（每次加载）\n🌡️ WARM — 稳定偏好配置（偶尔更新）\n❄️ COLD — 历史归档（按需检索）\n```\n\n### 遗忘曲线\n\n不是所有记忆都值得保留，用衰减公式自动淘汰：\n\n```\nscore = similarity × exp(-0.05 × days) + 0.2 × ln(1 + access_count)\n```\n\n- score > 0.7 → HOT\n- 0.3 ~ 0.7 → WARM\n- ≤ 0.3 → COLD\n\n### 实现方案\n\n```markdown\nmemory/\n├── hot/HOT_MEMORY.md      ← 每次启动必读\n├── warm/WARM_MEMORY.md    ← 稳定偏好\n├── cold/COLD_MEMORY.md    ← 历史归档\n├── 2026-04-25.md          ← 今日日志\n├── archive/               ← 7天前日志\n├── weekly/                ← 周摘要\n└── memory-meta.json       ← 遗忘曲线元数据\n```\n\n### 加载策略\n\n```python\n# 每次启动\nload(\"memory/hot/HOT_MEMORY.md\")  # 必须\nload(\"memory/warm/WARM_MEMORY.md\") # 可选\n\n# 按需检索\nif relevant:\n    search(\"memory/cold/COLD_MEMORY.md\")\n    search(\"memory/archive/\")\n```"
    },
    {
        "slug": "rag-app-from-scratch",
        "title": "从零搭建 RAG 应用",
        "description": "完整 RAG 应用开发：文档加载、分块策略、向量索引、检索增强生成。",
        "tags": ["rag", "vector-database", "llm", "embedding", "knowledge-base"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## 从零搭建 RAG 应用\n\n### 什么是 RAG？\n\nRetrieval-Augmented Generation：先检索相关知识，再让 LLM 基于检索结果生成答案，避免幻觉。\n\n### 完整流程\n\n```\n1. 文档加载 → 2. 文本分块 → 3. 向量化 → 4. 存入索引\n                                         ↓\n5. 用户提问 → 6. 问题向量化 → 7. 相似检索 → 8. LLM 生成\n```\n\n### Step 1：文档加载与分块\n\n```python\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\n\nsplitter = RecursiveCharacterTextSplitter(\n    chunk_size=512,\n    chunk_overlap=50,\n    separators=[\"\\n## \", \"\\n### \", \"\\n\\n\", \"\\n\", \"。\", \" \"]\n)\n\nchunks = splitter.split_text(document)\n```\n\n### Step 2：向量化与索引\n\n```python\nfrom chromadb import Client\n\nclient = Client()\ncollection = client.create_collection(\"my_knowledge\")\n\ncollection.add(\n    documents=chunks,\n    ids=[f\"chunk_{i}\" for i in range(len(chunks))],\n    metadatas=[{\"source\": \"doc1\"} for _ in chunks]\n)\n```\n\n### Step 3：检索 + 生成\n\n```python\nresults = collection.query(query_texts=[question], n_results=5)\ncontext = \"\\n\".join(results[\"documents\"][0])\n\nprompt = f\"\"\"基于以下知识回答问题：\n\n{context}\n\n问题：{question}\n\n请只基于提供的信息回答，不确定的部分请说明。\"\"\"\n\nanswer = llm.generate(prompt)\n```"
    },
    {
        "slug": "prompt-engineering-practice",
        "title": "Prompt 工程实践指南",
        "description": "从基础到高级的 Prompt 技巧：角色设定、Few-shot、思维链和结构化输出。",
        "tags": ["prompt", "engineering", "few-shot", "chain-of-thought", "best-practices"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Prompt 工程实践指南\n\n### 核心原则\n\n1. **具体胜于模糊**：「写一篇 500 字的产品介绍」> 「写点东西」\n2. **示例胜于描述**：给 2-3 个例子比写 10 行说明更有效\n3. **结构胜于散漫**：用 Markdown、JSON、YAML 组织输出格式\n\n### 技巧 1：角色设定\n\n```markdown\n你是一位有 10 年经验的技术架构师，擅长微服务和云原生。\n回答时：\n- 用简洁的技术语言\n- 给出具体的架构方案\n- 标注权衡和取舍\n```\n\n### 技巧 2：Few-shot 学习\n\n```markdown\n将用户输入分类：\n\n输入：我无法登录 → 分类：认证问题\n输入：页面很慢 → 分类：性能问题\n输入：想退款 → 分类：商务问题\n\n输入：{user_input} → 分类：\n```\n\n### 技巧 3：思维链（Chain of Thought）\n\n```markdown\n请一步步思考：\n1. 先分析问题的核心需求\n2. 列出可能的解决方案\n3. 对比各方案的优劣\n4. 给出最终推荐\n\n在每一步都展示你的推理过程。\n```\n\n### 技巧 4：结构化输出\n\n```markdown\n请以 JSON 格式输出：\n```json\n{\n  \"summary\": \"一句话总结\",\n  \"keyPoints\": [\"要点1\", \"要点2\"],\n  \"recommendation\": \"建议\",\n  \"confidence\": 0.85\n}\n```\n\n### 反模式\n\n- ❌ 过长的系统提示（超过 2000 字效果递减）\n- ❌ 矛盾的指令（既要详细又要简短）\n- ❌ 假设模型知道上下文（每次对话是独立的）"
    },
    {
        "slug": "docker-deploy-guide",
        "title": "Docker 容器化部署全指南",
        "description": "从 Dockerfile 编写到多容器编排、CI/CD 集成的完整部署流程。",
        "tags": ["docker", "deployment", "dockerfile", "compose", "ci-cd"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Docker 容器化部署全指南\n\n### Step 1：编写高效 Dockerfile\n\n```dockerfile\n# 多阶段构建\nFROM node:24-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\n\nFROM node:24-alpine AS runner\nWORKDIR /app\nCOPY --from=builder /app/.next ./.next\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/package.json ./\nEXPOSE 3000\nCMD [\"npm\", \"start\"]\n```\n\n### Step 2：Docker Compose 编排\n\n```yaml\nversion: '3.8'\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n    environment:\n      DATABASE_URL: postgres://db:5432/myapp\n    depends_on: [db, redis]\n  db:\n    image: postgres:16\n    volumes: [pgdata:/var/lib/postgresql/data]\n  redis:\n    image: redis:7-alpine\n    volumes: [redisdata:/data]\n\nvolumes:\n  pgdata:\n  redisdata:\n```\n\n### Step 3：健康检查\n\n```yaml\nhealthcheck:\n  test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:3000/api/health\"]\n  interval: 30s\n  timeout: 10s\n  retries: 3\n```\n\n### Step 4：CI/CD 集成\n\n```yaml\n# GitHub Actions\n- name: Build & Push\n  run: |\n    docker build -t myapp:$GITHUB_SHA .\n    docker push myapp:$GITHUB_SHA\n- name: Deploy\n  run: |\n    ssh deploy@server \"docker pull myapp:$GITHUB_SHA && docker-compose up -d\"\n```"
    },
    {
        "slug": "email-automation-workflow",
        "title": "邮件自动化工作流",
        "description": "用 Agent 自动处理邮件：分类、摘要、草拟回复、定时巡检。",
        "tags": ["email", "automation", "gmail", "workflow", "productivity"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## 邮件自动化工作流\n\n### 架构\n\n```\n定时触发 → 拉取未读邮件 → AI 分类 → 处理流程\n                                          ├── 重要邮件 → 通知 + 草拟回复\n                                          ├── 常规邮件 → 归档 + 标签\n                                          └── 垃圾邮件 → 直接删除\n```\n\n### Step 1：配置 Gmail API\n\n使用 OpenClaw 的 gog skill 连接 Gmail：\n\n```bash\nclawhub install gog\nopenclaw config set channels.gmail.enabled true\n```\n\n### Step 2：分类规则\n\n```json\n{\n  \"rules\": [\n    {\"from\": \"*@client.com\", \"label\": \"客户\", \"priority\": \"high\"},\n    {\"subject\": \"*urgent*\", \"label\": \"紧急\", \"notify\": true},\n    {\"from\": \"noreply@*\", \"label\": \"通知\", \"autoArchive\": true},\n    {\"subject\": \"*invoice*\", \"label\": \"财务\", \"forward\": \"finance@team.com\"}\n  ]\n}\n```\n\n### Step 3：Cron 定时巡检\n\n```json\n{\n  \"schedule\": \"*/15 * * * *\",\n  \"task\": \"检查未读邮件，分类处理，重要邮件生成摘要并通知\"\n}\n```\n\n### Step 4：回复草稿\n\n```markdown\n收到客户邮件后，Agent 自动：\n1. 分析邮件意图\n2. 查找相关知识库文档\n3. 生成回复草稿\n4. 等待确认后发送\n\n> ⚠️ 自动发送需谨慎，建议默认草稿模式，确认后再发\n```"
    },
    {
        "slug": "vercel-deploy-optimization",
        "title": "Vercel 部署优化指南",
        "description": "Next.js 项目 Vercel 部署最佳实践：性能优化、Analytics、Edge Runtime。",
        "tags": ["vercel", "nextjs", "deployment", "performance", "edge"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## Vercel 部署优化指南\n\n### 1. 构建优化\n\n```javascript\n// next.config.js\nmodule.exports = {\n  experimental: {\n    optimizeCss: true,\n    optimizePackageImports: ['lucide-react', 'date-fns']\n  },\n  images: {\n    formats: ['image/avif', 'image/webp']\n  }\n}\n```\n\n### 2. 开启 Analytics\n\n```bash\nnpm install @vercel/analytics @vercel/speed-insights\n```\n\n```tsx\nimport { Analytics } from '@vercel/analytics/react'\nimport { SpeedInsights } from '@vercel/speed-insights/next'\n\nexport default function Layout({ children }) {\n  return (\n    <html>\n      <body>{children}</body>\n      <Analytics />\n      <SpeedInsights />\n    </html>\n  )\n}\n```\n\n### 3. Edge Runtime\n\n```typescript\nexport const runtime = 'edge'\n\nexport async function GET(request: Request) {\n  // 在边缘节点执行，延迟更低\n  return Response.json({ status: 'ok' })\n}\n```\n\n### 4. ISR 增量静态再生\n\n```typescript\n// 每 60 秒重新验证\nexport const revalidate = 60\n\nexport default async function Page() {\n  const data = await fetch('https://api.example.com/data')\n  return <Component data={data} />\n}\n```\n\n### 5. 环境变量管理\n\n```bash\n# 通过 Vercel CLI 设置\nvercel env add DATABASE_URL production\nvercel env add API_SECRET preview\n```"
    },
    {
        "slug": "ssl-auto-renewal",
        "title": "SSL 证书自动续期",
        "description": "用 Let's Encrypt + Certbot 实现 SSL 证书自动申请和续期。",
        "tags": ["ssl", "lets-encrypt", "certbot", "automation", "nginx"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## SSL 证书自动续期\n\n### Step 1：安装 Certbot\n\n```bash\napt install certbot python3-certbot-nginx\n```\n\n### Step 2：申请证书\n\n```bash\ncertbot --nginx -d example.com -d www.example.com\n```\n\n### Step 3：自动续期\n\nCertbot 安装时已自动创建 cron/systemd timer，验证：\n\n```bash\nsystemctl list-timers | grep certbot\ncertbot renew --dry-run\n```\n\n### Step 4：Nginx 安全配置\n\n```nginx\nserver {\n    listen 443 ssl http2;\n    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;\n\n    # 安全配置\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;\n    ssl_prefer_server_ciphers off;\n\n    # HSTS\n    add_header Strict-Transport-Security \"max-age=63072000\" always;\n}\n```\n\n### Step 5：监控\n\n```bash\n# 检查证书到期日\necho | openssl s_client -connect example.com:443 2>/dev/null | \\\n  openssl x509 -noout -dates\n```\n\n设置 Agent 定时检查，到期前 30 天自动续期并通知。"
    },
    {
        "slug": "github-event-driven-automation",
        "title": "GitHub 事件驱动自动化",
        "description": "用 Webhook 监听 GitHub 事件，自动触发代码审查、部署和通知。",
        "tags": ["github", "webhook", "automation", "ci-cd", "event-driven"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## GitHub 事件驱动自动化\n\n### 架构\n\n```\nGitHub Webhook → Agent 接收 → 路由匹配 → 执行工作流\n                                      ├── PR opened → 代码审查\n                                      ├── Issue created → 自动分类\n                                      └── Push main → 自动部署\n```\n\n### Step 1：配置 Webhook\n\n在 GitHub 仓库 Settings → Webhooks 中添加：\n\n- **Payload URL**: `https://your-agent.com/webhook/github`\n- **Content type**: `application/json`\n- **Events**: Push, Pull request, Issues\n\n### Step 2：事件路由\n\n```json\n{\n  \"routes\": [\n    {\n      \"event\": \"pull_request\",\n      \"action\": \"opened\",\n      \"workflow\": \"code-reviewer\",\n      \"filter\": {\"base.ref\": \"main\"}\n    },\n    {\n      \"event\": \"issues\",\n      \"action\": \"opened\",\n      \"workflow\": \"issue-triage\"\n    },\n    {\n      \"event\": \"push\",\n      \"filter\": {\"ref\": \"refs/heads/main\"},\n      \"workflow\": \"deploy\"\n    }\n  ]\n}\n```\n\n### Step 3：PR 自动审查\n\n收到 PR 事件后，Agent 自动：\n1. 获取 diff 内容\n2. AI 分析代码质量和安全风险\n3. 在 PR 上添加行级评论\n4. 生成审查摘要\n\n### 安全注意事项\n\n- 验证 Webhook 签名（HMAC-SHA256）\n- 限制可触发的操作范围\n- 敏感操作需人工确认"
    },
    {
        "slug": "cron-task-orchestration",
        "title": "定时任务编排实战",
        "description": "用 Cron + Agent 构建定时自动化：数据采集、报告生成、系统巡检。",
        "tags": ["cron", "scheduling", "automation", "monitoring", "task-orchestration"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## 定时任务编排实战\n\n### 常见定时任务场景\n\n| 场景 | 频率 | 说明 |\n|------|------|------|\n| 邮件巡检 | 每 15 分钟 | 检查未读邮件 |\n| 数据采集 | 每日 8:00 | 采集行业新闻 |\n| 报告生成 | 每周一 9:00 | 生成周报 |\n| 依赖更新 | 每日 2:00 | 检查并更新依赖 |\n| SSL 检查 | 每日 | 证书到期预警 |\n\n### OpenClaw Cron 配置\n\n```json\n{\n  \"crons\": [\n    {\n      \"schedule\": \"*/15 * * * *\",\n      \"task\": \"检查未读邮件，分类并通知重要邮件\",\n      \"model\": \"nvidia/z-ai/glm4_7\"\n    },\n    {\n      \"schedule\": \"0 8 * * *\",\n      \"task\": \"采集 AI 领域最新资讯，更新到知识库\",\n      \"model\": \"nvidia/moonshotai/kimi-k2.5\"\n    },\n    {\n      \"schedule\": \"0 9 * * 1\",\n      \"task\": \"生成上周项目进展周报，发送到团队频道\",\n      \"model\": \"openrouter/qwen/qwen3.6-plus:free\"\n    }\n  ]\n}\n```\n\n### 模型选择策略\n\n- **简单巡检**：用轻量模型（glm4_7）节省成本\n- **调研分析**：用搜索能力强的模型（kimi-k2.5）\n- **文案写作**：用写作能力好的模型（qwen3.6-plus）\n- **编程任务**：用代码专长模型（gpt-5.4）\n\n### 错误处理\n\n```markdown\n1. 超时 → 记录日志，跳过本次执行\n2. 输出异常 → 降级到备用模型重试\n3. 连续失败 3 次 → 停止 cron，通知人工处理\n```"
    },
    {
        "slug": "data-collection-pipeline",
        "title": "数据采集流水线搭建",
        "description": "构建自动化数据采集管线：多源采集、清洗转换、存储入库。",
        "tags": ["data-collection", "etl", "web-scraping", "pipeline", "automation"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## 数据采集流水线搭建\n\n### 架构\n\n```\n数据源 → 采集器 → 清洗器 → 转换器 → 存储\n  ↑                                    ↓\n调度器 ←─────── 状态监控 ←─────── 反馈\n```\n\n### Step 1：定义数据源\n\n```json\n{\n  \"sources\": [\n    {\"type\": \"rss\", \"url\": \"https://hnrss.org/newest?points=100\"},\n    {\"type\": \"api\", \"url\": \"https://api.github.com/repos/{owner}/{repo}/releases\"},\n    {\"type\": \"web\", \"url\": \"https://example.com/news\", \"selector\": \".article-item\"}\n  ]\n}\n```\n\n### Step 2：清洗规则\n\n```json\n{\n  \"cleaning\": [\n    {\"field\": \"title\", \"rules\": [\"strip\", \"normalize_whitespace\"]},\n    {\"field\": \"content\", \"rules\": [\"strip_html\", \"remove_ads\", \"truncate:5000\"]},\n    {\"field\": \"date\", \"rules\": [\"parse_iso8601\", \"timezone:UTC\"]},\n    {\"field\": \"tags\", \"rules\": [\"lowercase\", \"deduplicate\"]}\n  ]\n}\n```\n\n### Step 3：去重策略\n\n```python\n# 基于 URL 去重\nseen_urls = set()\nfor item in new_items:\n    if item['url'] not in seen_urls:\n        seen_urls.add(item['url'])\n        yield item\n\n# 基于内容相似度去重（阈值 0.95）\nfrom difflib import SequenceMatcher\nfor new_item in candidates:\n    if not any(SequenceMatcher(None, new_item['content'], old['content']).ratio() > 0.95 for old in existing):\n        yield new_item\n```"
    },
    {
        "slug": "blog-auto-publish",
        "title": "博客自动发布工作流",
        "description": "从写作到发布的全自动化：AI 辅助写作、SEO 优化、多平台分发。",
        "tags": ["blog", "automation", "seo", "publishing", "content-creation"],
        "author": "AgentSkill Hub",
        "createdAt": "2026-04-25",
        "featured": False,
        "content": "## 博客自动发布工作流\n\n### 流程\n\n```\n选题 → AI 辅助写作 → SEO 优化 → 预览 → 发布 → 分发\n```\n\n### Step 1：AI 辅助写作\n\n```markdown\n输入选题和要点：\n\n主题：OpenClaw Agent 记忆系统\n要点：\n- 三层记忆架构\n- 遗忘曲线\n- 实战经验\n\nAgent 输出：\n- 2000 字完整文章\n- 自动生成标题和摘要\n- 配图建议\n```\n\n### Step 2：SEO 优化\n\n```json\n{\n  \"title\": \"AI Agent 记忆系统：三层架构与遗忘曲线设计\",\n  \"description\": \"为 AI Agent 构建持久记忆系统，三层分层架构配合遗忘曲线自动衰减\",\n  \"keywords\": [\"AI Agent\", \"记忆系统\", \"遗忘曲线\", \"OpenClaw\"],\n  \"ogImage\": \"/images/agent-memory.png\"\n}\n```\n\n### Step 3：自动发布\n\n```bash\n# Git 推送触发部署\ngit add content/blog/agent-memory.md\ngit commit -m \"📝 new: Agent 记忆系统设计\"\ngit push\n\n# Vercel 自动构建部署\n```\n\n### Step 4：多平台分发\n\n```json\n{\n  \"platforms\": [\"twitter\", \"weibo\", \"linkedin\", \"juejin\"],\n  \"adapt\": true,\n  \"schedule\": \"2026-04-26T09:00:00+08:00\"\n}\n```"
    }
]

# ── New News ────────────────────────────────────────────────────────────────

NEW_NEWS = [
    {
        "slug": "gpt-5-general-availability",
        "title": "OpenAI 正式发布 GPT-5：多模态原生、Agent 框架内置",
        "summary": "GPT-5 全面开放 API，原生支持图像/音频/视频输入输出，内置 Agent 编排框架。",
        "source": "OpenAI Blog",
        "sourceUrl": "https://openai.com/blog/gpt-5",
        "publishedAt": "2026-04-20",
        "tags": ["openai", "gpt-5", "multimodal", "agent", "api"],
        "content": "## GPT-5 正式发布\n\n### 关键更新\n\n- **原生多模态**：不再需要独立的 DALL-E 或 Whisper，一个模型处理文本/图像/音频/视频\n- **Agent 框架**：内置 `Responses API`，支持工具调用、并行执行和状态管理\n- **128K 上下文**：默认 128K，最高可扩展至 1M\n- **成本降低**：比 GPT-4.1 便宜 40%，速度提升 3x\n\n### Agent 开发新范式\n\n```python\nresponse = client.responses.create(\n    model=\"gpt-5\",\n    instructions=\"你是一个研究助手\",\n    tools=[{\"type\": \"web_search\"}, {\"type\": \"code_interpreter\"}],\n    input=\"分析 2026 年 AI Agent 市场趋势\"\n)\n```\n\n### 影响\n\nGPT-5 的 Agent 原生设计将大幅降低 Agent 开发门槛，预计会催生大量新应用。"
    },
    {
        "slug": "claude-4-anthropic-release",
        "title": "Anthropic 发布 Claude 4：扩展思维链和计算机使用能力",
        "summary": "Claude 4 带来超长思维链和原生计算机操控能力，Agent 自主性大幅提升。",
        "source": "Anthropic Blog",
        "sourceUrl": "https://www.anthropic.com/news/claude-4",
        "publishedAt": "2026-04-18",
        "tags": ["anthropic", "claude-4", "thinking", "computer-use", "agent"],
        "content": "## Claude 4 发布\n\n### 核心升级\n\n- **扩展思维链**：支持 10 万 token 内部推理，复杂问题拆解更深入\n- **计算机使用**：原生支持屏幕截图、鼠标点击、键盘输入\n- **持久 Agent**：支持长时间运行的自主 Agent，可跨越多小时任务\n- **安全对齐**：Constitutional AI 2.0，更强的安全边界\n\n### 计算机使用示例\n\n```python\nresult = client.messages.create(\n    model=\"claude-4-opus\",\n    tools=[{\"type\": \"computer_2026\"}],\n    messages=[{\"role\": \"user\", \"content\": \"打开浏览器，搜索最新的 AI 新闻，整理成列表\"}]\n)\n```\n\n### 评价\n\nClaude 4 的计算机操控能力是目前最成熟的，适合需要 GUI 交互的自动化场景。"
    },
    {
        "slug": "llama-4-meta-open-source",
        "title": "Meta 开源 Llama 4：MoE 架构、400B 参数、多模态支持",
        "summary": "Llama 4 采用 MoE 架构，400B 总参数/50B 活跃参数，支持图像理解。",
        "source": "Meta AI Blog",
        "sourceUrl": "https://ai.meta.com/blog/llama-4/",
        "publishedAt": "2026-04-15",
        "tags": ["meta", "llama-4", "open-source", "moe", "multimodal"],
        "content": "## Llama 4 开源发布\n\n### 架构亮点\n\n- **MoE 架构**：400B 总参数，每次推理只激活 50B，效率极高\n- **多模态**：Llama 4 Scout 和 Maverick 支持图像理解\n- **超长上下文**：Scout 支持 10M token 上下文窗口\n- **完全开源**：MIT 协议，可商用\n\n### 模型对比\n\n| 模型 | 总参数 | 活跃参数 | 上下文 | 多模态 |\n|------|--------|----------|--------|--------|\n| Scout | 400B | 50B | 10M | ✅ |\n| Maverick | 400B | 50B | 1M | ✅ |\n| Behemoth | 2T | 200B | 256K | ✅ |\n\n### 对行业影响\n\nLlama 4 的开源将再次推动本地部署和私有化 Agent 方案的发展。"
    },
    {
        "slug": "openclaw-2026-4-release",
        "title": "OpenClaw 2026.4 发布：记忆系统、多模型调度和 TTS 语音",
        "summary": "OpenClaw 大版本更新，新增 Agent 记忆系统、智能模型路由和语音合成。",
        "source": "OpenClaw Docs",
        "sourceUrl": "https://docs.openclaw.ai/changelog",
        "publishedAt": "2026-04-22",
        "tags": ["openclaw", "release", "memory", "tts", "multi-model"],
        "content": "## OpenClaw 2026.4 发布\n\n### 新功能\n\n1. **Agent 记忆系统**\n   - HOT/WARM/COLD 三层记忆分层\n   - 遗忘曲线自动衰减\n   - 访问追踪和重要度评分\n\n2. **多模型智能调度**\n   - 根据任务类型自动选择最优模型\n   - 成本优化：简单任务用轻量模型\n   - 降级容错：主模型失败自动切换\n\n3. **TTS 语音合成**\n   - ElevenLabs 集成\n   - 支持多种语音风格\n   - 故事模式：用语音讲述长内容\n\n### 升级建议\n\n```bash\nnpm update -g openclaw\nopenclaw gateway restart\n```"
    },
    {
        "slug": "nextjs-16-turbopack-stable",
        "title": "Next.js 16 正式发布：Turbopack 稳定、Server Actions 增强",
        "summary": "Next.js 16 将 Turbopack 提升为默认构建器，开发构建速度提升 700%。",
        "source": "Vercel Blog",
        "sourceUrl": "https://nextjs.org/blog/next-16",
        "publishedAt": "2026-04-19",
        "tags": ["nextjs", "turbopack", "vercel", "release", "performance"],
        "content": "## Next.js 16 发布\n\n### 关键更新\n\n- **Turbopack 默认**：开发构建速度提升 700%，生产构建提升 5x\n- **Server Actions 增强**：支持流式返回、中间件、权限控制\n- **Partial Prerendering**：静态+动态混合渲染，无需全页 SSR\n- **Node.js 24 支持**：原生 TypeScript 支持、更快的启动\n\n### 迁移指南\n\n```bash\nnpx next@latest upgrade\n```\n\n主要破坏性变更：\n- `next/font` 配置格式调整\n- `Image` 组件默认使用 `width/height` 而非 `layout`\n- 最低要求 Node.js 20\n\n### 性能对比\n\n| 指标 | Next.js 15 | Next.js 16 |\n|------|-----------|-----------|\n| 开发 HMR | 500ms | 70ms |\n| 生产构建 | 45s | 9s |\n| 冷启动 | 2.3s | 0.8s |"
    },
    {
        "slug": "crewai-3-multi-agent-framework",
        "title": "CrewAI 3.0：可视化 Agent 编排和内置工具市场",
        "summary": "CrewAI 3.0 引入可视化流程编辑器和内置工具市场，Agent 开发门槛进一步降低。",
        "source": "CrewAI Blog",
        "sourceUrl": "https://crewai.com/blog/crewai-3",
        "publishedAt": "2026-04-21",
        "tags": ["crewai", "multi-agent", "framework", "visual-editor", "tools"],
        "content": "## CrewAI 3.0 发布\n\n### 新功能\n\n- **可视化编排**：拖拽式流程编辑器，零代码构建 Agent 工作流\n- **工具市场**：内置 100+ 预构建工具，一键安装\n- **记忆系统**：短期/长期记忆 + 知识检索\n- **Guardrails**：输出验证和安全护栏\n\n### 对比其他框架\n\n| 特性 | CrewAI 3 | LangGraph | AutoGen |\n|------|---------|-----------|---------|\n| 可视化编辑 | ✅ | ❌ | ❌ |\n| 工具市场 | ✅ | 部分 | ❌ |\n| 内置记忆 | ✅ | 需自建 | 需自建 |\n| 学习曲线 | 低 | 中 | 高 |\n\n### 适用场景\n\n适合快速原型和非技术人员构建 Agent 工作流。"
    },
    {
        "slug": "nodejs-24-release",
        "title": "Node.js 24 LTS 发布：原生 TypeScript、更快的 V8 和 WebSocket",
        "summary": "Node.js 24 成为 LTS 版本，原生支持 TypeScript 执行和 WebSocket 客户端。",
        "source": "Node.js Blog",
        "sourceUrl": "https://nodejs.org/en/blog/release/v24.0.0",
        "publishedAt": "2026-04-17",
        "tags": ["nodejs", "typescript", "v8", "websocket", "release"],
        "content": "## Node.js 24 LTS 发布\n\n### 关键更新\n\n- **原生 TypeScript**：无需 ts-node，直接 `node app.ts`\n- **WebSocket 客户端**：内置 `WebSocket` API，不再需要 `ws` 库\n- **V8 13.5**：性能提升 15%，内存占用减少 10%\n- **`require(ESM)`**：可以在 CommonJS 中直接 import ESM 模块\n- **SQLite 内置**：`node:sqlite` 模块，无需额外安装\n\n### TypeScript 示例\n\n```typescript\n// 直接运行，无需编译\ntype User = { name: string; age: number }\n\nfunction greet(user: User): string {\n  return `Hello, ${user.name}!`\n}\n\nconsole.log(greet({ name: \"东哥\", age: 30 }))\n```\n\n```bash\nnode app.ts  # 直接执行！\n```"
    },
    {
        "slug": "ai-video-generation-trend-2026",
        "title": "AI 视频生成赛道 2026：Kling、Sora、Veo 三足鼎立",
        "summary": "2026 年 AI 视频生成进入爆发期，字节 Kling、OpenAI Sora、Google Veo 各有优势。",
        "source": "36氪",
        "sourceUrl": "https://36kr.com/p/ai-video-2026",
        "publishedAt": "2026-04-23",
        "tags": ["ai-video", "kling", "sora", "veo", "trend"],
        "content": "## AI 视频生成赛道 2026\n\n### 格局\n\n| 产品 | 公司 | 时长 | 质量 | API |\n|------|------|------|------|-----|\n| Kling 2.0 | 字节 | 60s | ⭐⭐⭐⭐⭐ | ✅ |\n| Sora | OpenAI | 30s | ⭐⭐⭐⭐ | ✅ |\n| Veo 2 | Google | 30s | ⭐⭐⭐⭐ | ✅ |\n| Runway Gen-4 | Runway | 15s | ⭐⭐⭐ | ✅ |\n\n### 趋势\n\n1. **时长突破**：从 5s 到 60s，接近短视频需求\n2. **API 普及**：全部提供 API，Agent 可调用\n3. **成本下降**：每分钟视频生成成本降到 $0.5\n4. **版权争议**：训练数据版权问题仍在法律博弈中\n\n### 对开发者的影响\n\nAI 视频生成 + Agent = 自动化内容工厂，预计 2026 下半年会有大量视频 Agent 应用涌现。"
    },
    {
        "slug": "ai-safety-regulation-update",
        "title": "全球 AI 安全监管最新进展：EU AI Act 生效、中国算法备案更新",
        "summary": "EU AI Act 全面生效，中国更新算法备案要求，AI 安全合规成为刚需。",
        "source": "Reuters",
        "sourceUrl": "https://reuters.com/ai-regulation-2026",
        "publishedAt": "2026-04-16",
        "tags": ["ai-safety", "regulation", "eu-ai-act", "compliance", "policy"],
        "content": "## 全球 AI 安全监管更新\n\n### EU AI Act 全面生效\n\n- **高风险系统**：医疗、金融、执法领域 AI 必须通过合规审查\n- **透明度要求**：AI 生成内容必须标注\n- **罚款**：违规最高处全球营收 6% 罚款\n\n### 中国算法备案更新\n\n- **生成式 AI**：所有面向公众的生成式 AI 必须备案\n- **安全评估**：上线前必须通过安全评估\n- **数据来源**：训练数据必须可追溯\n\n### 对开发者影响\n\n1. 合规成本增加，但标准化后反而降低法律风险\n2. 开源模型在合规上更有优势（可审计）\n3. Agent 自动化操作需额外考虑责任归属\n\n### 建议\n\n- 面向欧盟用户的应用：做好 AI 标注和合规审查\n- 面向中国用户的应用：提前完成算法备案\n- 通用建议：保留 Agent 操作日志，便于审计追溯"
    },
    {
        "slug": "mistral-large-3-release",
        "title": "Mistral 发布 Large 3：开源挑战者，性能逼近 GPT-5",
        "summary": "Mistral Large 3 在多项基准上逼近 GPT-5，Apache 2.0 协议完全开源。",
        "source": "Mistral Blog",
        "sourceUrl": "https://mistral.ai/news/mistral-large-3",
        "publishedAt": "2026-04-24",
        "tags": ["mistral", "open-source", "llm", "benchmark", "apache"],
        "content": "## Mistral Large 3 发布\n\n### 基准成绩\n\n| 基准 | Mistral Large 3 | GPT-5 | Claude 4 |\n|------|----------------|-------|---------|\n| MMLU | 92.1% | 93.5% | 92.8% |\n| HumanEval | 89.2% | 91.0% | 88.5% |\n| MATH | 78.3% | 82.1% | 80.5% |\n\n### 优势\n\n- **完全开源**：Apache 2.0 协议，无使用限制\n- **本地部署**：量化后单张 A100 可运行\n- **多语言**：中英文能力显著提升\n- **函数调用**：原生支持，格式兼容 OpenAI\n\n### 适用场景\n\n- 需要数据私有化的企业\n- 对成本敏感的 Agent 应用\n- 需要深度定制的场景\n\n```bash\n# 本地部署\nollama pull mistral-large-3\n```"
    }
]


def expand_file(filepath, new_items, key_field="slug"):
    """Add new items to a JSON file, skipping duplicates by key_field."""
    with open(filepath, 'r', encoding='utf-8') as f:
        existing = json.load(f)
    
    existing_keys = {item[key_field] for item in existing}
    added = 0
    for item in new_items:
        if item[key_field] not in existing_keys:
            existing.append(item)
            existing_keys.add(item[key_field])
            added += 1
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)
    
    return added, len(existing)


if __name__ == '__main__':
    skills_added, skills_total = expand_file(
        os.path.join(DATA_DIR, 'skills.json'), NEW_SKILLS
    )
    tutorials_added, tutorials_total = expand_file(
        os.path.join(DATA_DIR, 'tutorials.json'), NEW_TUTORIALS
    )
    news_added, news_total = expand_file(
        os.path.join(DATA_DIR, 'news.json'), NEW_NEWS
    )
    
    print(f'Skills:   +{skills_added} → {skills_total} total')
    print(f'Tutorials: +{tutorials_added} → {tutorials_total} total')
    print(f'News:      +{news_added} → {news_total} total')
