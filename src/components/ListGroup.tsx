
export default function ListGroup() {

    //adding fragments instead of importing fragments from react, just add empty <>
    
  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
  );
}
