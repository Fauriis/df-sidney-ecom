export const CartVoucher = () => {
  return (
    <>
      <section>
        <form className="mb-8 mt-4 flex items-center justify-center">
          <input
            className="border-2 font-bold lg:px-4 p-2"
            type="text"
            name="Apply Coupon"
            id="Apply Coupon"
            placeholder="Coupon Code"
          />

          <button
            type="button"
            title="Apply Coupon"
            className="border-2 lg:mr-3 border-black mx-5 bg-white text-black p-2 lg:px-4 font-bold  hover:bg-black hover:text-white"
          >
            Apply Coupon
          </button>

          <button
            type="button"
            title="Update Cart"
            className="border-2 lg:block hidden border-black bg-black text-white font-black p-2 hover:bg-white hover:text-black"
          >
            Update cart
          </button>
        </form>

        <div className="text-center">
          <button
            type="button"
            title="Update Cart"
            className="border-2 lg:hidden border-black bg-black text-white font-black p-2 hover:bg-white hover:text-black"
          >
            Update cart
          </button>
        </div>
      </section>
    </>
  );
};
