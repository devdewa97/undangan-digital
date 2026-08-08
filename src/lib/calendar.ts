import { WeddingEvent } from '@/types';

/**
 * Generates an .ics calendar file content for a wedding event.
 * Downloads it as a file when called in the browser.
 */
export function downloadCalendarEvent(event: WeddingEvent): void {
  const startDate = formatICSDate(new Date(event.date));
  const endDate = event.endTime
    ? formatICSDate(
        new Date(
          new Date(event.date).getTime() +
            parseTimeDiff(event.time, event.endTime)
        )
      )
    : formatICSDate(new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000));

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.venue} - ${event.address}`,
    `DESCRIPTION:${event.title} at ${event.venue}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.replace(/\s+/g, '_')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/** Convert Date to ICS format: 20261220T080000Z */
function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

/** Parse time difference between two time strings like "08:00 WIB" and "10:00 WIB" */
function parseTimeDiff(start: string, end: string): number {
  const getMinutes = (t: string) => {
    const match = t.match(/(\d{1,2}):(\d{2})/);
    if (!match) return 0;
    return parseInt(match[1]) * 60 + parseInt(match[2]);
  };
  const diff = getMinutes(end) - getMinutes(start);
  return diff * 60 * 1000; // milliseconds
}
