import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";
import { Input } from "../Input/Input";
export function Color() {
    const { handleChange } = useContext(ContentContext);
    return (
        <>
            <h3 className="filter-title">Color</h3>
            <div className="filter-inputs">
                <label className="label">
                    <input
                        onChange={handleChange}
                        className="radio-input"
                        type="radio"
                        name="Color"
                        value="All"
                    />
                    <span></span> All
                </label>
                <Input
                    name={"Color"}
                    value={"Black"}
                    title={"Black"}
                    color={"black"}
                />
                <Input
                    name={"Color"}
                    value={"Silver"}
                    title={"Silver"}
                    color={"lightgray"}
                />
                <Input
                    name={"Color"}
                    value={"Gray"}
                    title={"Gray"}
                    color={"gray"}
                />
                <Input
                    name={"Color"}
                    value={"White"}
                    title={"White"}
                    color={"white"}
                />
                <Input
                    name={"Color"}
                    value={"Red"}
                    title={"Red"}
                    color={"red"}
                />
            </div>
        </>
    );
}
