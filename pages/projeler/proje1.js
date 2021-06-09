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
        <title>Sekoya | Proje 1</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a>
             <img className="sidebar-logo-img" src="../sekoya-logo.png" alt="sekoya-logo"/>
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
        <div className="col-md-main col-sm-12 col-xs-12 proje">
          <div className="container">
            <div className="row">
              <div className="col-md-left col-sm-12 col-xs-12">
                <h1>Proje#1</h1>
                <a href="/../sekoya-bg-2.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-2.jpg" alt=""/></a>
                <a href="/../sekoya-bg-3.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-3.jpg" alt=""/></a>
                <a href="/../sekoya-bg-4.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-4.jpg" alt=""/></a>
                <a href="/../sekoya-bg-5.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-5.jpg" alt=""/></a>
                <a href="/../sekoya-bg-2.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-2.jpg" alt=""/></a>
                <a href="/../sekoya-bg-3.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-3.jpg" alt=""/></a>
                <a href="/../sekoya-bg-4.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-4.jpg" alt=""/></a>
                <a href="/../sekoya-bg-5.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-5.jpg" alt=""/></a>
                <a href="/../sekoya-bg-2.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-2.jpg" alt=""/></a>
                <a href="/../sekoya-bg-3.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-3.jpg" alt=""/></a>
                <a href="/../sekoya-bg-4.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-4.jpg" alt=""/></a>
                <a href="/../sekoya-bg-5.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-5.jpg" alt=""/></a>
                <a href="/../sekoya-bg-2.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-2.jpg" alt=""/></a>
                <a href="/../sekoya-bg-3.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-3.jpg" alt=""/></a>
                <a href="/../sekoya-bg-4.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-4.jpg" alt=""/></a>
                <a href="/../sekoya-bg-5.jpg" target="_blank"><img className="proje-img" src="../sekoya-bg-5.jpg" alt=""/></a>
              </div>
              <div className="col-md-right col-sm-12 col-xs-12 proje-right">
                <div className="proje-text">
                  <p><strong>AÇIKLAMA,Künye</strong></p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae hic laudantium fugiat alias assumenda quaerat consequatur expedita quidem ab consequuntur quis quo dolorem delectus, quia totam commodi impedit eum at.</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae hic laudantium fugiat alias assumenda quaerat consequatur expedita quidem ab consequuntur quis quo dolorem delectus, quia totam commodi impedit eum at.</p>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </main>
    </div>
  )  
}

