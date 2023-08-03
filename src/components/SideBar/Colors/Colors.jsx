import { Input } from "../Input/Input";
export function Color() {
    return (
        <>
            <h3 className="filter-title">Color</h3>
            <div className="filter-inputs">
                <Input name={"Color"} value={""} title={"All"} />
                <Input name={"Color"} value={"Black"} title={"Black"} />
                <Input name={"Color"} value={"Silver"} title={"Silver"} />
                <Input name={"Color"} value={"Gray"} title={"Gray"} />
                <Input name={"Color"} value={"White"} title={"White"} />
                <Input name={"Color"} value={"Red"} title={"Red"} />
            </div>
        </>
    );
}
