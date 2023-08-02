import { useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";
import { Input } from "../Input/Input";
export function Brands() {
    const { handleChange } = useContext(ContentContext);
    return (
        <>
            <h3 className="filter-title">Brands</h3>
            <div className="filter-inputs">
                <label className="label">
                    <input
                        onChange={handleChange}
                        className="radio-input"
                        type="radio"
                        name="brand"
                        value=""
                    />
                    <span></span> All
                </label>
                <Input name={"brand"} value={"LG"} title={"LG"} />
                <Input name={"brand"} value={"Samsung"} title={"Samsung"} />
                <Input name={"brand"} value={"Apple"} title={"Apple"} />
                <Input name={"brand"} value={"Lenovo"} title={"Lenovo"} />
                <Input name={"brand"} value={"Sceptre"} title={"Sceptre"} />
                <Input name={"brand"} value={"Acer"} title={"Acer"} />
                <Input name={"brand"} value={"TOSHIBA"} title={"TOSHIBA"} />
                <Input name={"brand"} value={"Canon"} title={"Canon"} />
                <Input name={"brand"} value={"Realme"} title={"Realme"} />
            </div>
        </>
    );
}
