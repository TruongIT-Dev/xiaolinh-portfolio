import { useState, useEffect } from "react";
import '../assets/css/card-phone.css'

const Home = () => {
    const texts = ["Trần Vũ Ngọc Linh", "Sinh Viên UEL", "Sinh Viên Kế Toán"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = isDeleting ? 50 : 150;

    useEffect(() => {
        const handleTyping = () => {
            setDisplayText((prev) => {
                const fullText = texts[index];
                if (!isDeleting) {
                    return fullText.substring(0, prev.length + 1);
                } else {
                    return fullText.substring(0, prev.length - 1);
                }
            });

            if (!isDeleting && displayText === texts[index]) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const typingTimer = setTimeout(handleTyping, speed);
        return () => clearTimeout(typingTimer);
    }, [displayText, isDeleting, index]);

    return (
        <section className="flex h-screen items-center justify-center bg-rose-100 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-around px-8 py-8 md:py-0">

                {/* Left Content */}
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <div className="mb-4">
                        <img
                            src="../../public/gifs/Gif-1.gif"
                            alt="Animated GIF"
                            className="mx-auto w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-rose-400 mb-4">
                        Xin chào, mình là <br />
                        <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 text-transparent bg-clip-text">
                            {displayText}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Mình mơ lớn để sau này giấc mơ thành hiện thật.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card">

                        <div className="btn1"></div>
                        <div className="btn2"></div>
                        <div className="btn3"></div>
                        <div className="btn4"></div>
                        <div className="card-int">
                            <div className="hello">
                                <span className="hidden"></span>
                            </div>
                        </div>
                        <div className="top">
                            <div className="camera">
                                <div className="int"></div>
                            </div>
                            <div className="speaker"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Home;
