import "./styles.scss";
import { useCallback, useEffect, useState } from "react";
import Checkbox from 'react-toolbox/lib/checkbox';

export default function IngredientRowItem({ ingredient, onSelect }) {
    return (
        <div className="container">
            <h1 className="title">{ingredient.name}</h1>
            <div className="checkbox-wrapper">
                <Checkbox
                    checked={ingredient.selected}
                    label="Checked option"
                    onChange={() => onSelect(ingredient.id)}
                />
                {/* <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={ingredient.selected}
                    onChange={() => onSelect(ingredient.id)}
                /> */}
            </div>
        </div>
    )
}