import "./Wrapper.css";

const Wrapper = (props: { children: JSX.Element | JSX.Element[] }) => <div className="d-flex h-100 justify-content-center align-content-center container-fluid">{props.children}</div>;

export default Wrapper;
