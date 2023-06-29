import { useContext } from "react";

import { cartContext } from "src/App";

function Manage() {

    const { dataDrink, setDataDrink } = useContext(cartContext);

    return ( <div className="container"></div> );
}

export default Manage;