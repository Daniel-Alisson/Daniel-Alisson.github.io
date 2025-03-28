import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <React.Fragment>
        <head>
            <title>404 - Daniel</title>
        </head>
        <div>
            <h1>404</h1>
            <div>
                <p>Oops, não conseguimos encontrar essa página!</p>
                <span>Clique no botão abaixo para ser redirencionado a Página Inicial</span>
            </div>
            <Link href={"/"} >Ir para Página Inicial</Link>
        </div>
        </React.Fragment>
    );
};

export default NotFound;