# Jose Valor — Portfolio

Personal portfolio of **Jose Valor**, Senior Frontend Engineer. Built with Next.js 16, React 19, TypeScript and Tailwind CSS v4. Features animated sections, a project showcase and a fully functional contact form that delivers emails via [Resend](https://resend.com).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | React Icons |
| Email | Resend |

## Sections

- **Hero** — introduction and links to GitHub and LinkedIn
- **Projects** — showcase of selected projects (Cowork Reservation App, Accessible Seat Map, Strangler Fig Migration), each with a live demo and code link
- **Experience** — work history, newest first
- **About** — bio and grouped skills
- **Contact** — form that sends an email directly to the inbox via the `/api/contact` API route

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root of the project:

```
RESEND_API_KEY=re_your_api_key_here
```

Get your free API key at [resend.com/api-keys](https://resend.com/api-keys).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run the tests

```bash
npm run test
npx playwright install chromium   # first time only
npm run test:e2e
```

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push the repository to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add the `RESEND_API_KEY` environment variable in the Vercel dashboard
4. Click **Deploy**

## Contact

- LinkedIn: [linkedin.com/in/josealfredovalor](https://www.linkedin.com/in/josealfredovalor/)
- GitHub: [github.com/JawaGs](https://github.com/JawaGs)
