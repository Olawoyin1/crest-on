import { Link } from "react-router"

const Intro = () => {
  return (
    <div className="py-10">
        <div className="container">
            <div className="md:flex gap-10">
                <div className="flex-1/3 flex-shrink-0">
                    <img src="../../Images/crestt.jpeg"  className="object-cover w-full" alt="" />
                </div>
                <div className="flex flex-col flex-2/3 gap-3 mt-10 md:mt-0">
                    <h4 className="font-semibold uppercase  text-blue-900 sf border-b text-md">About Us</h4>
                    <h3 className="font-extrabold text-3xl headings"><span className="text-blue-900">CREST HOMES</span> </h3>

                    <p className="">Founded in 2011, Crest Homes is a trusted name in the UK property market, dedicated to helping individuals and families find their perfect homes and investment properties. With over a decade of experience, we specialize in residential, commercial, and strategic property management, offering tailored solutions that meet the diverse needs of our clients. <br /> <br />

                    Our mission is simple: to make property finding and management effortless, transparent, and personalized. Whether you’re a first-time buyer, seasoned investor, or a family searching for your dream home, Crest Homes provides expert guidance and support at every step of your property journey. <br /> <br />

                    We combine deep market insights with cutting-edge technology to deliver a seamless experience — from smart property search tools to insightful analytics and dedicated customer service.</p>

                    <Link to="/about"><button className="text-sm text-blue-800 font-semibold">More About Us</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro