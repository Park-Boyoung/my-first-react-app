function CustomList(props) {
  return (
    // [0, 1, 2, 3, 4]
    <ul>
      {props.arr.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
}

export default CustomList;
