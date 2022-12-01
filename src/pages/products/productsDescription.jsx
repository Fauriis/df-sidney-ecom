export const productsDescription = () => {
  return (
    <div>
      <ul className="grid grid-cols-3 text-center my-10 uppercase lg:text-lg">
        <li className="hover:bg-pink-500 transition-colors">
          {' '}
          <a href="">Description</a>{' '}
        </li>

        <li className="hover:bg-pink-500 transition-colors">
          {' '}
          <a href=""> Additional information</a>
        </li>

        <li className="hover:bg-pink-500 transition-colors">
          <a href=""> Reviews</a>
        </li>
      </ul>
    </div>
  );
};
