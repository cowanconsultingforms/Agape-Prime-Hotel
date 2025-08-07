// src/pages/faq.js
import React from "react";

export default function Faq() {
    const page = {
        position: "relative",
        minHeight: "calc(100vh - 120px)",
        width: "100%",
    };

    const videoBg = {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -2,
    };

    const wrap = {
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
    };

    const panel = {
        width: "min(900px, 95%)",
        borderRadius: "16px",
        padding: "22px",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
    };

    const btnBase = {
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(0,0,0,0.06)",
        borderRadius: "12px",
        color: "#111",
        transition: "transform 220ms ease, background 220ms ease, border-color 220ms ease",
    };

    const footerPill = {
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.25)",
        color: "#111",
        borderRadius: "8px",
        padding: "6px 10px",
        textDecoration: "none",
        display: "inline-block",
        transition: "transform 180ms ease, background 180ms ease",
    };

    const questions = [
        { q: "How to sign in?", a: "Use the Account → Sign In link in the navbar. If you forgot your password, use the reset option on the sign-in page." },
        { q: "How to register?", a: "Go to Account → Sign Up, enter your details, and verify your email if prompted." },
        { q: "How to search for housing?", a: "Visit the Rooms page, use the filters for date, number of guests, and amenities, then open a listing to view details." },
        { q: "How to search for agents?", a: "Use our Contact page to connect with concierge for curated recommendations and private bookings." },
        { q: "What are VIP listings?", a: "Exclusive suites and experiences available only to VIP members, often with extra perks." },
        { q: "Why should I pay for a VIP subscription?", a: "VIP subscribers get early access, members-only rates, and complimentary upgrades when available." },
        { q: "What's the procedure to obtain VIP membership?", a: "Apply via Account → Points or contact concierge to review qualification details." },
        { q: "What amenities are included?", a: "Spa, wellness center, infinity pool, fine dining, room service, and more." },
        { q: "Can I cancel or modify my booking?", a: "Yes, depending on policy. Go to Account → Bookings to manage your reservations." },
        { q: "Do you offer airport transfers?", a: "Yes. Private airport transfers are available—contact concierge for scheduling and rates." },
        { q: "Is breakfast included?", a: "Complimentary breakfast is included for all suite and villa guests." },
    ];

    return (
        <div style={page} className="faq-page-enter">
            {/* Fullscreen video background */}
            <video
                src="/videos/sunsetbluedark.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={videoBg}
            />

            <div style={wrap}>
                <div style={{ width: "100%", maxWidth: 840 }}>
                    <h2
                        className="faq-heading-pop"
                        style={{
                            textAlign: "center",
                            fontWeight: 800,
                            letterSpacing: "0.5px",
                            marginBottom: 14,
                        }}
                    >
                        FAQ
                    </h2>

                    <div style={panel} className="faq-panel-rise">
                        <div
                            className="accordion"
                            id="faqAccordion"
                            style={{ display: "grid", gap: 12 }}
                        >
                            {questions.map((item, i) => {
                                const collapseId = `faq${i}`;
                                const headingId = `heading${i}`;
                                return (
                                    <div
                                        key={i}
                                        className="accordion-item"
                                        style={{ border: "none", background: "transparent" }}
                                    >
                                        <h2 className="accordion-header" id={headingId}>
                                            <button
                                                className="accordion-button collapsed faq-acc-btn"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${collapseId}`}
                                                aria-expanded="false"
                                                aria-controls={collapseId}
                                                style={{ ...btnBase, boxShadow: "none" }}
                                            >
                                                {item.q}
                                            </button>
                                        </h2>
                                        <div
                                            id={collapseId}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={headingId}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body faq-body-fade" style={{ background: "transparent" }}>
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 18 }}>
                            <a href="/privacy" className="faq-pill" style={footerPill}>Privacy Policy</a>
                            <a href="/terms" className="faq-pill" style={footerPill}>Terms of Service</a>
                            <a href="/copyright" className="faq-pill" style={footerPill}>Copyright</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Local CSS for animations */}
            <style>{`
                /* page fade-in */
                .faq-page-enter {
                    animation: faqFadeIn 550ms ease both;
                }
                @keyframes faqFadeIn {
                    from { opacity: 0 }
                    to { opacity: 1 }
                }

                /* heading pop-in */
                .faq-heading-pop {
                    transform-origin: center;
                    animation: faqPop 520ms cubic-bezier(.16,.84,.44,1) 120ms both;
                }
                @keyframes faqPop {
                    0% { opacity: 0; transform: translateY(8px) scale(.98) }
                    100% { opacity: 1; transform: translateY(0) scale(1) }
                }

                /* panel rise / glass card */
                .faq-panel-rise {
                    animation: faqRise 640ms cubic-bezier(.2,.8,.2,1) 140ms both;
                }
                @keyframes faqRise {
                    0% { opacity: 0; transform: translateY(16px) }
                    100% { opacity: 1; transform: translateY(0) }
                }

                /* accordion button micro-interactions */
                .faq-acc-btn:hover {
                    transform: translateY(-1px);
                    background: rgba(255,255,255,0.18) !important;
                    border-color: rgba(0,0,0,0.12) !important;
                }
                .faq-acc-btn:focus {
                    box-shadow: 0 0 0 0.2rem rgba(255,255,255,0.25) !important;
                }

                /* fade content when opening */
                .accordion-collapse.show .faq-body-fade {
                    animation: faqBodyFade 260ms ease both;
                }
                @keyframes faqBodyFade {
                    from { opacity: 0; transform: translateY(4px) }
                    to { opacity: 1; transform: translateY(0) }
                }

                /* footer pill hover */
                .faq-pill:hover {
                    transform: translateY(-1px);
                    background: rgba(255,255,255,0.22) !important;
                }
            `}</style>
        </div>
    );
}
