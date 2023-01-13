## Getting Started

Create a project using this example:

```bash
npx web3sdks create --template dynamic-pricing
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

On `pages/_app.js`, you'll find our `Web3sdksProvider` wrapping your app, this is necessary for our hooks to work.

on `pages/index.js`, you'll find the `useMetamask` hook that we use to connect the user's wallet to MetaMask, `useDisconnect` that we use to disconnect it, and `useAddress` to check the user's wallet address once connected. 

## Learn More

To learn more about web3sdks and Next.js, take a look at the following resources:

- [web3sdks React Documentation](https://docs.web3sdks.com/react) - learn about our React SDK.
- [web3sdks JavaScript Documentation](https://docs.web3sdks.com/react) - learn about our JavaScript/TypeScript SDK.
- [web3sdks Portal](https://docs.web3sdks.com/react) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the web3sdks GitHub organization](https://github.com/web3sdks) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/KX2tsh9A](https://discord.gg/KX2tsh9A).
