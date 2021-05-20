import Card from "./CardComponent";
import "../App.css";

const List = ({ data }) => {
  return (
    <div className="productContainer">
      {data.map((g, index) => (
        <div key={index} className="card">
          <Card data={g} />
        </div>
      ))}
    </div>
  );
};

export default List;
