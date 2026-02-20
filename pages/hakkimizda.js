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
        <title>Sekoya | Hakkımızda</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/sekoya-logo-favicon-16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/sekoya-logo-favicon-32.png"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/sekoya-logo-favicon-64.png"/>
      </Head>
      <main>
        <Sidebar/>
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