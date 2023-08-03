import { useContext } from "react";
import "./input.scss";
import { ContentContext } from "../../../context/ContentContext";
export function Input({ name, value, title }) {
    const { filterRadioData } = useContext(ContentContext);
    return (
        <label className="label">
            <input
                onChange={e => {
                    filterRadioData(e.target.name, e.target.value);
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
