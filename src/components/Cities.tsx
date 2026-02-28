type CityStatus = 'available' | 'coming-soon';

interface City {
    name: string;
    venue: string;
    date: string;
    status: CityStatus;
    platform?: string;
    ticketLink?: string;
}

const cities: City[] = [
    {
        name: 'Purwokerto',
        venue: 'Venue TBA',
        date: '2 Mei 2026',
        status: 'available' as const,
        platform: 'disini',
        ticketLink: 'https://megatix.co.id/white-label/pandutour-purwokerto'
    },
    {
        name: 'Bandung',
        venue: 'Venue TBA',
        date: '9 Mei 2026',
        status: 'available' as const,
        platform: 'disini',
        ticketLink: 'https://megatix.co.id/white-label/pandutour-bandung'
    },
    {
        name: 'Jakarta',
        venue: 'Markas Comika - Jakarta',
        date: '16 Mei 2026',
        status: 'available' as const,
        platform: 'disini',
        ticketLink: 'https://megatix.co.id/white-label/pandutour-jakarta'
    },
    {
        name: 'Yogyakarta',
        venue: 'Venue TBA',
        date: '23 Mei 2026',
        status: 'available' as const,
        platform: 'disini',
        ticketLink: 'https://megatix.co.id/white-label/pandutour-yogyakarta'
    }
];

export default function Cities() {
    return (
        <section className="cities" id="kota">
            <div className="container">
                <div className="cities-header">
                    <h2 className="section-title">
                        CARA BELI TIKET SHOW
                    </h2>
                    <p>
                        pilih kota tempat kamu ingin menonton, checkout tiketnya melalui platform resmi, dan simpan e-tiketnya!
                    </p>
                </div>

                <div className="cities-grid">
                    {cities.map((city, index) => (
                        <div key={index} className="city-card">
                            <h3 className="city-name">{city.name}</h3>
                            <p className="city-venue">{city.venue}</p>
                            <p className="city-date">{city.date}</p>
                            <span className={`city-status ${city.status}`}>
                                <svg width="10" height="10" viewBox="0 0 10 10">
                                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                                </svg>
                                {city.status === 'available' ? 'Tiket Tersedia' : 'Coming Soon'}
                            </span>
                            {/* Always show a disabled button if coming soon, or an active link otherwise */}
                            <div style={{ marginTop: '24px' }}>
                                {city.status === 'available' && city.ticketLink ? (
                                    <a href={city.ticketLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '100%', textAlign: 'center', backgroundColor: 'var(--color-red)', color: 'white', padding: '12px 0', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', transition: 'var(--transition)' }}>
                                        Beli {city.platform}
                                    </a>
                                ) : (
                                    <button disabled style={{ display: 'inline-block', width: '100%', textAlign: 'center', backgroundColor: 'rgba(208, 211, 208, 0.05)', color: 'rgba(208, 211, 208, 0.4)', border: '1px solid rgba(208, 211, 208, 0.1)', padding: '12px 0', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', cursor: 'not-allowed' }}>
                                        Belum Tersedia
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
