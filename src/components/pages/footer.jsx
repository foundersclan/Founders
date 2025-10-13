import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";
export const Footer = ()=>{
    return (
         <footer className="bg-black  py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-6 flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-yellow-500 tracking-wide">FOUNDERS</h2>
          <div className="flex items-center gap-4 text-white">
            <a href="#" className="hover:text-yellow-300 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><X size={20} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-500">Explore</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Team</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Events</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-500">Resources</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-yellow-400 transition">Guides</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Seminars</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Reviews</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Support</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-500">Connect</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-yellow-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Partners</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Press</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Legal</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-yellow-700 mt-12 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Founders. All rights reserved.
      </div>
    </footer>
    )
}