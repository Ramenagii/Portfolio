# Justin R. Lorenzo Portfolio

A refined personal portfolio for Justin R. Lorenzo, a Computer Engineering student focused on front-end development, practical student tools, and technical project presentation.

Live site: https://justinlorenzo.vercel.app

## Design Direction

This revision is inspired by the calm editorial language of `alchaincyf/huashu-design`: warm off-white surfaces, subtle gold accents, thin borders, soft shadows, light typography, and generous whitespace.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Vercel Serverless Functions
- Resend

## Pages

- Home: short professional introduction and quick highlights
- About: profile, focus areas, and tools
- Work: selected project cards with summaries and stacks
- Resume: education, experience, contributions, and skills
- Notes: short writing prompts for future blog entries
- Contact: direct links and backend-powered contact form

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Contact Form Environment

The contact form posts to `/api/contact` and sends email through Resend.

Set these variables in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=johnjustinrl15@gmail.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

For production, replace `CONTACT_FROM_EMAIL` with a verified sender/domain in Resend.

## Suggested Next Updates

- Add live demo links for each project.
- Add individual GitHub repository links per project.
- Replace placeholder project screenshots with polished case-study images.
- Add a downloadable resume PDF if you want the resume button to link to a file.
