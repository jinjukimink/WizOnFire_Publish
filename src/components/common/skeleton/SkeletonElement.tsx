import "./skeleton.css";
const SkeletonElement = (type:any) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default SkeletonElement;