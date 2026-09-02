import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '../common/Reveal';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
    window.location.href = `mailto:aneeka.0026@gmail.com?subject=${subject}&body=${body}`;
  };

  const details = [
    [Mail, 'aneeka.0026@gmail.com', 'mailto:aneeka.0026@gmail.com'],
    [MapPin, 'New Delhi, India', null],
    [Phone, '+91 70327 77727', 'tel:+917032777727'],
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-teal-300">GET IN TOUCH</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let&apos;s <span className="bg-linear-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project or frontend opportunity in mind? Send me a message and let&apos;s create something useful together.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
              <h3 className="font-display text-xl font-semibold">Contact Information</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Feel free to reach out through email, phone, or the form.</p>

              <div className="mt-7 space-y-3">
                {details.map(([Icon, text, href]) => {
                  const content = (
                    <div className="group flex items-center gap-4 rounded-2xl border border-white/6 bg-slate-900/30 p-4 transition duration-300 hover:translate-x-1 hover:border-teal-300/25 hover:bg-teal-300/5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-300/8 text-teal-300 transition group-hover:bg-teal-300 group-hover:text-slate-950">
                        <Icon size={18} />
                      </span>
                      <span className="break-all text-sm text-slate-300 sm:break-normal">{text}</span>
                    </div>
                  );
                  return href ? <a href={href} key={text}>{content}</a> : <div key={text}>{content}</div>;
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" type="text" placeholder="Your Name" required className="rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50 focus:bg-slate-900/70 focus:ring-4 focus:ring-teal-300/5" />
                <input name="email" type="email" placeholder="Your Email" required className="rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50 focus:bg-slate-900/70 focus:ring-4 focus:ring-teal-300/5" />
              </div>
              <textarea name="message" placeholder="Your Message" required rows="7" className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50 focus:bg-slate-900/70 focus:ring-4 focus:ring-teal-300/5" />
              <button type="submit" className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-teal-300 to-cyan-300 px-5 py-3.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/20">
                Send Message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
