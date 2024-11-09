import { useParams } from "react-router";

const Page32 = () => {
  const params = useParams();
  console.log(params);
  return (
    <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
      <p>Page3.2</p>
    </div>
  );
};

export default Page32;
