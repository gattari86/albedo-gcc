const fs = require('fs');
const path = require('path');

// Convert images to base64
function img64(filePath) {
  const data = fs.readFileSync(filePath);
  const ext = path.extname(filePath).slice(1).toLowerCase() === 'png' ? 'png' : 'jpeg';
  return `data:image/${ext};base64,${data.toString('base64')}`;
}

// Load all images
const logoWhite = img64('/Users/ricardogattas-moras/Downloads/Albedo Return Logo and brand sheet/PNG/Primary Logo White .png');
const logoColor = img64('/Users/ricardogattas-moras/Downloads/Albedo Return Logo and brand sheet/PNG/Primary Logo Color .png');
const annPhoto = img64('/Users/ricardogattas-moras/Downloads/download_1769273240178.png');
const ba1 = img64('/tmp/albedo_ba/1.png');
const ba2 = img64('/tmp/albedo_ba/2.png');
const ba6 = img64('/tmp/albedo_ba/6.png');
const qrCode = img64('/Users/ricardogattas-moras/poppy-cos/01_ACTIVE_PROJECTS/P002_Albedo_Website/02_WORKING/P002_Albedo_QR_Consultation_2026-02-11.png');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="color-scheme" content="light">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Albedo's Return | Kitchen Exhaust Cleaning & Compliance</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        /* =====================================================================
           CSS CUSTOM PROPERTIES — Albedo's Return (Clean Premium)
           ===================================================================== */
        :root {
            --deep-teal: #1E484D;
            --deep-teal-rgb: 30, 72, 77;
            --sage-green: #83998C;
            --sage-green-rgb: 131, 153, 140;
            --coral-rose: #D27E65;
            --coral-rose-rgb: 210, 126, 101;
            --soft-gold: #CDAF4F;
            --soft-gold-rgb: 205, 175, 79;
            --rich-brown: #3F3F3F;
            --ivory: #F9F8F4;
            --white: #FFFFFF;
            --text-muted: #6B7B74;

            --deep-teal-light: rgba(30, 72, 77, 0.08);
            --sage-green-light: rgba(131, 153, 140, 0.12);
            --coral-rose-light: rgba(210, 126, 101, 0.10);
            --soft-gold-light: rgba(205, 175, 79, 0.10);

            --font-display: 'Montserrat', sans-serif;
            --font-body: 'Montserrat', sans-serif;

            --slide-padding: clamp(2.5rem, 5vw, 5rem);
            --content-max-width: 960px;
            --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
            --duration-micro: 0.3s;
            --duration-normal: 0.6s;
            --reveal-distance: 24px;
            --card-radius: 14px;
            --card-padding: 1.4rem 1.6rem;
        }

        /* =====================================================================
           RESET & BASE
           ===================================================================== */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html {
            scroll-behavior: smooth;
            scroll-snap-type: y mandatory;
            color-scheme: light;
        }
        body {
            font-family: var(--font-body);
            background: var(--ivory);
            color: var(--rich-brown);
            overflow-x: hidden;
            line-height: 1.6;
            font-size: 18px;
            -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-display);
            font-weight: 700;
            line-height: 1.15;
        }
        img { max-width: 100%; height: auto; display: block; }

        /* =====================================================================
           NAVIGATION
           ===================================================================== */
        .progress-bar {
            position: fixed; top: 0; left: 0; height: 3px;
            background: linear-gradient(90deg, var(--soft-gold), var(--coral-rose));
            width: 0%; z-index: 1000;
            transition: width var(--duration-micro) ease;
        }
        .nav-dots {
            position: fixed; right: 2rem; top: 50%;
            transform: translateY(-50%); z-index: 100;
            display: flex; flex-direction: column; gap: 10px;
        }
        .nav-dot {
            width: 10px; height: 10px; border-radius: 50%;
            background: var(--sage-green); opacity: 0.25;
            cursor: pointer; transition: all var(--duration-micro) ease;
            border: none;
        }
        .nav-dot:hover { opacity: 0.5; transform: scale(1.3); }
        .nav-dot:focus-visible { outline: 2px solid var(--soft-gold); outline-offset: 2px; }
        .nav-dot.active {
            opacity: 1; background: var(--coral-rose);
            box-shadow: 0 0 0 3px rgba(210,126,101,0.25);
        }

        /* =====================================================================
           SLIDE LAYOUTS
           ===================================================================== */
        .slide {
            min-height: 100vh;
            padding: var(--slide-padding);
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        .slide-content {
            max-width: var(--content-max-width);
            margin: 0 auto; width: 100%;
            position: relative;
            z-index: 2;
        }
        .slide--title {
            background: var(--deep-teal); color: var(--white);
        }
        .slide--ivory { background: var(--ivory); }
        .slide--white { background: var(--white); }
        .slide--coral {
            background: var(--coral-rose); color: var(--white);
        }

        /* =====================================================================
           TYPOGRAPHY — iPad-friendly sizes
           ===================================================================== */
        .eyebrow {
            font-weight: 600; font-size: 0.85rem;
            letter-spacing: 0.14em; text-transform: uppercase;
            color: var(--soft-gold); margin-bottom: 0.6rem;
        }
        .slide--ivory .eyebrow,
        .slide--white .eyebrow { color: var(--coral-rose); }

        h1 { font-size: clamp(2.5rem, 5vw, 3.2rem); margin-bottom: 1rem; }
        h2 { font-size: clamp(1.8rem, 4vw, 2.5rem); margin-bottom: 1.2rem; }
        h2 .accent { color: var(--coral-rose); }
        h3 { font-size: clamp(1.1rem, 2vw, 1.25rem); margin-bottom: 0.5rem; }
        .subtitle { font-size: clamp(1rem, 2vw, 1.2rem); opacity: 0.85; max-width: 600px; }

        /* =====================================================================
           GRID LAYOUTS
           ===================================================================== */
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .grid-2x2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }

        /* =====================================================================
           CARDS
           ===================================================================== */
        .card {
            background: var(--white);
            border-radius: var(--card-radius);
            padding: var(--card-padding);
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 24px rgba(0,0,0,0.08);
        }
        .card--accent-left {
            border-left: 3px solid var(--sage-green);
        }

        .icon-circle {
            width: 44px; height: 44px;
            border-radius: 50%; display: flex;
            align-items: center; justify-content: center;
            flex-shrink: 0;
        }
        .icon-circle--teal { background: var(--deep-teal-light); color: var(--deep-teal); }
        .icon-circle--coral { background: var(--coral-rose-light); color: var(--coral-rose); }
        .icon-circle--sage { background: var(--sage-green-light); color: var(--sage-green); }
        .icon-circle--gold { background: var(--soft-gold-light); color: var(--soft-gold); }

        /* =====================================================================
           DECORATIVE ELEMENTS
           ===================================================================== */
        .bg-blob {
            position: absolute; border-radius: 50%; opacity: 0.12;
            pointer-events: none; filter: blur(80px);
        }
        .accent-strip {
            position: absolute; left: 0; right: 0;
            height: 4px; z-index: 3;
            background: linear-gradient(90deg,
                var(--deep-teal) 0%,
                var(--sage-green) 30%,
                var(--soft-gold) 60%,
                var(--coral-rose) 100%
            );
        }
        .accent-strip--top { top: 0; }
        .accent-strip--bottom { bottom: 0; }
        .gold-line {
            width: 50px; height: 3px; background: var(--soft-gold);
        }

        /* =====================================================================
           REVEAL ANIMATIONS
           ===================================================================== */
        .reveal {
            opacity: 0; transform: translateY(var(--reveal-distance));
            transition: opacity var(--duration-normal) var(--ease-out-expo),
                        transform var(--duration-normal) var(--ease-out-expo);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
            .reveal { transition: none; opacity: 1; transform: none; }
        }

        /* =====================================================================
           COMPONENT STYLES
           ===================================================================== */
        .ann-photo {
            width: 200px; height: 200px; border-radius: 50%;
            border: 4px solid var(--soft-gold);
            object-fit: cover; object-position: center 20%;
            box-shadow: 0 8px 30px rgba(30,72,77,0.15);
        }
        .ann-photo-small {
            width: 88px; height: 88px; border-radius: 50%;
            border: 3px solid rgba(255,255,255,0.4);
            object-fit: cover; object-position: center 20%;
        }
        .ba-image {
            width: 100%; border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .qr-code {
            width: 200px; height: 200px; border-radius: 16px;
            background: white; padding: 10px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }
        .social-proof {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: var(--soft-gold-light); border: 2px solid var(--soft-gold);
            padding: 0.5rem 1.2rem; border-radius: 100px;
            font-weight: 700; font-size: 1rem;
            color: var(--rich-brown);
        }
        .testimonial-card {
            background: var(--ivory);
            border-radius: var(--card-radius);
            padding: 1.2rem 1.5rem;
            border-left: 3px solid var(--soft-gold);
        }
        .testimonial-card p {
            font-style: italic;
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 0.4rem;
        }
        .testimonial-card .attribution {
            font-style: normal;
            font-weight: 600;
            font-size: 0.85rem;
            color: var(--rich-brown);
        }
        .contact-line {
            font-size: clamp(1rem, 2vw, 1.15rem);
            color: rgba(255,255,255,0.9);
            display: flex; align-items: center; gap: 0.5rem;
        }
        .logo-footer {
            height: 44px; opacity: 0.6;
        }

        /* Slide-specific: Cover decorative ring */
        .cover-ring {
            position: absolute;
            width: 500px; height: 500px;
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 50%;
            pointer-events: none;
        }

        /* Slide-specific: Meet Ann */
        .meet-ann-layout {
            display: flex; gap: 3rem; align-items: center;
        }
        .ann-info { flex: 1; }
        .ann-bullet {
            display: flex; align-items: flex-start; gap: 0.75rem;
            margin-bottom: 1rem;
        }
        .ann-bullet i { flex-shrink: 0; margin-top: 3px; }

        /* Slide-specific: BA grid */
        .ba-grid {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }
        .ba-frame {
            border-radius: 12px; overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            background: var(--white);
        }
        .ba-frame img { border-radius: 0; width: 100%; }

        /* Slide-specific: Why slide */
        .why-grid {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        .why-card {
            display: flex; align-items: flex-start; gap: 1rem;
            background: var(--white);
            border-radius: var(--card-radius);
            padding: 1.2rem 1.4rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.04);
            border-left: 3px solid var(--sage-green);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .why-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.07);
        }
        .why-card h3 { font-size: 1.05rem; margin-bottom: 0.3rem; }
        .why-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; }
        .testimonials-row {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 1.2rem; margin-top: 1.5rem;
        }

        /* Slide-specific: Connect */
        .connect-grid {
            display: flex; align-items: center; justify-content: center;
            gap: 3.5rem;
        }
        .connect-left { text-align: left; }
        .connect-right { text-align: center; }
        .connect-contact {
            display: flex; flex-direction: column; gap: 0.6rem;
            margin-top: 1.5rem;
        }

        /* =====================================================================
           iPad (768–1024px)
           ===================================================================== */
        @media (min-width: 769px) and (max-width: 1024px) {
            :root { --content-max-width: 700px; }
            .slide { padding: 2.5rem 2rem; }
            h1 { font-size: clamp(2rem, 4.5vw, 2.6rem); }
            h2 { font-size: clamp(1.6rem, 3.5vw, 2rem); }
            body { font-size: 17px; }

            .grid-4 { grid-template-columns: 1fr 1fr; gap: 1rem; }
            .ba-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem; }
            .ba-grid .ba-frame:nth-child(3) { grid-column: 1 / -1; max-width: 60%; margin: 0 auto; }
            .ba-frame img { max-height: 35vh; object-fit: cover; }
            .ann-photo { width: 170px; height: 170px; }

            .why-grid { gap: 0.8rem; }
            .why-card { padding: 1rem 1.2rem; }
            .why-card h3 { font-size: 0.95rem; }
            .why-card p { font-size: 0.85rem; }
            .testimonials-row { gap: 0.8rem; }

            .connect-grid { gap: 2.5rem; }
            .qr-code { width: 170px; height: 170px; }
        }

        /* =====================================================================
           MOBILE (≤768px)
           ===================================================================== */
        @media (max-width: 768px) {
            .nav-dots { display: none; }
            .slide {
                height: 100svh;
                height: 100dvh;
                min-height: auto;
                padding: 20px 16px;
                padding-left: max(16px, env(safe-area-inset-left));
                padding-right: max(16px, env(safe-area-inset-right));
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            .slide-content {
                flex: 1;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
                display: flex;
                flex-direction: column;
            }

            .slide--title {
                background:
                    radial-gradient(ellipse at 85% 5%, rgba(var(--coral-rose-rgb), 0.2) 0%, transparent 50%),
                    radial-gradient(ellipse at 15% 95%, rgba(var(--sage-green-rgb), 0.15) 0%, transparent 50%),
                    var(--deep-teal) !important;
            }
            .slide--coral {
                background:
                    radial-gradient(ellipse at 85% 10%, rgba(var(--soft-gold-rgb), 0.15) 0%, transparent 50%),
                    radial-gradient(ellipse at 10% 90%, rgba(var(--deep-teal-rgb), 0.1) 0%, transparent 50%),
                    var(--coral-rose) !important;
            }

            h1 { font-size: clamp(1.6rem, 7vw, 2.2rem); }
            h2 { font-size: clamp(1.3rem, 5.5vw, 1.7rem); }
            h3 { font-size: clamp(1rem, 4vw, 1.15rem); }
            body { font-size: 15px; }

            .grid-2, .grid-3, .grid-4, .grid-2x2 {
                grid-template-columns: 1fr;
                gap: 0.8rem;
            }

            .ann-photo { width: 140px; height: 140px; }
            .meet-ann-layout {
                flex-direction: column; text-align: center; gap: 1.5rem;
            }
            .meet-ann-layout .ann-info { text-align: left; }

            /* B&A: horizontal scroll carousel on mobile */
            .ba-grid {
                grid-template-columns: 1fr !important;
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                gap: 1rem;
                padding-bottom: 0.5rem;
            }
            .ba-frame {
                min-width: 85vw;
                max-width: 85vw;
                flex-shrink: 0;
                scroll-snap-align: center;
            }
            .ba-frame img {
                max-height: 60vh;
                object-fit: contain;
            }

            .bg-blob { display: none; }
            .cover-ring { display: none; }

            /* Why slide mobile */
            .why-grid { grid-template-columns: 1fr; gap: 0.8rem; }
            .testimonials-row { grid-template-columns: 1fr; gap: 0.8rem; }

            /* Connect slide mobile */
            .connect-grid {
                flex-direction: column; gap: 1.5rem;
                align-items: center;
            }
            .connect-left {
                text-align: center;
                display: flex; flex-direction: column; align-items: center;
                width: 100%;
            }
            .connect-left p { margin-left: auto; margin-right: auto; }
            .connect-contact { align-items: center; }
            .contact-line { justify-content: center; }
            .logo-footer { margin: 0 auto; }
            .qr-code { width: 160px; height: 160px; }

            .accent-strip { height: 3px; }
            .ba-dots { display: flex !important; }
        }

        @media (max-width: 480px) {
            h1 { font-size: 1.5rem; }
            h2 { font-size: 1.2rem; }
            .ann-photo { width: 120px; height: 120px; }
            body { font-size: 14px; }
            .ba-frame { min-width: 90vw; max-width: 90vw; }
        }
    </style>
</head>
<body>

<!-- Progress Bar -->
<div class="progress-bar" id="progressBar"></div>

<!-- Nav Dots -->
<nav class="nav-dots" id="navDots">
    <button class="nav-dot active" data-slide="0" aria-label="Cover"></button>
    <button class="nav-dot" data-slide="1" aria-label="Meet Ann"></button>
    <button class="nav-dot" data-slide="2" aria-label="Services"></button>
    <button class="nav-dot" data-slide="3" aria-label="Our Work"></button>
    <button class="nav-dot" data-slide="4" aria-label="Why Us"></button>
    <button class="nav-dot" data-slide="5" aria-label="Connect"></button>
</nav>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 1: COVER
     ═══════════════════════════════════════════════════════════════ -->
<section class="slide slide--title" id="slide-0">
    <div class="bg-blob" style="width:600px;height:600px;background:var(--coral-rose);top:-200px;right:-150px;"></div>
    <div class="bg-blob" style="width:450px;height:450px;background:var(--sage-green);bottom:-150px;left:-100px;"></div>
    <div class="cover-ring" style="top:-100px;right:-100px;"></div>
    <div class="cover-ring" style="bottom:-150px;left:-120px;width:400px;height:400px;"></div>
    <div class="accent-strip accent-strip--bottom"></div>

    <div class="slide-content" style="text-align:center;">
        <div class="reveal">
            <img src="${logoWhite}" alt="Albedo's Return" style="height:100px;margin:0 auto 2rem;display:block;">
        </div>
        <div class="reveal reveal-delay-1">
            <div class="gold-line" style="margin:0 auto 1.5rem;"></div>
        </div>
        <h1 class="reveal reveal-delay-2" style="color:var(--white);font-weight:800;">
            Kitchen Exhaust Cleaning<br>& Compliance
        </h1>
        <p class="reveal reveal-delay-3" style="margin:0 auto;color:rgba(255,255,255,0.75);font-size:clamp(1rem,2vw,1.15rem);">
            Ann Tran &nbsp;&bull;&nbsp; Owner / Founder
        </p>
        <div class="reveal reveal-delay-4" style="margin-top:3rem;">
            <span style="font-size:0.8rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--soft-gold);font-weight:600;">
                Global Culinary Conference 2026
            </span>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 2: MEET ANN
     ═══════════════════════════════════════════════════════════════ -->
<section class="slide slide--ivory" id="slide-1">
    <div class="accent-strip accent-strip--top"></div>

    <div class="slide-content">
        <p class="eyebrow reveal">About the Founder</p>
        <h2 class="reveal reveal-delay-1">Meet <span class="accent">Ann</span></h2>

        <div class="meet-ann-layout reveal reveal-delay-2">
            <div style="flex-shrink:0;">
                <img src="${annPhoto}" alt="Ann Tran — Founder" class="ann-photo">
            </div>
            <div class="ann-info">
                <div class="gold-line" style="margin-bottom:1.2rem;"></div>
                <p style="font-size:clamp(1rem,2vw,1.15rem);line-height:1.7;margin-bottom:1.5rem;color:var(--rich-brown);">
                    Ann founded Albedo's Return to bring <strong>accountability and transparency</strong> to kitchen exhaust maintenance.
                </p>
                <div class="ann-bullet">
                    <i data-lucide="calculator" style="width:20px;height:20px;color:var(--deep-teal);"></i>
                    <span><strong>Accounting background</strong> — process-driven, documentation-first</span>
                </div>
                <div class="ann-bullet">
                    <i data-lucide="heart" style="width:20px;height:20px;color:var(--coral-rose);"></i>
                    <span><strong>Woman-owned</strong>, Houston-based, hands-on operator</span>
                </div>
                <div class="ann-bullet">
                    <i data-lucide="quote" style="width:20px;height:20px;color:var(--sage-green);"></i>
                    <em style="font-size:1.05rem;">"I treat every kitchen like it's my own."</em>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 3: WHAT WE DO
     ═══════════════════════════════════════════════════════════════ -->
<section class="slide slide--white" id="slide-2">
    <div class="slide-content">
        <p class="eyebrow reveal">Our Services</p>
        <h2 class="reveal reveal-delay-1">What We <span class="accent">Do</span></h2>

        <div class="grid-4" style="margin-top:1.5rem;">
            <div class="card reveal reveal-delay-1" style="text-align:center;">
                <div class="icon-circle icon-circle--teal" style="margin:0 auto 0.75rem;">
                    <i data-lucide="wind" style="width:22px;height:22px;"></i>
                </div>
                <h3>Hood & Exhaust Cleaning</h3>
                <p style="color:var(--text-muted);font-size:0.9rem;">NFPA 96 compliant, thorough degreasing of your entire system</p>
            </div>
            <div class="card reveal reveal-delay-2" style="text-align:center;">
                <div class="icon-circle icon-circle--coral" style="margin:0 auto 0.75rem;">
                    <i data-lucide="file-check" style="width:22px;height:22px;"></i>
                </div>
                <h3>Compliance Documentation</h3>
                <p style="color:var(--text-muted);font-size:0.9rem;">Full inspection-ready reports after every service</p>
            </div>
            <div class="card reveal reveal-delay-3" style="text-align:center;">
                <div class="icon-circle icon-circle--sage" style="margin:0 auto 0.75rem;">
                    <i data-lucide="calendar-check" style="width:22px;height:22px;"></i>
                </div>
                <h3>Recurring Maintenance</h3>
                <p style="color:var(--text-muted);font-size:0.9rem;">We schedule it, we show up — you never miss a deadline</p>
            </div>
            <div class="card reveal reveal-delay-4" style="text-align:center;">
                <div class="icon-circle icon-circle--gold" style="margin:0 auto 0.75rem;">
                    <i data-lucide="zap" style="width:22px;height:22px;"></i>
                </div>
                <h3>Emergency Response</h3>
                <p style="color:var(--text-muted);font-size:0.9rem;">Same-day service when your timeline is tight</p>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 4: OUR WORK — Before & After
     ═══════════════════════════════════════════════════════════════ -->
<section class="slide slide--ivory" id="slide-3">
    <div class="slide-content">
        <p class="eyebrow reveal">Real Results</p>
        <h2 class="reveal reveal-delay-1">See the <span class="accent">Difference</span></h2>

        <div class="ba-grid reveal reveal-delay-2" style="margin-top:1.2rem;">
            <div class="ba-frame">
                <img src="${ba1}" alt="Exhaust fan before and after" class="ba-image" style="border-radius:0;">
            </div>
            <div class="ba-frame">
                <img src="${ba2}" alt="Exhaust unit before and after" class="ba-image" style="border-radius:0;">
            </div>
            <div class="ba-frame">
                <img src="${ba6}" alt="Hood interior before and after" class="ba-image" style="border-radius:0;">
            </div>
        </div>

        <!-- Swipe indicator (mobile only) -->
        <div class="ba-dots reveal reveal-delay-3" style="display:none;justify-content:center;gap:8px;margin-top:0.8rem;">
            <span class="ba-dot active" style="width:8px;height:8px;border-radius:50%;background:var(--coral-rose);transition:background 0.2s;"></span>
            <span class="ba-dot" style="width:8px;height:8px;border-radius:50%;background:var(--sage-green);opacity:0.3;transition:background 0.2s,opacity 0.2s;"></span>
            <span class="ba-dot" style="width:8px;height:8px;border-radius:50%;background:var(--sage-green);opacity:0.3;transition:background 0.2s,opacity 0.2s;"></span>
        </div>

        <p class="reveal reveal-delay-3" style="text-align:center;margin-top:0.8rem;color:var(--text-muted);font-size:0.9rem;">
            Every job documented with before &amp; after photography via CompanyCam
        </p>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 5: WHY ALBEDO'S RETURN
     ═══════════════════════════════════════════════════════════════ -->
<section class="slide slide--white" id="slide-4">
    <div class="slide-content">
        <p class="eyebrow reveal">Our Promise</p>
        <div style="display:flex;align-items:baseline;gap:1.5rem;flex-wrap:wrap;margin-bottom:1.5rem;">
            <h2 class="reveal reveal-delay-1" style="margin-bottom:0;">Why <span class="accent">Albedo's Return</span></h2>
            <div class="reveal reveal-delay-2">
                <div class="social-proof">
                    <span style="color:var(--soft-gold);font-size:1.2rem;">&#9733;</span>
                    5.0 &nbsp;|&nbsp; 18 Google Reviews
                </div>
            </div>
        </div>

        <div class="why-grid reveal reveal-delay-2">
            <div class="why-card">
                <div class="icon-circle icon-circle--teal" style="width:38px;height:38px;min-width:38px;">
                    <i data-lucide="file-text" style="width:18px;height:18px;"></i>
                </div>
                <div>
                    <h3>Every Job Documented</h3>
                    <p>Inspection-ready proof, always. Full photo documentation and compliance reports.</p>
                </div>
            </div>
            <div class="why-card">
                <div class="icon-circle icon-circle--coral" style="width:38px;height:38px;min-width:38px;">
                    <i data-lucide="clock" style="width:18px;height:18px;"></i>
                </div>
                <div>
                    <h3>We Keep You on Schedule</h3>
                    <p>Recurring plans so you never miss a compliance deadline again.</p>
                </div>
            </div>
            <div class="why-card">
                <div class="icon-circle icon-circle--sage" style="width:38px;height:38px;min-width:38px;">
                    <i data-lucide="shield-check" style="width:18px;height:18px;"></i>
                </div>
                <div>
                    <h3>Woman-Owned & Insured</h3>
                    <p>NFPA 96 compliant services. Fully insured. Houston proud.</p>
                </div>
            </div>
            <div class="why-card">
                <div class="icon-circle icon-circle--gold" style="width:38px;height:38px;min-width:38px;">
                    <i data-lucide="map-pin" style="width:18px;height:18px;"></i>
                </div>
                <div>
                    <h3>Greater Houston Coverage</h3>
                    <p>Central Houston and surrounding areas within a 50-mile radius.</p>
                </div>
            </div>
        </div>

        <div class="testimonials-row reveal reveal-delay-3">
            <div class="testimonial-card">
                <p>"They did a great job!"</p>
                <span class="attribution">— City Cellars HTX</span>
            </div>
            <div class="testimonial-card">
                <p>"Professional, punctual, and detail oriented... I couldn't be happier!"</p>
                <span class="attribution">— Larry Beck</span>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     SLIDE 6: LET'S CONNECT
     ═══════════════════════════════════════════════════════════════ -->
<section class="slide slide--coral" id="slide-5">
    <div class="bg-blob" style="width:400px;height:400px;background:var(--soft-gold);top:-100px;left:-80px;"></div>
    <div class="bg-blob" style="width:350px;height:350px;background:var(--deep-teal);bottom:-80px;right:-60px;"></div>
    <div class="accent-strip accent-strip--top"></div>

    <div class="slide-content">
        <div class="connect-grid">
            <div class="connect-left">
                <div class="reveal">
                    <img src="${annPhoto}" alt="Ann Tran" class="ann-photo-small" style="margin-bottom:1.2rem;">
                </div>
                <h1 class="reveal reveal-delay-1" style="color:var(--white);font-size:clamp(1.8rem,4vw,2.4rem);margin-bottom:0.5rem;">
                    Let's Connect.
                </h1>
                <p class="reveal reveal-delay-2" style="color:rgba(255,255,255,0.85);font-size:clamp(0.95rem,2vw,1.1rem);margin-bottom:1.5rem;max-width:380px;">
                    Scan the QR code or visit our website to learn more and request a consultation.
                </p>

                <div class="connect-contact reveal reveal-delay-3">
                    <div class="contact-line">
                        <i data-lucide="phone" style="width:18px;height:18px;"></i>
                        713-574-7989
                    </div>
                    <div class="contact-line">
                        <i data-lucide="mail" style="width:18px;height:18px;"></i>
                        info@albedosreturn.com
                    </div>
                    <div class="contact-line">
                        <i data-lucide="map-pin" style="width:18px;height:18px;"></i>
                        Serving Greater Houston
                    </div>
                </div>

                <div class="reveal reveal-delay-4" style="margin-top:2rem;">
                    <img src="${logoWhite}" alt="Albedo's Return" class="logo-footer">
                </div>
            </div>

            <div class="connect-right reveal reveal-delay-2">
                <img src="${qrCode}" alt="Scan to visit website" class="qr-code">
                <p style="margin-top:0.75rem;font-size:0.9rem;color:rgba(255,255,255,0.75);font-weight:500;">
                    albedosreturn.com
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     JAVASCRIPT
     ═══════════════════════════════════════════════════════════════ -->
<script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Reveal on scroll (IntersectionObserver)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Nav dots & progress bar
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    const progressBar = document.getElementById('progressBar');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.slide);
            slides[idx].scrollIntoView({ behavior: 'smooth' });
        });
    });

    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = Array.from(slides).indexOf(entry.target);
                dots.forEach((d, i) => d.classList.toggle('active', i === idx));
                progressBar.style.width = ((idx + 1) / slides.length * 100) + '%';
            }
        });
    }, { threshold: 0.5 });

    slides.forEach(s => slideObserver.observe(s));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(e.key)) return;
        e.preventDefault();
        const current = Array.from(slides).findIndex(s => {
            const rect = s.getBoundingClientRect();
            return rect.top >= -100 && rect.top <= window.innerHeight / 2;
        });
        if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && current < slides.length - 1) {
            slides[current + 1].scrollIntoView({ behavior: 'smooth' });
        }
        if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && current > 0) {
            slides[current - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });

    // B&A swipe indicator dots (mobile)
    const baGrid = document.querySelector('.ba-grid');
    const baDots = document.querySelectorAll('.ba-dot');
    if (baGrid && baDots.length) {
        baGrid.addEventListener('scroll', () => {
            const scrollLeft = baGrid.scrollLeft;
            const frameWidth = baGrid.querySelector('.ba-frame')?.offsetWidth || 1;
            const idx = Math.round(scrollLeft / (frameWidth + 16)); // 16 = gap
            baDots.forEach((dot, i) => {
                dot.style.opacity = i === idx ? '1' : '0.3';
                dot.style.background = i === idx ? 'var(--coral-rose)' : 'var(--sage-green)';
            });
        });
    }
</script>

</body>
</html>`;

fs.writeFileSync('/Users/ricardogattas-moras/pptx-workspace/albedo-gcc/index.html', html);
console.log('DONE: index.html written (' + Math.round(html.length / 1024) + ' KB)');
