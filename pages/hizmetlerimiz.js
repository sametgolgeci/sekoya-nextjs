import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Hizmetlerimiz</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a>
              <img className="sidebar-logo-img" src="sekoya-logo.png" alt="sekoya-logo"/>
            </a></Link>
          </div>
          <div className="sidebar-items">
            <ul>
              <li className="sidebar-item">
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/ekip">Ekibimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link>
              </li>
              <li className="sidebar-item active">
                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/projelerimiz">Projelerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 hizmet">
          <div className="hizmet-texts">
            <div className="hizmet-text text-1">
              <h1>Özel Tasarım Mobilya</h1>
              <h2>Mutfak, banyo dolapları, gardroplar, portmantolar, giysi & eşya dolapları, şifonyerler, konsüller, komodinler, dresuarlar, kitaplıklar, açık raf üniteleri, koltuk sandalye kanepe benzeri hareketli mobilyaların tasarımı, projelendirilmesi ve üretilmesi.</h2>
            </div>
            <div className="hizmet-text text-2">
              <h1>Mimari Tasarım ve Uygulama</h1>
              <h2>Konut, ofis, dükkan, sağlık tesisleri, otel, restoran & kafe, konferans salonu, okul vb mekanlarda iç mekan ahşap duvar, tavan kaplamaları, ahşap giydirmeler, ahşap özel tasarım strüktürel ürünlerin veya yapıların projelendirilmesi ve üretilmesi.</h2>
            </div>
            <div className="hizmet-text text-3">
              <h1>Hediyelik Eşya ve Aksesuar</h1>
              <h2>Kişilere ve kurumlara özel hediyelik eşyaların ya da özel kullanıma yönelik ürünlerin yanı sıra çeşitli ahşap süs eşyalarının tasarlanması ve imal edilmesi.</h2>
            </div>
            <div className="hizmet-img"></div>
          </div>
        </div>
      </main>
    </div>
  )  
}

