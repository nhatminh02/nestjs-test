const AddDeckForm = ({ setSetshowAddDeckForm }) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#000000b0]"></div>
      <div className="fixed left-1/2 top-1/2 z-50 flex w-[350px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded-md bg-[#FBFBFA] px-5 py-3">
        <div className="relative text-center text-lg font-semibold text-[#737262]">
          New deck
          <button
            onClick={() => {
              setSetshowAddDeckForm(false);
            }}
            className="absolute right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Deck name"
            className="w-full rounded-md border-2 border-[#f3f3e7] px-3 py-4 outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-full bg-[#737262] p-3 px-5 text-lg font-semibold text-white hover:bg-[#67675a]">
            Create new deck
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDeckForm;
