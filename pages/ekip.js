import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Ekip() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Ekibimiz</title>
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
            <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 ekip">
          <h1>Ekibimiz</h1>
          <div className="container">
            <div className="ekip-items">
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="ekip/yasin_web.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Kadir Yasin Karali, <span>Mimar</span></h2>
                  <h3>İstanbul Teknik Üniversitesi Mimarlık bölümünden 2007 yılında mezun oldu. O günden beri çeşitli projelendirme ve uygulama süreçlerinde görev yapmaktadır. Okul yıllarından beri süregelen ağaç ve ahşaba olan ilgisi; tecrübeli ve profesyonel bir tasarım, üretim ve işletme ekibiyle birleşerek  “Sekoya” adıyla devam etmektedir.</h3>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="ekip/ayse_web.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Ayşe Özdemir, <span>Mimar</span></h2>
                  <h3>Eskişehir Osmangazi Üniversitesi Mimarlık bölümünden mezun oldum. Çeşitli tasarım ve uygulama ofislerinde çalışma imkanı buldum. Eğitim ve çalışma hayatımda kazandığım tecrübeleri  Sekoya  bünyesinde devam ettirmekteyim.</h3>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="ekip/hasan_web.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Hasan Tahsin Karali, <span>İşletmeci</span></h2>
                  <h3>Boğaziçi Üniversitesi Turizm İşletmeciliğinden mezun olduktan sonra yüksek lisans eğitimimi İstanbul Teknik Üniversitesi Bölge Planlama programında tamamladım. Akademik projelerde ve özel sektörde farklı disiplinlerden insanlarla bir arada çalışma fırsatı buldum. İş hayatıma, kurumsal işletme yönetimi anlayışı ile Sekoya’ya katkı sağlayarak devam ediyorum.</h3>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="ekip/oyku_web.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Öykü Öztürk, <span>İşletmeci</span></h2>
                  <h3>Lisans ve lisansüstü eğitimimi Boğaziçi Üniversitesi’nde tamamladıktan sonra çeşitli uluslararası firmaların kurumsal satış ve kurumsal iletişim departmanlarında çalıştım. Sekoya bünyesinde işletmeci kimliğimin yanı sıra, iş ortaklarımıza çevresel olarak duyarlı ve doğa dostu bir hizmet anlayışı konusunda katkı sağlamayı hedefliyorum.</h3>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="ekip/serafettin_web.jpg" alt="sekoya-profil"/>
                </div>
                <div className="col-md-8 ekip-item-text">
                  <h2>Şerafettin Çetiner, <span>Ahşap Ustası</span></h2>
                  <h3>1976 yılında Adapazarı’nda başladığım mesleğime, 1999 yılından beri İstanbul’da devam etmekteyim. 40 yılı aşkın süredir yapmakta olduğum ahşap ustalığı süresince çeşitli ahşap atölyelerinde çalıştım. Sekoya üretim atölyesinin sorumlusu olarak ürün kalitemizi en üst düzeyde tutmayı amaçlıyorum.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}


