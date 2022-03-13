import { useState } from "react";
import { useSelector } from 'react-redux';
import { numberWithSymbol } from "../../helpers";
import { searchRepResult, searchUserResult } from "../../store/slices/searchSlice";
import "./style.css";
import BoxResult from "../../components/BoxResult";

const SearchResult = () => {
    const repResult = useSelector(searchRepResult);
    const userResult = useSelector(searchUserResult);
    const [category, setCategory] = useState<Number>(1);

    return (
        <div className="result-page">
            <div className="result-sidebar">
                <div className="result-sidebar-box">
                    <div onClick={()=>setCategory(1)} className={category === 1 ? "result-category result-category-active" : "result-category"}>
                        Repositories<span>{numberWithSymbol(repResult.total_count, 0)}</span>
                    </div>
                    <div onClick={()=>setCategory(2)} className={category === 2 ? "result-category result-category-active" : "result-category"}>
                        Users<span>{numberWithSymbol(userResult.total_count, 0)}</span>
                    </div>
                </div>
            </div>
            <div className="result-content">
                { category === 1 ? <BoxResult data={repResult} /> : null }
                { category === 2 ? <BoxResult data={userResult} user /> : null }
            </div>    
        </div>
    )
};

export default SearchResult;