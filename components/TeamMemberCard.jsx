export default function TeamMemberCard({ member, animateDelay }) {
  return (
    <div className="team-card" data-animate="" data-animate-delay={animateDelay}>
      <img className="team-card__photo" src={member.photo} alt={member.name} loading="lazy" />
      <div className="team-card__name">{member.name}</div>
      <div className="team-card__role">{member.role}</div>
      <div className="team-card__credentials">{member.credentials}</div>
      <p className="team-card__bio">{member.bio}</p>
    </div>
  );
}
