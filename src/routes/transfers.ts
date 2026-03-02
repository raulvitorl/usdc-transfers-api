import { Router } from 'express';
import { client } from '../graphql/client';
import { gql } from 'graphql-request';

const router = Router();

router.get('/recent', async (req, res) => {
  const limit = parseInt(req.query.limit as string) || 10;

  const query = gql`
    query GetRecentTransfers {
      transfers(first: ${limit}, orderBy: timestamp, orderDirection: desc) {
        id
        from
        to
        value
        timestamp
        blockNumber
      }
    }
  `;

  try {
    console.log(client)
    const data = await client.request(query);
    console.log(data)
    res.json(data.transfers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transfers from subgraph' });
  }
});

// GET /api/transfers/:address?limit=10
router.get('/:address', async (req, res) => {
  const address = req.params.address.toLowerCase();
  const limit = parseInt(req.query.limit as string) || 10;

  const query = gql`
    query GetTransfersByAddress($address: Bytes!) {
      transfers(where: {or: [{from: $address}, {to: $address}]}, first: ${limit}, orderBy: timestamp, orderDirection: desc) {
        id
        from
        to
        value
        timestamp
      }
    }
  `;

  try {
    const data = await client.request(query, { address });
    res.json(data.transfers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transfers for address' });
  }
});

export default router;