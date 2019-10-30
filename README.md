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
  "id": "5db8ce10ab1d93751bfdf3d5",
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
