// src/application/data/skills.js

/** @type {import('../../domain/entities/Skill').SkillGroup[]} */
export const skills = [
  {
    label: 'Languages',
    items: ['C++20', 'Python', 'Dart', 'Java', 'JavaScript'],
  },
  {
    label: 'Frameworks',
    items: ['FastAPI', 'Flutter', 'Spring Boot', 'React', 'SQLAlchemy'],
  },
  {
    label: 'Infrastructure',
    items: ['PostgreSQL', 'Redis', 'MinIO', 'Docker', 'Docker Compose', 'Celery'],
  },
  {
    label: 'AI / LLM',
    items: ['LLM Orchestration', 'Multi-Agent', 'RAG', 'OpenRouter', 'Anthropic', 'Ollama'],
  },
  {
    label: 'System',
    items: ['Win32 API', 'WIMGAPI', 'BCD', 'gVisor', 'SMBIOS'],
  },
  {
    label: 'Architecture',
    items: ['Clean Architecture', 'DDD', 'MVVM', 'Port & Adapter', 'CQRS'],
  },
]
