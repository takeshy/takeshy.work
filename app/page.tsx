import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.flexItems}>
            <Image
              src="/takeshy_logo.png"
              alt="takeshy.work"
              width={150}
              height={0}
              style={{ height: "auto", objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>テクノロジーで<br />ビジネスを進化させる</h1>
            <p className={styles.description}>
              takeshy.workは最新のSaaS技術と生成AIを組み合わせて、あなたのビジネスに最適なソリューションを提供します
            </p>
          </div>
        </div>
        <div className={styles.eyeCatch}>
          <Image
            src="/eye_catch.png"
            alt="Eye catch image"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>私たちのサービス</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-store"></i>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Shopifyカスタマイズ</h3>
                <p>Shopifyのextensionを活用した独自カスタマイズと、APIによる基幹システムとの連携で、迅速なECショップの立ち上げをサポートします。</p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-comments"></i>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>顧客管理ソリューション</h3>
                <p>Hubspotと連携した顧客問い合わせ管理など、既存のSaaSを活用して効率的なカスタマーサポート体制を構築します。</p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-cogs"></i>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>自動化ソリューション</h3>
                <p>Power Automateを使った各種Webサービスとの連携や、Power BIを活用したデータの可視化で業務効率化を実現します。</p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-robot"></i>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>AI活用ソリューション</h3>
                <p>生成AIを活用した企業調査レポートの作成や、応募情報のマッチング度の算出など、AIの力でビジネスの意思決定をサポートします。</p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-code"></i>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>AIベース開発</h3>
                <p>システム構築は生成AIを活用し、<span className={styles.highlight}>少人数、短期間</span>で開発を行うことでコストを極限まで抑えることができます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                src="/takeshy_logo.png"
                alt="takeshy.work"
                width={150}
                height={0}
                style={{ height: "auto", objectFit: "contain" }}
                className="mx-auto"
              />
            </div>
            <p>© 2025 takeshy.work All Rights Reserved.</p>
            <div className={styles.footerLinks}>
              <Link href="/policy" className={styles.footerLink}>
                プライバシーポリシー
              </Link>
              <Link href="/terms" className={styles.footerLink}>
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
