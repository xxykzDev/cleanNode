
import express from 'express';
import { setupSwagger } from './swagger';
import helloWorldRoutes from './presentation/routes/helloWorld.routes';

const app = express();
const port = 3000;

// Setup Swagger middleware
setupSwagger(app);

// Use your Hello World route here...
app.use('/api', helloWorldRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
