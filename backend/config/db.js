import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

let connectionInstance = null;

const connectDB = async () => {
  if (connectionInstance) {
    console.log('MongoDB ya está conectado. Usando la misma instancia.');
    return connectionInstance;
  }

  try {
    connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    return connectionInstance;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;