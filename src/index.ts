import express from 'express';
import cors from 'cors';
import transfersRouter from './routes/transfers';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/transfers', transfersRouter);

app.get('/', (req, res) => {
  res.json({ message: 'USDC Transfers API - Powered by The Graph Subgraph' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});