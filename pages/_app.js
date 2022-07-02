import Layout from "../components/Layout";
import "../styles/globals.css";
import express from "express";

const app = express();
const {expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
app.use(expressCspHeader({
    directives: {
        'img-src': ['data:', `https://image.tmdb.org/t/p/w500/${movie.poster_path}`],
    }
}));

export default function App({Component, pageProps}){
    return (
     <Layout>
        <Component {...pageProps} />
     </Layout>
    );
}