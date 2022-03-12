import { useState } from "react";
import "./style.css";

const SearchResult = () => {
    const [category, setCategory] = useState<Number>(1);
    return (
        <div className="result-page">
            <div className="result-sidebar">
                <div className="result-sidebar-box">
                    <div onClick={()=>setCategory(1)} className={category === 1 ? "result-category result-category-active" : "result-category"}>Repositories<span>492</span></div>
                    <div onClick={()=>setCategory(2)} className={category === 2 ? "result-category result-category-active" : "result-category"}>Users<span>12</span></div>
                </div>
            </div>
            <div className="result-content">
                <h2>2000 repository results</h2>
            </div>    
        </div>
    )
};

export default SearchResult;