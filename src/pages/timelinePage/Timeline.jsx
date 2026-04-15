import React, { useContext } from 'react';
import { TimelineContext } from '../../Context/TimelineContext';
import { Phone, MessageSquare, Video, Calendar } from 'lucide-react';

const Timeline = () => {
    
    const { timeline } = useContext(TimelineContext);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <Phone size={18} className="text-blue-500" />;
            case 'Text': return <MessageSquare size={18} className="text-green-500" />;
            case 'Video': return <Video size={18} className="text-purple-500" />;
            default: return <Calendar size={18} />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Timeline</h1>

            {timeline.length === 0 ? (
                <h2 className="text-lg font-bold text-[#1a3c34] mb-4">No history logged yet...</h2>
            ) : (
                <div className="relative border-l-2 border-gray-200 ml-4">
                    {timeline.map((entry) => (
                        <div key={entry.id} className="mb-10 ml-8 relative">
                            {/* Dot & Icon */}
                            <span className="absolute -left-[50px] flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-100 rounded-full shadow-sm">
                                {getIcon(entry.type)}
                            </span>

                            {/* Content */}
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-50 flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{entry.title}</h3>
                                    <p className="text-gray-400 text-sm">Via Quick Check-In</p>
                                </div>
                                <div className="text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1 rounded-lg">
                                    {entry.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;