import { useContext } from "react";
import "./input.scss";
import { ContentContext } from "../../../context/ContentContext";
export function Input({ name, value, title }) {
    const {
        filterRadioData,
        // handleChange,
        // setColorFilter,
        // setPriceFilter,
        // setBrandFilter,
    } = useContext(ContentContext);
    return (
        <label className="label">
            <input
                onChange={e => {
                    filterRadioData(e.target.name, e.target.value);
                    // if (e.target.name === "Color") {
                    //     setColorFilter("Color");
                    // } else if (e.target.name === "price") {
                    //     setPriceFilter("price");
                    // } else if (e.target.name === "brand") {
                    //     setBrandFilter("brand");
                    // }
                }}
                className="radio-input"
                type="radio"
                name={name}
                value={value}
            />
            <span></span> {title}
        </label>
    );
}
