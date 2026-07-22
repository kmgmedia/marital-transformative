import Link from "next/link";

export default function ServiceCard({ service, animateDelay }) {
  return (
    <div className="service-card" data-animate="" data-animate-delay={animateDelay}>
      <div className="service-card__img">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className="service-card__num">{service.num}</span>
      </div>
      <div className="service-card__body">
        <p className="service-card__who">{service.who}</p>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
        <ul className="service-card__outcomes">
          {service.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <div className="service-card__action">
          <Link href={`/booking?service=${service.slug}`} className="service-card__btn">
            Book This Service
          </Link>
        </div>
      </div>
    </div>
  );
}
