// ============================================================
// Wedding Config — Single Source of Truth
// ============================================================
// Update this file to customize the entire wedding invitation.
// All sections read from this config. No data is duplicated.
// ============================================================

import { WeddingConfig } from '@/types';

const config: WeddingConfig = {
  // ── Couple ────────────────────────────────────────────────
  couple: {
    monogram: 'I & E',
    bride: {
      firstName: 'Esah',
      lastName: '',
      fullName: 'Esah',
      fatherName: 'Bapak Sapur',
      motherName: 'Ibu Nur Aeni',
      childOrder: 'Putri tercinta dari',
      instagram: '',
      photo: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1786160190/Artboard_1_copy_w4v6c8.jpg',
    },
    groom: {
      firstName: 'Indra',
      lastName: 'Saputra',
      fullName: 'Indra Saputra',
      fatherName: 'Bapak Jajang Rusumana',
      motherName: 'Ibu Neneng Hasanah',
      childOrder: 'Putra tercinta dari',
      instagram: '',
      photo: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1786160190/Artboard_1_y8tpuf.jpg',
    },
    hashtag: '#IndraEsah2026',
  },

  // ── Events ────────────────────────────────────────────────
  events: [
    {
      id: 'akad',
      title: 'Akad Nikah',
      date: '2026-09-22T09:00:00+07:00',
      time: '09:00 WIB',
      endTime: 'Selesai',
      venue: 'Kediaman Mempelai Wanita',
      address: 'Citeluk, Kec. Cibitung, Kabupaten Pandeglang, Banten (Simpang 3, SSO Pasir Ipis 42285)',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Citeluk+Cibitung+Kabupaten+Pandeglang+Banten+42285',
    },
    {
      id: 'reception',
      title: 'Resepsi Pernikahan',
      date: '2026-09-27T10:00:00+07:00',
      time: '10:00 WIB',
      endTime: 'Selesai',
      venue: 'Kediaman Mempelai Pria',
      address: 'Kelapa Dua, Cimanggis, Depok, Kel. Tugu 16451',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kelapa+Dua+Tugu+Cimanggis+Depok+16451',
    },
  ],

  // ── Digital Gifts ─────────────────────────────────────────
  gifts: [
    {
      id: 'bca',
      bank: 'Bank Central Asia (BCA)',
      accountNumber: '546 534 329 7',
      accountName: 'Indra Saputra',
    },
  ],

  // ── Gallery ───────────────────────────────────────────────
  gallery: [
    {
      id: '1',
      src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1786160657/ChatGPT_Image_8_Agu_2026_10.43.47_novdlv.png',
      alt: 'Prewedding photo 1',
      width: 800,
      height: 800,
    },
    {
      id: '2',
      src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1786160631/ChatGPT_Image_8_Agu_2026_10.40.42_akmcyc.png',
      alt: 'Prewedding photo 2',
      width: 800,
      height: 800,
    },
    {
      id: '3',
      src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1786160606/ChatGPT_Image_8_Agu_2026_10.42.43_dgv3nq.png',
      alt: 'Prewedding photo 3',
      width: 800,
      height: 800,
    },
    {
      id: '4',
      src: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1786160593/ChatGPT_Image_8_Agu_2026_10.41.49_vawqll.png',
      alt: 'Prewedding photo 4',
      width: 800,
      height: 800,
    },
  ],

  // ── Background Music ──────────────────────────────────────
  music: '/music/Bakcgroundwedding.mp3',

  // ── SEO / Meta ────────────────────────────────────────────
  meta: {
    title: 'The Wedding of Indra & Esah',
    description:
      'Undangan Pernikahan Indra Saputra & Esah. 22 & 27 September 2026.',
    url: 'https://indra-esah.vercel.app',
    ogImage: '/images/og-image.jpg',
  },
};

/** Wedding date used for the countdown */
export const WEDDING_DATE = new Date('2026-09-22T09:00:00+07:00');

export default config;
