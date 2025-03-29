import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const headerStyle = {
        position: 'fixed' as const,
        width: '100%',
        top: 0,
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 50
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    };

    const flexRowStyle = {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0'
    };

    const navStyle = {
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center'
    };

    const linkStyle = {
        color: '#2E3192',
        fontWeight: 500,
        marginLeft: '24px',
        transition: 'color 0.3s'
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                <div style={flexRowStyle}>
                    <div>
                        <Link href="/">
                            <Image
                                src="/takeshy_logo.png"
                                alt="takeshy.work"
                                width={150}
                                height={40}
                                priority
                            />
                        </Link>
                    </div>
                    <nav style={navStyle}>
                        <Link href="/" style={linkStyle}>
                            ホーム
                        </Link>
                        <Link href="/policy" style={linkStyle}>
                            プライバシーポリシー
                        </Link>
                        <Link href="/terms" style={linkStyle}>
                            利用規約
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
