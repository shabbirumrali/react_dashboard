import React from 'react'
import {RiWechatLine} from 'react-icons/ri'
import {BsChatLeftText} from 'react-icons/bs'
import {FiUsers,FiHelpCircle,FiSettings} from 'react-icons/fi'
import{AiOutlineSend,AiOutlineStock} from 'react-icons/ai'
import{MdSystemUpdate} from 'react-icons/md'
import{BsFileBarGraphFill} from 'react-icons/bs'
import './LeftSideBar.scss'

const LeftSideBar = () => {
  return (
    <div className='dialogue-box'>
      <div className='chat-logo'><RiWechatLine/></div>
      <div className='chat-icon'><BsChatLeftText/></div>
      <div className='admin-icon'><FiUsers/></div>
      <div className='send-icon'><AiOutlineSend/></div>
      <div className='system-icon'><MdSystemUpdate/></div>
      <div className='stocks-icon'><AiOutlineStock/></div>
      <div className='bargraph-icon'><BsFileBarGraphFill/></div>
      <div className='help-icon'><FiHelpCircle/></div>
      <div className='settings-icon'><FiSettings/></div>
    </div>
  )
}

export default LeftSideBar