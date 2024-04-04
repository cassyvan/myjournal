const guideCardStyle =
  "bg-white border border-sky-200 rounded-full shadow hover:bg-stone-100 hover:cursor-pointer relative p-4";

const dailyReflections = {
  key: 1,
  cardInfo: [
    <div key={1} className={guideCardStyle}>
      <div className="font-medium bg-black">Daily Reflections: </div>
      <div className="p-4">
        Reflect on your day—what happened, how you felt, what you accomplished,
        and what you struggled with.
      </div>
    </div>,
  ],
  journalGuide: "testing",
};

export const getGuides = [dailyReflections];
