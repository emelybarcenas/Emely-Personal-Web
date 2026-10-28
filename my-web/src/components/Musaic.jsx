import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import LazyImage from "./LazyImage.jsx";
import CoverMedia from "./CoverMedia.jsx";
import { CaseStudyTabNav, useScrollSpyTabs } from "./CaseStudy/CaseStudyTabNav.jsx";
import ExploreCaseStudies from "./CaseStudy/ExploreCaseStudies.jsx";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Shared building blocks — same shape as the Clean Slate case study, */
/*  restyled around the pink accent from the Musaic slides.            */
/* ------------------------------------------------------------------ */

const ACCENT = { text: "text-[#D0406C]", hex: "#D0406C" };

function Block({ eyebrow, title, children, first }) {
  return (
    <div className={`${first ? "pt-14" : "pt-16 md:pt-20"} pb-2 flex flex-col`}>
      {eyebrow && <p className={`text-sm font-medium mb-2 ${ACCENT.text}`}>{eyebrow}</p>}
      <p className="text-3xl md:text-4xl font-medium leading-[1.1]">{title}</p>
      <div className="mt-6 flex flex-col gap-4 text-gray-600">{children}</div>
    </div>
  );
}

/* A highlighted closing line with an accent rule on the left. */
function PullQuote({ children }) {
  return (
    <p
      className="border-l-2 pl-5 my-4 text-xl md:text-2xl font-medium leading-snug text-[#161616]"
      style={{ borderColor: ACCENT.hex }}
    >
      {children}
    </p>
  );
}

/* A grid of short details: a title and one line each, separated by thin
   rules. Used instead of bullet lists. */
const GRID_COLS = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };

function DetailGrid({ items, cols = 2 }) {
  return (
    <div className={`grid grid-cols-1 ${GRID_COLS[cols]} gap-x-8 my-2`}>
      {items.map(({ title, text }) => (
        <div key={title} className="py-3">
          <p className="text-[#161616] font-medium">{title}</p>
          <p className="mt-1">{text}</p>
        </div>
      ))}
    </div>
  );
}

/* A design question, set apart as a pause between sections. */
function Interlude({ children }) {
  return (
    <div className="pt-16 md:pt-20">
      <div className="rounded-3xl bg-[#FBF1F4] px-6 md:px-16 py-12 md:py-16 text-center">
        <p className="text-2xl md:text-[2rem] font-medium leading-snug text-[#161616] max-w-2xl mx-auto">
          <span className={ACCENT.text}>How might we</span> {children}
        </p>
      </div>
    </div>
  );
}

/* One numbered design principle, with its own visuals underneath. */
function Principle({ number, title, children, first }) {
  return (
    <div className={`${first ? "" : "mt-10"} flex flex-col gap-4`}>
      <div className="flex items-baseline gap-3">
        {number && <span className={`font-bold text-xl md:text-2xl ${ACCENT.text}`}>{number}</span>}
        <span className="text-[#161616] text-xl md:text-2xl font-medium leading-[1.15]">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* A looping demo video. It starts downloading when it's close to the
   screen, and only plays while it's actually on screen: each time it
   scrolls into view it restarts from the beginning, and it pauses when it
   leaves. With reduced motion on, it never autoplays and shows controls. */
function InViewVideo({ src, poster, aspect, label }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [show, setShow] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShow(true);
      setOnScreen(true);
      return undefined;
    }
    // Start loading a little before it reaches the screen.
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          loader.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    // Play only once at least half of it is visible.
    const viewer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: 0.5,
    });
    loader.observe(el);
    viewer.observe(el);
    return () => {
      loader.disconnect();
      viewer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    if (onScreen) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [onScreen, show, reduceMotion]);

  const mediaClass = "w-full h-auto block";
  return (
    <figure ref={ref} className="my-2">
      <div className="rounded-xl overflow-hidden border border-gray-200 bg-[#F3F1EC]" style={{ aspectRatio: aspect }}>
        {show ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls={reduceMotion}
            muted
            loop
            playsInline
            preload="auto"
            aria-label={label}
            className={mediaClass}
          />
        ) : (
          <img src={poster} alt={label} className={mediaClass} />
        )}
      </div>
    </figure>
  );
}

/* Full-screen view of a screenshot. Closes on click or Escape. */
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
    >
      <img src={src} alt={alt} className="max-w-full max-h-full rounded-lg bg-white" />
    </div>
  );
}

/* A screenshot in a rounded frame. Pass w/h (the image's pixel size) to
   reserve its space; click to see it full size. */
