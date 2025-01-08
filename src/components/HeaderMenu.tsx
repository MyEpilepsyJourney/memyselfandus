import React from 'react';
import { Menu, User, FileText, Pill, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dropdown from './ui/Dropdown';
import DropdownItem from './ui/DropdownItem';
import { routes } from '../utils/navigation';

export default function HeaderMenu() {
  return (
    <Dropdown
      trigger={
        <button 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      }
    >
      <DropdownItem 
        icon={<User className="w-4 h-4" />} 
        onClick={routes.profile}
      >
        My Profile
      </DropdownItem>
      
      <DropdownItem 
        icon={<FileText className="w-4 h-4" />} 
        onClick={routes.bio}
      >
        Bio
      </DropdownItem>
      
      <DropdownItem 
        icon={<Pill className="w-4 h-4" />} 
        onClick={routes.health}
      >
        Medication Information
      </DropdownItem>
      
      <DropdownItem 
        icon={<Users className="w-4 h-4" />} 
        onClick={routes.friends}
      >
        Friends List
      </DropdownItem>
      
      <DropdownItem 
        icon={<Settings className="w-4 h-4" />} 
        onClick={routes.settings}
      >
        Settings
      </DropdownItem>
    </Dropdown>
  );
}