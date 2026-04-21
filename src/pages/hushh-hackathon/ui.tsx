import React from 'react';
import HushhTechBackHeader from '../../components/hushh-tech-back-header/HushhTechBackHeader';
import HushhTechFooter, { HushhFooterTab } from '../../components/hushh-tech-footer/HushhTechFooter';
import { useNavigate } from 'react-router-dom';

export default function HushhHackathonPage() {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
            <HushhTechBackHeader
                onBackClick={() => navigate("/")}
                rightType="hamburger"
            />

            <main className="flex-1 px-6 pb-32 flex flex-col items-center justify-center text-center max-w-md mx-auto w-full pt-16">
                <div className="inline-block px-3 py-1 mb-5 border border-hushh-blue/20 rounded-full bg-hushh-blue/5">
                    <span className="text-[10px] tracking-widest uppercase font-medium text-hushh-blue flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-hushh-blue rounded-full" />
                        Coming Soon
                    </span>
                </div>

                <h1
                    className="text-[2.75rem] leading-[1.1] font-normal text-black tracking-tight font-serif mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Hushh <br /><span className="text-gray-400 italic font-light">Hackathon.</span>
                </h1>

                <p className="text-gray-500 text-sm font-light mt-3 leading-relaxed max-w-sm">
                    We are currently preparing the ultimate development experience. Check back soon for details on how to register and build with Hushh AI.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="mt-8 bg-black hover:bg-gray-800 text-white transition-colors duration-200 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2"
                >
                    Return Home
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </main>

            <HushhTechFooter activeTab={HushhFooterTab.COMMUNITY} />
        </div>
    );
}