
import mongoose, { type Mongoose } from "mongoose";
import { getServerEnv } from "@/lib/env";

interface MongooseCache {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache =
  global.mongooseCache ??
  (global.mongooseCache = {
    connection: null,
    promise: null,
  });

export async function connectDB(): Promise<Mongoose> {
  // Reuse an existing connection.
  if (cached.connection?.connection.readyState === 1) {
    return cached.connection;
  }

  // Reuse an ongoing connection attempt.
  if (!cached.promise) {
    const { MONGODB_URI } = getServerEnv();

    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        maxPoolSize: 10,
        minPoolSize: 0,
        serverSelectionTimeoutMS: 15000,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 15000,
      })
      .then((connection) => connection)
      .catch((error: unknown) => {
        cached.promise = null;
        cached.connection = null;
        throw error;
      });
  }

  cached.connection = await cached.promise;

  return cached.connection;
}
