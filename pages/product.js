
import Head from 'next/head'
import NBHead from '../components/head'
import Image from 'next/image'
import ReactFullpage from '@fullpage/react-fullpage';
import styles from '../styles/Product.module.css'
import ReactPlayer from 'react-player';

const productItemInterval = 100;
let videoPlaying = false;

function onLeave(origin, destination, direction) {
    let reachingIndex = destination.index;

    if (reachingIndex == 4) {
        videoPlaying = true;
        const videoElement = document.getElementById('nbVideoId').getElementsByTagName('video')[0];
        videoElement.setAttribute('data-autoplay', '')
        videoElement.play();
    }
}

function animateProduct(productListId, productImgId, productTitleId) {
    const productItems = document.getElementById(productListId).childNodes;
    const productImg = document.getElementById(productImgId);
    const productTitle = document.getElementById(productTitleId);
    setTimeout(() => {
        productTitle.classList.add('animate__animated');
        productTitle.classList.add('animate__fadeIn');
    }, 100);

    for (const [index, child] of productItems.entries()) {
        setTimeout(() => {
            child.classList.add('animate__animated');
            child.classList.add('animate__fadeIn');
        }, index * productItemInterval);
    }

    setTimeout(() => {
        productImg.classList.add('animate__animated');
        productImg.classList.add('animate__fadeIn');
    }, productItems.length * productItemInterval);
}

function afterLoad(origin, destination, direction) {
    const loadIndex = destination.index;

    if (loadIndex == 0) {
        animateProduct('product1', 'productImg1', 'productTitle1');
    }

    if (loadIndex == 1) {
        animateProduct('product2', 'productImg2', 'productTitle2');
    }

    if (loadIndex == 2) {
        animateProduct('product3', 'productImg3', 'productTitle3');
    }

    if (loadIndex == 3) {
        const block1 = document.getElementById('speedBlock1');
        const fadeInStep = 300;
        if (block1.style.opacity < 1) {
            block1.style.marginTop = '0px';
            block1.style.width = '64px';
            block1.style.height = '64px';
            block1.style.opacity = 1;

            setTimeout(() => {
                block1.style.marginTop = '0px';
                block1.style.width = '240px';
                block1.style.height = '64px';
                block1.style.opacity = 1;
            }, 1000);

            fadeIn('speedBlock2', 1500);
            fadeIn('speedBlock3', 1500 + fadeInStep * 1);
            fadeIn('speedTitle', 1500 + fadeInStep * 2);
            fadeIn('speedSubTitle1', 1500 + fadeInStep * 3);
            fadeIn('speedSubTitle2', 1500 + fadeInStep * 4);
        }
    }
}

function fadeIn(elementId, delay) {
    const element = document.getElementById(elementId);

    setTimeout(() => {
        element.style.opacity = 1;
    }, delay);
}

