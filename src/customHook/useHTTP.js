import {useState} from 'react';
import axios from 'axios';
import {urlBase} from './../constants/index';

export const usePost = () => {
    
    const [info, setInfo] = useState(null);
    const [fetching, setFetching] = useState(false);

    const postInfo = async(endpoint, object) => {
        try {
            setFetching(true);
            const response = await axios.post(`${urlBase}/${endpoint}`, object);
            setInfo(response);
            setFetching(false);
        } catch (error) {
            console.error(error);
        }
    }
    return[postInfo, info, fetching];
}


export const useGet = () =>{

    const [info, setInfo] = useState(null);
    const [fetching, setFetching] = useState(false);

    const getInfo = async(endpoint) => {
        try {
            setFetching(true);
            const response = await axios.get(`${urlBase}/${endpoint}`);
            setInfo(response);
            setFetching(false);  
        } catch (error) {
            console.error(error);
        }
    }
    return[getInfo, info, fetching];
}


export const usePut = () => {

    const [info, setInfo] = useState(null);
    const [fetching, setFetching] = useState(false);

    const putInfo = async (endpoint, object) =>{
        try {
            setFetching(true);
            const response = await axios.put(`${urlBase}/${endpoint}`, object);
            setInfo(response);
            setFetching(false);
            
        } catch (error) {
            console.error(error);
        }
    }
    return[putInfo, info, fetching];
}

export const useDelete = () => {
    
    const [info, setInfo] = useState(null);
    const [fetching, setFetching] = useState(false);

    const deleteInfo = async (endpoint) =>{
        try {
            setFetching(true);
            const response = await axios.delete(`${urlBase}/${endpoint}`);
            setInfo(response);
            setFetching(false);
        } catch (error) {
            console.error(error);
        }
    }
    return[deleteInfo, info, fetching];
}