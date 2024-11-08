let SegmentCar = ({ data }) => {
  let { name, km, year, price } = data;
  return (
    <section className="car__card">
      <div className="card__top">
        <div className="car__name">{name}</div>
        <div className="card__top-bottom">
          <div className="car__distane">distane: {km}</div>
          <div className="car__year">year: {year}</div>
        </div>
      </div>
      <div className="card__bottom">
        <div className="car__price">Rs {price}</div>
      </div>
    </section>
  );
};

export default SegmentCar;
