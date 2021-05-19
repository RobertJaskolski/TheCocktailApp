import useNotAuth from '../hooks/useNotAuth';

const WithNotAuth = (props) => !useNotAuth(props) && props.children;

export default WithNotAuth;
