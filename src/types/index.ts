// ============================================================
// Wedding Invitation — Type Definitions
// ============================================================

/** Core wedding configuration — single source of truth */
export interface WeddingConfig {
  couple: CoupleInfo;
  events: WeddingEvent[];
  gifts: BankAccount[];
  gallery: GalleryImage[];
  music: string;
  meta: MetaInfo;
}

export interface CoupleInfo {
  bride: PersonInfo;
  groom: PersonInfo;
  monogram: string; // e.g. "A & N"
  hashtag?: string;
}

export interface PersonInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  childOrder: string; // e.g. "Putri pertama"
  instagram?: string;
  photo: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  endTime?: string;
  venue: string;
  address: string;
  mapsUrl: string;
  mapsEmbed?: string;
}

export interface BankAccount {
  id: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  logo?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface MetaInfo {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}

/** RSVP form data */
export interface RSVPData {
  id?: string;
  name: string;
  attendance: 'attending' | 'not_attending';
  guests: number;
  wishes: string;
  created_at?: string;
}

/** Wish display data */
export interface WishData {
  id: string;
  name: string;
  wishes: string;
  attendance: 'attending' | 'not_attending';
  created_at: string;
}

/** Guest info parsed from URL */
export interface GuestInfo {
  name: string;
}

/** Animation variant types for AnimatedSection */
export type AnimationVariant =
  | 'fadeUp'
  | 'fadeIn'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scale'
  | 'slideUp';

/** Gold divider style variants */
export type DividerVariant = 'floral' | 'line' | 'ornate' | 'dots';

/** Button component variants */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
