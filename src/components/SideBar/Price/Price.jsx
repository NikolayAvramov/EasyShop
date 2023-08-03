import { Input } from "../Input/Input";
export function Price() {
    return (
        <>
            <h3 className="filter-title">Price</h3>
            <div className="filter-inputs">
                <Input name={"price"} value={""} title={"All"} />
                <Input name={"price"} value={1} title={"0 - 300"} />
                <Input name={"price"} value={300} title={"300 - 600"} />
                <Input name={"price"} value={600} title={"600 - 900"} />
                <Input name={"price"} value={900} title={"900 - 1200"} />
            </div>
        </>
    );
}
