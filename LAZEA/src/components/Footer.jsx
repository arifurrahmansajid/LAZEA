import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 pt-12">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold font-rancho text-[#78cc44]">LAZEA</h2>
            <p className="text-gray-500">
              Manage your houseplants—log care tasks, set reminders, and track your plant’s health all in one place.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="/contacts" className="hover:text-[#78cc44]">
                  Our Contacts
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#78cc44]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#78cc44]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-[#78cc44]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex gap-4 text-2xl text-gray-500">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm">&copy; 2024 LAZEA. All rights reserved.</p>
          <p className="text-sm">Created by Your Company Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;