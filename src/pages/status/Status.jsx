
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { TimelineContext } from '../../Context/TimelineContext';

const Status = () => {

    const { timeline } = useContext(TimelineContext);

    const callCount = timeline.filter(item => item.type === 'Call').length;
    const textCount = timeline.filter(item => item.type === 'Text').length;
    const videoCount = timeline.filter(item => item.type === 'Video').length;

    const chartData = [
        { name: 'Calls', value: callCount, color: '#d8aa2a' },   // Blue
        { name: 'Texts', value: textCount, color: '#0a0d0b' },   // Green
        { name: 'Videos', value: videoCount, color: '#1a3c34' }, // Purple
    ];


    if (timeline.length === 0) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <p className="text-lg font-bold text-gray-700 mb-4 ">No interactions logged to show status.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Interactions Overview</h3>

            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius="60%"
                            outerRadius="90%"
                            cornerRadius={8}
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend iconType="circle" verticalAlign="bottom" />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Total Logs: {timeline.length}
            </div>
        </div>
    );
};

export default Status;