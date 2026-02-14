import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../Hooks/useGetMessages'
import { useSelector } from 'react-redux'
function Messages() {
  useGetMessages()
  const {messages} = useSelector(store => store.message)
  if(!messages) return;
  return (
    <div className='flex-1 px-4 overflow-auto'>
      {messages?.map((msg,index) => {
        return <Message key={index} message={msg}/>
      })}

    </div>
  )
}

export default Messages