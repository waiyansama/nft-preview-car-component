const Card = () => {
  return (
    <div className="card">
      <div className="img-container">
        <img src="img\image-equilibrium.jpg" alt="NFT image" />
      </div>

      <h1 className="title">Equilibrium #3429</h1>
      <p className="description">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="info-container">
        <div className="ethereum-container">
          <img src="img\icon-ethereum.svg" alt="ethereum icon" />
          <span className="price-tag">0.041 ETH</span>
        </div>

        <div className="duration-container">
          <img src="img\icon-clock.svg" alt="clock icon" />
          <span className="text-primary">3 days left</span>
        </div>
      </div>

      <div className="line"></div>

      <div className="creator-container">
        <img
          src="img\image-avatar.png"
          alt="profile picture"
          className="img-avatar"
        />
        <p className="text-primary">
          Creation of <span className="text-white">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
