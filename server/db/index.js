import mongoose from 'mongoose';

const { MONGO_URI, TEST_MONGO_URI, NODE_ENV } = process.env;

const connect = async () => {
  try {
    const uri = NODE_ENV === 'test' ? TEST_MONGO_URI : MONGO_URI;

    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

const close = async () => {
  try {
    await mongoose.disconnect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error while disconnecting from MongoDB:', error);
    throw error;
  }
};

export { connect, close };
