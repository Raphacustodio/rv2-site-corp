#!/bin/bash
set -e

SERVER="root@179.197.237.226"
SSH_KEY="$HOME/.ssh/rv2_vps"
REMOTE_DIR="/var/www/rv2-site/out"

echo "🔨 Buildando o site..."
npm run build

echo "🚀 Enviando para o servidor..."
rsync -az --delete -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no" \
  out/ $SERVER:$REMOTE_DIR/

echo "📦 Salvando no GitHub..."
cd out
git init -q
git add .
git commit -q -m "deploy $(date '+%Y-%m-%d %H:%M')"
git remote add origin https://github.com/Raphacustodio/rv2-site.git 2>/dev/null || true
git push -q origin HEAD:deploy --force
cd ..

echo "✅ Site atualizado com sucesso!"
