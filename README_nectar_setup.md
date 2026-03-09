# Carbonator – Nectar Production Deployment Guide

## Overview

This repository contains the Angular 18 version of Carbonator configured for deployment on:

- NeCTAR Research Cloud (Ubuntu 22.04 LTS)
- Node 20 (via nvm)
- nginx
- Let’s Encrypt (Certbot)
- HTTPS enabled
- SSH restricted by security group
- Automatic security updates enabled

This document describes how to rebuild and deploy from scratch.

---

# 1. Server Setup (Nectar)

### Create Instance

- Image: **NeCTAR Ubuntu 22.04 LTS (Jammy)**
- Flavor: m3.xsmall (or appropriate size)
- Attach security groups:
  - Web (80, 443 open to 0.0.0.0/0)
  - SSH restricted to your IP only
- Allocate floating IP

---

# 2. Base System Setup

Update system:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y git nginx curl
```

Enable automatic security updates:

```bash
sudo dpkg-reconfigure unattended-upgrades
```

Choose **Yes** when prompted.

---

# 3. Install Node (via nvm)

Install nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
```

Install Node 20:

```bash
nvm install 20
nvm use 20
nvm alias default 20
```

Verify:

```bash
node -v
npm -v
```

---

# 4. Clone Repository

```bash
git clone git@github.com:alexsengupta/Carbonator-March-2026-Nectar-.git
cd Carbonator-March-2026-Nectar-
```

Install dependencies:

```bash
npm install
```

---

# 5. Build Production Bundle

```bash
npx ng build --configuration production
```

Build output will be in:

```
dist/visualmetrics-carbonator/
```

---

# 6. Configure nginx

Edit:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace contents with:

```nginx
server {
    listen 80;
    server_name carbonator.org www.carbonator.org;

    root /home/ubuntu/Carbonator-March-2026-Nectar-/dist/visualmetrics-carbonator;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Fix permissions:

```bash
sudo chmod o+x /home/ubuntu
sudo chmod -R o+rX /home/ubuntu/Carbonator-March-2026-Nectar-/dist
```

Restart nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

Test:

```
http://your-server-ip
```

---

# 7. Enable HTTPS (Let’s Encrypt)

Install Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

Request certificate:

```bash
sudo certbot --nginx -d carbonator.org -d www.carbonator.org
```

Choose redirect to HTTPS when prompted.

Test:

```
https://carbonator.org
```

Check renewal:

```bash
sudo certbot renew --dry-run
```

---

# 8. Security

## SSH

Restrict port 22 to your IP only via Nectar security group.

## Auto Updates

Enabled via unattended-upgrades.

Check:

```bash
sudo systemctl status unattended-upgrades
```

---

# 9. Redeploy / Update Application

To redeploy after pulling updates:

```bash
git pull
npm install
npx ng build --configuration production
sudo systemctl restart nginx
```

---

# 10. Backup Strategy

- Code: GitHub repository
- Infrastructure: Nectar snapshot
- SSL: Auto-renew via certbot.timer
- OS patches: unattended-upgrades

---

# Environment Summary

- OS: Ubuntu 22.04 LTS
- Node: 20.x
- Angular: 18.x
- Web server: nginx
- SSL: Let’s Encrypt
- Deployment: Static Angular build served via nginx

---

# Important Notes

- Do NOT commit `dist/`
- Do NOT commit `node_modules/`
- Do NOT commit `.env` files or secrets
- Always snapshot before major infrastructure changes
