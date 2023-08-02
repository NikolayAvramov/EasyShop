import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";
import { Input } from "../Input/Input";
export function Price() {
    const { handleChange } = useContext(ContentContext);
    return (
        <>
            <h3 className="filter-title">Price</h3>
            <div className="filter-inputs">
                <label className="label">
                    <input
                        onChange={handleChange}
                        className="radio-input"
                        type="radio"
                        name="price"
                        value=""
                    />
                    <span></span> All
                </label>
                <Input name={"price"} value={200} title={"0-200"} />
                <Input name={"price"} value={400} title={"200-400"} />
                <Input name={"price"} value={800} title={"400-800"} />
                <Input name={"price"} value={10000} title={"Over 800"} />
            </div>
        </>
    );
}
