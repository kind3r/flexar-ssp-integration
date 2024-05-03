# Flexar subscriptions integration

Example usage of [@flexar/sdk](https://www.npmjs.com/package/@flexar/sdk) hook `useSSP` in a custom [Next.js](https://nextjs.org/) app.  

**Important files:**
- [app/layout.tsx](./app/layout.tsx) - Root layout, includes bootstrap, react-hot-toast container and sets the body theme to dark
- [app/page.tsx](./app/page.tsx) - Generic container and setup the `@solana/wallet-adapter-react`
- [app/SubscriptionPassesCards.tsx](./app/SubscriptionPassesCards.tsx) - Makes use of `useSSP` hook to show information about the available subscription options and offer the subscribe action

**Application layout:**
```html
<RootLayout> <!-- app/layout.tsx -->
  <BootstrapClient /> <!-- components/BootstrapClient -->
  <Toaster /> <!-- react-hot-toast -->
  <Home> <!-- app/page.tsx -->
    <WalletContext> <!-- components/WalletContext.tsx -->
      <WalletButton /> <!-- components/WalletButton.tsx -->
      <SubscriptionPassesCards /> <!-- app/SubscriptionPassesCards.tsx -->
    </WalletContext>
  </Home>
</RootLayout>
```

## Dependencies:
Minimum requirements for `@flexar/sdk`:
- `@solana/wallet-adapter-react`
- `@solana/web3.js`

## Layout dependencies:
Only required for this reference implementation [app/SubscriptionPassesCards.tsx](./app/SubscriptionPassesCards.tsx):
- `@solana/wallet-adapter-base`
- `@solana/wallet-adapter-react-ui`
- `@solana/wallet-adapter-wallets`
- `bootstrap` - used to create a simple card based layout
- `sass` - dev only, used to customize bootstrap
- `dayjs` - used to parse unix timestamps into user readable dates
- `react-hot-toast` - used to show progress during subscribe action

## Configuration `.env`
`NEXT_PUBLIC_SSP_APIKEY` - Project's API key

# Standard Next.js app README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
