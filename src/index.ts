import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const port = process.env.PORT_NUMBER || 3000;

app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
  const data = { message: 'app is running', status: 200 };
  res.status(200).json(data);
});

app.listen(port, () => {
  try {
    console.log(`Server is running at http://localhost:${port}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
});