function Shot({ src, alt, w, h, caption, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <figure className={`my-2 min-w-0 ${className}`} style={{ "--ratio": w && h ? w / h : 1 }}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${alt}`}
        className="block w-full rounded-xl overflow-hidden border border-gray-200 bg-[#F3F1EC] cursor-zoom-in"
        style={w && h ? { aspectRatio: `${w} / ${h}` } : undefined}
      >
        <LazyImage src={src} alt={alt} className="w-full h-full object-cover" />
      </button>
      {caption && <figcaption className="mt-2 text-sm text-gray-500">{caption}</figcaption>}
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}

/* A recording, an arrow, then what Musaic finds in it: key and tempo,
   chords and melody, all in one row like the original slide. Widths follow
   each image's aspect ratio so every card is the same height. The panel
   matches the recording card's background so its rounded corners blend in. */
const GAP_RESULTS = [
  {
    src: "/musaic/key-card-tight.webp",
    w: 354,
    h: 187,
    alt: "Key G major, tempo 125 BPM and length 0:04, each AI guess marked with a sparkle",
  },
  {
    src: "/musaic/chords-card.webp",
    w: 644,
    h: 660,
    alt: "Guitar chords Bm and Em with chord diagrams, tuning and capo settings",
  },
  {
    src: "/musaic/melody-card.webp",
    w: 630,
    h: 646,
    alt: "The melody written out as sheet music, with options to play it back",
  },
];

/* A card image that opens full size when clicked. */
function ZoomImage({ src, alt, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label={`Enlarge: ${alt}`} className={`block w-full cursor-zoom-in ${className}`}>
        <LazyImage src={src} alt={alt} className="w-full h-auto block" />
      </button>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

function GapCards() {
  const recordingRatio = 641 / 342;
  const resultsRatio = GAP_RESULTS.reduce((sum, { w, h }) => sum + w / h, 0);
  return (
    <div className="my-2 rounded-2xl border border-gray-200 bg-[#F8F8F6] p-4 md:p-6 flex flex-col md:flex-row items-center gap-3 md:gap-4">
      <div className="w-full md:w-auto min-w-0 md:[flex:var(--ratio)_1_0%]" style={{ "--ratio": recordingRatio }}>
        <ZoomImage src="/musaic/recording-card.webp" alt="A recording called 'floating hum, 3am'" />
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-7 h-7 shrink-0 rotate-90 md:rotate-0"
        fill="none"
        stroke={ACCENT.hex}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <div className="w-full md:w-auto min-w-0 flex gap-2 md:[flex:var(--ratio)_1_0%]" style={{ "--ratio": resultsRatio }}>
        {GAP_RESULTS.map(({ src, w, h, alt }) => (
          <div
            key={src}
            className="min-w-0 rounded-xl border border-gray-200 bg-white overflow-hidden"
            style={{ flex: `${w / h} 1 0%` }}
          >
            <ZoomImage src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Screenshots side by side at the same height. Each one's width follows
   its aspect ratio, so nothing gets cropped and the edges line up. */
function ShotRow({ shots }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-5 my-2">
      {shots.map((shot) => (
        <Shot key={shot.src} {...shot} className="md:[flex:var(--ratio)_1_0%]" />
      ))}
    </div>
  );
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "capturing", label: "Capture" },
  { id: "organizing", label: "The board" },
  { id: "structure", label: "Song structure" },
  { id: "ai", label: "AI co-creation" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

const BOARD_DETAILS = [
  { title: "Synced with the phone", text: "Ideas hummed on a walk are already in the inbox when you sit down." },
  { title: "Record on the board", text: "Capture mid-session without switching apps. Each recording shows its key, tempo and chords." },
  { title: "Lyrics vs. notes", text: "A line for the song looks different from a note on how a part should feel." },
  {
    title: "Songs saved by the moment",
    text: "References keep the exact part you love, like 0:48–1:02. Musaic then recommends songs with a similar vibe, so inspiration keeps coming.",
  },
];

const STATS = [
  { value: "78%", text: "are open to AI tools in general", source: "Muse Group" },
  { value: "82%", text: "oppose AI generating music", source: "Muse Group" },
  { value: "42%", text: "fear losing originality and creativity", source: "Sonarworks, 2026" },
];

const LEARNING_TOOLS = [
  { title: "Chords", text: "Guitar or piano shapes, with a capo setting for simpler fingerings." },
  { title: "Melody playback", text: "Plays over the recording, to check it by ear." },
  { title: "Sheet music", text: "Prints when a song is ready to go further." },
];

const OUTCOMES = [
  { title: "Mobile capture", text: "One-tap recording, ideas that name themselves, and folders that sync to desktop." },
  { title: "Desktop songwriting", text: "A board, a Lyrics view and a timeline for shaping ideas into a song." },
  { title: "AI that stays in its lane", text: "Theme finding, nudges on request, and key, chord and melody detection." },
];

const LEARNINGS = [
  {
    title: "Restraint is a design decision",
    text: "The most important AI choices were what to leave out. Taking away prompts nobody asked for made Musaic feel more like the songwriter's own.",
  },
  {
    title: "Design for the material",
    text: "Lyrics and audio behave differently. One layout for both kept failing; two views, each built around its material, worked.",
  },
  {
    title: "AI speeds up building, not judgment",
    text: "Prototyping with Claude got me to something real quickly, so more of my time went to the decisions that made it feel made for songwriters.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Musaic() {
  const { activeTab, selectTab } = useScrollSpyTabs(TABS);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      <div className="relative bg-white z-10 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="mx-auto max-w-[86rem] w-full px-8 md:px-0">
          <div className="lg:grid lg:items-start lg:gap-x-14 lg:grid-cols-[minmax(10rem,1fr)_min(56rem,100%)_minmax(10rem,1fr)]">
            <CaseStudyTabNav tabs={TABS} activeTab={activeTab} onSelect={selectTab} accent={ACCENT.hex} />

            <div className="min-w-0">
              {/* ======================== OVERVIEW ======================== */}
              <section id="overview" className="scroll-mt-28">
                <div className="rounded-2xl overflow-hidden mt-[5vh] mb-6">
                  <CoverMedia
                    imgSrc="/musaic/demo-poster.webp"
                    videoSrc="/musaic/musaic-demo.mp4"
                    alt="Musaic desktop app: a songwriting board with recordings, lyrics and references"
                    className="w-full h-auto aspect-video object-cover bg-[#F3F1EC]"
                  />
                </div>

                <h3 className="font-bold leading-none text-[2.5rem] md:text-[3.5rem] mt-2 mb-2 text-left">Musaic</h3>
                <p className="text-left text-lg md:text-xl mb-8">Turning a songwriter's scattered ideas into songs</p>

                <div className="border-t border-b border-gray-200 py-8 mb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
                      <h2 className="text-gray-500">About the Project</h2>
                      <p className="text-gray-600">
                        Musaic is a songwriting tool for mobile and desktop. Songwriters capture melodies, lyrics and
                        references the moment they happen, then shape them into a song on a desktop board.
                      </p>
                      <p className="text-gray-600 mt-4">
                        AI handles the technical details, like key, tempo and chords, so the song stays the
                        songwriter's own.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
                      {/* TODO: confirm role, timeline and skills */}
                      <div>
                        <h2 className="text-gray-500">Role</h2>
                        <p>Product Designer</p>
                        <div className="border-b border-gray-200 mt-2" />
                      </div>
                      <div>
                        <h2 className="text-gray-500">Timeline</h2>
                        <p>Fall 2026</p>
                        <div className="border-b border-gray-200 mt-2" />
                      </div>
                      <div>
                        <h2 className="text-gray-500">Skills</h2>
                        <div className="flex flex-col">
                          {["Product Design", "Mobile & Desktop", "AI Prototyping", "Figma"].map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Block eyebrow="The brief" title="Every song is a story that arrives in pieces" first>
                  <p>
                    For the Silicon Valley School of Design (SVSD) competition, the theme was storytelling, for a
                    specific audience. I chose songwriters. Every song tells a story, but it rarely arrives all at once.
                    It shows up in pieces, often far from an instrument or a desk.
                  </p>
                </Block>
              </section>

              {/* ======================== THE PROBLEM ======================== */}
              <section id="problem" className="scroll-mt-28">
                <Block eyebrow="Research" title="Ideas live everywhere, except in one place">
                  <p>
                    I went where anyone goes with a question at 2 a.m.: Reddit. It's where songwriters are honest about
                    how messy their process really is, and they kept asking each other the same thing: how do you keep
                    track of your ideas?
                  </p>
                  <p>
                    The answers were all over the place, literally. Voice memos, notes apps, Post-its, paper journals.
                    Finding an old idea meant digging through all of them, and nothing was built to bring them together
                    into a song.
                  </p>
                  <InViewVideo
                    src="/musaic/reddit-ideas.mp4"
                    poster="/musaic/reddit-scattered-musaic-poster.webp"
                    aspect="16 / 9"
                    label="Reddit posts from songwriters describing ideas scattered across notes apps, voice memos, folders and paper"
                  />
                </Block>
                <Interlude>help songwriters organize their ideas, from capture to structure?</Interlude>
              </section>

              {/* ======================== CAPTURE ======================== */}
              <section id="capturing" className="scroll-mt-28">
                <Block eyebrow="Mobile" title="Capture first, organize later">
                  <p>
                    Ideas strike on the go, so the phone app has one job: capture. Recording takes one tap. Musaic then
                    names each idea from its lyrics, so "New Recording 47" becomes "I'm So Blue." Ideas can be tagged by
                    mood and filed into folders designed as records, and everything syncs to the desktop.
                  </p>
                  <InViewVideo
                    src="/musaic/phone-capture.mp4"
                    poster="/musaic/phone-capture-poster.webp"
                    aspect="1570 / 1080"
                    label="Recording a melody on the phone, tagging its mood, the idea being named 'I'm So Blue', and the library of record-style folders"
                  />
                </Block>
              </section>

              {/* ======================== THE BOARD ======================== */}
              <section id="organizing" className="scroll-mt-28">
                <Block eyebrow="Desktop" title="From a generic moodboard to a songwriting board">
                  <p>
                    On desktop, songwriters lay out recordings, lyrics, images and references on a board. I used Claude
                    to rapidly prototype my first version, then iterated on it many times, refining the visual design
                    and reshaping each piece around how musicians actually work.
                  </p>
                  <ShotRow
                    shots={[
                      {
                        src: "/musaic/desktop-early.webp",
                        w: 1659,
                        h: 862,
                        alt: "Early iteration of the Musaic desktop board with an inbox, idea cards and a song timeline",
                        caption: "Early: a rapid prototype built with Claude.",
                      },
                      {
                        src: "/musaic/desktop-final-crop.webp",
                        w: 1516,
                        h: 816,
                        alt: "Final Musaic desktop prototype with folders, a moodboard canvas and a recording inspector",
                        caption: "Final: built around recordings, chords and song sections.",
                      },
                    ]}
                  />
                  <DetailGrid items={BOARD_DETAILS} cols={2} />
                </Block>
              </section>

              {/* ======================== SONG STRUCTURE ======================== */}
              <section id="structure" className="scroll-mt-28">
                <Block eyebrow="Song structure" title="Lyrics read down the page, but music plays across time">
                  <p>
                    Grouped ideas still lacked structure. To become a song, they needed sections, an order and a way to
                    compare versions. I explored layouts for each, but none worked for both words and sound: cards
                    suited lyrics, while recordings needed to play in order.
                  </p>
                  <p className="mt-4 -mb-2 text-sm font-medium text-gray-500">Explorations</p>
                  <ShotRow
                    shots={[
                      {
                        src: "/musaic/organizing-sections.webp",
                        w: 1002,
                        h: 622,
                        alt: "Song bar with Intro, Verse, Chorus and Bridge sections to drag ideas into",
                        caption: "Shaping intro, verse and chorus",
                      },
                      {
                        src: "/musaic/ordering-crop.webp",
                        w: 1002,
                        h: 622,
                        alt: "Song structure view with lyrics and recordings ordered under each section",
                        caption: "Ordering lyrics and recordings",
                      },
                      {
                        src: "/musaic/comparing-versions-crop.webp",
                        w: 1002,
                        h: 622,
                        alt: "Two versions of a song compared, with changed sections marked as new",
                        caption: "Comparing version A to version B",
                      },
                    ]}
                  />
                </Block>

                <Block eyebrow="My approach" title="Two views: one for words, one for sound">
                  <Principle title="Lyrics view" first>
                    <p>Reads down the page, for reworking words. Lyric ideas drag in from anywhere.</p>
                    <InViewVideo
                      src="/musaic/lyrics-demo.mp4"
                      poster="/musaic/lyrics-demo-poster.webp"
                      aspect="1750 / 1080"
                      label="Switching from the board to the Lyrics view and dragging lyric ideas from the inbox into the song's sections"
                    />
                  </Principle>

                  <Principle title="Timeline">
                    <p>Plays recordings back to back, lined up with lyrics and sections.</p>
                    <Shot
                      src="/musaic/recordings.webp"
                      w={2276}
                      h={723}
                      alt="Timeline with recordings, lyrics and sections lined up by bar"
                    />
                  </Principle>

                  <PullQuote>
                    Musaic isn't a DAW. It's where ideas get a rough shape{" "}
                    <span className={ACCENT.text}>before they go into production.</span>
                  </PullQuote>
                </Block>
              </section>

              {/* ========================= AI CO-CREATION ========================= */}
              <section id="ai" className="scroll-mt-28">
                <Block eyebrow="AI co-creation" title="Musicians are open to AI, but protective of their voice">
                  <p>
                    Before designing any AI, I looked at how musicians feel about it. Most are open to tools that help,
                    but wary of AI that makes the music for them, since it can blur what makes their work their own.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 my-2">
                    {STATS.map(({ value, text, source }) => (
                      <div key={value} className="pt-2 pb-2">
                        <p className="text-5xl md:text-6xl font-bold tracking-tight text-[#161616]">{value}</p>
                        <p className="mt-3 text-gray-600">{text}</p>
                        <p className="mt-1 text-xs text-gray-400">{source}</p>
                      </div>
                    ))}
                  </div>
                </Block>

                <Interlude>use AI to help songwriters develop their ideas, without taking authorship of them?</Interlude>

                <Block eyebrow="My approach" title="AI that nudges songwriters, never writes for them">
                  <p>
                    The AI helps songwriters when they're stuck, without handing them the ideas. It offers nudges that
                    grow out of their own work, guided by three principles:
                  </p>

                  <Principle number="01" title="Connect ideas, don't create them">
                    <p>
                      Generating lyrics or audio would replace the songwriter's voice. Instead, Find a theme reads
                      through loose demos, even hundreds of them, and groups the ones that belong together.
                    </p>
                    <InViewVideo
                      src="/musaic/finding-theme.mp4"
                      poster="/musaic/finding-theme-poster.webp"
                      aspect="1920 / 1062"
                      label="Find a theme reading 15 loose ideas and grouping 4 of them into 'Something hopeful on the way'"
                    />
                  </Principle>

                  <Principle number="02" title="Wait to be asked">
                    <p>
                      When I prototyped with Claude, it suggested putting an AI question in every empty section. It
                      looked helpful, but I pushed back: even good prompts, shown before you ask, make the AI feel like
                      it's taking over. So help became something songwriters ask for. They tap Expand the story when
                      they're stuck and get a small nudge, like a question about the story or three chords that could
                      come next. Never a whole section.
                    </p>
                    <InViewVideo
                      src="/musaic/expand-idea.mp4"
                      poster="/musaic/expand-idea-poster.webp"
                      aspect="1760 / 1080"
                      label="Tapping Expand the story on a lyric opens small prompts about the story, details and melody"
                    />
                  </Principle>

                  <Principle number="03" title="Fill in the skill gaps">
                    <p>
                      In the moment, there's no time to work out the key or write down chords. Later, Musaic finds the
                      key, tempo, chords and melody from the recording, something a voice memo can't do. Each AI guess
                      is marked with ✦, so songwriters can tell what came from them and what came from Musaic.
                    </p>
                    <GapCards />
                    <p>
                      Not every songwriter knows theory or plays every instrument, so the assistance it offers may include:
                    </p>
                    <DetailGrid items={LEARNING_TOOLS} cols={3} />
                  </Principle>
                </Block>
              </section>

              {/* ======================== OUTCOME ======================== */}
              <section id="outcome" className="scroll-mt-28">
                <Block eyebrow="Outcome" title="From scattered pieces to a song">
                  <PullQuote>
                    Musaic became the place where a songwriter's scattered pieces land, and{" "}
                    <span className={ACCENT.text}>where they come together as a song.</span>
                  </PullQuote>
                  {/* TODO: add the SVSD competition result here if there is one */}
                  <p>I delivered an interactive prototype across mobile and desktop:</p>
                  <DetailGrid items={OUTCOMES} cols={3} />
                </Block>
              </section>

              {/* ======================== REFLECTION ======================== */}
              <section id="reflection" className="scroll-mt-28">
                <Block eyebrow="Reflection" title="What I took away">
                  <DetailGrid items={LEARNINGS} cols={3} />
                </Block>
              </section>
            </div>
          </div>

          <div className="max-w-[56rem] mx-auto">
            <ExploreCaseStudies currentId="musaic" />
          </div>
        </div>
      </div>

      <footer className="pointer-events-auto sticky bottom-0 z-5 w-full">
        <Footer className="pointer-events-auto" />
      </footer>
    </div>
  );
}
