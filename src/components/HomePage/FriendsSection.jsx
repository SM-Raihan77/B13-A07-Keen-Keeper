
import FriendsCards from '../FriendsCards';
import { DotLoader } from 'react-spinners';
import useFriendsData from '../../Hooks/useFriendsData';

const FriendsSection = () => {
    const { friends, loading } = useFriendsData();


    return (
        <> <h2 className='text-2xl font-bold text-[#1f2937] mb-6 text-center'>Your Friends</h2>

            {loading ? <div className=' flex justify-center items-center'>(<DotLoader color='[#1a3c34]' /> )</div> : <FriendsCards friends={friends} />}
        </>

    );
};

export default FriendsSection;