# GitHub Actions VPS Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a GitHub Actions workflow that builds the Svelte+Vite static site and deploys it to a VPS via rsync over a Tailscale-secured SSH connection.

**Architecture:** On every push to `main`, a GitHub Actions runner installs deps, runs `pnpm build`, joins the Tailscale network ephemerally, then rsyncs `dist/` to the VPS. The runner node is automatically removed from the tailnet after the job ends.

**Tech Stack:** GitHub Actions, pnpm 10, Vite 7, Tailscale (`tailscale/github-action@v2`), rsync, SSH

---

### Task 1: Scaffold the workflow file

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create the workflows directory**

```bash
mkdir -p .github/workflows
```

- [ ] **Step 2: Write the workflow file**

Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    timeout-minutes: 15

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

      - name: Start Tailscale
        uses: tailscale/github-action@v2
        with:
          oauth-client-id: ${{ secrets.TAILSCALE_OAUTH_CLIENT_ID }}
          oauth-secret: ${{ secrets.TAILSCALE_OAUTH_CLIENT_SECRET }}
          tags: tag:ci

      - name: Configure SSH
        run: |
          mkdir -p ~/.ssh
          printf '%s\n' "${{ secrets.VPS_SSH_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          printf '%s\n' "${{ secrets.VPS_SSH_KNOWN_HOSTS }}" > ~/.ssh/known_hosts
          chmod 644 ~/.ssh/known_hosts

      - name: Deploy via rsync
        run: |
          rsync -avz --delete \
            -e "ssh -i ~/.ssh/id_rsa -o StrictHostKeyChecking=yes" \
            dist/ \
            ${{ secrets.VPS_USER }}@${{ secrets.VPS_HOST }}:${{ vars.VPS_TARGET_DIR }}/
```

- [ ] **Step 3: Validate YAML syntax**

```bash
python3 -c "import yaml, sys; yaml.safe_load(open('.github/workflows/deploy.yml'))" && echo "YAML valid"
```

Expected output: `YAML valid`

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions deploy workflow via Tailscale"
```

---

### Task 2: Document required secrets and variables

**Files:**
- Modify: `README.md` — add a Deployment section

- [ ] **Step 1: Append the deployment section to README.md**

Add the following to the bottom of `README.md`:

```markdown
## Deployment

Pushes to `main` automatically deploy to the VPS via GitHub Actions.

### Required secrets (Settings → Secrets → Actions)

| Secret | Description |
|---|---|
| `TAILSCALE_OAUTH_CLIENT_ID` | Tailscale OAuth client ID. Create at tailscale.com/admin → Settings → OAuth clients. Must have `devices:write` scope and permission to tag `tag:ci`. |
| `TAILSCALE_OAUTH_CLIENT_SECRET` | Secret paired with the OAuth client ID above. |
| `VPS_SSH_KEY` | Private SSH key (PEM format) whose public key is in `~/.ssh/authorized_keys` on the VPS. Generate with: `ssh-keygen -t ed25519 -C "github-actions" -f deploy_key` |
| `VPS_SSH_KNOWN_HOSTS` | Run `ssh-keyscan <VPS_TAILSCALE_HOST>` from a trusted machine and paste the output here. |
| `VPS_USER` | SSH username on the VPS. |
| `VPS_HOST` | Tailscale hostname or IP of the VPS. |

### Required variables (Settings → Secrets → Variables → Repository variables)

| Variable | Example value | Description |
|---|---|---|
| `VPS_TARGET_DIR` | `~/apps/checkpoint-landing` | Absolute or home-relative path where `dist/` is deployed on the VPS. |

### Tailscale ACL requirement

Add `tag:ci` to your tailnet ACL and allow it to reach the VPS on port 22:

```json
"tagOwners": {
  "tag:ci": ["autogroup:admin"]
},
"acls": [
  { "action": "accept", "src": ["tag:ci"], "dst": ["<vps-tailscale-ip>:22"] }
]
```
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add deployment setup instructions to README"
```
