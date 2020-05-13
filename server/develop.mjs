import express from 'express';
import path from 'path';

import routes from './routes.mjs';


const distPath = path.resolve(process.cwd(),'dist');
const PORT = process.env.PORT || '3000';

const app = express();

// Body Parser Middleware
app.use(express.json());
// Form x-www-urlencoded parser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/', routes);

app.use(express.static(distPath));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
