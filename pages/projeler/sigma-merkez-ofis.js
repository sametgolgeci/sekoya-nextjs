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
        <title>Sekoya | Sigma Merkez Ofis</title>
        <script type="text/javascript" src="../static/main.js"></script>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a><img className="sidebar-logo-img sidebar-logo-1" src="../sekoya-logo.png" alt="sekoya-logo"/></a></Link>
          </div>
          <div className="sidebar-mobil">
            <div className="mobil-logo">
              <Link href="/"><a><img className="mobil-logo-img" src="../sekoya-logo-2.png" alt="sekoya-logo"/></a></Link>
            </div>
            <details className="mobil-dropdown">
              <summary>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </summary>
              <nav tabindex="1">
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
            </details>
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
        <div className="col-md-main col-sm-12 col-xs-12 proje">
        <h1>Sigma Merkez Ofis</h1>
          <div className="container">
            <div className="row proje-inline">
              <div className="col-md-12 col-sm-12 col-xs-12 proje-right">
                <div className="proje-text">
                  <p>Sigma Mühendislik firmasının İstanbul Balmumcu’da bulunan merkez ofisi için bir çok ürün üretilmiş ve montajları tamamlanmıştır. Toplam dört katta bulunan asansör önlerindeki kat hollerinin duvarlarında; üzerinde füme renk aynaların, lake boyalı giydirmelerin, firma logo ve kat numaralarının bulunduğu ışıklı tabelaların olduğu paneller hazırlanmıştır.Her katta ofis iç tasarımına uygun kafe tezgah ve dolapları, minderli oturma birimleri, kilitli dolaplar, mutfak dolapları vb. özel işler yerine uygun özel ölçüde ağırlıklı olarak su kontrası ve kaplamalı ürünlerden su bazlı cila ve lake boyalı olarak hazırlanmış ve ofis kullanıcılarının hizmetine sunulmuştur.</p>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="proje-list">
                  <a href="/../proje_07/SIGMA_01.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_01.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_02.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_02.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_03.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_03.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_04.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_04.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_05.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_05.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_06.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_06.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_07.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_07.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_08.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_08.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_09.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_09.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_10.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_10.jpg" alt="Sigma Merkez Ofis"/></a>
                  <a href="/../proje_07/SIGMA_11.jpg" target="_blank"><img className="proje-img" src="../proje_07/SIGMA_11.jpg" alt="Sigma Merkez Ofis"/></a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </main>
    </div>
  )  
}

