import Deck from "../components/Deck";

const Flashcard = ({ setSetshowAddDeckForm }) => {
  return (
    <div className="py-7">
      <div className="mx-10 flex items-center justify-between">
        <p className="text-2xl font-semibold text-[#737262]">My Decks</p>
        <button
          onClick={() => {
            setSetshowAddDeckForm(true);
          }}
          className="rounded-full bg-[#737262] p-3 px-5 text-lg font-semibold text-white hover:bg-[#67675a]"
        >
          Create new deck
        </button>
      </div>
      <div className="mx-10 my-7 flex flex-col gap-4 rounded-lg border-2 border-[#f3f3e7] bg-[#FBFBFA] px-8 py-7 ">
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
      </div>
    </div>
  );
};

export default Flashcard;
