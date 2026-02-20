import Head from 'next/head'
import Link from 'next/link'
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Hizmetlerimiz</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/sekoya-logo-favicon-16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/sekoya-logo-favicon-32.png"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/sekoya-logo-favicon-64.png"/>
      </Head>
      <main>
        <Sidebar/>
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
              <h2>Tasarımını birlikte gerçekleştirdiğimiz hediyelik eşyalar, kişisel ürünler, süs eşyaları ve ahşap oyuncaklar sizler için atölyemizde üretilmektedir. </h2>
            </div>
            <div className="hizmet-img"></div>
          </div>
          <div className="hizmet-mobil-texts">
            <h1>Hizmetlerimiz</h1>
            <div className="hizmet-mobil-text">
              <img className="hizmet-mobil-img" src="/sekoya-hizmet-1-mobil.jpg" alt="hizmet-1"/>
              <h1>Özel Üretim Mobilya</h1>
              <h2>Özel tasarım dekorlar, sabit veya hareketli mobilyalar kullanıcı tarafından belirlenerek ya da mimarlarımız tarafından tasarlanarak  atölyemizde üretilmekte ve yerlerine montajı yapılmaktadır.</h2>
            </div>
            <div className="hizmet-mobil-text">
              <img className="hizmet-mobil-img" src="/sekoya-hizmet-2-mobil.jpg" alt="hizmet-2"/>
              <h1>Mimari Tasarım ve Uygulama</h1>
              <h2>Oteller, restoranlar, sağlık tesisleri ve konutlar gibi ahşabın girdiği tüm mekânlardaki sabit veya hareketli ahşap ürünler tasarlanmakta, detay çözümleri yapılmakta, modellemesi ve görselleştirmesi tamamlanarak uygulama aşamasına geçilmektedir.</h2>
            </div>
            <div className="hizmet-mobil-text">
              <img className="hizmet-mobil-img" src="/sekoya-hizmet-3-mobil.jpg" alt="hizmet-3"/>
              <h1>Hediyelik Eşya ve Aksesuar</h1>
              <h2>Tasarımını birlikte gerçekleştirdiğimiz hediyelik eşyalar, kişisel ürünler, süs eşyaları ve ahşap oyuncaklar sizler için atölyemizde üretilmektedir. </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}

