import mongoose, { connect } from "mongoose";
export default {
  connect: async (models) => {
    console.log("Connecting to mongodb");
    mongoose
      .connect(process.env.CONNECTION_STRING)
      .then(async () => {
        console.log("Mongodb was connected successfully");
      })
      .catch((err) => {
        console.log("error while connecting to mongodb===", err);
      });
  },
};
