import app from "./src/app.js";
import { PORT } from "./src/constant.js";
import Db_Connection from "./src/db/index.js";
app.listen(PORT, () => {
  console.log(
    `hello server is running on port of 8000: http://localhost:8000 `,
  );
  Db_Connection();
});
