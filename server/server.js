require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express()
const authRoutes = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router')
const adminRoute = require('./router/admin-router')
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");



function corsMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://websitedevelopmentservices.vercel.app'); // Replace with your Vercel domain
    res.setHeader('Access-Control-Allow-Methods', "GET", "HEAD","PUT","PATCH","POST","DELETE"); // Common HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Common allowed headers
    next();
  }

const corsOptions={
    origin: ["http://localhost:5173", "https://websitedevelopmentservices.vercel.app"],
    // origin: "https://websitedevelopmentservices.vercel.app",
    // origin:"https://websitedevelopmentservices.vercel.app", // Replace with allowed origins from environment variable or default to Vercel domain
    methods: ["GET", "HEAD","PUT","PATCH","POST","DELETE"],
    Credential:true,
}

app.use(cors(corsOptions));



app.use(express.json()) // middleware for parsing JSON bodies
app.use("/api/auth",corsMiddleware, authRoutes);
app.use("/api/form",corsMiddleware, contactRoute);
app.use("/api/data",corsMiddleware, serviceRoute);

//lets define admin routes
app.use("/api/admin", corsMiddleware, adminRoute);

app.use(errorMiddleware)

const PORT =process.env.PORT || 5000;
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log('server is running on port ' + PORT);
        // console.log(`server is running on port: ${PORT}`);
    });
});