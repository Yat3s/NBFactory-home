import styles from '../styles/NBHead.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NBHead() {
    return <div className={styles.main}>
        <div className={styles.headContainer}>
            <Image src='/images/logo.png' width={138} height={64} >
            </Image>

            <div className={styles.menuContainer}>
                <Link href='/'>
                    <a className={styles.menu}>
                        Home
                    </a>
                </Link>

                <Link href='about'>
                    <a className={styles.menu}>
                        About
                    </a>
                </Link>

                <Link href='product'>
                    <a className={styles.menu}>
                        Product
                    </a>
                </Link>
            </div>
        </div>


    </div>
}