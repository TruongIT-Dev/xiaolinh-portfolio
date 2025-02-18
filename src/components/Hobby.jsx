import '../assets/css/hobby.css'

const hobbies = [
    { name: 'Nấu ăn', icon: '🍳', description: 'Mình thích thử nghiệm công thức mới và sáng tạo món ăn ngon.' },
    { name: 'Vẽ tranh', icon: '🎨', description: 'Mình yêu thích vẽ tranh và thể hiện cảm xúc qua màu sắc.' },
    { name: 'Du lịch', icon: '✈️', description: 'Mình đam mê khám phá những địa điểm mới và trải nghiệm văn hóa.' },
    { name: 'Chơi thể thao', icon: '⚽', description: 'Mình yêu thích vận động và chơi thể thao để rèn luyện sức khỏe.' },
    { name: 'Âm nhạc', icon: '🎵', description: 'Mình chơi nhạc cụ và thưởng thức âm nhạc để thư giãn.' },
    { name: 'Đọc sách', icon: '📚', description: 'Mình thích đọc sách để mở rộng kiến thức và khám phá thế giới.' },
];

export default function Hobby() {
    return (
        <div className="bg-white py-10">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Sở Thích Của Tôi</h2>
                <p className="mt-4 text-lg text-gray-500 text-center">Những điều mình yêu thích và đam mê trong cuộc sống này.</p>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {hobbies.map((hobby, index) => (
                        <div key={hobby.name} className="card">
                            <div className="upper-part">
                                <div className="upper-part-face">
                                    <div className="text-4xl mb-4">{hobby.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900">{hobby.name}</h3>
                                </div>
                                <div className="upper-part-back">
                                    {hobby.description}
                                </div>
                            </div>
                            <div className="lower-part">
                                <div className="lower-part-face">Face Side</div>
                                <div className="lower-part-back">Back Side</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
