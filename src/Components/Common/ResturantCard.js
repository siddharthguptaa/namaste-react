const ResturantCard = (props) => {
    const styleCard = {
        backgroundColor: "#f0f0f0",
      };
    const data = props.props;
    
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-image" src={data.avatar} alt="res-image"></img>
        <h3>{data.first_name}</h3>
        <h4>{data.last_name}</h4>
        <h4>{data.id}</h4>
        <h4>{data.email}</h4>
      </div>
    );
  };

  export default ResturantCard;