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

const corsOptions={
    // origin: ["http://localhost:5173", "https://websitedevelopmentservices.vercel.app"],
    // origin: "https://websitedevelopmentservices.vercel.app",
    origin: process.env.ALLOWED_ORIGINS || "https://websitedevelopmentservices.vercel.app", // Replace with allowed origins from environment variable or default to Vercel domain
    methods: ["GET", "HEAD","PUT","PATCH","POST","DELETE"],
    Credential:true,
}

app.use(cors(corsOptions));



app.use(express.json()) // middleware for parsing JSON bodies
app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//lets define admin routes
app.use("/api/admin", adminRoute);

app.use(errorMiddleware)

const PORT =process.env.PORT || 5000;
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log('server is running on port ' + PORT);
        // console.log(`server is running on port: ${PORT}`);
    });
});