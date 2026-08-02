# Colab Daily Candidate Preview

This repository contains the detached VitePress candidate-preview site produced by `PHASE_prepare_candidates`. The workflow source and Grist state live outside this repository.

## Local build

```bash
npm ci
VITEPRESS_BASE=/colab-daily/ npm run build
```

## Automated deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`. The workflow builds and deploys GitHub Pages; no `gh` CLI login is required by the daily agent.

The parent Colab Daily workspace pushes with a repository-specific SSH deploy key:

1. Add the public key to this repository as a deploy key with write access.
2. Mount the private key as a deployment secret file. Never commit it.
3. Set its mode to `0600`.
4. Configure this checkout's `origin` as `git@github.com:<OWNER>/<REPOSITORY>.git`.
5. Set `COLAB_DAILY_DEPLOY_KEY` when the key is not at the parent workspace's `.repo_private_key` path.
6. Run the parent workspace helper `.agents/skills/publish_candidates_to_vitepress/scripts/git_with_deploy_key.sh verify`, then use its `push` action after a validated commit.

If only the private key is available, derive the public key in a temporary location before registering it with the repository:

```bash
ssh-keygen -y -f "$COLAB_DAILY_DEPLOY_KEY" > /tmp/colab-daily-deploy-key.pub
```

Both `.repo_private_key` and `.repo_private_key.pub` are ignored. Do not use a personal SSH key, HTTPS credential, or account-wide CLI session for automated publication.
