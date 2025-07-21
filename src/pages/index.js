import MainP from "@/components/MainPage";
import Splash from "@/components/splash_screen";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home(){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const redirector = () =>{
            setLoading(false);
        }
        if(document.readyState==='complete'){
                redirector();
        }else{
            window.addEventListener('load',redirector);
            return ()=>{window.removeEventListener('load',redirector)};
        }
    },[])
    return <>
        <Head>
            <title>ARUN - Design, Develop & Defend</title>
            <link rel="icon" href="/logo.png" />
            <meta name="description" content="Arun's Personal portfolio webpage for personal introduction and showcasing skills." />
        </Head>
        {loading ? <Splash /> : <MainP />}
    </>
}