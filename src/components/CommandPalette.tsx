'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Command, Search, X } from 'lucide-react';

const commands = [
  { label: 'Go to selected work', detail: 'Work', href: '#work' },
  { label: 'Explore research', detail: 'Research', href: '#research' },
  { label: 'View experience', detail: 'Experience', href: '#experience' },
  { label: 'About Adityavardhan', detail: 'About', href: '#about' },
  { label: 'Open résumé', detail: 'PDF', href: '/Adityavardhan_Jain.pdf', external: true },
  { label: 'Launch WikiCrawl', detail: 'Live project', href: 'https://wiki-crawl.vercel.app', external: true },
  { label: 'GitHub profile', detail: 'GitHub', href: 'https://github.com/Adityavardhanjain', external: true },
  { label: 'LinkedIn profile', detail: 'LinkedIn', href: 'https://linkedin.com/in/adityavardhan-jain/', external: true },
  { label: 'Email Adityavardhan', detail: 'Contact', href: 'mailto:jainadityavardhan@gmail.com' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && dialogRef.current?.open) {
        event.preventDefault();
        dialogRef.current.close();
        setOpen(false);
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter((item) =>
    `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <button className="palette-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open command menu">
        <Command size={15} aria-hidden="true" />
        <span>Quick find</span>
        <kbd>⌘ K / Ctrl K</kbd>
      </button>
      <dialog
        ref={dialogRef}
        className="command-dialog"
        aria-label="Quick navigation"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
            dialogRef.current?.close();
            setOpen(false);
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="command-dialog__panel">
          <label className="command-search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search commands</span>
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Where would you like to go?"
            />
            <kbd>ESC</kbd>
            <button className="command-close" type="button" onClick={() => setOpen(false)} aria-label="Close quick navigation"><X size={17} /></button>
          </label>
          <nav className="command-list" aria-label="Quick destinations">
            {filteredCommands.length ? filteredCommands.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <small>{item.detail}</small>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )) : <p className="command-empty">No matching destinations.</p>}
          </nav>
          <div className="command-footer"><span>ADITYAVARDHAN JAIN</span><span>Navigate with intent</span></div>
        </div>
      </dialog>
    </>
  );
}