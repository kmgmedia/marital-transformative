export default function TestimonialCard({ testimonial, animateDelay }) {
  return (
    <div className="testimonial-card" data-animate="" data-animate-delay={animateDelay}>
      <div className="testimonial-card__quote-mark">&quot;</div>
      <p className="testimonial-card__text">{testimonial.text}</p>
      <div className="testimonial-card__footer">
        <div className={`testimonial-avatar--${testimonial.avatar}`}>
          <svg viewBox="0 0 24 24" className="testimonial-avatar__svg">
            <circle
              cx="12"
              cy="8"
              r="5"
              fill={testimonial.avatar === "gold" ? "var(--gold-mid)" : "var(--forest-mid)"}
            />
            <path
              d="M3 21c0-6.6 4-12 9-12s9 5.4 9 12"
              fill={testimonial.avatar === "gold" ? "var(--gold-tint)" : "var(--forest-tint)"}
            />
          </svg>
        </div>
        <div>
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__status">{testimonial.status}</div>
          <div className="testimonial-card__stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
