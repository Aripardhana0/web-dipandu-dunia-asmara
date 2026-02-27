export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-foreground">
                <img src="/banner.jpeg" alt="DIPANDU DUNIA ASMARA Banner" />
            </div>

            <div className="hero-scroll-indicator">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </section>
    );
}
