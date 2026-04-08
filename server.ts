import app from "./config/app";
import env from './environment';

const cors = require('cors');
const PORT = env.getPort();

app.listen(PORT, () => {
  console.log('PortCityBPO server listening on port : ' + PORT);
});
