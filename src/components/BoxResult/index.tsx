import "./style.css";
import { numberWithCommas, numberWithSymbol, timeAgo } from "../../helpers";
import { useState } from "react";
import Pagination from "../Pagination";

const RepositoryResult = (props: { data:any, user?:boolean }) => {
    const { data, user } = props;
    const items = data.items;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currnetItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Paginate by arrows
    const paginateDirection = (y:string) => {
        y === "next" ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage - 1)
    };

    return (
        <div>
            <h2>{numberWithCommas(Number(data.total_count))} repository results</h2>
            {currnetItems.map((item:any) =>   
                user ? 
                    <div className="result-box" key={item.id}>
                        <h3>{item.login} <span>Lorem ipsum is simply dummy text.</span></h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                :
                    <div className="result-box" key={item.id}>
                        <h3>{item.full_name}</h3>
                        <p>{item.description}</p>
                        <ul className="result-box-info">
                            <li>{numberWithSymbol(item.stargazers_count, 1)} Stars</li>
                            {item.license && <li>{item.license.name}</li>}
                            {item.language && <li>{item.language}</li>}
                            <li>Updated {timeAgo(item.updated_at)}</li>
                        </ul>
                    </div>
            )}
            <Pagination 
                paginateDirection={async (y) => paginateDirection(y)}
                currentPage={currentPage}
                paginate={async (x) => setCurrentPage(x)}
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
            />
        </div>
    )
};

export default RepositoryResult;