export default function Product() {

    return <div style={{ backgroundColor: '#081508' }}>
        <Head>
            <title>Product</title>
            <meta name="description" content="Generated by NonaByte Factory" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ReactFullpage
            scrollOverflow={true}
            sectionsColor={["#081508", "#081508", "#081508", "#081508", "#081508", "#081508", "#081508", "#081508"]}
            onLeave={onLeave.bind(this)}
            afterLoad={afterLoad.bind(this)}
            anchors={['Product1', 'Product2', 'Product3', 'Speed', 'TBD', 'ContactUs']}
            navigation={true}
            navigationTooltips={['Product1', 'Product2', 'Product3', 'Speed', 'TBD', 'ContactUs']}
            render={({ state, fullpageApi }) => {
                return (
                    <div id="fullpage-wrapper">

                        {/* Product 1 */}
                        <div className="section section1">
                            <div style={{ height: '100%' }}>
                                <NBHead />
                                <div className={styles.sectionContainer}>
                                    <div>
                                        <div id='productTitle1' style={{ opacity: '0' }}>
                                            <div style={{ marginTop: '108px', display: 'flex', alignItems: 'end', fontSize: '44px', color: 'white' }}>
                                                <div>
                                                    <div className={styles.productEngTitle}>
                                                        FilNB JI QUN JIA GOU TI GONG YOU ZUI XIN YI DAI Filecoin FEN BU SHI CUN CHU CHAN PIN
                                                    </div>
                                                    <div >
                                                        FilNB 集群架构提供有最新⼀代Filecoin分布式存储产品
                                                    </div>
                                                </div>
                                                <div style={{ marginLeft: '12px', marginTop: '28px' }}>
                                                    <Image src='/images/ic_comma.png' width={46} height={32}></Image>
                                                </div>
                                            </div>
                                            <div style={{ width: '80px', height: '8px', backgroundColor: '#2ECC4F', marginTop: '28px' }} />
                                        </div>

                                        <div style={{ marginTop: '60px', display: 'flex' }}>
                                            <div id='product1' style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '500px' }} >
                                                <div className={styles.productItem}>
                                                    「GPU+CPU」<br />异构运算
                                                </div>

                                                <div className={styles.productItem}>
                                                    ⽀持C2任务<br />独⽴计算
                                                </div>

                                                <div className={styles.productItem}>
                                                    最⼤化提升<br />运作效率
                                                </div>

                                                <div className={styles.productItem}>
                                                    可灵活部署
                                                </div>

                                                <div className={styles.productItem}>
                                                    模块化分离<br /> 「计算与存储」设备
                                                </div>

                                                <div className={styles.productItem}>
                                                    ⾃研挖矿程序<br />协调调度
                                                </div>

                                                <div className={styles.productItem}>
                                                    ⾼性能<br />⾼性价⽐
                                                </div>

                                                <div className={styles.productItem}>
                                                    自由扩展
                                                </div>

                                            </div>

                                            <div id='productImg1' style={{ opacity: '0', marginLeft: '220px' }}>
                                                <Image style={{}} src='/images/product01.svg' width={674} height={460} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Product 2 */}
                        <div className="section">
                            <div className={styles.sectionContainer}>
                                <div>
                                    <div id='productTitle2' style={{ opacity: '0' }}>
                                        <div style={{ display: 'flex', alignItems: 'end', fontSize: '44px', color: 'white' }}>
                                            <div>
                                                <div className={styles.productEngTitle}>
                                                    FilNB JI QUN JIA GOU TI GONG YOU ZUI XIN YI DAI Chia FEN BU SHI CUN CHU CHAN PIN
                                                </div>
                                                FilNB 集群架构提供有最新⼀代Chia分布式存储产品
                                            </div>
                                            <div style={{ marginLeft: '12px', marginTop: '28px' }}>
                                                <Image src='/images/ic_comma.png' width={46} height={32}></Image>
                                            </div>
                                        </div>

                                        <div style={{ width: '80px', height: '8px', backgroundColor: '#2ECC4F', marginTop: '28px' }} />
                                    </div>
                                    <div style={{ marginTop: '60px', display: 'flex' }}>
                                        <div id='product2' style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '500px' }} >
                                            <div className={styles.productItem}>
                                                超大吞吐能力<br />SSD集群组合
                                            </div>

                                            <div className={styles.productItem}>
                                                绿色节能<br />高复用性
                                            </div>

                                            <div className={styles.productItem}>
                                                最⼤化提升<br />运作效率
                                            </div>

                                            <div className={styles.productItem}>
                                                可灵活部署
                                            </div>

                                            <div className={styles.productItem}>
                                                「核心数 | 内存数 」<br /> 行业领先
                                            </div>

                                            <div className={styles.productItem}>
                                                ⾃研挖矿程序<br />协调调度
                                            </div>

                                            <div className={styles.productItem}>
                                                ⾼性能<br />⾼性价⽐
                                            </div>

                                            <div className={styles.productItem}>
                                                自由扩展
                                            </div>

                                        </div>
                                        <div id='productImg2' style={{ opacity: '0', marginLeft: '220px' }}>
                                            <Image style={{}} src='/images/product02.svg' width={674} height={460} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Product 3 */}
                        <div className="section">
                            <div className={styles.sectionContainer}>
                                <div>
                                    <div id='productTitle3' style={{ opacity: '0' }}>
                                        <div style={{ display: 'flex', alignItems: 'end', fontSize: '44px', color: 'white' }}>
                                            <div>
                                                <div className={styles.productEngTitle}>
                                                    FilNB JI QUN JIA GOU TI GONG YOU ZUI XIN YI DAI Swarm FEN BU SHI CUN CHU CHAN PIN
                                                </div>
                                                FilNB 集群架构提供有最新⼀代Swarm分布式存储产品
                                            </div>
                                            <div style={{ marginLeft: '12px', marginTop: '28px' }}>
                                                <Image src='/images/ic_comma.png' width={46} height={32}></Image>
                                            </div>
                                        </div>

                                        <div style={{ width: '80px', height: '8px', backgroundColor: '#2ECC4F', marginTop: '28px' }} />
                                    </div>
                                    <div style={{ marginTop: '60px', display: 'flex' }}>
                                        <div id='product3' style={{ display: 'flex', flexDirection: 'column', height: '500px', alignItems: 'center', justifyContent: 'center' }} >
                                            <div className={styles.productItem2}>
                                                英业达独家定制<br />最优虚拟化解决方案
                                            </div>

                                            <div className={styles.productItem2}>
                                                Intel | Samsung<br />大厂直供 优选NVMeSSD
                                            </div>

                                            <div className={styles.productItem2}>
                                                领先的集群存储<br />及分发能力
                                            </div>
                                        </div>
                                        <div id='productImg3' style={{ opacity: '0', marginLeft: '80px' }}>
                                            <Image style={{}} src='/images/product03.svg' width={700} height={480} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Speed blocks */}
                        <div className="section">
                            <div className={styles.sectionContainer}>
                                <div id='speedBlock1' className={styles.block1}></div>
                                <div id='speedBlock2' className={styles.block2}></div>
                                <div id='speedBlock3' className={styles.block3}></div>

                                <div id='speedTitle' style={{ opacity: 0, transition: 'opacity 1s ease', marginTop: '110px', fontSize: '56px', fontWeight: 'bold', lineHeight: '78px' }}>
                                    进行证明速度更快<br />
                                    完成分装时间更短
                                </div>

                                <div id='speedSubTitle1' style={{ opacity: 0, transition: 'opacity 1s ease', marginTop: '168px', fontSize: '32px', fontWeight: 'bold', lineHeight: '45px' }}>
                                    官方10倍有效算力加持
                                </div>

                                <div id='speedSubTitle2' style={{ opacity: 0, transition: 'opacity 1s ease', color: '#FEFEFE', marginTop: '16px', fontSize: '20px', lineHeight: '28px', fontFamily: 'PingFangSC-Regular, PingFang SC', fontWeight: 400 }}>
                                    百P规模存储集群，高稳定大吞吐，支持无缝扩容
                                    <br />
                                    底层算法经过多轮优化改进，实测效能全网领先
                                </div>
                            </div>
                        </div>

                        {/* NB video */}
                        <div className="section">
                            <div className={styles.sectionContainer}>
                                <div style={{ }}>
                                    <ReactPlayer id='nbVideoId' config={{
                                        file: {
                                            attributes: {
                                                autoPlay: true,
                                                muted: true
                                            }
                                        }
                                    }} muted={true} width='100vw' height='100vh' url="videos/NB.mp4" playing={videoPlaying} style={{ pointerEvents: 'none' }} />
                                </div>
                            </div>
                        </div>

                        {/* Contact US */}
                        <div className="section">
                            <div className={styles.sectionContainer}>
                                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <div style={{width: '100vw', height: '100vh'}}>
                                        <Image src='/images/img_bg_contact.png' layout='fill' objectFit='fill' />
                                    </div>
                                    <div className={styles.center} style={{ width: '100%', height: '100%', zIndex: 100, position: 'absolute', left: 0, top: 0 }}>
                                        <div className={styles.contactUsTitle}>
                                            CONTACT US
                                        </div>
                                        <div className={styles.contactUsAddress}>
                                            上海市杨浦区湾谷科技园C6座701室
                                        </div>

                                        <div style={{ border: '1px solid #2ECC4F', padding: '6px 20px', color: '#0AFF3D', marginTop: '64px' }}>
                                            友情链接 <a href="http://www.imagepower.io">www.imagepower.io</a>
                                        </div>

                                        <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center' }}>
                                            <Image src='/images/ic_arrow_right.png' width={32} height={32} />

                                            <div style={{ marginLeft: '20px' }}>
                                                <Image src='/images/img_qrcode_2.png' width={100} height={100} />
                                            </div>

                                            <div style={{ marginLeft: '22px' }}>
                                                <Image src='/images/img_qrcode_1.png' width={100} height={100} />
                                            </div>

                                            <div style={{ marginLeft: '20px' }}>
                                                <Image src='/images/ic_arrow_left.png' width={32} height={32} />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }}
        />

    </div>
}