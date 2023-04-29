import type {AppProps} from 'next/app';
import '@/styles/globals.css';
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}
