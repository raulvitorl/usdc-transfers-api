# USDC Transfers API

RESTful API wrapper that consumes a decentralized The Graph subgraph indexing USDC (ERC-20) Transfer and Approval events on Ethereum Sepolia testnet. Provides clean, paginated JSON endpoints for recent transfers and per-address history.

Built with Node.js, Express, TypeScript, and graphql-request. Part of a full-stack Web3 portfolio showcasing on-chain data indexing, backend integration, and decentralized querying.

## Live Demo
https://usdc-transfers-api.vercel.app/api/transfers/recent  
*(Deployed on Vercel – auto-updates on push)*

## Related Projects (Full Solution)
- **Subgraph (data source)**: [raul-erc-20-transfers-sepolia](https://github.com/raulvitorl/raul-erc-20-transfers-sepolia)  
  Decentralized indexer deployed on The Graph network (Arbitrum One) – fetches raw on-chain events.
- **Frontend Dashboard** (coming soon): Interactive dApp to visualize transfers with wallet connection.

## Features
- Queries real-time data from a live The Graph subgraph
- Endpoints for recent transfers and address-specific filtering
- TypeScript for type safety
- Environment variables for secure configuration
- CORS enabled for frontend integration
- Ready for production deployment (Vercel, Railway, Render, etc.)

## Endpoints

| Method | Endpoint                          | Description                                      | Query Params      |
|--------|-----------------------------------|--------------------------------------------------|-------------------|
| GET    | `/api/transfers/recent`           | Latest transfers (paginated)                     | `limit` (default 10) |
| GET    | `/api/transfers/:address`         | Transfers involving a specific address           | `limit` (default 10) |

Example responses return JSON arrays like:
```json
[
  {
    "id": "0xabc123...-1",
    "from": "0x123...",
    "to": "0x456...",
    "value": "1000000",
    "timestamp": "1741000000",
    "blockNumber": "10369000"
  }
]
```

## Tech Stack
- Node.js + Express
- TypeScript
- graphql-request (GraphQL client)
- dotenv (environment variables)
- CORS

## Installation & Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/raulvitorl/usdc-transfers-api.git
   cd usdc-transfers-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file in the root (copy from `.env.example` if available):
   ```
   SUBGRAPH_URL=https://gateway-arbitrum.network.thegraph.com/api/YOUR_API_KEY/subgraphs/id/YOUR_SUBGRAPH_ID
   PORT=3000
   ```

   > **Note**: Get your SUBGRAPH_URL from The Graph Studio (Endpoints tab of your published subgraph). Never commit `.env`!

4. Run locally:
   ```bash
   npm run dev
   ```

   Open http://localhost:3000/api/transfers/recent

## Deployment (Vercel – Recommended)

1. Connect your GitHub repo to Vercel.
2. Set root directory to `/` (or the api folder if monorepo).
3. Add environment variable in Vercel Settings:
   - Name: `SUBGRAPH_URL`
   - Value: your full gateway URL with API key
4. Deploy – Vercel auto-detects and builds.

## Contributing / Next Steps
- Add more filters (by date, value range)
- Rate limiting & caching
- Authentication for private endpoints
- Integrate with frontend dashboard

Feel free to open issues or PRs!

Part of a complete Web3 portfolio – check the subgraph repo for the full data pipeline.

Made with ❤️ and coffee ☕