const ResturantCard = (props) => {
    const styleCard = {
        backgroundColor: "#f0f0f0",
      };
    const data = props.props;
    // sconsole.log(props.props);
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-image" src={data.Image} alt="res-image"></img>
        <h3>{data.resName}</h3>
        <h4>{data.cuisine}</h4>
        <h4>{data.rating}</h4>
        <h4>{data.time}</h4>
      </div>
    );
  };

  export default ResturantCard;