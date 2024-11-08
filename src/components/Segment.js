import { Link } from "react-router-dom";

let Segment = ({ data }) => {
  let { segment, tagline, count } = data;
  return (
    <Link to={"/segment/" + segment}>
      <section className="segment">
        <div className="segment__top">
          <div className="segment__name">{segment}</div>
          <div className="segment__count">{count}</div>
        </div>
        <div className="segment__bottom">
          <div className="segment__text">{tagline}</div>
        </div>
      </section>
    </Link>
  );
};

export default Segment;
