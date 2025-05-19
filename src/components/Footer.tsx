import { Link } from "react-router"
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='py-10'>
      <div className="container px-4 mx-auto md:px-24 lg:px-0">
        <div className="grid gap-7 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to='/' className="text-xl headings font-bold flex gap-1 tracking-tight">
              <h3>Crest Homes</h3>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                At Crest-Homes, we provide seamless real estate solutions. Whether you are buying, selling, or renting, we simplify the process to help you find the perfect home.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Our expert team ensures you have a smooth and enjoyable experience, backed by years of industry knowledge and professionalism.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <span className="text-base headings font-bold tracking-wide text-gray-900">
              Contact Us
            </span>
            <div className="flex mt-3">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors sf duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@creston.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors sf duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@cresthomes.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors sf duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
               249 WICK ROAD E9 5DG
              </a>
            </div>
          </div>

          <div>
            <span className="text-base headings font-bold tracking-wide text-gray-900">
              Connect With Us
            </span>
            <div className="flex items-center mt-3 space-x-3">
              
              <a
                href="https://twitter.com"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaXTwitter className="h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaInstagram className="h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaLinkedinIn className="h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Follow us on social media for the latest updates and news. We share helpful tips, market trends, and exciting real estate opportunities.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © 2025 Crest Homes Estate Agent Ltd. All rights reserved.
          </p>
          <ul className="flex sf flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/faq"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
