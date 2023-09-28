import Image from "next/image";
import Link from "next/link";

export default function ResultItem({ resultItem }) {
  const { favicon, link, title, about_page_link, source } = resultItem;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 bg-white px-4 rounded-md py-3">
      {favicon && (
        <Image
          className="mt-2"
          src={favicon}
          width={30}
          height={30}
          alt="icon"
        />
      )}
      <div>
        {source && (
          <h1>
            <span className="font-medium">Source</span>: {source}
          </h1>
        )}
        {title && (
          <h1>
            <span className="font-medium">Title</span>: {title}
          </h1>
        )}
        {link && (
          <h1>
            <span className="font-medium">Link:</span>{" "}
            <Link
              target="_blank"
              className="text-blue-600 hover:underline"
              href={link}
            >
              Click here
            </Link>
          </h1>
        )}
        {about_page_link && (
          <h1>
            <span className="font-medium">Search Page:</span>{" "}
            <Link
              target="_blank"
              className="text-blue-600 hover:underline"
              href={about_page_link}
            >
              Click here
            </Link>
          </h1>
        )}
      </div>
    </div>
  );
}
