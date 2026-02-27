export default function HowToBuy() {
    return (
        <section className="howto" id="tiket">
            <div className="container">
                <div className="howto-header">
                    <h2 className="section-title">
                        CARA BELI TIKET SHOW
                    </h2>
                    <p>
                        Tiket Show Dipandu Dunia Asmara dapat dibeli melalui Megatix.
                        Ikutin langkah-langkah di bawah ini.
                    </p>
                </div>

                <div className="howto-steps">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3 className="step-title">Website Megatix</h3>
                        <p className="step-desc">
                            Masuk ke platform tiket resmi di Megatix.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3 className="step-title">Cari Show</h3>
                        <p className="step-desc">
                            Cari show DIPANDU DUNIA ASMARA.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3 className="step-title">Pilih Kota</h3>
                        <p className="step-desc">
                            Pilih tiket sesuai kota yang ingin ditonton.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-number">4</div>
                        <h3 className="step-title">Simpan E-Tiket</h3>
                        <p className="step-desc">
                            Selesaikan pembayaran dan simpan e-tiket kamu!
                        </p>
                    </div>
                </div>

                <div className="howto-cta">
                    <a
                        href="https://megatix.co.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Beli Tiket di Megatix
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
