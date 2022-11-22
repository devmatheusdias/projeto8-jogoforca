import React from "react";
import GallowsImage from "./GallowsImage";

export default function Body() {
    return (
        <main>
            <div>
                <GallowsImage/>
            </div>

            <div>
                <button className="choose-word">Escolher Palavra</button>
            </div>

        </main>
    );
}
