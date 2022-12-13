import Head from 'next/head';
import Image from 'next/image';
import { Avatar, Navbar, useTheme } from '@nextui-org/react';
import styles from './layout.module.css';
import Link from 'next/link';


const name = 'Nathan Cuevas';
export const siteTitle = 'CS50 Final Project';

export default function Layout({ children, home, calendar, title, description }) {
    const { isDark } = useTheme()
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar
                variant={"sticky"}
                shouldHideOnScroll
                isBordered={isDark}
            >
                <Navbar.Brand>
                    <Link href={"/"}>
                        <Avatar
                            priority
                            src="https://www.pngarts.com/files/4/Pokeball-Transparent.png"
                            className={styles.borderCircle}
                            size="xl"
                            alt=""
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"highlight"}>
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <div className={styles.middletitle}>
                    <h1 className={styles.title}>{title}</h1>
                    {description && <h3 className={styles.title}>{description}</h3>}
                </div>
                <div className={styles.togglebutton}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </Navbar>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}