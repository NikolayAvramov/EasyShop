import { Input } from "./Input/Input";
import "./SideBar.scss";
export function SideBar() {
    return (
        <div className="filter">
            <h3 className="filter-title">Color</h3>
            <div className="filter-inputs">
                <Input name={"color"} color={"Black"} />
                <Input name={"color"} color={"Silver"} />
                <Input name={"color"} color={"Gray"} />
                <Input name={"color"} color={"White"} />
            </div>
            <h3 className="filter-title">Price</h3>
            <div className="filter-inputs">
                <Input name={"size"} color={"0 - 200"} />
                <Input name={"size"} color={"200 - 400"} />
                <Input name={"size"} color={"400 - 800"} />
                <Input name={"size"} color={"800+"} />
            </div>
            <h3 className="filter-title">Screen Size</h3>
            <div className="filter-inputs">
                <Input name={"size"} color={`32"`} />
                <Input name={"size"} color={`40"`} />
                <Input name={"size"} color={`43"`} />
                <Input name={"size"} color={`65"`} />
            </div>
            <h3 className="filter-title">Screen Size</h3>
            <div className="filter-inputs">
                <Input name={"phone-size"} color={"0 - 200"} />
                <Input name={"phone-size"} color={"200 - 400"} />
                <Input name={"phone-size"} color={"400 - 800"} />
                <Input name={"phone-size"} color={"800+"} />
            </div>
            <h3 className="filter-title">Screen Size</h3>
            <div className="filter-inputs">
                <Input name={"laptop-size"} color={`13"`} />
                <Input name={"laptop-size"} color={`13.3"`} />
                <Input name={"laptop-size"} color={`15.6"`} />
                <Input name={"laptop-size"} color={`17.6"`} />
            </div>
            <h3 className="filter-title">Storage</h3>
            <div className="filter-inputs">
                <Input name={"storage"} color={"128 GB"} />
                <Input name={"storage"} color={"256 GB"} />
                <Input name={"storage"} color={"512 GB"} />
                <Input name={"storage"} color={"1 TB"} />
            </div>
            <h3 className="filter-title">Storage</h3>
            <div className="filter-inputs">
                <Input name={"phone-storage"} color={"32 GB"} />
                <Input name={"phone-storage"} color={"64 GB"} />
                <Input name={"phone-storage"} color={"128 GB"} />
                <Input name={"phone-storage"} color={"256 GB"} />
            </div>
            <h3 className="filter-title">Storage</h3>
            <div className="filter-inputs">
                <Input name={"phone-storage"} color={"32 GB"} />
                <Input name={"phone-storage"} color={"64 GB"} />
                <Input name={"phone-storage"} color={"128 GB"} />
                <Input name={"phone-storage"} color={"256 GB"} />
            </div>
            <h3 className="filter-title">Brands</h3>
            <div className="filter-inputs">
                <Input name={"brands"} color={"Apple"} />
                <Input name={"brands"} color={"Samsung"} />
                <Input name={"brands"} color={"Acer"} />
                <Input name={"brands"} color={"Toshiba"} />
                <Input name={"brands"} color={"LG"} />
                <Input name={"brands"} color={"Sceptre"} />
                <Input name={"brands"} color={"Lenovo"} />
            </div>
        </div>
    );
}
