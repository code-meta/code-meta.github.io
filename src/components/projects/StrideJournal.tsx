import ResponsiveImage from "../ResponsiveImage";

const StrideJournal = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg lg:text-2xl leading-relaxed tracking-wide mt-4">
            Stride Journal is a powerful app that guides you to take meaningful
            actions every day, helping you turn your ambitions into reality. You
            can review your progress, see how well you've tackled tasks and
            built habits, creating a powerful drive to take even better action.
          </p>

          <p className="text-lg leading-relaxed tracking-wide mt-8">
            This project is something I built for myself to stay focused and
            consistently move forward on my own goals. Stride Journal makes it
            easy to keep track of progress and form good habits, helping users
            stay motivated to keep improving each day.
          </p>
        </div>
      </div>

      <div className="bg-stone-900 p-4 mt-20 py-10 flex flex-col gap-y-8">
        <ResponsiveImage
          large="log-journal/log-large.jpg"
          medium="log-journal/log-medium.jpg"
        />

        <ResponsiveImage
          large="log-journal/journal-large.jpg"
          medium="log-journal/journal-medium.jpg"
        />

        <ResponsiveImage
          large="log-journal/home-large.jpg"
          medium="log-journal/home-medium.jpg"
        />
      </div>
    </div>
  );
};

export default StrideJournal;
