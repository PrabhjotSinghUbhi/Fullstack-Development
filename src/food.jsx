function Food() {
  const food1 = `pizza`;
  const food2 = `burger`;
  const food3 = `donuts`;

  return (
    <ul tabIndex={0}>
      <li tabIndex={0}>{food1}</li>
      <li tabIndex={0}>{food2}</li>
      <li tabIndex={0}>{food3}</li>
    </ul>
  );
}

export default Food;
