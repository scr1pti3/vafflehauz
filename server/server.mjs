import express from 'express';
import path from 'path';

const distPath = path.resolve(process.cwd(),'dist');
console.log(distPath);
const PORT = process.env.PORT || '3000';

const app = express();

// Body Parser Middleware
app.use(express.json());
// Form x-www-urlencoded parser
app.use(express.urlencoded({ extended: false }));

app.use(express.static(distPath));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
