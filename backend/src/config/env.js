const ENV = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'dev',
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/fitness_tracker',
};

export default ENV;