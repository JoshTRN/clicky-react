import "./Wrapper.css";

const Wrapper = (props: { children: JSX.Element }) => <div className="container-fluid">{props.children}</div>;

export default Wrapper;
