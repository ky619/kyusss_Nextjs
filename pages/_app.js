import Layout from "../components/Layout";
import "../styles/globals.css";
import express from "express";

const app = express();
const {expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
app.use(expressCspHeader({
    directives: {
        'img-src': [SELF, INLINE, "https://image.tmdb.org/t/p/w500"],
    }
}));

export default function App({Component, pageProps}){
    return (
     <Layout>
        <Component {...pageProps} />
     </Layout>
    );
}