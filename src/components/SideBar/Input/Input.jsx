import { useContext } from "react";
import "./input.scss";
import { ContentContext } from "../../../context/ContentContext";
export function Input({ name, value, title, color }) {
    const { handleChange } = useContext(ContentContext);
    return (
        <label className="label">
            <input
                onChange={handleChange}
                className="radio-input"
                type="radio"
                name={name}
                value={value}
            />
            <span></span> {title}
        </label>
    );
}
