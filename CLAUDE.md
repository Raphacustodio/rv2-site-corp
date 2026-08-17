# rv2-site-corp

Site institucional da RV2 — Next.js 16 com export estático.

## Stack
- Next.js 16 (Turbopack) + TypeScript + Tailwind CSS
- Export estático (`next build` gera `/out`)
- Dev server: `npm run dev` → http://localhost:3002

## Deploy
```bash
./deploy.sh
```
Build local → rsync para VPS (`root@179.197.237.226:/var/www/rv2-site/out`) → push branch `deploy` no GitHub.

## Convenções de layout
- Container padrão da página: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-10`
- Carrosséis e seções full-bleed devem respeitar `max-w-7xl` para não ficarem excessivamente largos em monitores grandes

## Componentes principais
- `components/shared/ClientsCarousel.tsx` — ticker infinito de logos de clientes
- `components/home/Testimonials.tsx` — carrossel de depoimentos com fade e autoplay
- `components/home/Hero.tsx`, `StatsSection.tsx`, `ServiceCards.tsx`, `Timeline.tsx`
- `components/assessoria/` e `components/labs/` — seções de produto
