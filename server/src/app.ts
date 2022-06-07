import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`api working on http://localhost:${port}`);
});
