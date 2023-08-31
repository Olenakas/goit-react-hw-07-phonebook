import React from 'react';
import styles from './ContactFilter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getFilter} from "../../redux/selectors";
import {updateFilter} from "../../redux/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const onChangeFilter = (value) => {
        dispatch(updateFilter(value))
    }
    return (
        <label className={styles.label}>
            Find contacts by name:
            <input className={styles.input} type="text" value={filter} onChange={(event) => onChangeFilter(event.target.value)}/>
        </label>
    );
};

export default Filter;