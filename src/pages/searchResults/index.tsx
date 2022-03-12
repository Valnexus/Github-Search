import { useState } from "react";
import { useSelector } from 'react-redux';
import { timeAgo, numberWithCommas, numberWithSymbol } from "../../helpers";
import { searchRepResult, searchUserResult } from "../../store/slices/searchSlice";
import "./style.css";

const SearchResult = () => {
    const repResult = useSelector(searchRepResult);
    const userResult = useSelector(searchUserResult);
    const [category, setCategory] = useState<Number>(1);

    return (
        <div className="result-page">
            <div className="result-sidebar">
                <div className="result-sidebar-box">
                    <div onClick={()=>setCategory(1)} className={category === 1 ? "result-category result-category-active" : "result-category"}>Repositories<span>{numberWithSymbol(repResult.total_count, 0)}</span></div>
                    <div onClick={()=>setCategory(2)} className={category === 2 ? "result-category result-category-active" : "result-category"}>Users<span>{numberWithSymbol(userResult.total_count, 0)}</span></div>
                </div>
            </div>
            <div className="result-content">
                { category === 1 ? 
                    <div>
                        <h2>{numberWithCommas(Number(repResult.total_count))} repository results</h2>
                        {repResult.items.map((rep:any) =>   
                            <div className="result-box" key={rep.id}>
                                <h3>{rep.full_name}</h3>
                                <p>{rep.description}</p>
                                <ul className="result-box-info">
                                    <li>{numberWithSymbol(rep.stargazers_count, 1)} Stars</li>
                                    {rep.license && <li>{rep.license.name}</li>}
                                    {rep.language && <li>{rep.language}</li>}
                                    <li>Updated {timeAgo(rep.updated_at)}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                : null }
                { category === 2 ? 
                    <div>
                        <h2>{numberWithCommas(Number(userResult.total_count))} user results</h2>

                        {userResult.items.map((user:any) =>   
                            <div className="result-box" key={user.id}>
                                <h3>{user.login} <span>Lorem ipsum is simply dummy text.</span></h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        )}
                    </div>
                : null }
            </div>    
        </div>
    )
};

export default SearchResult;