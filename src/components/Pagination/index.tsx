import "./style.css";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (x: number) => {};
  paginateDirection: (y: string) => {};
}

const Pagination:React.FC<Props> = ({ itemsPerPage, totalItems, paginate, currentPage, paginateDirection }) => {
  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        <li className="pagination-item">
          {currentPage === 1 ? (
            <span className="inactive"></span>
          ) : (
            <span onClick={() => paginateDirection("back")}></span>
          )}
        </li>
        {pageNumbers.map((number: number) => (
          <li className="pagination-item" key={number}>
            <span
              className={currentPage === number ? "active" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          </li>
        ))}
        <li className="pagination-item">
          {currentPage === pageNumbers.length ? (
            <span className="inactive"></span>
          ) : (
            <span onClick={() => paginateDirection("next")}></span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
