'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSendOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import Sparkles from '@/components/decorations/Sparkles';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

interface RSVPFormData {
  name: string;
  attendance: 'attending' | 'not_attending' | '';
  guests: number;
  wishes: string;
}

/**
 * RSVP form with validation, Supabase submission, and success animation.
 */
export default function RSVP() {
  const [form, setForm] = useState<RSVPFormData>({
    name: '',
    attendance: '',
    guests: 1,
    wishes: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RSVPFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!form.attendance) newErrors.attendance = 'Pilih konfirmasi kehadiran';
    if (form.attendance === 'attending' && (form.guests < 1 || form.guests > 10))
      newErrors.guests = 'Jumlah tamu 1-10';
    if (!form.wishes.trim()) newErrors.wishes = 'Ucapan wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          attendance: form.attendance,
          guests: form.attendance === 'attending' ? form.guests : 0,
          wishes: form.wishes.trim(),
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setErrors({ name: 'Terjadi kesalahan. Silakan coba lagi.' });
      }
    } catch {
      setErrors({ name: 'Terjadi kesalahan jaringan. Silakan coba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF8] via-[#FAF7F2] to-[#F7F2EA]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,106,0.05)_0%,transparent_60%)]" />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="wildgrass-left" className="bottom-0 left-0 -translate-x-[20%]" opacity={0.35} />
      <BotanicalDecoration variant="wildgrass-right" className="bottom-0 right-0 translate-x-[20%]" opacity={0.35} />
      <BotanicalDecoration variant="branch-bottom" className="bottom-0 left-0 w-full" opacity={0.25} />

      <div className="relative z-10 max-w-xl mx-auto">
        <SectionHeading title="RSVP" subtitle="Konfirmasi Kehadiran" />

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <GlassCard
            className="border border-[rgba(200,169,106,0.15)] relative overflow-hidden"
            padding="p-6 md:p-10"
            hover={false}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Success state */
                <motion.div
                  key="success"
                  className="flex flex-col items-center text-center py-8 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Sparkles count={20} />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <IoCheckmarkCircleOutline className="text-6xl text-[#C8A96A] mb-4" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2C2C2C] mb-2">
                    Terima Kasih!
                  </h3>
                  <p className="font-sans text-sm text-[#6B6B6B]">
                    Konfirmasi kehadiran Anda telah kami terima.
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[rgba(200,169,106,0.2)] text-[#2C2C2C] text-sm placeholder:text-[#6B6B6B]/50 transition-all"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                      Konfirmasi Kehadiran
                    </label>
                    <select
                      value={form.attendance}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          attendance: e.target.value as RSVPFormData['attendance'],
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[rgba(200,169,106,0.2)] text-[#2C2C2C] text-sm transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Pilih konfirmasi</option>
                      <option value="attending">Hadir</option>
                      <option value="not_attending">Tidak Hadir</option>
                    </select>
                    {errors.attendance && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.attendance}</p>
                    )}
                  </div>

                  {/* Number of guests */}
                  <AnimatePresence>
                    {form.attendance === 'attending' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <label className="block font-sans text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                          Jumlah Tamu
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={10}
                          value={form.guests}
                          onChange={(e) =>
                            setForm({ ...form, guests: parseInt(e.target.value) || 1 })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[rgba(200,169,106,0.2)] text-[#2C2C2C] text-sm transition-all"
                        />
                        {errors.guests && (
                          <p className="text-red-400 text-xs mt-1.5">{errors.guests}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Wishes */}
                  <div>
                    <label className="block font-sans text-xs tracking-widest uppercase text-[#6B6B6B] mb-2">
                      Ucapan & Doa
                    </label>
                    <textarea
                      value={form.wishes}
                      onChange={(e) => setForm({ ...form, wishes: e.target.value })}
                      placeholder="Tulis ucapan untuk kedua mempelai"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[rgba(200,169,106,0.2)] text-[#2C2C2C] text-sm placeholder:text-[#6B6B6B]/50 transition-all resize-none"
                    />
                    {errors.wishes && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.wishes}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={<IoSendOutline />}
                    className="w-full"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
