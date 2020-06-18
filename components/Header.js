import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';

export default function Header() {
    return (
        <header>
            <h1>
                <Logo /> <b>k2project</b>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link href='/#who'>
                            <a>Who I am</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#how'>
                            <a>What I do</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#contact'>
                            <a>Contact me</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
