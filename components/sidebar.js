import Head from 'next/head'
import Link from "next/link"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream,faPeopleArrows,faDraftingCompass,faDesktop,faHammer,faTruck,faThumbsUp,faHandshake  } from '@fortawesome/free-solid-svg-icons'

export default function sidebar() {

  const router = useRouter()

  const isActive = (path) => router.asPath.startsWith(path)

  return (
    <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
      <div className="sidebar-logo">
        <Link href="/">
          <img
            className="sidebar-logo-img sidebar-logo-1"
            src="/sekoya-logo.png"
            alt="sekoya-logo"
          />
        </Link>
      </div>

      <div className="sidebar-mobil">
        <div className="mobil-logo">
          <Link href="/">
            <img
              className="mobil-logo-img"
              src="/sekoya-logo-2.png"
              alt="sekoya-logo"
            />
          </Link>
        </div>

        <details className="mobil-dropdown">
          <summary>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </summary>

          <nav tabIndex="1">
            <ul>
              <li className="sidebar-item"><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li className="sidebar-item"><Link href="/ekip">Ekibimiz</Link></li>
              <li className="sidebar-item"><Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link></li>
              <li className="sidebar-item"><Link href="/hizmetlerimiz">Hizmetlerimiz</Link></li>
              <li className="sidebar-item"><Link href="/projelerimiz">Projelerimiz</Link></li>
              <li className="sidebar-item"><Link href="/iletisim">İletişim</Link></li>
            </ul>

            <div className="sidebar-social-mobil">
              <div className="sidebar-social-item">
                <a href="https://www.instagram.com/sekoyaahsap/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div className="sidebar-social-item">
                <a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="sidebar-social-item">
                <a href="https://wa.me/905327076816" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </nav>
        </details>
      </div>

      <div className="sidebar-items">
        <ul className="sidebar-menu">
          <li className={isActive("/hakkimizda") ? "sidebar-item active" : "sidebar-item"}><Link href="/hakkimizda">Hakkımızda</Link></li>
          <li className={isActive("/ekip") ? "sidebar-item active" : "sidebar-item"}><Link href="/ekip">Ekibimiz</Link></li>
          <li className={isActive("/nasil-calisiyoruz") ? "sidebar-item active" : "sidebar-item"}><Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link></li>
          <li className={isActive("/hizmetlerimiz") ? "sidebar-item active" : "sidebar-item"}><Link href="/hizmetlerimiz">Hizmetlerimiz</Link></li>
          <li className={isActive("/projeler") ? "sidebar-item active" : "sidebar-item"}><Link href="/projelerimiz">Projelerimiz</Link></li>
          <li className={isActive("/iletisim") ? "sidebar-item active" : "sidebar-item"}><Link href="/iletisim">İletişim</Link></li>
        </ul>
      </div>

      <div className="sidebar-social">
        <div className="sidebar-social-item">
          <a href="https://www.instagram.com/sekoyaahsap/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="sidebar-social-item">
          <a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="sidebar-social-item">
          <a href="https://wa.me/905327076816" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  )
}