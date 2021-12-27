import { useResultsContext } from "../contexts/ResultsContextProvider";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";
import ReactPagination from "react-paginate";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Results = () => {
  const { results, getResults, isLoading, searchTerm } = useResultsContext();
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 20;
  const visitedPages = pageNumber * dataPerPage;

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=200`);
      }
    }
  }, [searchTerm, location]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <>
          <div className="flex flex-wrap justify-between space-y-6 sm:px-56 py-6">
            {results
              ?.slice(visitedPages, visitedPages + dataPerPage)
              .map(({ link, title, description }, index) => (
                <>
                  <div key={index} className="md:w-2/5 w-full">
                    <a href={link} target="_blank" rel="noreferrer">
                      <p className="text-sm">
                        {link.length > 30 ? link.substring(0, 30) : link}
                      </p>
                      <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                        {title}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {description.length > 100
                          ? description.substring(0, 100) + "..."
                          : description}
                      </p>
                    </a>
                  </div>
                </>
              ))}
          </div>
          <div className="flex justify-center mt-5">
            <ReactPagination
              previousLabel="Previous"
              nextLabel="Next"
              // breakLabel={"..."}
              pageCount={Math.ceil(results?.length / dataPerPage)}
              onPageChange={(e) => setPageNumber(e.selected)}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"disabledBtn"}
              activeClassName={"activeBtn"}
            />
          </div>
        </>
      );
    case "/images":
      return (
          <>
        <div className="flex flex-wrap justify-center items-center">
          {results?.slice(visitedPages, visitedPages + dataPerPage).map(({ image, link: { href, title } }, index) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={image?.src}
                alt={title}
                loading="lazy"
                className="rounded"
              />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-5">
            <ReactPagination
              previousLabel="Previous"
              nextLabel="Next"
              // breakLabel={"..."}
              pageCount={Math.ceil(results?.length / dataPerPage)}
              onPageChange={(e) => setPageNumber(e.selected)}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"disabledBtn"}
              activeClassName={"activeBtn"}
            />
          </div>
        </>
      );
    case "/news":
      return (
          <>
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.slice(visitedPages, visitedPages + dataPerPage).map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
            <ReactPagination
              previousLabel="Previous"
              nextLabel="Next"
              // breakLabel={"..."}
              pageCount={Math.ceil(results?.length / dataPerPage)}
              onPageChange={(e) => setPageNumber(e.selected)}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"disabledBtn"}
              activeClassName={"activeBtn"}
            />
          </div>
        </>
      );
    case "/videos":
      return (
          <>
        <div className="flex flex-wrap">
          {results?.slice(visitedPages, visitedPages + dataPerPage).map((video, index) => (
            <div key={index} className="p-2">
              {video?.link && (
                <ReactPlayer
                  url={video.link}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
            <ReactPagination
              previousLabel="Previous"
              nextLabel="Next"
              // breakLabel={"..."}
              pageCount={Math.ceil(results?.length / dataPerPage)}
              onPageChange={(e) => setPageNumber(e.selected)}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"disabledBtn"}
              activeClassName={"activeBtn"}
            />
          </div>
        </>
      );
    default:
      return "ERROR!";
  }
};

export default Results;
