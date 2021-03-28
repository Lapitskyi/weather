import React from "react";
import './SearchCity.scss';
import svgSprite from '../../../assets/images/svgSprite.svg'

const SearchCity = (props) => {
    return (<>
        <form className="form" >
            <label className="form__label">
                <input className="form__input"
                       type="text"
                       placeholder="enter city, zip code"
                       value={props.inputText}
                       onChange={props.onInputCity}
                />
            </label>

            <button className="form__btn btn" type="submit" onClick={props.onSubmitCity}>
                <svg className="form__icon">
                    <use href={svgSprite + "#search"}></use>
                </svg>
            </button>

        </form>
            <div style={{textAlign:"end"}}>(Kyiv, London, Tokyo, Paris ....)</div>
        </>
    )
}

export default SearchCity;