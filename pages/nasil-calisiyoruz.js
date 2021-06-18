import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream,faPeopleArrows,faDraftingCompass,faDesktop,faHammer,faTruck,faThumbsUp,faHandshake  } from '@fortawesome/free-solid-svg-icons'

export default function Nasil() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Nasıl Çalışıyoruz</title>
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
                  <li className="sidebar-item active">
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
              <li className="sidebar-item active">
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
            <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 nasil">
        <h1>Nasıl Çalışıyoruz</h1>
          <div className="col-md-6 col-sm-12 col-xs-12 nasil-left">
            <div className="nasil-inside">
              <div className="nasil-items">
                <div className="nasil-item">
                  <FontAwesomeIcon className="nasil-social-item" icon={faPeopleArrows}/>
                  <h2>Ön Görüşme</h2>
                  <h3>Çalışma sürecimiz, potansiyel iş ortaklarımız ile bir araya gelerek ön görüşmenin yapılması ve bu görüşme esnasında tarafımıza aktarılan bilgiler doğrultusunda ihtiyacın ve talebin doğru bir şekilde tespit edilmesi ile başlar.</h3>
                </div>
                <div className="nasil-item">
                  <FontAwesomeIcon className="nasil-social-item" icon={faDraftingCompass}/>
                  <h2>Fikir & Tasarım</h2>
                  <h3>Gerçekleştirdiğimiz ön görüşme esnasında edindiğimiz bilgiler doğrultusunda mimarlarımız tarafından ihtiyaca yönelik özgün tasarımlar ortaya konulur.</h3>
                </div>
                <div className="nasil-item">
                  <FontAwesomeIcon className="nasil-social-item" icon={faDesktop}/>
                  <h2>Sunum</h2>
                  <h3>Tasarım aşamasından geçmiş olan fikirler, projelendirilerek ve görselleştirilerek sunum dosyası hazırlanır, sonrasında doğru bütçelendirme ile teklif dosyası iş ortağımıza iletilir.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 nasil-right">
            <div className="nasil-inside">
              <div className="nasil-items">
                <div className="nasil-item">
                  <FontAwesomeIcon className="nasil-social-item" icon={faHammer}/>
                  <h2>Üretim ve İşçilik</h2>
                  <h3>Tasarım aşamasında üretilen projelerden yola çıkarak, atölyemizdeki tecrübeli ekibimiz tarafından nitelikli işçilikle ürünler imal edilir.</h3>
                </div>
                <div className="nasil-item">
                  <FontAwesomeIcon className="nasil-social-item" icon={faTruck}/>
                  <h2>Teslimat </h2>
                  <h3>Hazırlanan son ürünler kararlaştırılan süre içerisinde tamamlanıp kullanıcıya ulaştırılır ve yerinde montajları yapılır.</h3>
                </div>
                <div className="nasil-item">
                  <FontAwesomeIcon className="nasil-social-item" icon={faHandshake}/>
                  <h2>Memnuniyet</h2>
                  <h3>Teslim edilen ürünlerde dayanıklılık, işlevsellik ve estetik olarak en doğru sonuca ulaşmış olmak ve kullanıcı tarafından olumlu geri dönüş almak birincil önceliğimizdir.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}



