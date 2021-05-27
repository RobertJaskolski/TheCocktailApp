import "./styles.scss";
import { useCallback, useEffect, useState } from "react";

export default function IngredientRowItem({ ingredient, onSelect }) {
    return (
        <div className="container">
            <h1 className="title">{ingredient.name}</h1>
            <div className="checkbox-wrapper">

                <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={ingredient.selected}
                    onChange={() => onSelect(ingredient.id)}
                />
            </div>
        </div>
    )
}