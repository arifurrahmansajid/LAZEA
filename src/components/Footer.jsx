import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="dark:bg-black dark:text-white pt-12">
      <div className="w-11/12 mx-auto font-medium ">
        <div className='grid grid-cols-3 justify-center pb-4'>
          <div className="space-y-2">
            <img className='w-32' src="../../src/assets/1x/Asset 5.png" alt="" />
            <h2 className="text-4xl font-bold font-rancho"> Equi Sports </h2>
            <p className="text-gray-400"> Sentiments two occasional affronting solicitude travelling and one contrasted fortune day. </p>
          </div>
          <div className="">
            <ul className="text-gray-400 space-y-2">
              <li className="font-semibold text-black dark:text-white"> Information </li>
              <li className=""> Our Contacts </li>
              <li className=""> Privacy Policy </li>
              <li className=""> Conditions </li>
              <li className=""> FAQs </li>
            </ul>
          </div>
          <div className="">
            <h2 className=""> Our instagram </h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="w-50 h-50 bg-slate-200"> Image </div>
              <div className="w-50 h-50 bg-slate-200"> Image </div>
              <div className="w-50 h-50 bg-slate-200"> Image </div>
              <div className="w-50 h-50 bg-slate-200"> Image </div>
              <div className="w-50 h-50 bg-slate-200"> Image </div>
              <div className="w-50 h-50 bg-slate-200"> Image </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-6 border-t">
          <h1 className=""> Equi Sports © 2024 Created By AUS Develpment Int. </h1>
          <div className="flex gap-2">
            <h2 className=""> Our Social links: </h2>
            <div className="flex gap-3 text-2xl">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaXTwitter />
              <FaTelegram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;