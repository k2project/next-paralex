import Head from 'next/head';
import { Fragment } from 'react';
// import '../styles/styles.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Demo</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>
                <Section cls='top'>
                    <h2 className='paralex-title'>Business like no others</h2>
                    <p className='paralex-subtitle'>
                        You can say what you want here. Just sell it!
                    </p>
                    <div className='btn-box'>
                        <button className='btn btn--theme'>Take action</button>
                    </div>
                </Section>
                <Section cls='middle'>
                    <h2 className='paralex-title'>Navigate to Success</h2>
                    <p className='paralex-subtitle'>
                        You can say what you want here. Just sell it!
                    </p>
                    <div className='btn-box'>
                        <button className='btn btn--theme'>Other Action</button>
                    </div>
                </Section>
                <Section cls='bottom'>
                    <h2 className='paralex-title'>Stay Connected</h2>
                    <p className='paralex-subtitle'>
                        You can say what you want here. Just sell it!
                    </p>
                    <div className='btn-box'>
                        <button className='btn btn--theme'>Take action</button>
                    </div>
                </Section>
            </main>
            <Footer />
        </Fragment>
    );
}
