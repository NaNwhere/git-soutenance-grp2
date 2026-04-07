# Git Soutenance GRP2

Mini projet Node.js réalisé dans le cadre d'une soutenance Git.

## Objectifs
- démontrer une bonne organisation Git
- utiliser le Git Flow
- mettre en place des issues, branches et pull requests
- signer tous les commits
- ajouter un hook de lint
- exécuter une CI GitHub Actions

## Stack
- Node.js
- ESLint
- GitHub Actions

## Installation
```bash
git clone <repo-url>
cd git-soutenance-team
npm install
```

## Lancement
```bash
npm start
```

## Linter
```bash
npm run lint
```

## Workflow Git
- `main` : branche stable
- `develop` : branche d'intégration
- `feature/*` : nouvelles fonctionnalités
- `fix/*` : corrections
- `docs/*` : documentation
- `chore/*` : maintenance

## Membres
- Swan : organisation, documentation, GitHub management
- Johan : technique, lint, hooks, CI, remotes
