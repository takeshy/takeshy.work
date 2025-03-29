import Link from 'next/link'
import Image from 'next/image'

export default function Policy() {
    return (
        <main>
            <header className="fixed w-full top-0 bg-white shadow-md z-50">
                <div className="container mx-auto px-5">
                    <div className="flex justify-between items-center py-3">
                        <div className="flex items-center">
                            <Image
                                src="/takeshy_logo.png"
                                alt="takeshy.work"
                                width={150}
                                height={40}
                                priority
                            />
                        </div>
                        <nav>
                            <Link href="/" className="text-[#2E3192] hover:text-[#00A99D] font-medium transition-colors ml-5">
                                ホーム
                            </Link>
                            <Link href="/policy" className="text-[#2E3192] hover:text-[#00A99D] font-medium transition-colors ml-5">
                                プライバシーポリシー
                            </Link>
                            <Link href="/terms" className="text-[#2E3192] hover:text-[#00A99D] font-medium transition-colors ml-5">
                                利用規約
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-5">
                <div className="mt-32 mb-20 bg-gray-800 text-white rounded-lg p-10 shadow-sm">
                    <h1 className="text-4xl font-bold text-center text-white mb-8">プライバシーポリシー</h1>

                    <p className="mb-6">株式会社takeshy.work（以下、「当社」といいます。）は、お客様の個人情報保護の重要性を認識し、適切な個人情報の取り扱いと保護に努めます。当社のプライバシーポリシーは以下の通りです。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">1. 個人情報の定義</h2>
                    <p>本プライバシーポリシーにおいて、個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を指します。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">2. 個人情報の収集方法</h2>
                    <p>当社は、以下の方法により個人情報を取得します：</p>
                    <ul className="list-disc ml-6 mt-4">
                        <li className="mb-2">お問い合わせフォームからの情報</li>
                        <li className="mb-2">サービス申込時の登録情報</li>
                        <li className="mb-2">メールや電話によるお問い合わせ</li>
                        <li className="mb-2">イベントやセミナーへの参加登録情報</li>
                        <li className="mb-2">当社ウェブサイトの訪問・利用時に収集される情報</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">3. 収集する個人情報の種類</h2>
                    <p>当社が収集する情報には、以下のものが含まれます：</p>
                    <ul className="list-disc ml-6 mt-4">
                        <li className="mb-2">氏名</li>
                        <li className="mb-2">会社名・部署名</li>
                        <li className="mb-2">電話番号</li>
                        <li className="mb-2">メールアドレス</li>
                        <li className="mb-2">住所</li>
                        <li className="mb-2">当社サービスの利用情報</li>
                        <li className="mb-2">お支払い情報</li>
                        <li className="mb-2">ウェブサイト閲覧履歴（Cookie等を通じて収集）</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">4. 個人情報の利用目的</h2>
                    <p>当社は、取得した個人情報を以下の目的のために利用します：</p>
                    <ul className="list-disc ml-6 mt-4">
                        <li className="mb-2">お問い合わせへの回答やサポートの提供</li>
                        <li className="mb-2">サービス提供及びその向上</li>
                        <li className="mb-2">契約の履行および管理</li>
                        <li className="mb-2">新サービスや機能の開発</li>
                        <li className="mb-2">サービスに関する情報の提供</li>
                        <li className="mb-2">マーケティング活動の実施</li>
                        <li className="mb-2">統計データの作成と分析</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">5. 個人情報の第三者提供</h2>
                    <p>当社は、以下の場合を除き、お客様の個人情報を第三者へ提供することはありません：</p>
                    <ul className="list-disc ml-6 mt-4">
                        <li className="mb-2">お客様の同意がある場合</li>
                        <li className="mb-2">法令に基づく場合</li>
                        <li className="mb-2">人の生命、身体または財産の保護のために必要がある場合</li>
                        <li className="mb-2">公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                        <li className="mb-2">国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                        <li className="mb-2">業務委託先に対して委託業務の遂行に必要な範囲内で提供する場合（この場合、委託先に対しても適切な管理を要求します）</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">6. 個人情報の安全管理</h2>
                    <p>当社は、個人情報の漏洩、滅失、き損を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。個人情報を取り扱う従業員に対しては、個人情報保護の重要性を周知徹底するとともに、適切な教育を行います。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">7. Cookieの使用について</h2>
                    <p>当社ウェブサイトでは、お客様の利便性向上やウェブサイトの改善のためにCookieを使用することがあります。Cookieとは、ウェブサイトがお客様のコンピュータやモバイル端末に保存する小さなテキストファイルで、お客様のブラウザ設定によりCookieの受け入れを拒否することも可能です。ただし、Cookieを拒否した場合、当ウェブサイトの一部の機能が正常に動作しない場合があります。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">8. お客様の権利</h2>
                    <p>お客様は、当社が保有するご自身の個人情報について、開示、訂正、追加、削除、利用停止または消去を請求することができます。請求を行う場合は、下記の連絡先までご連絡ください。ご本人確認のうえ、合理的な期間内に対応いたします。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">9. プライバシーポリシーの変更</h2>
                    <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイト上に掲載された時点から効力を生じるものとします。重要な変更がある場合は、当ウェブサイト上で通知します。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D] text-white">10. お問い合わせ先</h2>
                    <p>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
                    <p className="mt-4">
                        株式会社takeshy.work<br />
                        個人情報保護管理者：個人情報保護責任者<br />
                        住所：[会社の住所]<br />
                        電話番号：[会社の電話番号]<br />
                        メールアドレス：[会社のメールアドレス]
                    </p>

                    <p className="text-right italic text-gray-600 mt-12">最終更新日：2025年3月16日</p>

                    <Link href="/" className="inline-flex items-center text-white hover:text-[#00A99D] font-medium mt-6">
                        <i className="fas fa-arrow-left mr-2"></i> ホームに戻る
                    </Link>
                </div>
            </div>

            <footer className="bg-[#212529] text-white py-12">
                <div className="container mx-auto px-5 text-center">
                    <div className="mb-4">
                        <Image
                            src="/takeshy_logo.png"
                            alt="takeshy.work"
                            width={150}
                            height={40}
                            className="mx-auto"
                            priority
                        />
                    </div>
                    <p className="text-gray-300">© 2025 takeshy.work All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    )
}

export const metadata = {
    title: 'takeshy.work - プライバシーポリシー',
    description: 'takeshy.workのプライバシーポリシーについてご案内いたします。',
}
