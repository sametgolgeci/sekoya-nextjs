import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Ekip() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Ekibimiz</title>
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
              <li className="sidebar-item active">
                <Link href="/ekip">Ekibimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link>
              </li>
              <li className="sidebar-item">
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
        <div className="col-md-main col-sm-12 col-xs-12 ekip">
          <h1>Ekibimiz</h1>
          <div className="container">
            <div className="ekip-items">
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="sekoya-home-1.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Kadir Yasin Karali, <span>Mimar</span></h2>
                  <h3>İstanbul Teknik Üniversitesi Mimarlık bölümünden 2007 yılında mezun oldu. O günden beri çeşitli projelendirme ve uygulama süreçlerinde görev yapmaktadır. Okul yıllarından beri süregelen ağaç ve ahşaba olan ilgisi; tecrübeli ve profesyonel bir tasarım, üretim ve işletme ekibiyle birleşerek  “Sekoya” adıyla devam etmektedir.</h3>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="sekoya-bg-2.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Kadir Yasin Karali, <span>Mimar</span></h2>
                  <h3>İstanbul Teknik Üniversitesi Mimarlık bölümünden 2007 yılında mezun oldu. O günden beri çeşitli projelendirme ve uygulama süreçlerinde görev yapmaktadır. Okul yıllarından beri süregelen ağaç ve ahşaba olan ilgisi; tecrübeli ve profesyonel bir tasarım, üretim ve işletme ekibiyle birleşerek  “Sekoya” adıyla devam etmektedir.</h3>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="sekoya-bg-3.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Kadir Yasin Karali, <span>Mimar</span></h2>
                  <h3>İstanbul Teknik Üniversitesi Mimarlık bölümünden 2007 yılında mezun oldu. O günden beri çeşitli projelendirme ve uygulama süreçlerinde görev yapmaktadır. Okul yıllarından beri süregelen ağaç ve ahşaba olan ilgisi; tecrübeli ve profesyonel bir tasarım, üretim ve işletme ekibiyle birleşerek  “Sekoya” adıyla devam etmektedir.</h3>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="sekoya-bg-4.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Kadir Yasin Karali, <span>Mimar</span></h2>
                  <h3>İstanbul Teknik Üniversitesi Mimarlık bölümünden 2007 yılında mezun oldu. O günden beri çeşitli projelendirme ve uygulama süreçlerinde görev yapmaktadır. Okul yıllarından beri süregelen ağaç ve ahşaba olan ilgisi; tecrübeli ve profesyonel bir tasarım, üretim ve işletme ekibiyle birleşerek  “Sekoya” adıyla devam etmektedir.</h3>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="sekoya-bg-5.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Kadir Yasin Karali, <span>Mimar</span></h2>
                  <h3>İstanbul Teknik Üniversitesi Mimarlık bölümünden 2007 yılında mezun oldu. O günden beri çeşitli projelendirme ve uygulama süreçlerinde görev yapmaktadır. Okul yıllarından beri süregelen ağaç ve ahşaba olan ilgisi; tecrübeli ve profesyonel bir tasarım, üretim ve işletme ekibiyle birleşerek  “Sekoya” adıyla devam etmektedir.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}


