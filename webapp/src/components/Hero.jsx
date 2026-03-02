import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const text3Ref = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                [text1Ref.current, text2Ref.current, text3Ref.current],
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 },
                0.5
            );

            tl.fromTo(
                ctaRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                1.1
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100dvh] flex items-end pb-24 px-8 md:px-16 overflow-hidden bg-[#0D0D12]"
        >
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=2000")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/70 to-[#0D0D12]/20"></div>
            </div>

            {/* Content in the bottom third left */}
            <div className="relative z-10 w-full max-w-4xl text-[#FAF8F5]">
                <div className="mb-8">
                    <p ref={text1Ref} className="text-xl md:text-2xl font-mono text-[#C9A84C] mb-4 uppercase tracking-widest">
                        JobCourier
                    </p>
                    <h1 className="leading-none tracking-tighter overflow-hidden">
                        <span ref={text2Ref} className="block text-4xl md:text-6xl font-bold font-sans mb-2">
                            Il portale svizzero per
                        </span>
                        <span ref={text3Ref} className="block text-6xl md:text-8xl mt-2 font-drama italic text-[#C9A84C]">
                            il tuo prossimo lavoro.
                        </span>
                    </h1>
                </div>

                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6 mt-12">
                    <button className="w-full sm:w-auto overflow-hidden rounded-full bg-[#C9A84C] px-8 py-4 text-base font-semibold text-[#0D0D12] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
                        Inizia la ricerca
                    </button>
                    <p className="text-sm font-mono text-[#FAF8F5]/60 max-w-xs">
                        Un click per connettere talento e opportunità in tutta la Svizzera.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
