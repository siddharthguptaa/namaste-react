const ResturantCard = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const data = props.props;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="w-[250px] rounded-xl"
        src={data.avatar}
        alt="res-image"
      ></img>
      <h3 className="font-bold py-2 text-lg text-center">
       {data.first_name} {data.last_name}
      </h3>
      <h4>Email : {data.email}</h4>
      <h4>Personal Number: {data.id}</h4>
    </div>
  );
};

export default ResturantCard;
