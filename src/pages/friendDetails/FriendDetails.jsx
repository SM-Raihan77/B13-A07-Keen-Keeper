// import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriendsData from '../../Hooks/useFriendsData';
import { Archive, Bell, MessageSquare, Phone, Trash2, Video } from 'lucide-react';
import { useContext } from 'react';
import { TimelineContext } from '../../Context/TimelineContext';




const FriendDetails = () => {
    const { id } = useParams();
   
    const { friends, Loading } = useFriendsData();
   const expectedFriend = friends.find(friend => friend.id === Number(id));

//    if (!expectedFriend) return <p>Loading...</p>;
  



    const { addEntry } = useContext (TimelineContext);
    
    const handleAction = (type) => {
         if (!expectedFriend) return;
        addEntry(type, expectedFriend.name);
       alert(`${type} added!`);

    }


        return (

            <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* --- Left Column: Friend Info Card (Col-4) --- */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center border border-gray-100 text-center">
                            {/* Profile Picture */}
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-gray-50 shadow-inner">
                                <img
                                    src={expectedFriend?.picture}
                                    className="w-full h-full object-cover"
                                    alt={expectedFriend?.name}
                                />
                            </div>

                            {/* Name & Basic Info */}
                            <h2 className="text-2xl font-bold text-gray-800">{expectedFriend?.name}</h2>

                            {/* Status Badge */}
                            <div className="mt-2 flex flex-col items-center gap-2">
                                <span className={`px-4 py-1 rounded-full text-xs font-bold text-white uppercase ${expectedFriend?.status === 'overdue' ? 'bg-red-500' : 'bg-green-500'
                                    }`}>
                                    {expectedFriend?.status || 'on-track'}
                                </span>
                                <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    {expectedFriend?.tags?.[0] || 'Family'}
                                </span>
                            </div>

                            {/* Bio & Email */}
                            <p className="mt-4 text-gray-500  text-sm italic">"{expectedFriend?.bio}"</p>
                            <p className="mt-2 text-gray-400 text-xs font-medium">Preferred: {expectedFriend?.email || 'email'}</p>

                            {/* --- Action Buttons --- */}
                            <div className="w-full mt-8 flex flex-col gap-2">
                                <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all font-medium text-sm">
                                    <Bell size={16} /> Snooze 2 Weeks
                                </button>
                                <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all font-medium text-sm">
                                    <Archive size={16} /> Archive
                                </button>
                                <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-red-500 rounded-lg border border-red-100 hover:bg-red-50 transition-all font-medium text-sm">
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Stats & Goals (Col-8) --- */}
                    <div className="lg:col-span-8 flex flex-col gap-6">

                        {/* Top Summary Cards */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <p className="text-3xl font-bold text-gray-800">{expectedFriend?.days_since_contact}</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tight font-medium">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <p className="text-3xl font-bold text-gray-800">{expectedFriend?.goal}</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tight font-medium">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <p className="text-xl font-bold text-gray-800 mt-2">{expectedFriend?.next_due_date}</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tight font-medium">Next Due</p>
                            </div>
                        </div>

                        {/* Quick Check-In Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-gray-700 font-bold mb-4">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">


                                <button onClick={() => handleAction("Call")}
                                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Phone size={20} className="text-gray-600" />
                                    <span className="text-sm font-medium text-gray-600">Call</span>
                                </button>


                                <button onClick={() => handleAction("Text")}
                                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                    <MessageSquare size={20} className="text-gray-600" />
                                    <span className="text-sm font-medium text-gray-600">Text</span>
                                </button>


                                <button  onClick={() => handleAction("Video")}
                                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Video size={20} className="text-gray-600" />
                                    <span className="text-sm font-medium text-gray-600">Video</span>
                                </button>

                            </div>

                        </div>
                        <div className='flex justify-between text-center' >
                            <h3 className='text-lg font-semibold text-gray-700'>Recent Interactions</h3>
                            <button>Full-History</button>

                        </div>


                    </div>
                </div>
            </div>

        );
    };


    export default FriendDetails;