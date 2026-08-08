'use client';

import { IoCalendarOutline, IoTimeOutline, IoLocationOutline, IoMapOutline } from 'react-icons/io5';
import config from '@/lib/config';
import { formatDateLong } from '@/utils/formatDate';
import { downloadCalendarEvent } from '@/lib/calendar';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Wedding event section with Akad and Reception cards.
 */
export default function WeddingEvent() {
  const { events } = config;

  return (
    <section
      id="event"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF8] via-[#F7F2EA] to-[#FAF7F2]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 10% 50%, rgba(200, 169, 106, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 50%, rgba(200, 169, 106, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="wildgrass-left" className="bottom-0 left-0 -translate-x-[15%]" opacity={0.35} />
      <BotanicalDecoration variant="wildgrass-right" className="bottom-0 right-0 translate-x-[15%]" opacity={0.35} />
      <BotanicalDecoration variant="hanging-leaves" className="top-0 left-0 w-full" opacity={0.3} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading title="Wedding Event" subtitle="Rangkaian Hari Bahagia" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <AnimatedSection
              key={event.id}
              variant="fadeUp"
              delay={0.2 + index * 0.2}
            >
              <GlassCard
                className="h-full border border-[rgba(200,169,106,0.15)]"
                padding="p-8"
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Event title */}
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C8A96A] mb-2">
                    {event.id === 'akad' ? 'The Sacred Vow' : 'The Grand Celebration'}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#2C2C2C] mb-2">
                    {event.title}
                  </h3>
                  <p className="font-sans text-xs text-[#6B6B6B] italic mb-6">
                    {event.id === 'akad'
                      ? 'Langkah awal mengikat janji suci di hadapan Sang Maha Kuasa'
                      : 'Momen kebersamaan merayakan cinta berbalut doa restu'}
                  </p>

                  {/* Details */}
                  <div className="space-y-4 mb-8 flex-1">
                    {/* Date */}
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-full bg-[rgba(200,169,106,0.1)] flex items-center justify-center flex-shrink-0">
                        <IoCalendarOutline className="text-[#C8A96A] text-lg" />
                      </div>
                      <p className="font-sans text-sm text-[#4A4A4A]">
                        {formatDateLong(event.date)}
                      </p>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-full bg-[rgba(200,169,106,0.1)] flex items-center justify-center flex-shrink-0">
                        <IoTimeOutline className="text-[#C8A96A] text-lg" />
                      </div>
                      <p className="font-sans text-sm text-[#4A4A4A]">
                        {event.time} {event.endTime ? `- ${event.endTime}` : '- Selesai'}
                      </p>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-full bg-[rgba(200,169,106,0.1)] flex items-center justify-center flex-shrink-0">
                        <IoLocationOutline className="text-[#C8A96A] text-lg" />
                      </div>
                      <div>
                        <p className="font-sans text-sm font-medium text-[#2C2C2C]">
                          {event.venue}
                        </p>
                        <p className="font-sans text-xs text-[#6B6B6B] mt-0.5">
                          {event.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                      variant="primary"
                      href={event.mapsUrl}
                      icon={<IoMapOutline />}
                      className="flex-1 text-xs"
                    >
                      Google Maps
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => downloadCalendarEvent(event)}
                      icon={<IoCalendarOutline />}
                      className="flex-1 text-xs"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
