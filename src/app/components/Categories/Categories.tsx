import Link from 'next/link';
import { FaCar, FaHome, FaMobileAlt, FaLaptop, FaHeart, FaTshirt, FaDumbbell, FaFileAlt, FaBriefcase, FaCouch, FaWrench, FaHandsHelping, FaSeedling, FaTools, FaHammer } from 'react-icons/fa';
import { RiBuilding2Fill, RiCustomerServiceFill, RiMedicineBottleFill } from 'react-icons/ri';
import { GiSoccerBall, GiArtificialIntelligence } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';

import styles from './Categories.module.css'; // Import the CSS file

interface Category {
  name: string;
  icon: JSX.Element;
  count: number;
}

const Categories = () => {
  const categories: Category[] = [
    { name: 'Vehicles', icon: <FaCar className={`${styles['colored-icon']} ${styles['vehicles-icon']}`} />, count: 150 },
    { name: 'Properties', icon: <RiBuilding2Fill className={`${styles['colored-icon']} ${styles['properties-icon']}`} />, count: 6175 },
    { name: 'Mobile Phones', icon: <FaMobileAlt className={`${styles['colored-icon']} ${styles['mobile-phones-icon']}`} />, count: 3420 },
    { name: 'Electronics', icon: <FaLaptop className={`${styles['colored-icon']} ${styles['electronics-icon']}`} />, count: 1234 },
    { name: 'Health and Beauty', icon: <RiMedicineBottleFill className={`${styles['colored-icon']} ${styles['health-beauty-icon']}`} />, count: 8 },
    { name: 'Fashion', icon: <FaTshirt className={`${styles['colored-icon']} ${styles['fashion-icon']}`} />, count: 259 },
    { name: 'Sports & Arts', icon: <GiSoccerBall className={`${styles['colored-icon']} ${styles['sports-arts-icon']}`} />, count: 918 },
    { name: 'Work C.V', icon: <FaFileAlt className={`${styles['colored-icon']} ${styles['work-cv-icon']}`} />, count: 555 },
    { name: 'Jobs', icon: <FaBriefcase className={`${styles['colored-icon']} ${styles['jobs-icon']}`} />, count: 390 },
    { name: 'Furnitures', icon: <FaCouch className={`${styles['colored-icon']} ${styles['furnitures-icon']}`} />, count: 272 },
    { name: 'Home & Furnitures', icon: <FaHome className={`${styles['colored-icon']} ${styles['home-furnitures-icon']}`} />, count: 728 },
    { name: 'Services', icon: <RiCustomerServiceFill className={`${styles['colored-icon']} ${styles['services-icon']}`} />, count: 649 },
    { name: 'Agriculture', icon: <FaSeedling className={`${styles['colored-icon']} ${styles['agriculture-icon']}`} />, count: 799 },
    { name: 'Equipment', icon: <FaTools className={`${styles['colored-icon']} ${styles['equipment-icon']}`} />, count: 189 },
    { name: 'Repairing', icon: <FaWrench className={`${styles['colored-icon']} ${styles['repairing-icon']}`} />, count: 195 },
    { name: 'Others', icon: <GiArtificialIntelligence className={`${styles['colored-icon']} ${styles['others-icon']}`} />, count: 356},
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 m-40 mt-6 p-4">
      {categories.map((category, index) => (
        <Link href={`/${category.name.toLowerCase().replace(/ /g, '-')}`} key={index}>
          <div className="flex items-center justify-start bg-white-100 p-4 rounded-lg space-x-4">
            <span className="text-2xl">{category.icon}</span>
            <div className="flex flex-col">
              <span className="font-bold text-center">{category.name}</span>
              <span className="text-sm text-gray-500">Available: {category.count}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
