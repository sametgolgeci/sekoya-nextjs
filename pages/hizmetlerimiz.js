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
        <title>Sekoya | Hizmetlerimiz</title>
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
                <div className="sidebar-social-mobil">
                  <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
                  <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
                  <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
                </div> 
              </nav> 
            </div>
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
            <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 hizmet">
          <div className="hizmet-texts">
            <div className="hizmet-text text-1">
              <h1>Özel Üretim Mobilya</h1>
              <h2>Özel tasarım dekorlar, sabit veya hareketli mobilyalar kullanıcı tarafından belirlenerek ya da mimarlarımız tarafından tasarlanarak  atölyemizde üretilmekte ve yerlerine montajı yapılmaktadır.</h2>
            </div>
            <div className="hizmet-text text-2">
              <h1>Mimari Tasarım ve Uygulama</h1>
              <h2>Oteller, restoranlar, sağlık tesisleri ve konutlar gibi ahşabın girdiği tüm mekânlardaki sabit veya hareketli ahşap ürünler tasarlanmakta, detay çözümleri yapılmakta, modellemesi ve görselleştirmesi tamamlanarak uygulama aşamasına geçilmektedir.</h2>
            </div>
            <div className="hizmet-text text-3">
              <h1>Hediyelik Eşya ve Aksesuar</h1>
              <h2>Tasarımını birlikte gerçekleştirdiğimiz hediyelik eşyaları, kişisel ürünleri, süs eşyalarını ve ahşap oyuncakları sizler için atölyemizde üretilmektedir.</h2>
            </div>
            <div className="hizmet-img"></div>
          </div>
          <div className="hizmet-mobil-texts">
            <h1>Hizmetlerimiz</h1>
            <div className="hizmet-mobil-text">
              <img className="hizmet-mobil-img" src="/sekoya-hizmet-1.jpg" alt="hizmet-1"/>
              <h1>Özel Üretim Mobilya</h1>
              <h2>Özel tasarım dekorlar, sabit veya hareketli mobilyalar kullanıcı tarafından belirlenerek ya da mimarlarımız tarafından tasarlanarak  atölyemizde üretilmekte ve yerlerine montajı yapılmaktadır.</h2>
            </div>
            <div className="hizmet-mobil-text">
              <img className="hizmet-mobil-img" src="/sekoya-hizmet-2.jpg" alt="hizmet-2"/>
              <h1>Mimari Tasarım ve Uygulama</h1>
              <h2>Oteller, restoranlar, sağlık tesisleri ve konutlar gibi ahşabın girdiği tüm mekânlardaki sabit veya hareketli ahşap ürünler tasarlanmakta, detay çözümleri yapılmakta, modellemesi ve görselleştirmesi tamamlanarak uygulama aşamasına geçilmektedir.</h2>
            </div>
            <div className="hizmet-mobil-text">
              <img className="hizmet-mobil-img" src="/sekoya-hizmet-3.jpg" alt="hizmet-3"/>
              <h1>Hediyelik Eşya ve Aksesuar</h1>
              <h2>Tasarımını birlikte gerçekleştirdiğimiz hediyelik eşyaları, kişisel ürünleri, süs eşyalarını ve ahşap oyuncakları sizler için atölyemizde üretilmektedir.</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}

