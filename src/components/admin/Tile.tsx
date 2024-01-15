import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

export default function Tile({
  title,
  value,
  percentage,
  color,
}: {
  title: string;
  value: string | number;
  percentage: number;
  color: string;
}) {
  return (
    <article className="flex justify-between gap-2 bg-gray-900 rounded-lg items-center flex-grow min-w-52 p-3 shadow-md shadow-black">
      <div className="flex flex-col gap-1 ml-1 mr-2">
        <p className="text-gray-300 text-xs">{title}</p>
        <h4 className="font-bold text-2xl">{value}</h4>
        {percentage < 0 ? (
          <span className="flex text-xs items-center text-red-400">
            <HiTrendingDown /> {percentage}%
          </span>
        ) : (
          <span className="flex text-xs items-center text-green-400">
            <HiTrendingUp /> +{percentage}%
          </span>
        )}
      </div>
      <div
        className="h-16 w-16 grad grid place-items-center rounded-full"
        style={{
          background: `conic-gradient(${color} ${
            Math.abs(percentage) * 3.6
          }deg, rgb(39 39 39) 0)`,
        }}
      >
        <span
          style={{ color }}
          className="h-12 w-12 bg-gray-900 rounded-full text-center py-3"
        >
          {percentage}%
        </span>
      </div>
    </article>
  );
}

export function TileSkeleton() {
  return (
    <article className="flex justify-between gap-2 m-2 bg-gray-900 rounded-lg items-center flex-grow min-w-52 p-3 shadow-md shadow-black">
      <div className="flex flex-col gap-2 ml-1 mr-2">
        <p className="bg-gray-600 w-20 h-3 rounded" />
        <h4 className="font-bold bg-gray-600 text-2xl h-8 w-28 rounded" />
        <span className="w-14 h-3 bg-gray-600 rounded" />
      </div>
      <div className="h-16 w-16 bg-gray-600 grid place-items-center rounded-full">
        <span className="h-12 w-12 bg-gray-900 rounded-full" />
      </div>
    </article>
  );
}
