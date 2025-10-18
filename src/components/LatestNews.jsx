import Marquee from "react-fast-marquee";
export const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 gap-4 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-4" pauseOnHover={true} speed={50}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          delectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          delectus.
        </p>
      </Marquee>
    </div>
  );
};
