export default function ListGroup() {
  //adding fragments instead of importing fragments from react, just add empty <>
  //in jsx, we use {} to render data dynamically
  //No for loops
  //when rendering items in react , we need to give each a unique key for identity, especially when using 'map'
  //incase we are consuming from an api, each item has an id, so we use ids

  const items = ["Nairobi", "Eldoret", "Kisumu", "Emali", "Nakuru"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key = {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
