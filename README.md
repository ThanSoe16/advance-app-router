This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```bash
Route (app) Size First Load JS
┌ ○ / 5.44 kB 105 kB
├ ○ /\_not-found 990 B 101 kB
├ ○ /about 127 B 99.7 kB
└ ○ /dashboard 127 B 99.7 kB


- First Load JS shared by all 99.6 kB
  ├ chunks/4bd1b696-cf72ae8a39fa05aa.js 54.1 kB
  ├ chunks/964-7a34cadcb7695cec.js 43.5 kB
  └ other shared chunks (total) 1.9 kB

```

That is a first time

you can see storage size and all are server side rendering

```bash
Route (app)                                 Size  First Load JS
┌ ○ /                                    5.44 kB         105 kB
├ ○ /_not-found                            990 B         101 kB
├ ƒ /about                                 127 B        99.7 kB
└ ○ /dashboard                             127 B        99.7 kB
+ First Load JS shared by all            99.6 kB
  ├ chunks/4bd1b696-cf72ae8a39fa05aa.js  54.1 kB
  ├ chunks/964-7a34cadcb7695cec.js       43.5 kB
  └ other shared chunks (total)           1.9 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

That is a first time

you can see dynamic rendering ( f symbol )
