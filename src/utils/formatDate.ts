/**
 * Date formatting utilities for the wedding invitation.
 */

const MONTHS_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const DAYS_ID = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
];

/** Format date as "Minggu, 20 Desember 2026" */
export function formatDateLong(dateStr: string): string {
  const date = new Date(dateStr);
  const day = DAYS_ID[date.getDay()];
  const d = date.getDate();
  const month = MONTHS_ID[date.getMonth()];
  const year = date.getFullYear();
  return `${day}, ${d} ${month} ${year}`;
}

/** Format date as "20 Desember 2026" */
export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  const d = date.getDate();
  const month = MONTHS_ID[date.getMonth()];
  const year = date.getFullYear();
  return `${d} ${month} ${year}`;
}

/** Format date as "20.12.2026" */
export function formatDateDot(dateStr: string): string {
  const date = new Date(dateStr);
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
}

/** Format relative time for wishes: "2 jam yang lalu" */
export function formatTimeAgo(dateStr: string): string {
  const now = new Date().getTime();
  const then = new Date(dateStr).getTime();
  const diff = now - then;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Baru saja';
  if (minutes < 60) return `${minutes} menit yang lalu`;
  if (hours < 24) return `${hours} jam yang lalu`;
  if (days < 30) return `${days} hari yang lalu`;
  return formatDateShort(dateStr);
}
