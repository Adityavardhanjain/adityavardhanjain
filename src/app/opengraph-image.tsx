import { ImageResponse } from 'next/og';

export const alt = 'Adityavardhan Jain — AI / ML · Data · Research';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', position: 'relative', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 68px', overflow: 'hidden', background: '#111612', color: '#f5f6ef' }}>
        <div style={{ position: 'absolute', right: '-100px', top: '-170px', width: '640px', height: '640px', border: '1px solid rgba(102,216,255,0.34)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: '30px', top: '-35px', width: '370px', height: '370px', border: '1px solid rgba(177,154,255,0.3)', borderRadius: '50%' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#66d8ff', fontSize: '18px', letterSpacing: '2px' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#66d8ff' }} />
          AI / ML <span style={{ color: '#b19aff' }}>·</span> DATA <span style={{ color: '#b19aff' }}>·</span> RESEARCH
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '84px', lineHeight: 1.02 }}>Adityavardhan Jain</div>
          <div style={{ maxWidth: '700px', color: '#b7c3db', fontSize: '27px', lineHeight: 1.4 }}>Building intelligent systems across data, perception, and human-computer interaction.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(245,246,239,0.22)', paddingTop: '20px', color: '#aeb8ab', fontSize: '16px' }}>
          <span>ADITYAVARDHANJAIN.DEV</span><span style={{ color: '#66d8ff' }}>01 / FIELD NOTES</span>
        </div>
      </div>
    ),
    size,
  );
}