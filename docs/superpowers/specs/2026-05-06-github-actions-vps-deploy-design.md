# GitHub Actions VPS Deployment via Tailscale — Design Spec

**Date:** 2026-05-06
**Project:** checkpoint-landing (Svelte + Vite + Tailwind)

## Overview

A GitHub Actions workflow that builds the static site and deploys it to a VPS over rsync, connecting via Tailscale VPN. The runner joins the Tailscale network ephemerally on each run and is automatically removed when the job ends.

## Trigger

Push to the `main` branch only.

## Job Steps

1. **Checkout** — `actions/checkout@v4`
2. **Setup pnpm** — `pnpm/action-setup@v4` using the version declared in `package.json#packageManager`
3. **Setup Node.js** — `actions/setup-node@v4` with pnpm cache enabled
4. **Install dependencies** — `pnpm install --frozen-lockfile`
5. **Build** — `pnpm build` → outputs to `dist/`
6. **Start Tailscale** — `tailscale/github-action@v2` with OAuth credentials; ephemeral node, tagged as `tag:ci`
7. **Configure SSH** — write `VPS_SSH_KEY` to `~/.ssh/id_rsa`, write `VPS_SSH_KNOWN_HOSTS` to `~/.ssh/known_hosts`, set correct file permissions
8. **Deploy** — `rsync -avz --delete dist/ $VPS_USER@$VPS_HOST:$VPS_TARGET_DIR/`

## Credentials & Configuration

### Secrets (GitHub repo secrets)

| Secret | Purpose |
|---|---|
| `TAILSCALE_OAUTH_CLIENT_ID` | Tailscale OAuth client ID for ephemeral node auth |
| `TAILSCALE_OAUTH_CLIENT_SECRET` | Tailscale OAuth client secret |
| `VPS_SSH_KEY` | Private SSH key (PEM format) authorized on the VPS |
| `VPS_SSH_KNOWN_HOSTS` | Output of `ssh-keyscan <VPS_HOST>` run from a trusted machine |
| `VPS_USER` | SSH username on the VPS |
| `VPS_HOST` | Tailscale hostname or IP of the VPS |

### Variables (GitHub repo variables)

| Variable | Purpose |
|---|---|
| `VPS_TARGET_DIR` | Absolute deployment path on VPS (e.g. `~/apps/checkpoint-landing`) |

## Key Decisions

- **OAuth over auth key** — Tailscale OAuth credentials don't expire and auto-generate ephemeral node tokens per run. Auth keys require manual rotation.
- **Ephemeral Tailscale node** — The runner node is removed from the tailnet automatically after the job, leaving no stale devices.
- **rsync with `--delete`** — Ensures removed files are cleaned up on the VPS so the deployed state mirrors `dist/` exactly.
- **`--frozen-lockfile`** — Guarantees reproducible installs; fails loudly if `pnpm-lock.yaml` is out of sync.
- `VPS_USER` and `VPS_HOST` are secrets (not variables) to avoid exposing server identity in repo settings.
- `VPS_TARGET_DIR` is a variable (not a secret) since it is not sensitive and benefits from being easily visible and editable.

## Tailscale ACL Requirement

The Tailscale OAuth client must have permission to create nodes with `tag:ci`. Add this to your tailnet ACL policy:

```json
"tagOwners": {
  "tag:ci": ["autogroup:admin"]
}
```

And ensure the ACL allows `tag:ci` to reach the VPS node over SSH (port 22).
