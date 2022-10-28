import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

const ProductReviews = ({ rate, count }) => {
  const totalStars = 5;
  const rateCount = Math.floor(rate);

  return (
    <section className="my-10 mx-auto flex flex-row">
      <button type="button" className="flex">
        {Array(totalStars)
          .fill('_')
          .map((_, index) => {
            return index < rateCount ? (
              <AiTwotoneStar size="25" color="yellow" />
            ) : (
              <AiOutlineStar size="25" className="hover:text-yellow-100" />
            );
          })}
      </button>

      <p className="lg:mx-4 lg:text-xl lg:block hidden"> ({count} reviews)</p>
    </section>
  );
};

export default ProductReviews;
