import "./input.scss";
export function Input({ name, color }) {
    return (
        <label className="label">
            <input className="radio-input" type="radio" name={name} />
            <span></span> {color}
        </label>
    );
}
