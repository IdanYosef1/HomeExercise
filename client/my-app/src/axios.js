import axios from "axios";

const getAll = (url) => axios.get(url);

const getEmployee = (url, obj) => axios.post(url, obj);

const uploadEmployee = (url, obj) => axios.post(url,obj);

const compareBetweenEmployees = (url, obj) => axios.post(url, obj);

const editEmployee = (url, obj) => axios.put(`${url}`, obj);

export { getAll, getEmployee, uploadEmployee, compareBetweenEmployees, editEmployee };