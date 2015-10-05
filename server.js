import path from 'path';
import config from 'config';
import express from 'express';
import url from 'url';

const APP_PORT = config.get('server.port');

let app = express();
app.use('/assets', express.static(__dirname + '/build/assets'));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(APP_PORT, () => {
  console.log(`App server is alive on port ${APP_PORT}\n`);
});
