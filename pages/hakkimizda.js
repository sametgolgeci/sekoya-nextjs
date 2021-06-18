import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Hakkımızda</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a><img className="sidebar-logo-img sidebar-logo-1" src="sekoya-logo.png" alt="sekoya-logo"/></a></Link>
          </div>
          <div className="sidebar-mobil">
            <div className="mobil-logo">
              <Link href="/"><a><img className="mobil-logo-img" src="sekoya-logo-2.png" alt="sekoya-logo"/></a></Link>
            </div>
            <div className="mobil-nav">
              <button><FontAwesomeIcon className="dropdown-item" icon={faBars}/></button>
              <nav>
                <ul>
                  <li className="sidebar-item active">
                    <Link href="/hakkimizda">Hakkımızda</Link>
                  </li>
                  <li className="sidebar-item">
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
                <div className="sidebar-social-mobil">
                  <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
                  <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
                  <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
                </div> 
              </nav>
            </div>
          </div>
          <div className="sidebar-items">
            <ul>
              <li className="sidebar-item active">
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li className="sidebar-item">
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
            <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 hakkimizda">
          <h1>Hakkımızda</h1>
          <h2 className="hakkimizda-web">SEKOYA, farklı disiplinlerde eğitim almış<br/>ve alanında uzman kişilerin bir araya gelmesi ile<br/>ortaya çıkmıştır. Ahşap işçiliğini, özgün tasarım<br/>ve kurumsal süreç yönetimi ile birleştirmeyi hedefleyen<br/>yenilikçi bir ahşap tasarım atölyesidir.</h2>
          <h2 className="hakkimizda-mobil">SEKOYA, farklı disiplinlerde eğitim almış ve alanında uzman kişilerin bir araya gelmesi ile ortaya çıkmıştır. Ahşap işçiliğini, özgün tasarım ve kurumsal süreç yönetimi ile birleştirmeyi hedefleyen yenilikçi bir ahşap tasarım atölyesidir.</h2>
          <h3>Ekibimiz, tasarım ve üretim süreçlerinde uzun yıllar tecrübe edinmiş ve kendini ispatlamış insanların yanı sıra, tüm bu süreçleri profesyonel ve şeffaf bir yönetim anlayışı ile, güvenilir ve kaliteli bir hizmete dönüştürmeyi amaçlayan dinamik üyelerden oluşmaktadır.</h3>
          <h3>Firmamız, iş ortaklarımıza hizmeti alım sürecinin her aşamasında uzmanlık sağlayarak, memnuniyeti en üst seviyeye çıkarmayı hedeflemektedir.</h3>
        </div>
      </main>
    </div>
  )  
}