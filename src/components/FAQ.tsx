'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'Apakah tersedia kategori tiket yang berbeda?',
        answer: '  nanti dijawab sama mas pandu.',
    },
    {
        question: 'Apa Benefit membeli tiket Kategori VIP?',
        answer: 'nanti dijawab sama mas pandu.',
    },
    {
        question: 'Apakah tiket bisa direfund atau ditukar jadwal?',
        answer: 'nanti dijawab sama mas pandu.',
    },
    {
        question: 'Apakah materi yang dibawakan sama di setiap kota pertunjukan?',
        answer: 'nanti dijawab sama mas pandu.',
    },
    {
        question: 'Apakah tersedia merchandise resmi di lokasi acara?',
        answer: 'nanti dijawab sama mas pandu.',
    },
    {
        question: 'Apakah selama durasi acara full Standup Comedy?',
        answer: 'nanti dijawab sama mas pandu.',
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq-header">
                    <h2 className="section-title">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <p>
                        Pertanyaan - pertanyaan yang sering ditanyakan seputar show
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button className="faq-question" onClick={() => toggle(index)}>
                                {faq.question}
                                <span className="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-inner">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
