<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU5IiBoZWlnaHQ9IjI1OSIgdmlld0JveD0iMCAwIDI1OSAyNTkiIGZpbGw9%0D%0AIm5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVs%0D%0AZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI3LjU4OSA0Mi41MjI5TDg1LjA1%0D%0ANTkgODUuMDU1OUw0Mi41MzMgNDIuNTIyOUw4NS4wNTU5IDBMMTI3LjU4OSA0Mi41MjI5WiIgZmls%0D%0AbD0iI0YzRUI1OSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9k%0D%0AZCIgZD0iTTI1OC4yMDkgODUuMDU1OEwyMTUuNjc2IDEyNy41ODRMMTczLjE1NCA4NS4wNTU4TDIx%0D%0ANS42NzYgNDIuNTIyOUwyNTguMjA5IDg1LjA1NThaIiBmaWxsPSIjOTVENkU1Ii8+CjxwYXRoIGZp%0D%0AbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuMDYwOSAxNzMuMTQz%0D%0ATDQyLjUzMyAyMTUuNjcxTDAgMTczLjE0M0w0Mi41MzMgMTMwLjYyTDg1LjA2MDkgMTczLjE0M1oi%0D%0AIGZpbGw9IiNGNjk5NzMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2%0D%0AZW5vZGQiIGQ9Ik0yMTUuNjgxIDIxNS42NzFMMTczLjE1MyAyNTguMjA5TDEzMC42MiAyMTUuNjc2%0D%0ATDE3My4xNTMgMTczLjE0OEwyMTUuNjgxIDIxNS42NzFaIiBmaWxsPSIjNzQ1REE3Ii8+CjxwYXRo%0D%0AIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuMDYwOSAxNzMu%0D%0AMTQzTDQyLjUzMyAxMzAuNjJWNDIuNTI3OUw4NS4wNjA5IDg1LjA2MDlWMTczLjE0M1oiIGZpbGw9%0D%0AIiNGOUQ4NEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQi%0D%0AIGQ9Ik0yMTUuNjgxIDIxNS42NzFMMTczLjE1NCAxNzMuMTQ4Vjg1LjA2MDlMMjE1LjY4MSAxMjcu%0D%0ANTg5VjIxNS42NzFaIiBmaWxsPSIjNjJDNEI4Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIg%0D%0AY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuMDYwOSA4NS4wNTU4TDEyNy41OTQgNDIuNTIyOUgy%0D%0AMTUuNjgxTDE3My4xNTMgODUuMDU1OEg4NS4wNjA5WiIgZmlsbD0iIzNCQzJFNSIvPgo8cGF0aCBm%0D%0AaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjUzMyAyMTUuNjcx%0D%0ATDg1LjA1NTkgMTczLjE0OEgxNzMuMTQzTDEzMC42MjUgMjE1LjY3Nkw0Mi41MzMgMjE1LjY3MVoi%0D%0AIGZpbGw9IiNGMTZGNzQiLz4KPC9zdmc+Cg==" width="80" height="80" />

> # Superlógica - Landing Template
>
> Landing page with NextJS.

[Access it](https://superlogica.hugofabricio.com/)

### Setup

- Clone the repo: `$ git clone git@github.com:hugofabricio/superlogica-landing.git`
- Install dependencies: `$ yarn`

### Develop

`$ yarn dev` to run next dev

### Build and run

`$ yarn build` to run next build and `$ yarn start` to see build project

### How it works?

Nextjs requests an api and render the campaign page.

- Response example

```
{
  "title": "Uma nova forma de fazer negócios.",
  "subtitle": "A Superlógica oferece um sistema completo para sua empresa escalar na era digital.",
  "colors": {
    "primary": "#006AFF",
    "primaryLight": "#00B8FF",
    "primaryDark": "#153460",
    "secondary": "#712CCB"
  },
  "button": {
    "label": "Saiba mais",
    "url": "https://superlogica.com"
  },
  "plans": [
    {
      "name": "Core",
      "price": 129,
      "isBestSeller": false,
      "features": [
        "Gestão de planos e assinaturas",
        "Faturamento automatizado e geração de cobranças",
        "Painel de cobranças",
        "Pagamento com boleto e cartão de crédito",
        "Gateway Superlógica",
        "Reajuste de assinaturas",
        "Taxa de aprovação (cartão)",
        "Régua de cobrança básica (e-mail)",
        "Venda online (checkout Superlógica)",
        "Painel de inadimplência e acordos",
        "Relatórios gerenciais",
        "API + Webhooks",
        "Suspensão e cancelamento automáticos",
        "Integração Mailchimp",
        "Integração RD Station",
        "Pedidos",
        "Área do cliente"
      ]
    },
    {
      "name": "Essencial",
      "price": 399,
      "isBestSeller": false,
      "features": [
        "TODAS AS FUNCIONALIDADES DO PLANO CORE +",
        "Emissão de nota fiscal",
        "Emita suas notas fiscais de serviço e produto diretamente pelo Superlógica",
        "Régua de cobrança por e-mail, SMS e carta",
        "Relatórios por e-mail",
        "Módulo financeiro"
      ]
    },
    {
      "name": "Core",
      "price": 499,
      "isBestSeller": true,
      "features": [
        "TODAS AS FUNCIONALIDADES DO PLANO ESSENCIAL +",
        "Painel de métricas",
        "Cupom de descontos",
        "Régua de cobrança avançada",
        "Tickets (chamados)",
        "Centro de custo",
        "Aplicativo mobile"
      ]
    }
  ]
}
```

### Dependencies

- NextJS
- Styled Components
- Styled Media Query
- Polished
- Slick Carousel
- Formik
- Yup

## License

[MIT License](/license) © Hugo Fabricio
