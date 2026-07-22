import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection({ heading, body, note }) {
  return (
    <section className="newsletter">
      <div className="container">
        <div data-animate="">
          <h2>{heading}</h2>
          <p>{body}</p>
          <NewsletterForm />
          <p className="newsletter__note">{note}</p>
        </div>
      </div>
    </section>
  );
}
