import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

dotenv.config();

const SUBGRAPH_URL = process.env.SUBGRAPH_URL;

if (!SUBGRAPH_URL) {
  throw new Error('SUBGRAPH_URL não encontrado. Verifique o arquivo .env');
}

export const client = new GraphQLClient(SUBGRAPH_URL);