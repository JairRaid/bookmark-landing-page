export default function Feature({ image, alt, title, description }) {
  return (
    <>
      <div className="feature-list">
        <figure>
          <img src={image} alt={alt} />
        </figure>
        <article>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn-purple">More Info</button>
        </article>
      </div>
    </>
  );
}
