import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = { styles.container } >
        <
        Head >
        <
        title > Create Next App < /title> <
        link rel = "icon"
        href = "/favicon.ico" / >
        <
        /Head>

        <
        main className = { styles.main } >
        <
        h1 className = { styles.title } >
        Hello Ana!
        <
        /h1>

        <
        p className = { styles.description } >
        This is what I want to play with { ' ' } <
        code className = { styles.code } > pages / index.js < /code> <
        /p>

        <
        div className = { styles.grid } >
        <
        a href = "https://nedo-hello.pages.dev/"
        className = { styles.card } >
        <
        h3 > Choose template static site & rarr; < /h3> <
        p > Choose a simle site
        for your business marketing < /p> <
        /a>

        <
        a href = "https://nedo-hello.pages.dev/"
        className = { styles.card } >
        <
        h3 > Choose template dynamic site & rarr; < /h3> <
        p > If you want to make your site funky < /p> <
        /a>

        <
        a href = "https://nedo-hello.pages.dev/"
        className = { styles.card } >
        <
        h3 > You have application an application but cannot deploy & rarr; < /h3> <
        p >
        Find server and CICD
        for your application all in once place. <
        /p> <
        /a> <
        /div> <
        /main>

        <
        footer className = { styles.footer } >
        <
        a href = "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target = "_blank"
        rel = "noopener noreferrer" >
        Powered by { ' ' } <
        img src = "/vercel.svg"
        alt = "Vercel Logo"
        className = { styles.logo }
        /> <
        /a> <
        /footer> <
        /div>
    )
}