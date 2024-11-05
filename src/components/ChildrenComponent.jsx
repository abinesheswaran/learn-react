const ChildrenComponent = () => {
  let tempCount = 0;
  return (
    <>
      Children component
      <button
        onClick={() => {
          tempCount++;
          console.log('tempCount = ', tempCount);
        }}
      >
        count
      </button>
    </>
  );
};

export default ChildrenComponent;
