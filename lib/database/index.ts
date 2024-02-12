import { error } from 'console';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MongoDB URI is missing!')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'Events',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}