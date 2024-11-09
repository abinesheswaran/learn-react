import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const Page32 = () => {
  const params = useParams();
  const [queryParams] = useSearchParams();
  console.log(params, queryParams.get('a'), queryParams.get('b'));
  return (
    <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
      <p>Page3.2</p>
    </div>
  );
};

export default Page32;
