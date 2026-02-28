export default function Rules() {
    const rules = [
        "Dilarang merekam acara dalam bentuk apapun saat pertunjukkan berlangsung (foto boleh, video saat musik entrance penampil juga boleh)",
        "Dilarang membawa makanan / Minuman dari luar kedalam ruang pertunjukkan",
        "Acara ini bersifat 17+ keatas, jadi dilarang membawa anak dibawah 17 Tahun ke Dalam ruang pertunjukkan",
        "Dimohon untuk menonaktifkan nada dering/alarm telfon genggam selama pertunjukkan berlangsung",
        "Dilarang merokok atau ngevape didalam ruang pertunjukkan",
        "Dilarang membawa dan menggunakan senjata tajam/api/kimia",
        "Dilarang tersinggung atas alasan apapun"
    ];

    return (
        <section className="rules" id="peraturan" style={{ padding: 'var(--section-padding)', background: 'var(--color-dark)', opacity: 0, transform: 'translateY(100px)', animation: 'scrollFadeIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationTimeline: 'view()', animationRange: 'entry 10% cover 40%' }}>
            <div className="container">
                <div className="rules-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 className="section-title">
                        PERATURAN SHOW
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-white)', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                        tata tertib yang wajib dipatuhi selama menghadiri show demi kenyamanan bersama.
                    </p>
                </div>

                <div className="rules-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {rules.map((rule, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--color-dark-medium)', padding: '16px 24px', borderRadius: 'var(--border-radius)', border: '1px solid rgba(206, 33, 33, 0.05)' }}>
                            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(206, 33, 33, 0.1)', color: 'var(--color-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
                                {idx + 1}
                            </div>
                            <p style={{ margin: 0, color: 'var(--color-white)', opacity: 0.9, lineHeight: 1.5, fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                                {rule}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
