/**
 * Ren sektionsgräns med en tunn guldlinje som accent — ersätter den
 * tidigare vågformade övergången, som läste som ett fel snarare än ett
 * medvetet designval.
 */
export default function FallDivider() {
  return <div aria-hidden="true" className="h-[2px] w-full bg-gold" />;
}
