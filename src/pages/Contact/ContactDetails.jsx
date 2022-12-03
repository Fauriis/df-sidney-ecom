export default function ContactDetails() {
  return (
    <>
      <section className="lg:flex mt-6 mx-6 lg:mb-8 lg:container lg:mx-auto lg:justify-between">
        <div className="lg:">
          <h1 className="uppercase font-bold my-4 lg:text-2xl">
            Contact Info:
          </h1>
          <p className="mb-6 font-light lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            <br className="lg:block hidden" />
            Fuga neque dolore reprehenderit non minima, quidem tenetur{' '}
            <br className="lg:block hidden" /> facilis amet facere, debitis nam
            modi magni vel quos accusantium <br className="lg:block hidden" />{' '}
            quae magnam sequi error.
          </p>

          <h3 className="mb-2">
            <span className="font-bold">Adress:</span> Santa Monica Boulevard,
            1112
          </h3>

          <h3 className="mb-2">
            <span className="font-bold">Phone:</span> 452647823
          </h3>

          <h3 className="mb-2">
            <span className="font-bold">Email:</span> info@sun.com
          </h3>

          <h3 className="mb-2">
            <span className="font-bold">Fax:</span> 452647823
          </h3>
        </div>

        <div className=" ">
          <form action="" id="form" className="">
            <div className="lg:flex lg:flex-row lg:gap-4 lg:mb-2">
              <input
                className="border my-2 lg:py-2 lg:px-6 "
                type="text"
                placeholder="Your name"
                required
              />

              <input
                className="border my-2 lg:py-2 lg:px-6 "
                type="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="lg:flex lg:flex-col lg:pb-2">
              <input
                className="border mb-2 lg:px-6 lg:py-2 "
                type="text"
                placeholder="Your title"
                required
              />

              <textarea
                className="border mb-2"
                rows={6}
                type="text"
                placeholder="Your comment"
              />
            </div>
          </form>

          <button
            id="form"
            type="button"
            className="bg-black text-white p-2 uppercase my-4 hover:bg-pink-400 lg:px-4 font-bold"
          >
            Send message
          </button>
        </div>
      </section>
    </>
  );
}
