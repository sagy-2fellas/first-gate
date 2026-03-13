import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);
    const canvasRef = useRef(null);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch {
                return { user: null, isAuthenticated: false };
            }
        }
    });

    // Subtle animated grid / particles on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let w, h;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const COLS = 24;
        const ROWS = 14;
        const dots = [];
        for (let r = 0; r <= ROWS; r++) {
            for (let c = 0; c <= COLS; c++) {
                dots.push({ c, r, phase: Math.random() * Math.PI * 2 });
            }
        }

        let t = 0;
        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            t += 0.008;
            const cellW = w / COLS;
            const cellH = h / ROWS;

            dots.forEach(d => {
                const x = d.c * cellW;
                const y = d.r * cellH;
                const alpha = 0.06 + 0.08 * Math.sin(t + d.phase);
                ctx.beginPath();
                ctx.arc(x, y, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(190,170,109,${alpha})`;
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Animated grid canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Top-left brand */}
            <div className="absolute top-8 left-8 md:left-12">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 border border-[#BEAA6D]/60 flex items-center justify-center group-hover:border-[#BEAA6D] transition-colors duration-300">
                        <span className="text-[#BEAA6D] text-xs font-light tracking-widest">FG</span>
                    </div>
                    <span className="text-[#F5F3EF]/40 text-xs tracking-[0.3em] uppercase group-hover:text-[#F5F3EF]/70 transition-colors duration-300">
                        First Gate
                    </span>
                </a>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Large 404 */}
                <div className="mb-8 select-none">
                    <span
                        className="text-[22vw] md:text-[18vw] font-light leading-none tracking-tighter"
                        style={{
                            WebkitTextStroke: '1px rgba(190,170,109,0.25)',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        404
                    </span>
                </div>

                {/* Divider */}
                <div className="w-16 h-[1px] bg-[#BEAA6D]/40 mx-auto mb-8" />

                {/* Message */}
                <p className="text-[#BEAA6D] text-xs tracking-[0.4em] uppercase mb-4">
                    Page Not Found
                </p>
                <p className="text-[#F5F3EF]/40 text-base font-light leading-relaxed mb-12">
                    The page{pageName ? <> "<span className="text-[#F5F3EF]/70">{pageName}</span>"</> : ''} could not be located.<br />
                    It may have been moved or no longer exists.
                </p>

                {/* Admin note */}
                {isFetched && authData?.isAuthenticated && authData?.user?.role === 'admin' && (
                    <div className="mb-10 inline-block border border-[#38383A]/60 px-5 py-3 text-left">
                        <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-1">Admin Note</p>
                        <p className="text-[#F5F3EF]/40 text-xs leading-relaxed">
                            This page may not have been implemented yet. Ask the AI to build it.
                        </p>
                    </div>
                )}

                {/* CTA */}
                <div>
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 border border-[#BEAA6D]/40 px-8 py-3.5 text-[#BEAA6D] text-xs tracking-[0.3em] uppercase hover:bg-[#BEAA6D] hover:text-[#0D0D0D] transition-all duration-500 group"
                    >
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m7-7-7 7 7 7" />
                        </svg>
                        Return Home
                    </a>
                </div>
            </div>

            {/* Bottom coordinates */}
            <div className="absolute bottom-8 left-8 md:left-12">
                <span className="text-[#F5F3EF]/15 text-xs tracking-[0.3em] font-light">−26.2041° S, 28.0473° E</span>
            </div>
            <div className="absolute bottom-8 right-8 md:right-12">
                <span className="text-[#F5F3EF]/15 text-xs tracking-[0.3em] font-light">ERR / 404</span>
            </div>
        </div>
    );
}