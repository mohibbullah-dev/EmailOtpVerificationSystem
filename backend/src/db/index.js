import mongoose from "mongoose";
import { DB_CONNECTION_URL } from "../constant.js";

const Retry_Delay = 1000;
const Max_Retry = 3;
let id;

const Db_Connection = async (atemp = 1) => {
  try {
    await mongoose.connect(DB_CONNECTION_URL);
    console.log("dataBase is connected successfully.");
  } catch (error) {
    console.log(`DataBase connection is failed in ${atemp}: ${error.message}`);

    if (atemp <= Max_Retry) {
      clearInterval(id);
      const delay = Retry_Delay * 2 ** (atemp - 1);
      console.log(`Retrying in ${delay / 1000} seconds...`);
      id = setTimeout(() => {
        Db_Connection(atemp + 1);
      }, delay);
    } else {
      console.log(`Maximum Retrying is reached,DataBase connection failed.`);
    }
  }
};

export default Db_Connection;
