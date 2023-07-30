export function CartProduct() {
    return (
        <>
            {" "}
            <img
                src="https://www.technopolis.bg/medias/sys_master/ha7/hbd/27213338804254.jpg"
                alt="cart img"
                className="cart-img"
            />
            <h4 className="cart-title"> Tv LG</h4>
            <div className="active">
                <buton className="decrement">-</buton>
                <input type="text" />
                <buton className="increment">+</buton>
                <p className="cart-price">450$</p>
            </div>
        </>
    );
}
