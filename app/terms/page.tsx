import Link from 'next/link'
import Image from 'next/image'

export default function Terms() {
    return (
        <main>

            <div className="container mx-auto px-5">
                <div className="mt-40 mb-20 bg-white">
                    <h1 className="text-4xl font-bold text-center mb-8">利用規約</h1>

                    <p className="mb-6">この利用規約（以下、「本規約」といいます）は、株式会社takeshy.work（以下、「当社」といいます）が提供するサービス（以下、「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆様（以下、「ユーザー」といいます）には、本規約に同意いただいた上で、本サービスをご利用いただきます。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第1条（適用）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                        <li className="mb-4">当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
                        <li className="mb-4">本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第2条（利用登録）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
                        <li className="mb-4">当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                            <ol className="list-decimal ml-6 mt-2">
                                <li className="mb-2">利用登録の申請に際して虚偽の事項を届け出た場合</li>
                                <li className="mb-2">本規約に違反したことがある者からの申請である場合</li>
                                <li className="mb-2">その他、当社が利用登録を相当でないと判断した場合</li>
                            </ol>
                        </li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第3条（ユーザーIDおよびパスワードの管理）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
                        <li className="mb-4">ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
                        <li className="mb-4">ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当社に故意又は重大な過失がある場合を除き、当社は一切の責任を負わないものとします。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第4条（料金および支払方法）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。</li>
                        <li className="mb-4">ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6%の割合による遅延損害金を支払うものとします。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第5条（禁止事項）</h2>
                    <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">法令または公序良俗に違反する行為</li>
                        <li className="mb-4">犯罪行為に関連する行為</li>
                        <li className="mb-4">当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                        <li className="mb-4">当社のサービスの運営を妨害するおそれのある行為</li>
                        <li className="mb-4">他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                        <li className="mb-4">不正アクセスをし、またはこれを試みる行為</li>
                        <li className="mb-4">他のユーザーに成りすます行為</li>
                        <li className="mb-4">当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                        <li className="mb-4">当社、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第6条（本サービスの提供の停止等）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                            <ol className="list-decimal ml-6 mt-2">
                                <li className="mb-2">本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                                <li className="mb-2">地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                                <li className="mb-2">コンピュータまたは通信回線等が事故により停止した場合</li>
                                <li className="mb-2">その他、当社が本サービスの提供が困難と判断した場合</li>
                            </ol>
                        </li>
                        <li className="mb-4">当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第7条（著作権）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。</li>
                        <li className="mb-4">ユーザーが本サービスを利用して投稿ないしアップロードした文章、画像、映像等の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第8条（利用制限および登録抹消）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                            <ol className="list-decimal ml-6 mt-2">
                                <li className="mb-2">本規約のいずれかの条項に違反した場合</li>
                                <li className="mb-2">登録事項に虚偽の事実があることが判明した場合</li>
                                <li className="mb-2">料金等の支払債務の不履行があった場合</li>
                                <li className="mb-2">当社からの連絡に対し、一定期間返答がない場合</li>
                                <li className="mb-2">本サービスについて、最終の利用から一定期間利用がない場合</li>
                                <li className="mb-2">その他、当社が本サービスの利用を適当でないと判断した場合</li>
                            </ol>
                        </li>
                        <li className="mb-4">当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第9条（退会）</h2>
                    <p className="mb-6">ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第10条（保証の否認および免責事項）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。</li>
                        <li className="mb-4">当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。</li>
                    </ol>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第11条（サービス内容の変更等）</h2>
                    <p className="mb-6">当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>

                    <h2 className="text-2xl font-bold mt-10 mb-5 pb-2 border-b-2 border-[#00A99D]">第12条（利用規約の変更）</h2>
                    <ol className="list-decimal ml-6 mt-4">
                        <li className="mb-4">当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                            <ol className="list-decimal ml-6 mt-2">
                                <li className="mb-2">本規約の変更がユーザーの一般の利益に適合するとき。</li>
                                <li className="mb-2">本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</li>
                            </ol>
                        </li>
                        <li className="mb-4">当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。</li>
                    </ol>

                    <p className="text-right italic text-gray-600 mt-12">最終更新日：2025年3月16日</p>

                    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#00A99D] font-medium mt-6">
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
    title: 'takeshy.work - 利用規約',
    description: 'takeshy.workの利用規約についてご案内いたします。',
}
