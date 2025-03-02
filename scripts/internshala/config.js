require('dotenv').config({ path: './config/credentials.env' });

if (!process.env.INTERNSHALA_EMAIL || !process.env.INTERNSHALA_PWD) {
    throw new Error("Environment variables for email and password are not set!");
}

module.exports = {
    email: process.env.INTERNSHALA_EMAIL,
    password: process.env.INTERNSHALA_PWD,
};