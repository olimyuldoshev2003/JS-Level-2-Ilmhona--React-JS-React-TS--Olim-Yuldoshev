import Box from "../box/Box";

// eslint-disable-next-line react/prop-types
const Data = ({ data }) => {
  if (!Array.isArray(data)) {
    data = [];
  }

  return (
    <Box class={`mt-10`}>
      <div className="block_todos mt-5 flex md:justify-between sm:justify-center flex-wrap gap-6 px-7">
        {
        // eslint-disable-next-line react/prop-types
          data.map((item) => (
          <div
            key={item.id}
            className="max-w-80 bg-red-500 px-8 py-5 rounded-2xl text-white"
          >
            <h1 className="text-lg">{item.title}</h1>
            <div className="block_btns flex items-center gap-3 mt-5">
              <button className="bg-red-600 outline-none px-5 py-1 rounded-md text-md">
                Edit
              </button>
              <button className="bg-yellow-600 outline-none px-5 py-1 rounded-md text-md">
                Delete
              </button>
              <input
                type="checkbox"
                className="outline-none w-9 h-9 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Data;
