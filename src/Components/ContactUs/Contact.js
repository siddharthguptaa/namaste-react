const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold m-4 p-4">Contact Us</h1>
      <input
        type="text"
        className="border border-black m-2 p-2 rounded-lg"
        placeholder="Name"
      ></input>
      <input
        type="text"
        className="border border-black m-2 p-2 rounded-lg"
        placeholder="Message"
      ></input>
      <button className="border border-black m-2 p-2 rounded-lg bg-slate-100">Submit</button>
    </div>
  );
};

export default Contact;
