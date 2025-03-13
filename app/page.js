// utorid: gaoyi16

// app/page.js
export default function Home() {
    return (
        <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
            {/* Click Button */}
            <div className="w-[150px] h-[52px] absolute top-[5vh] right-[5vw]">
                <div className="w-[150px] h-[40px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px]" />
                <div className="left-[50px] top-0 absolute justify-start text-[#db4439] text-[1.6vw] text-base font-black font-['Inknut_Antiqua']">More</div>
            </div>

            {/* Rotated Image Section */}
            <div className="origin-top-left rotate-[10.64deg] w-[40vw] h-[60vh] absolute right-[5vw] top-[20vh]">
                {/* <div className="w-[100%] h-[100%] bg-[#d9d9d9]" /> */}
                <img className="w-[80%] h-[80%] object-cover" src="cof.jpeg" alt="Image" />
            </div>

            {/* Main Heading */}
            <div className="w-[30%] left-[10%] top-[20vh] absolute text-[#eaecd7] text-[2vw] font-black font-['Inknut_Antiqua'] leading-[10vw]">
                Coffee Shop
            </div>

            {/* Sub Heading */}
            <div className="w-[40%] left-[10%] top-[50vh] absolute text-[#eaecd7] text-[2vw] font-semibold font-['Inknut_Antiqua'] leading-[6vw]">
                Photo of my coffee shop Photo of my coffee shop Photo of my coffee shop Photo of my coffee shop
            </div>

            {/* Navigation */}
            <div className="absolute top-[2vh] left-[5vw] text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                Home
            </div>
            <div className="absolute top-[2vh] left-[30vw] text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                Nextjs
            </div>
            <div className="absolute top-[2vh] left-[50vw] text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                About Us
            </div>
            <div className="absolute top-[2vh] left-[70vw] text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
                Contact
            </div>

            {/* Footer Section */}
            <div className="absolute bottom-0 left-0 w-full h-[12vh] bg-white flex justify-between items-center px-[5vw]">
                <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Shop Details</div>
                <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Shop Locations</div>
                <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">About Us</div>
                <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Contact Us</div>
            </div>

            {/* Footer Text */}
            {/* <div className="absolute bottom-[5vh] left-0 w-full text-center text-white text-lg">
                <p className="font-['Inknut_Antiqua']">© 2025 My Portfolio. All Rights Reserved.</p>
                <p className="font-['Inknut_Antiqua']">Created with Love and Passion</p>
            </div> */}
        </div>
    );
}
